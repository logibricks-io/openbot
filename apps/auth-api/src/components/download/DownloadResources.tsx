import { Link } from "@tanstack/solid-router";
import { EXTERNAL_LINK_REL, OPENBOT_LINKS } from "../../lib/landing-links";

/** Where a reader goes after the installer: what changed, every file, and what to do when it fails. */
export function DownloadResources() {
  return (
    <p class="download-resources">
      <Link to="/changelog">Upstream release history</Link>
      <a href={OPENBOT_LINKS.releases} target="_blank" rel={EXTERNAL_LINK_REL}>
        Original OpenBot releases (not LogiBricks)
      </a>
      <a href={OPENBOT_LINKS.troubleshooting} target="_blank" rel={EXTERNAL_LINK_REL}>
        Upstream troubleshooting
      </a>
    </p>
  );
}
