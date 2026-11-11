import { APP_LOGO_MICRO_16_MODULES, APP_LOGO_MODULES, APP_LOGO_VIEWBOX_SIZE } from "./app-logo-shape";

/** Legacy animation names remain accepted while consumers move to the static mark. */
export type AppLogoAnimation = "none" | "blink" | "look-around" | "surprised";
export type AppLogoVariant = "production" | "dev" | "preview";

export interface AppLogoProps {
  variant: AppLogoVariant;
  /** Use the optical master when the component is displayed at 16 CSS pixels. */
  opticalSize?: 16;
  /** Accepted for compatibility. The Open Workbench mark is static. */
  animation?: AppLogoAnimation;
  /** Accepted for compatibility. The mark does not create an interactive control. */
  interactive?: boolean;
  /** Accepted for compatibility. The mark does not track the pointer. */
  pointerArea?: HTMLElement | undefined;
  class?: string;
}

export function AppLogo(props: AppLogoProps) {
  const className = () => ["app-logo", props.class].filter(Boolean).join(" ");
  const units = () => props.opticalSize ?? APP_LOGO_VIEWBOX_SIZE;

  // This is the approved brand mark, not an interface icon. Keep its four modules intact.
  return (
    <svg class={className()} data-variant={props.variant} viewBox={`0 0 ${units()} ${units()}`} aria-hidden="true">
      {(props.opticalSize === 16 ? APP_LOGO_MICRO_16_MODULES : APP_LOGO_MODULES).map((module) => (
        <rect
          class={module.accent ? "app-logo-module app-logo-module-accent" : "app-logo-module"}
          x={module.x}
          y={module.y}
          width={module.width}
          height={module.height}
          rx={module.radius}
        />
      ))}
    </svg>
  );
}
