// The logo files of the /brand page, as SVG text. The page shows them, the Worker serves each one at
// `/brand/<file>.svg`, and the browser draws the PNG files and the zip from the same text.
//
// The shapes come from `@openbot/brand`, and the layout of the logo with its name from the Figma
// "Logo" board. No JSX and no DOM here: the Worker imports this module.

import { APP_LOGO_MODULES, APP_LOGO_VIEWBOX_SIZE } from "@openbot/brand/app-logo-shape";
import { WORDMARK_STACKED_PATHS } from "@openbot/brand/wordmark-shape";
import { BRAND_ROUTE } from "./brand-page";

export const BRAND_ZIP_FILE = "logibricks-workspace-brand.zip";

type IconColor = "lilac" | "white" | "black";
type IconShape = "rounded" | "square";
type Ink = "dark" | "light";
export type BrandSpace = "tight" | "safe";

// The colors of the brand tokens in `@openbot/brand/tokens.css`. A file must not depend on a page's CSS.
const FILL: Record<IconColor, string> = { lilac: "#18181b", white: "#f6f3ed", black: "#18181b" };
const INK: Record<Ink, string> = { dark: "#18181b", light: "#f6f3ed" };
const COLOR_NAME: Record<IconColor, string> = { lilac: "Color", white: "White", black: "Black" };

export interface BrandAsset {
  /** The file name without its extension. */
  readonly file: string;
  readonly label: string;
  readonly svg: string;
  readonly width: number;
  readonly height: number;
  /** The background the file is drawn for. */
  readonly surface: "dark" | "light";
}

// The approved primary lockup is 318 by 80, with the wordmark starting at x = 112.
const APP_LOGO_SIZE = APP_LOGO_VIEWBOX_SIZE;
const LOCKUP_GAP = 32;
const WORDMARK_WIDTH = 206;
const CLEAR_SPACE = 40;

function mark(color: IconColor, _shape: IconShape, x: number, y: number, inverse = false): string {
  return `<g transform="translate(${x} ${y})">${APP_LOGO_MODULES.map(
    (module) =>
      `<rect x="${module.x}" y="${module.y}" width="${module.width}" height="${module.height}" rx="${module.radius}" fill="${color === "lilac" && module.accent ? "#d97757" : inverse ? INK.light : FILL[color]}"/>`,
  ).join("")}</g>`;
}

function wordmark(ink: Ink, x: number, y: number, monochrome = false): string {
  const descriptor = monochrome ? INK[ink] : ink === "dark" ? "#696a70" : "#b5b3ae";
  return `<g transform="translate(${x} ${y})" fill="${INK[ink]}"><path d="${WORDMARK_STACKED_PATHS.name}"/><path fill="${descriptor}" d="${WORDMARK_STACKED_PATHS.descriptor}"/></g>`;
}

function svgDocument(width: number, height: number, body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`;
}

function iconAsset(color: IconColor, shape: IconShape): BrandAsset {
  return {
    file: shape === "rounded" ? `logibricks-symbol-${color}` : `logibricks-symbol-square-${color}`,
    label: shape === "rounded" ? `${COLOR_NAME[color]} icon` : `${COLOR_NAME[color]} square`,
    svg: svgDocument(APP_LOGO_SIZE, APP_LOGO_SIZE, mark(color, shape, 0, 0)),
    width: APP_LOGO_SIZE,
    height: APP_LOGO_SIZE,
    surface: color === "white" ? "dark" : "light",
  };
}

function lockupAsset(color: IconColor, ink: Ink, space: BrandSpace): BrandAsset {
  const pad = space === "safe" ? CLEAR_SPACE : 0;
  const width = APP_LOGO_SIZE + LOCKUP_GAP + WORDMARK_WIDTH + pad * 2;
  const height = APP_LOGO_SIZE + pad * 2;
  return {
    file: `logibricks-logo-${color}-${ink}${space === "safe" ? "-clear-space" : ""}`,
    label: `${COLOR_NAME[color]} icon, ${ink} name`,
    svg: svgDocument(
      width,
      height,
      mark(color, "rounded", pad, pad, ink === "light") +
        wordmark(ink, pad + APP_LOGO_SIZE + LOCKUP_GAP, pad, color !== "lilac"),
    ),
    width,
    height,
    surface: ink === "dark" ? "light" : "dark",
  };
}

/** The app icon: the header logo menu copies it. */
export const BRAND_ICON = iconAsset("lilac", "rounded");

export const BRAND_ICONS: readonly BrandAsset[] = [
  BRAND_ICON,
  iconAsset("white", "rounded"),
  iconAsset("black", "rounded"),
];

export const BRAND_SQUARES: readonly BrandAsset[] = [
  iconAsset("lilac", "square"),
  iconAsset("white", "square"),
  iconAsset("black", "square"),
];

/** The four logos with the name on the Figma board, in its order. */
const LOCKUP_STYLES: readonly (readonly [IconColor, Ink])[] = [
  ["lilac", "dark"],
  ["lilac", "light"],
  ["white", "light"],
  ["black", "dark"],
];

export const BRAND_LOCKUPS: Record<BrandSpace, readonly BrandAsset[]> = {
  tight: LOCKUP_STYLES.map(([color, ink]) => lockupAsset(color, ink, "tight")),
  safe: LOCKUP_STYLES.map(([color, ink]) => lockupAsset(color, ink, "safe")),
};

/** The logo with its name, for a light page: the header logo menu copies it. */
export const BRAND_LOCKUP = lockupAsset("lilac", "dark", "tight");

export const BRAND_ASSETS: readonly BrandAsset[] = [
  ...BRAND_ICONS,
  ...BRAND_SQUARES,
  ...BRAND_LOCKUPS.tight,
  ...BRAND_LOCKUPS.safe,
];

/** The served address of a file. */
export function brandAssetPath(asset: BrandAsset): `${typeof BRAND_ROUTE}/${string}.svg` {
  return `${BRAND_ROUTE}/${asset.file}.svg`;
}

export function findBrandAsset(fileName: string): BrandAsset | undefined {
  return BRAND_ASSETS.find((asset) => `${asset.file}.svg` === fileName);
}

/** A square file is drawn 1024 pixels wide as PNG, and a logo with its name 2048. */
export function brandPngWidth(asset: BrandAsset): 1024 | 2048 {
  return asset.width === asset.height ? 1024 : 2048;
}
