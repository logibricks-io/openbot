import { useCSSVariable } from "uniwind";

/**
 * Sign-in controls use the shared action fill and its matching foreground.
 * The logo keeps the fixed Clay accent, separate from these control colors.
 */
export function useSignInColors() {
  const surface = useCSSVariable("--openbot-bg-control-active");
  const brand = useCSSVariable("--openbot-action");
  const onBrand = useCSSVariable("--openbot-action-foreground");
  const text = useCSSVariable("--openbot-text-primary");
  const muted = useCSSVariable("--openbot-text-muted");
  const danger = useCSSVariable("--openbot-danger");
  const success = useCSSVariable("--openbot-success");
  const radius = useCSSVariable("--openbot-radius-lg");
  return {
    surface: String(surface ?? "#333438"),
    brand: String(brand ?? "#f0a182"),
    onBrand: String(onBrand ?? "#18181b"),
    text: String(text ?? "#f6f3ed"),
    muted: String(muted ?? "#b5b3ae"),
    danger: String(danger ?? "#fd2f3b"),
    success: String(success ?? "#31cf76"),
    radius: Number.parseFloat(String(radius ?? "12")),
  };
}

export type SignInColors = ReturnType<typeof useSignInColors>;

/** The height of every sign-in control, so a button and the field that replaces it match. */
export const SIGN_IN_CONTROL_HEIGHT = 52;
