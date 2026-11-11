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

/** The phone apps on the landing cards. They open a store page, so the links leave the site. */
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

/**
 * The phone app for a visitor on a phone. Android reports Linux and an iPhone reports "like Mac OS X",
 * so check this before the desktop detection. An iPad in desktop mode reports a Mac and stays one.
 */
export function detectMobilePlatform(source: PlatformNavigator): MobilePlatform | undefined {
  const platform =
    `${source.userAgentData?.platform ?? ""} ${source.platform ?? ""} ${source.userAgent ?? ""}`.toLowerCase();

  if (/iphone|ipad|ipod/.test(platform)) return "ios";
  if (/android/.test(platform)) return "android";
  return undefined;
}
