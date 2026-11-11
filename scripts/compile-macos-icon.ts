/**
 * Compile the LogiBricks layered icon into build/macos/Assets.car with the installed Xcode.
 * Also generate the full-resolution legacy ICNS and the development Dock PNGs. Run
 * `bun scripts/generate-macos-raster-icons.ts` to regenerate only the flattened exports.
 * Run with bun scripts/compile-macos-icon.ts after updating build/icon-production.icon.
 */
import { execFileSync } from "node:child_process";
import { copyFile, cp, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createOpenBotLogger } from "@openbot/logging";
import { generateMacRasterIcons } from "./generate-macos-raster-icons";

const logger = createOpenBotLogger("compile-macos-icon");
const sourcePath = resolve("build/icon-production.icon");
const targetPath = resolve("build/macos/Assets.car");

const workPath = await mkdtemp(join(tmpdir(), "openbot-macos-icon-"));
try {
  // actool names the icon after the file, and the app reads it as `CFBundleIconName: Icon`.
  const iconPath = join(workPath, "Icon.icon");
  const outputPath = join(workPath, "out");
  await cp(sourcePath, iconPath, { recursive: true });
  await mkdir(outputPath);
  execFileSync(
    "xcrun",
    [
      "actool",
      iconPath,
      "--compile",
      outputPath,
      "--output-format",
      "human-readable-text",
      "--warnings",
      "--errors",
      "--output-partial-info-plist",
      join(outputPath, "assetcatalog_generated_info.plist"),
      "--app-icon",
      "Icon",
      "--include-all-app-icons",
      "--enable-on-demand-resources",
      "NO",
      "--development-region",
      "en",
      "--target-device",
      "mac",
      "--minimum-deployment-target",
      "26.0",
      "--platform",
      "macosx",
    ],
    { stdio: "inherit" },
  );
  await copyFile(join(outputPath, "Assets.car"), targetPath);
  await generateMacRasterIcons();
  logger.info(`Wrote ${targetPath}`);
} finally {
  await rm(workPath, { recursive: true, force: true });
}
