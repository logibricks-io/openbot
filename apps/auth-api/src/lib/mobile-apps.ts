import type { MobilePlatformLogoVariant } from "@openbot/brand";
import type { PlatformNavigator } from "./download-platforms";

export type MobilePlatform = MobilePlatformLogoVariant;

export interface MobileAppDetails {
  action: string;
  description: string;
  href: string;
  id: MobilePlatform;
  label: string;
  status: "Not published";
}

export const MOBILE_APPS: Record<MobilePlatform, MobileAppDetails> = {
  ios: {
    id: "ios",
    label: "iPhone",
    status: "Not published",
    description: "Company iOS release not published",
    action: "Release not published",
    href: "/download/ios",
  },
  android: {
    id: "android",
    label: "Android",
    status: "Not published",
    description: "Company Android release not published",
    action: "Release not published",
    href: "/download/android",
  },
};

export const MOBILE_APP_ORDER: readonly MobilePlatform[] = ["ios", "android"];

export function detectMobilePlatform(source: PlatformNavigator): MobilePlatform | undefined {
  const platform =
    `${source.userAgentData?.platform ?? ""} ${source.platform ?? ""} ${source.userAgent ?? ""}`.toLowerCase();

  if (/iphone|ipad|ipod/.test(platform)) return "ios";
  if (/android/.test(platform)) return "android";
  return undefined;
}
