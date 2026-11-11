import { type MobilePlatformLogoVariant, PlatformLogo, type PlatformLogoVariant } from "@openbot/brand";
import { Link } from "@tanstack/solid-router";
import { For, Show } from "solid-js";
import { createCompanyReleaseAvailability } from "../../lib/company-release-availability";
import { DOWNLOAD_PLATFORM_ORDER, DOWNLOAD_PLATFORMS } from "../../lib/download-platforms";
import { MOBILE_APP_ORDER, MOBILE_APPS } from "../../lib/mobile-apps";
import { createLandingReveal } from "./createLandingReveal";
import { LandingIcon } from "./LandingIcon";
import { useLandingText } from "./LandingText";

interface DownloadCardContentProps {
  action?: string;
  description: string;
  platform: PlatformLogoVariant | MobilePlatformLogoVariant;
  status: string;
  title: string;
}

function DownloadCardContent(props: DownloadCardContentProps) {
  return (
    <>
      <div class="landing-download-card-top">
        <PlatformLogo platform={props.platform} class="landing-download-platform-logo" />
        <span class="landing-download-status">{props.status}</span>
      </div>
      <div class="landing-download-card-copy">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Show when={props.action}>
          <span class="landing-download-action">
            {props.action}
            <LandingIcon name="arrow-up-right" class="landing-download-arrow" />
          </span>
        </Show>
      </div>
    </>
  );
}

export function DownloadSection() {
  const available = createCompanyReleaseAvailability();
  let sectionRef: HTMLElement | undefined;
  const revealed = createLandingReveal(() => sectionRef);
  const revealState = () => (revealed() ? "true" : "false");
  const landing = useLandingText();
  const text = () => landing().download;
  const macos = DOWNLOAD_PLATFORMS.macos;
  const windows = DOWNLOAD_PLATFORMS.windows;
  const linux = DOWNLOAD_PLATFORMS.linux;

  return (
    <section ref={sectionRef} id="download" class="landing-download" aria-labelledby="download-title">
      <div class="landing-download-inner">
        <header class="landing-download-heading" data-revealed={revealState()}>
          <h2 id="download-title">{text().title}</h2>
          <p>{text().description}</p>
        </header>

        <div class="landing-download-grid">
          <a
            class="landing-download-card"
            href={available() ? macos.href : undefined}
            aria-disabled={!available() ? "true" : undefined}
            data-download-platform="macos"
            data-state={available() ? "available" : "unavailable"}
            data-revealed={revealState()}
          >
            <DownloadCardContent
              platform="macos"
              status={available() ? text().available : text().unpublished}
              title={macos.label}
              description={macos.description}
              action={available() ? text().desktop.macos : undefined}
            />
          </a>

          <a
            class="landing-download-card"
            href={available() ? windows.href : undefined}
            aria-disabled={!available() ? "true" : undefined}
            data-download-platform="windows"
            data-state={available() ? "available" : "unavailable"}
            data-revealed={revealState()}
          >
            <DownloadCardContent
              platform="windows"
              status={available() ? text().available : text().unpublished}
              title={windows.label}
              description={windows.description}
              action={available() ? text().desktop.windows : undefined}
            />
          </a>

          {/* The hero selector already offers Linux and /download/linux/latest resolves an AppImage, so the
              card is the same link the other two are. A non-clickable card here contradicted both. */}
          <a
            class="landing-download-card"
            href={available() ? linux.href : undefined}
            aria-disabled={!available() ? "true" : undefined}
            data-download-platform="linux"
            data-state={available() ? "available" : "unavailable"}
            data-revealed={revealState()}
          >
            <DownloadCardContent
              platform="linux"
              status={available() ? text().available : text().unpublished}
              title={linux.label}
              description={linux.description}
              action={available() ? text().desktop.linux : undefined}
            />
          </a>
        </div>

        <div class="landing-download-grid landing-download-grid-mobile">
          <For each={MOBILE_APP_ORDER}>
            {(platform) => {
              const app = MOBILE_APPS[platform];
              return (
                <a
                  class="landing-download-card"
                  href={app.href}
                  data-download-platform={platform}
                  data-state="unavailable"
                  data-revealed={revealState()}
                >
                  <DownloadCardContent
                    platform={platform}
                    status={text().unpublished}
                    title={app.label}
                    description={app.description}
                  />
                </a>
              );
            }}
          </For>
        </div>

        {/* The cards start the download, so the pages that explain each installer get their own
            links. They are also how a crawler finds those pages from the home page. The phone apps
            are a separate group after a rule, as their cards are a separate row. */}
        <p class="landing-download-pages">
          {text().pages}
          <For each={DOWNLOAD_PLATFORM_ORDER}>
            {(platform) => (
              <Link to="/download/$platform" params={{ platform }}>
                {DOWNLOAD_PLATFORMS[platform].label}
              </Link>
            )}
          </For>
          <span class="landing-download-pages-mobile">
            <For each={MOBILE_APP_ORDER}>
              {(platform) => (
                <Link to="/download/$platform" params={{ platform }}>
                  {MOBILE_APPS[platform].label}
                </Link>
              )}
            </For>
          </span>
        </p>
      </div>
    </section>
  );
}
