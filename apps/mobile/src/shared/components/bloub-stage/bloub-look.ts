import { useCSSVariable, useUniwind } from "uniwind";

import { SPLASH_EASE_IN_OUT } from "@/shared/lib/splash-motion";

/** The corner radius of the block's lower edge. */
export const BLOUB_RADIUS = 40;
/** The block moves its lower edge in this time, on the brand in-out curve. */
export const BLOUB_MOVE_MS = 560;
export const BLOUB_MOVE = { duration: BLOUB_MOVE_MS, easing: SPLASH_EASE_IN_OUT };
// The height at which the mark reach full size. A shorter header shrinks it.
const FULL_MARK_SHARE = 0.65;
const MIN_MARK_SCALE = 0.3;
// The mark fade as the edge reaches the status bar, so a block that rolls up takes it along.
const MARK_FADE_SPAN = 80;
/** The light that falls on the block from its top left corner. */
export function bloubGradient(light: string, body: string): string {
  return `radial-gradient(120% 70% at 18% 0%, ${light} 0%, ${body} 58%)`;
}

/** The stage uses the same flat canvas as the native launch screen. */
export function useBloubColors() {
  const canvas = String(useCSSVariable("--openbot-bg-native-canvas") ?? "#151618");
  const eye = String(useCSSVariable("--openbot-text-primary") ?? "#f6f3ed");
  const dark = useUniwind().theme === "dark";
  const action = String(useCSSVariable("--openbot-action") ?? "#f0a182");
  const onAction = String(useCSSVariable("--openbot-action-foreground") ?? "#18181b");
  const control = String(useCSSVariable("--openbot-bg-control") ?? "#202124");
  return { dark, eye, action, onAction, control, body: canvas, light: canvas, dimBody: canvas, dimLight: canvas };
}

/**
 * Where the mark sit for a block whose lower edge is at `edge`: in the middle of the block, below
 * the status bar, smaller for a shorter block, and gone when the edge reaches the status bar.
 */
export function brandMarkFrame(edge: number, height: number, top: number) {
  "worklet";
  const visible = Math.min(Math.max(edge, 0), height);
  return {
    opacity: Math.min(Math.max((visible - top) / MARK_FADE_SPAN, 0), 1),
    center: Math.max(visible / 2, top + (visible - top) * 0.45),
    scale: Math.min(Math.max(visible / (FULL_MARK_SHARE * height), MIN_MARK_SCALE), 1),
  };
}
