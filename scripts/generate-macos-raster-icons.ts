/** Generate the development Dock PNGs and legacy ICNS from the approved dimensional artwork. */
import { execFileSync } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { APP_LOGO_COLORS, DEFAULT_APP_LOGO_COLOR } from "@openbot/contracts/app-logo-color";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const build = join(root, "build");
const master = join(build, "brand/logibricks-desktop-dark-1024.png");
const canvasSize = 1024;
const sourcePlateWidth = 896;
// Measured at 50% alpha on a 1024px NSWorkspace rendering of Notes, Calculator and Terminal.
const macPlateWidth = 824;

/** Scale the complete approved raster once. This keeps its module positions, relief and shadows. */
function renderDockIcon(image: string, pixels: number): Promise<Buffer> {
  const scale = macPlateWidth / sourcePlateWidth;
  const inset = (canvasSize * (1 - scale)) / 2;
  const drawing = `<svg xmlns="http://www.w3.org/2000/svg" width="${pixels}" height="${pixels}" viewBox="0 0 ${canvasSize} ${canvasSize}">
    <image width="${canvasSize}" height="${canvasSize}" transform="translate(${inset} ${inset}) scale(${scale})"
      href="data:image/png;base64,${image}"/>
  </svg>`;
  return sharp(Buffer.from(drawing)).withIccProfile("srgb").png().toBuffer();
}

/** The macOS bundle uses its layered catalog. These raster exports serve stock Electron and older macOS. */
export async function generateMacRasterIcons(): Promise<void> {
  const image = (await readFile(master)).toString("base64");
  const png = await renderDockIcon(image, canvasSize);
  const work = await mkdtemp(join(tmpdir(), "logibricks-mac-icon-"));
  try {
    const iconset = join(work, "Icon.iconset");
    await mkdir(iconset);
    for (const points of [16, 32, 128, 256, 512]) {
      for (const density of [1, 2]) {
        const pixels = points * density;
        const name = `icon_${points}x${points}${density === 2 ? "@2x" : ""}.png`;
        const data = pixels === canvasSize ? png : await renderDockIcon(image, pixels);
        await writeFile(join(iconset, name), data);
      }
    }
    const icns = join(work, "Icon.icns");
    execFileSync("iconutil", ["--convert", "icns", iconset, "--output", icns]);

    await copyFile(icns, join(build, "icon-production.icns"));
    for (const variant of ["production", "dev", "preview"]) {
      await writeFile(join(build, `icon-${variant}-macos-safe-area.png`), png);
    }
    const compatibilityIcons = join(build, "logo-colors");
    await mkdir(compatibilityIcons, { recursive: true });
    for (const color of APP_LOGO_COLORS) {
      if (color !== DEFAULT_APP_LOGO_COLOR) {
        await writeFile(join(compatibilityIcons, `icon-${color}-macos-safe-area.png`), png);
      }
    }
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

if (import.meta.main) await generateMacRasterIcons();
