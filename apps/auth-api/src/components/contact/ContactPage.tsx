import { EXTERNAL_LINK_REL, OPENBOT_LINKS } from "../../lib/landing-links";
import { LandingFooter } from "../landing/LandingFooter";
import { SiteHeader } from "../landing/SiteHeader";
import { useSiteChrome } from "../landing/SiteText";
import type { ContactPageText } from "./contact-page-text";

export function ContactPage(props: { lang: string; text: ContactPageText }) {
  const chrome = useSiteChrome();
  return (
    <div class="landing-page" lang={props.lang}>
      <SiteHeader page="content" />
      <main class="download-main">
        <header class="compare-index-hero" data-enter="post-copy">
          <h1 class="compare-index-title">{props.text.title}</h1>
          <p class="compare-index-description">{props.text.description}</p>
          <p class="post-meta">
            <a href={OPENBOT_LINKS.repository} target="_blank" rel={EXTERNAL_LINK_REL}>
              {chrome().text.footer.links.sourceCode}
            </a>
          </p>
        </header>
      </main>
      <LandingFooter />
    </div>
  );
}
