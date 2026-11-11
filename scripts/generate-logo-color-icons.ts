/**
 * Refresh legacy icon filenames with the fixed LogiBricks identity.
 * Saved color enum values are retained for compatibility; this product has one brand mark.
 * Run with `bun scripts/generate-logo-color-icons.ts` after updating the release PNGs.
 */
import { copyFile, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { APP_LOGO_COLORS, DEFAULT_APP_LOGO_COLOR } from "@openbot/contracts/app-logo-color";

const build = resolve(import.meta.dirname, "../build");
const output = join(build, "logo-colors");
await mkdir(output, { recursive: true });
for (const suffix of ["", "-macos-safe-area"]) {
  for (const color of APP_LOGO_COLORS) {
    if (color === DEFAULT_APP_LOGO_COLOR) continue;
    await copyFile(join(build, `icon-production${suffix}.png`), join(output, `icon-${color}${suffix}.png`));
  }
}
