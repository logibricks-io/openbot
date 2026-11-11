import { createFileRoute } from "@tanstack/solid-router";
import { BrandPage } from "../../components/brand/BrandPage";
import { BRAND_PAGE_META, BRAND_ROUTE } from "../../lib/brand-page";
import { COMPANY_SOCIAL_IMAGE, pageSocialImageMeta } from "../../lib/site-metadata";

const BRAND_SOCIAL_IMAGE = COMPANY_SOCIAL_IMAGE;

export const Route = createFileRoute("/brand/")({
  head: ({ match }) => {
    const url = new URL(BRAND_ROUTE, match.context.siteUrl).toString();
    const { title, description } = BRAND_PAGE_META;
    const image = pageSocialImageMeta(BRAND_SOCIAL_IMAGE, match.context.siteUrl);
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
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BrandPage,
});
