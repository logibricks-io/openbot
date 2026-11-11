import { isRunningInExpoGo } from "expo";
import * as SplashScreen from "expo-splash-screen";

import type { SplashController } from "./use-splash-gate";

// The native splash paints the theme canvas and the brand mark; the JS stage draws the same
// canvas and mark, then moves its lower edge. Letting expo-router hide the native splash before the stage has laid out
// would show one frame of the empty app. Claim the splash at module scope - expo-router defers its
// own claim by a tick so an app-level call wins - and release it from useSplashGate instead.
void SplashScreen.preventAutoHideAsync().catch(() => undefined);
// The JS stage owns the motion and respects system reduced motion. Avoid two
// overlapping transitions. `setOptions` warns in Expo Go.
if (!isRunningInExpoGo()) SplashScreen.setOptions({ fade: false });

export const nativeSplash: SplashController = {
  hide: () => SplashScreen.hide(),
};
