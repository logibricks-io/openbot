import { version } from "../../../../package.json";
import { openBotSoftwareApplication } from "./site-metadata";

export const OPENBOT_SOFTWARE_APPLICATION = openBotSoftwareApplication({
  version,
  screenshot: "/logibricks-social.png",
});
