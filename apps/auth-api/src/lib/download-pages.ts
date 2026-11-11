// The /download pages: one per operating system and phone app, and a hub that lists them. Each
// statement here comes from the release configuration, README.md or docs/TROUBLESHOOTING.md, and for
// the phone apps from the native module minimums, the Mobile Connect settings and the mobile changelog. Keep it to what the
// released app does, because these pages are what a search engine shows for "LogiBricks Workspace for Linux".

import { DOWNLOAD_PLATFORM_ORDER, type DownloadPlatform } from "./download-platforms";
import { faqStructuredData, type LandingQuestion } from "./landing-faq";
import { OPENBOT_DOWNLOAD_LINKS, OPENBOT_DOWNLOAD_PAGE_LINKS } from "./landing-links";
import { MOBILE_APP_ORDER, type MobilePlatform } from "./mobile-apps";
import { COMPANY_SOCIAL_IMAGE, OPENBOT_SITE_URL, pageSocialImageMeta } from "./site-metadata";
import { OPENBOT_SOFTWARE_APPLICATION } from "./software-application";

/** The sitemap date of the pages. Change it when their text changes. */
export const DOWNLOAD_PAGES_UPDATED_AT = "2026-11-04";

/** A system with its own page: a desktop installer or a phone app. */
export type DownloadPagePlatform = DownloadPlatform | MobilePlatform;

/** The desktop systems first, then the phone apps, as the hub and the landing page list them. */
export const DOWNLOAD_PAGE_ORDER: readonly DownloadPagePlatform[] = [...DOWNLOAD_PLATFORM_ORDER, ...MOBILE_APP_ORDER];

export interface DownloadInstaller {
  /** The button text where the system is not on screen, such as a list of every installer. */
  label: string;
  /** The button text inside a card or panel that already names the system. */
  shortLabel: string;
  /** Which computer the file is for, for a reader who has to choose between two. */
  detail: string;
  href: string;
  /** A store page on another site, which opens in a new tab. */
  external?: boolean;
}

/** One line of the spec sheet: what the computer needs, or what the download is. */
interface DownloadSpec {
  label: string;
  value: string;
}

/** One instruction. `code` is a command to copy, shown under the text. */
export interface DownloadStep {
  text: string;
  code?: string;
}

interface DownloadPageSection {
  title: string;
  steps: readonly DownloadStep[];
}

export interface DownloadPageContent {
  platform: DownloadPagePlatform;
  /** The name a reader uses for the system, which the headings and the breadcrumb show. */
  name: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  installers: readonly DownloadInstaller[];
  specs: readonly DownloadSpec[];
  installSteps: readonly DownloadStep[];
  /** Optional steps for one situation, such as a distribution that needs a security profile. */
  extraSections: readonly DownloadPageSection[];
  notes: readonly string[];
  faq: readonly LandingQuestion[];
  /** schema.org `operatingSystem` for this page's installer. */
  operatingSystem: string;
}

function companyDownloadPage(platform: DownloadPagePlatform, name: string, system: string): DownloadPageContent {
  const mobile = platform === "ios" || platform === "android";
  return {
    platform,
    name,
    title: `LogiBricks Workspace for ${name}`,
    description: `Release availability and deployment instructions for LogiBricks Workspace on ${name}.`,
    heading: `LogiBricks for ${name}`,
    intro:
      "This deployment has not published a company installer or app-store listing. Use the local development application or the browser client provided by your administrator.",
    installers: [
      {
        label: "Company installer",
        shortLabel: "Company installer",
        detail: "Available only after a company release base is configured.",
        href: mobile ? OPENBOT_DOWNLOAD_PAGE_LINKS[platform] : OPENBOT_DOWNLOAD_LINKS[platform],
        ...(mobile ? { external: true } : {}),
      },
    ],
    specs: [
      { label: "Source target", value: system },
      { label: "Release", value: "Not published" },
    ],
    installSteps: [
      { text: "Ask your administrator for the approved LogiBricks build and account-service address." },
      {
        text: mobile
          ? "A company iOS or Android build and its matching account configuration are required. Upstream store apps are not LogiBricks releases."
          : "For a local source checkout, follow its README and run the supported development command. Do not use an upstream installer as a company release.",
      },
    ],
    extraSections: [],
    notes: [
      "No company signing identity, store listing, update feed or public download is implied by this preview.",
      "Provider subscriptions and model access are configured separately.",
    ],
    faq: [
      {
        question: "Where is the original project?",
        answer:
          "LogiBricks Workspace is based on OpenBot. Upstream documentation and license terms remain available from the original project; its releases and services are separate.",
      },
    ],
    operatingSystem: system,
  };
}

export const DOWNLOAD_PAGES: Record<DownloadPagePlatform, DownloadPageContent> = {
  macos: companyDownloadPage("macos", "Mac", "macOS 13 or later"),
  windows: companyDownloadPage("windows", "Windows", "Windows 10 or later"),
  linux: companyDownloadPage("linux", "Linux", "Linux x64 or arm64"),
  ios: companyDownloadPage("ios", "iPhone", "iOS"),
  android: companyDownloadPage("android", "Android", "Android"),
};

export const DOWNLOAD_HUB = {
  title: "LogiBricks Workspace releases",
  description: "Company release availability for LogiBricks Workspace.",
  heading: "LogiBricks Workspace releases",
  intro:
    "Company installers and app-store listings are not published. Open the browser client or use the approved local build from your administrator.",
} as const;

/** One social card for the hub and the page of each system. */
const DOWNLOAD_SOCIAL_IMAGE = COMPANY_SOCIAL_IMAGE;

export function downloadPagePath(platform: DownloadPagePlatform | "hub"): string {
  return OPENBOT_DOWNLOAD_PAGE_LINKS[platform];
}

export function downloadPageUrl(platform: DownloadPagePlatform | "hub", siteUrl: string = OPENBOT_SITE_URL): string {
  return new URL(downloadPagePath(platform), siteUrl).toString();
}

function breadcrumbData(platform: DownloadPagePlatform | "hub", siteUrl: string) {
  const trail = [
    { name: "LogiBricks Workspace", url: siteUrl },
    { name: "Download", url: downloadPageUrl("hub", siteUrl) },
    ...(platform === "hub" ? [] : [{ name: DOWNLOAD_PAGES[platform].name, url: downloadPageUrl(platform, siteUrl) }]),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function downloadPageHead(platform: DownloadPagePlatform | "hub", siteUrl: string) {
  const page = platform === "hub" ? undefined : DOWNLOAD_PAGES[platform];
  const title = page?.title ?? DOWNLOAD_HUB.title;
  const description = page?.description ?? DOWNLOAD_HUB.description;
  const url = downloadPageUrl(platform, siteUrl);
  const application = page
    ? {
        ...OPENBOT_SOFTWARE_APPLICATION,
        operatingSystem: page.operatingSystem,
        url,
      }
    : OPENBOT_SOFTWARE_APPLICATION;
  const image = pageSocialImageMeta(DOWNLOAD_SOCIAL_IMAGE, siteUrl);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "LogiBricks Workspace" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      ...image.openGraph,
      { name: "twitter:card", content: "summary_large_image" },

      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...image.twitter,
      { "script:ld+json": application },
      { "script:ld+json": breadcrumbData(platform, siteUrl) },
      ...(page ? [{ "script:ld+json": faqStructuredData(page.faq) }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
