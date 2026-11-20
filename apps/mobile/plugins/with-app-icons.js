const { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { IOSConfig, withAndroidManifest, withDangerousMod, withXcodeProject } = require("expo/config-plugins");

// The system icon follows the Icon Composer document. The other two aliases use the approved
// Light and Dark artwork in both the app preview and the native launcher.
const ICON_MODES = ["light", "dark"];

const ALIAS_PREFIX = ".AppIcon";

/** @param {string} id */
const pascal = (id) => id.charAt(0).toUpperCase() + id.slice(1);
/** @param {string} id */
const iosIconName = (id) => `AppIcon${pascal(id)}`;

function variantIconJson(main, mode) {
  const document = structuredClone(main);
  for (const entry of [document, ...document.groups.flatMap((group) => group.layers)]) {
    const fills = entry["fill-specializations"];
    if (!fills) continue;
    const selected =
      (mode === "dark" && fills.find((fill) => fill.appearance === "dark")) || fills.find((fill) => !fill.appearance);
    if (selected) entry["fill-specializations"] = [{ value: selected.value }];
  }
  return document;
}

/** @type {import('expo/config-plugins').ConfigPlugin} */
const withIosAppIcons = (config) => {
  config = withDangerousMod(config, [
    "ios",
    (config) => {
      const { projectRoot, platformProjectRoot, projectName } = config.modRequest;
      const mainIcon = config.ios?.icon;
      if (typeof mainIcon !== "string" || !mainIcon.endsWith(".icon")) {
        throw new Error("with-app-icons: ios.icon must be an Icon Composer file");
      }
      const source = resolve(projectRoot, mainIcon);
      const main = JSON.parse(readFileSync(join(source, "icon.json"), "utf8"));
      for (const id of ICON_MODES) {
        const target = join(platformProjectRoot, projectName, `${iosIconName(id)}.icon`);
        rmSync(target, { recursive: true, force: true });
        cpSync(source, target, { recursive: true });
        writeFileSync(join(target, "icon.json"), `${JSON.stringify(variantIconJson(main, id), null, 2)}\n`);
      }
      return config;
    },
  ]);
  return withXcodeProject(config, (config) => {
    const project = config.modResults;
    const { projectName } = config.modRequest;
    const names = ICON_MODES.map(iosIconName);
    for (const name of names) {
      const filepath = `${projectName}/${name}.icon`;
      if (project.hasFile(filepath)) continue;
      IOSConfig.XcodeUtils.addResourceFileToGroup({
        filepath,
        groupName: projectName,
        project,
        isBuildFile: true,
        verbose: true,
      });
    }
    const [, target] = IOSConfig.Target.findNativeTargetByName(project, projectName);
    for (const [, build] of IOSConfig.XcodeUtils.getBuildConfigurationsForListId(
      project,
      target.buildConfigurationList,
    )) {
      if (!build?.buildSettings) continue;
      build.buildSettings.ASSETCATALOG_COMPILER_ALTERNATE_APPICON_NAMES = `"${names.join(" ")}"`;
      build.buildSettings.ASSETCATALOG_COMPILER_INCLUDE_ALL_APPICON_ASSETS = "YES";
    }
    return config;
  });
};

const drawableName = (id) => `openbot_app_icon_${id}`;

function androidDrawables(id) {
  const name = drawableName(id);
  const hex = id === "dark" ? "151618" : "F6F3ED";
  const background = `<?xml version="1.0" encoding="utf-8"?>
<color xmlns:android="http://schemas.android.com/apk/res/android" android:color="#FF${hex}" />
`;
  const adaptive = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
  <background android:drawable="@drawable/${name}_background" />
  <foreground android:drawable="@drawable/${name}_foreground" />
  <monochrome android:drawable="@mipmap/ic_launcher_monochrome" />
</adaptive-icon>
`;
  // Android 7 has no adaptive icons: the layers show as one square image.
  const legacy = `<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:drawable="@drawable/${name}_background" />
  <item android:drawable="@drawable/${name}_foreground" />
</layer-list>
`;
  return [
    ["drawable", `${name}_background.xml`, background],
    ["drawable", `${name}.xml`, legacy],
    ["drawable-anydpi-v26", `${name}.xml`, adaptive],
  ];
}

/** @type {import('expo/config-plugins').ConfigPlugin} */
const withAndroidAppIcons = (config) => {
  config = withDangerousMod(config, [
    "android",
    (config) => {
      const res = join(config.modRequest.platformProjectRoot, "app", "src", "main", "res");
      const bitmapDirectory = join(res, "drawable-nodpi");
      mkdirSync(bitmapDirectory, { recursive: true });
      for (const color of ICON_MODES) {
        cpSync(
          join(config.modRequest.projectRoot, "assets/icons", `android-foreground-${color}.png`),
          join(bitmapDirectory, `${drawableName(color)}_foreground.png`),
        );
        for (const [folder, file, content] of androidDrawables(color)) {
          const directory = join(res, folder);
          if (!existsSync(directory)) mkdirSync(directory, { recursive: true });
          writeFileSync(join(directory, file), content);
        }
      }
      return config;
    },
  ]);
  return withAndroidManifest(config, (config) => {
    const application = config.modResults.manifest.application?.[0];
    const main = application?.activity?.find((activity) => activity.$["android:name"] === ".MainActivity");
    if (!application || !main) throw new Error("with-app-icons: MainActivity not found");
    const isLauncher = (filter) =>
      filter.action?.some((action) => action.$["android:name"] === "android.intent.action.MAIN") &&
      filter.category?.some((category) => category.$["android:name"] === "android.intent.category.LAUNCHER");
    main["intent-filter"] = (main["intent-filter"] ?? []).filter((filter) => !isLauncher(filter));
    const aliases = (application["activity-alias"] ?? []).filter(
      (alias) => !alias.$["android:name"].startsWith(ALIAS_PREFIX),
    );
    // `default` is the main icon. The module reads the alias names back as IDs.
    for (const id of ["default", ...ICON_MODES]) {
      const main = id === "default";
      const icon = main ? "@mipmap/ic_launcher" : `@drawable/${drawableName(id)}`;
      aliases.push({
        $: {
          "android:name": `${ALIAS_PREFIX}${pascal(id)}`,
          "android:targetActivity": ".MainActivity",
          "android:enabled": main ? "true" : "false",
          "android:exported": "true",
          "android:icon": icon,
          "android:roundIcon": main ? "@mipmap/ic_launcher_round" : icon,
        },
        "intent-filter": [
          {
            action: [{ $: { "android:name": "android.intent.action.MAIN" } }],
            category: [{ $: { "android:name": "android.intent.category.LAUNCHER" } }],
          },
        ],
      });
    }
    application["activity-alias"] = aliases;
    return config;
  });
};

/** @type {import('expo/config-plugins').ConfigPlugin} */
module.exports = (config) => withAndroidAppIcons(withIosAppIcons(config));
