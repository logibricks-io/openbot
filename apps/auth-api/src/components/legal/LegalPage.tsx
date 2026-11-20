import type { JSX } from "@solidjs/web";
import { onSettled } from "solid-js";
import { type LandingScreenPath, landingAnalytics } from "../../lib/analytics";
import { formatArticleDate } from "../../lib/content-collection";
import { LandingFooter } from "../landing/LandingFooter";
import { SiteHeader } from "../landing/SiteHeader";

export interface LegalPageProps {
  route: LandingScreenPath;
  title: string;
  updatedAt: string;
  children: JSX.Element;
}

export function LegalPage(props: LegalPageProps) {
  onSettled(() => landingAnalytics.start(document, window.location.hostname, props.route));

  return (
    <div class="landing-page post-article">
      <SiteHeader page="content" />

      <main class="post-main">
        <article class="post-container post-article-body">
          <header class="post-article-header" data-enter="post-copy">
            <h1 class="post-article-title">{props.title}</h1>
            <p class="post-meta post-article-byline">
              Last updated <time datetime={props.updatedAt}>{formatArticleDate(props.updatedAt)}</time>
            </p>
          </header>

          <div class="post-prose" data-enter="post-prose">
            <p>
              <strong>Upstream reference.</strong> The following OpenBot document belongs to its original publisher. It
              is retained for source and license context, and is not a LogiBricks service agreement. This deployment has
              not published separate commercial terms.
            </p>
            {props.children}
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
