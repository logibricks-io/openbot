import { createServerFn } from "@tanstack/solid-start";
import { createSignal, onSettled } from "solid-js";
import { companyReleaseUrl } from "./company-release";

const readAvailability = createServerFn({ method: "GET" }).handler(async (): Promise<boolean> => {
  const { companyReleaseSetting } = await import("../server/company-release-setting");
  return companyReleaseUrl(companyReleaseSetting()) !== null;
});

/** Fail closed while the request is pending or this deployment has no company release base. */
export function createCompanyReleaseAvailability() {
  const [available, setAvailable] = createSignal(false);
  onSettled(() => {
    void readAvailability()
      .then(setAvailable)
      .catch(() => setAvailable(false));
  });
  return available;
}
