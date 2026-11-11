// Approved v2 Open Workbench geometry. The source is
// design/brand/logibricks-workspace/v2/exports/svg/logibricks-workspace-symbol-color.svg.

export const APP_LOGO_VIEWBOX_SIZE = 80;

export const APP_LOGO_MODULES = [
  { x: 0, y: 0, width: 24, height: 48, radius: 4, accent: false },
  { x: 0, y: 56, width: 48, height: 24, radius: 4, accent: false },
  { x: 56, y: 56, width: 24, height: 24, radius: 4, accent: false },
  { x: 56, y: 0, width: 24, height: 24, radius: 4, accent: true },
] as const;

// Pixel-aligned artwork from the v2 micro-16 master; the inset is part of the design.
export const APP_LOGO_MICRO_16_MODULES = [
  { x: 2, y: 2, width: 4, height: 7, radius: 1, accent: false },
  { x: 2, y: 10, width: 7, height: 4, radius: 1, accent: false },
  { x: 10, y: 10, width: 4, height: 4, radius: 1, accent: false },
  { x: 10, y: 2, width: 4, height: 4, radius: 1, accent: true },
] as const;

// Keep these legacy shape exports for canvas consumers that have not moved to the module data.
// New brand surfaces must use APP_LOGO_MODULES and APP_LOGO_VIEWBOX_SIZE.

/** The mark is a square of this side, in its own units. */
export const APP_LOGO_SIZE = 240;
/** The corner radius of the square, in the same units. */
export const APP_LOGO_CORNER = 50;

/** Each eye is one scribbled stroke, as SVG `points`. */
export const APP_LOGO_EYE_POINTS = {
  left: "43.55 93.61 64.69 81.41 36.48 108.04 79.67 83.11 35.93 122.88 91.58 90.74 38.9 132.69 97.66 98.76 42.44 138.88 100.43 105.4 46.9 143.83 101.97 112.04 55.08 149.51 101.83 122.52 73.01 152.43 94.14 140.23",
  right:
    "145.65 93.61 166.79 81.41 140.83 101.52 175.58 81.46 138.3 109.53 183.18 83.63 137.55 117.43 189.67 87.33 139.67 129.39 197.88 95.78 142.92 136.32 201.52 102.48 149.03 143.86 204.07 112.08 159.14 150.37 203.51 124.75 169.28 152.61 199.82 134.98",
} as const;
