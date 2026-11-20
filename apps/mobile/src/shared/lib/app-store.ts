import Constants from "expo-constants";
import { isIOS } from "./platform";

// A branded distribution must supply its own listing. There is no upstream store fallback.
export function appStoreUrl(): string | null {
  return isIOS
    ? (Constants.expoConfig?.ios?.appStoreUrl ?? null)
    : (Constants.expoConfig?.android?.playStoreUrl ?? null);
}
