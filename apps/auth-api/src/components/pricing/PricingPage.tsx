import { LandingFooter } from "../landing/LandingFooter";
import { SiteHeader } from "../landing/SiteHeader";
import { useSiteChrome } from "../landing/SiteText";
import { ButtonLink } from "../ui/button";
import type { PricingPageText } from "./pricing-page-text";
import "./PricingPage.css";

export function PricingPage(props: { text: PricingPageText; lang: string }) {
  const chrome = useSiteChrome();
  return (
    <div class="landing-page pricing-page" lang={props.lang}>
      <SiteHeader page="content" />
      <main class="download-main">
        <header class="compare-index-hero" data-enter="post-copy">
          <h1 class="compare-index-title">{props.text.title}</h1>
          <p class="compare-index-description">{props.text.description}</p>
          <ButtonLink to="/app" reloadDocument variant="primary" size="lg" icon="arrow-right">
            {chrome().text.app}
          </ButtonLink>
        </header>
      </main>
      <LandingFooter />
    </div>
  );
}
