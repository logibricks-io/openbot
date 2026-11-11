import { APP_LOGO_MODULES, APP_LOGO_VIEWBOX_SIZE } from "@openbot/brand/app-logo-shape";
import { WORDMARK_STACKED_PATHS, WORDMARK_STACKED_VIEWBOX } from "@openbot/brand/wordmark-shape";
import { View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useCSSVariable } from "uniwind";

export interface AppLogoProps {
  size?: number;
}

/** The approved brand geometry is shared with desktop and web. */
export function AppLogo({ size = 80 }: AppLogoProps) {
  const ink = String(useCSSVariable("--openbot-text-primary") ?? "#18181b");
  const accent = String(useCSSVariable("--openbot-brand-accent") ?? "#d97757");
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Svg width={size} height={size} viewBox={`0 0 ${APP_LOGO_VIEWBOX_SIZE} ${APP_LOGO_VIEWBOX_SIZE}`}>
        {APP_LOGO_MODULES.map((module) => (
          <Rect
            key={`${module.x}-${module.y}`}
            x={module.x}
            y={module.y}
            width={module.width}
            height={module.height}
            rx={module.radius}
            fill={module.accent ? accent : ink}
          />
        ))}
      </Svg>
    </View>
  );
}

export function AppWordmark({ width = 206 }: { width?: number }) {
  const ink = String(useCSSVariable("--openbot-text-primary") ?? "#18181b");
  const muted = String(useCSSVariable("--openbot-text-muted") ?? "#696a70");
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Svg width={width} height={(width * 80) / 206} viewBox={WORDMARK_STACKED_VIEWBOX}>
        <Path d={WORDMARK_STACKED_PATHS.name} fill={ink} />
        <Path d={WORDMARK_STACKED_PATHS.descriptor} fill={muted} />
      </Svg>
    </View>
  );
}
