import { Link } from "@tanstack/solid-router";
import { EXTERNAL_LINK_REL, OPENBOT_LINKS } from "../../lib/landing-links";

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
