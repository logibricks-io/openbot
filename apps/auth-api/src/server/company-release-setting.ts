import { env } from "cloudflare:workers";
import { requireWorkerBindings } from "./types";

/** Read the public Worker binding inside the server boundary. */
export function companyReleaseSetting(): string | undefined {
  return requireWorkerBindings(env).LOGIBRICKS_RELEASES_URL;
}
