import { CONTENT_COLLECTIONS } from "../lib/content";
import { articleUrl, collectionIndexUrl } from "../lib/content-collection";
import { OPENBOT_LINKS } from "../lib/landing-links";
import { OPENBOT_SITE_URL } from "../lib/site-metadata";
import { FEED_CACHE_CONTROL } from "./content-feed";

/** Current deployment facts, with the untouched historical content identified as upstream. */
export function llmsTxtResponse(siteUrl: string = OPENBOT_SITE_URL): Response {
  const lines = [
    "# LogiBricks Workspace",
    "",
    "> A local AI workspace based on OpenBot.",
    "",
    "This is a branded development deployment. Company installers, app-store listings and hosted offers are not published. Provider access and the workspace host are configured separately by its administrator.",
    "",
    `[Open this deployment's browser workspace](${new URL("/app", siteUrl)}).`,
    `[Release availability](${new URL("/download", siteUrl)}).`,
    `[Upstream OpenBot source and license](${OPENBOT_LINKS.repository}). Upstream release dates, comparisons and claims are not LogiBricks product evidence.`,
    "",
    "## Upstream archive",
    "",
  ];
  for (const collection of CONTENT_COLLECTIONS) {
    lines.push(`### ${collection.name}`, "", `[Archive index](${collectionIndexUrl(collection, siteUrl)})`, "");
    for (const article of collection.articles) {
      lines.push(
        `- [${article.title}](${articleUrl(collection, article.slug, siteUrl)}): upstream article by ${article.author}, ${article.publishedAt}.`,
      );
    }
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": FEED_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
