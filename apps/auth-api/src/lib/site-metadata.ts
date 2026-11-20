import { faqStructuredData, type LandingQuestion } from "./landing-faq";

/** Legacy upstream origin for archived content and unchanged released callbacks. Current page metadata uses its serving origin. */
export const OPENBOT_SITE_URL = "https://openbot.run/";
export const OPENBOT_SITE_TITLE = "LogiBricks Workspace — your local AI workspace";
export const OPENBOT_SITE_DESCRIPTION =
  "A local AI workspace based on OpenBot. Connect your own providers and the workspace host configured by your organization.";
export const OPENBOT_SOCIAL_IMAGE_URL = "/logibricks-social.png";
/** Square, as schema.org wants for a publisher logo. */
export const OPENBOT_LOGO_URL = "/icon-512x512.png";
export const OPENBOT_SOCIAL_IMAGE_ALT = "LogiBricks Workspace — Open Workbench mark and wordmark";

/** The public brand card, rendered from the approved v2 outlines at 1200 by 630. */
export const OPENBOT_SOCIAL_IMAGE_META = [
  { property: "og:image", content: OPENBOT_SOCIAL_IMAGE_URL },
  { property: "og:image:type", content: "image/png" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: OPENBOT_SOCIAL_IMAGE_ALT },
] as const;

export const OPENBOT_SOCIAL_IMAGE_TAGS = {
  openGraph: OPENBOT_SOCIAL_IMAGE_META,
  twitter: [
    { name: "twitter:image", content: OPENBOT_SOCIAL_IMAGE_URL },
    { name: "twitter:image:alt", content: OPENBOT_SOCIAL_IMAGE_ALT },
  ],
} as const;

export interface PageSocialImage {
  path: string;
  alt: string;
  type?: "image/png" | "image/jpeg";
  width?: number;
  height?: number;
}

/** The company artwork for current product pages. Archived article artwork keeps its attribution. */
export const COMPANY_SOCIAL_IMAGE: PageSocialImage = {
  path: OPENBOT_SOCIAL_IMAGE_URL,
  alt: OPENBOT_SOCIAL_IMAGE_ALT,
  type: "image/png",
  width: 1200,
  height: 630,
};

/** Resolve company artwork to the serving origin for social clients. */
export function openBotSocialImageMeta(siteUrl: string) {
  return pageSocialImageMeta(COMPANY_SOCIAL_IMAGE, siteUrl).openGraph;
}

/** The card of the terms, the privacy policy and the DPA. */
export const OPENBOT_LEGAL_SOCIAL_IMAGE = COMPANY_SOCIAL_IMAGE;

export function pageSocialImageMeta(image: PageSocialImage, siteUrl: string) {
  const url = new URL(image.path, siteUrl).toString();
  return {
    openGraph: [
      { property: "og:image", content: url },
      { property: "og:image:type", content: image.type ?? "image/jpeg" },
      { property: "og:image:width", content: String(image.width ?? 1600) },
      { property: "og:image:height", content: String(image.height ?? 900) },
      { property: "og:image:alt", content: image.alt },
    ],
    twitter: [
      { name: "twitter:image", content: url },
      { name: "twitter:image:alt", content: image.alt },
    ],
  } as const;
}

/** Page metadata follows the serving origin; a company domain is not assumed. */
export function siteUrlForPage(pageUrl: URL): string {
  return `${pageUrl.origin}/`;
}

export interface OpenBotApplicationFacts {
  version: string;
  screenshot: string;
}

export function openBotSoftwareApplication(facts: OpenBotApplicationFacts) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LogiBricks Workspace",
    image: OPENBOT_SOCIAL_IMAGE_URL,
    description: OPENBOT_SITE_DESCRIPTION,
    applicationCategory: "DeveloperApplication",
    softwareVersion: facts.version,
    license: "https://polyformproject.org/licenses/noncommercial/1.0.0/",
  } as const;
}

export type OpenBotSoftwareApplication = ReturnType<typeof openBotSoftwareApplication>;

export const OPENBOT_SECURITY_HEADERS = {
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
} as const;

export function openBotRootHead(interLatinFont: string) {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: OPENBOT_SITE_TITLE },
      { name: "description", content: OPENBOT_SITE_DESCRIPTION },
      { name: "application-name", content: "LogiBricks Workspace" },
      { name: "color-scheme", content: "dark" },
      { name: "theme-color", content: "#151618" },
    ],
    links: [
      {
        rel: "preload",
        as: "font" as const,
        type: "font/woff2",
        href: interLatinFont,
        crossorigin: "anonymous" as const,
      },
      { rel: "icon", href: "/logibricks-favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}

/** The home page's own social card. Other pages without a card of their own keep the site's card. */
const OPENBOT_HOME_SOCIAL_IMAGE = COMPANY_SOCIAL_IMAGE;

export interface HomePageHead {
  title: string;
  description: string;
  questions: readonly LandingQuestion[];
  path: string;
  openGraphLocale: string;
  alternates: readonly { hreflang: string; path: string }[];
}

export function openBotHomeHead(application: OpenBotSoftwareApplication, siteUrl: string, page: HomePageHead) {
  const image = pageSocialImageMeta(OPENBOT_HOME_SOCIAL_IMAGE, siteUrl);
  const url = new URL(page.path, siteUrl).toString();
  const [fallback] = page.alternates;
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      {
        "script:ld+json": {
          ...application,
          url: siteUrl,
          image: new URL(OPENBOT_SOCIAL_IMAGE_URL, siteUrl).toString(),
        },
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "LogiBricks Workspace" },
      { property: "og:locale", content: page.openGraphLocale },
      { property: "og:url", content: url },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      ...image.openGraph,
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      ...image.twitter,
      { "script:ld+json": faqStructuredData(page.questions) },
    ],
    links: [
      { rel: "canonical", href: url },
      ...page.alternates.map((alternate) => ({
        rel: "alternate",
        hreflang: alternate.hreflang,
        href: new URL(alternate.path, siteUrl).toString(),
      })),
      ...(fallback
        ? [{ rel: "alternate", hreflang: "x-default", href: new URL(fallback.path, siteUrl).toString() }]
        : []),
    ],
  };
}
