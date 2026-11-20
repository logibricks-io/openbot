import type { MobileTextKey } from "@openbot/i18n/mobile";
import { type NativeModule, requireOptionalNativeModule } from "expo";
import { create } from "zustand";
import lightIcon from "@/assets/icons/app-icon.png";
import darkIcon from "@/assets/icons/app-icon-dark.png";

declare class AppIconModule extends NativeModule {
  getIcon(): Promise<string | null>;
  setIcon(id: string): Promise<void>;
}

const native = requireOptionalNativeModule<AppIconModule>("OpenBotAppIcon");

export const APP_ICONS = ["default", "light", "dark"] as const;
export type AppIconMode = (typeof APP_ICONS)[number];
export const APP_ICON_LABELS = {
  default: "mobile.settings.appearance.system",
  light: "mobile.settings.appearance.light",
  dark: "mobile.settings.appearance.dark",
} as const satisfies Record<AppIconMode, MobileTextKey>;

export function appIconAsset(mode: AppIconMode, systemDark: boolean) {
  return mode === "dark" || (mode === "default" && systemDark) ? darkIcon : lightIcon;
}

export const useAppIcon = create<{ value: AppIconMode | null; ready: boolean; saving: boolean }>(() => ({
  value: null,
  ready: false,
  saving: false,
}));

let loading: Promise<void> | null = null;

export function loadAppIcon(): Promise<void> {
  if (useAppIcon.getState().ready) return Promise.resolve();
  loading ??= readAppIcon().finally(() => {
    loading = null;
  });
  return loading;
}

async function readAppIcon(): Promise<void> {
  if (!native) {
    useAppIcon.setState({ ready: true });
    return;
  }
  try {
    const id = await native.getIcon();
    const value = APP_ICONS.find((mode) => mode === id) ?? null;
    useAppIcon.setState({ value });
  } finally {
    useAppIcon.setState({ ready: true });
  }
}

export async function saveAppIcon(color: AppIconMode): Promise<void> {
  const { value, saving } = useAppIcon.getState();
  if (!native || saving || value === color) return;
  useAppIcon.setState({ value: color, saving: true });
  try {
    await native.setIcon(color);
  } catch (error) {
    useAppIcon.setState({ value });
    throw error;
  } finally {
    useAppIcon.setState({ saving: false });
  }
}
