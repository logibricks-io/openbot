// Exercise the company release service and disabled updater without a network or an app profile.
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { companyReleaseUrl } from "@openbot/brand/release-url";
import { createOpenBotLogger } from "@openbot/logging";
import { Effect } from "effect";
import { latestDownloadResponse } from "../apps/auth-api/src/server/latest-download";
import { loadElectronUpdater } from "../src/main/update-service";

const invalid = [
  undefined,
  "",
  "http://releases.example.test",
  "https://user:secret@releases.example.test",
  "https://releases.example.test?token=secret",
  "https://releases.example.test#fragment",
  "https://openbot.run",
  "https://updates.openbot.run",
  "https://github.com/nightly-labs/openbot/releases/latest/download",
];
const checks: string[] = [];
const logger = createOpenBotLogger("logibricks-release-policy-e2e");
const directory = resolve(".openbot-build/logibricks-release-policy-e2e");
await mkdir(directory, { recursive: true });
function fixtureFetch(run: (url: Parameters<typeof fetch>[0]) => Promise<Response>): typeof fetch {
  return Object.assign(run, { preconnect: () => undefined });
}
const previous = process.env.LOGIBRICKS_RELEASES_URL;
try {
  for (const value of invalid) {
    assert.equal(companyReleaseUrl(value), null);
    if (value === undefined) delete process.env.LOGIBRICKS_RELEASES_URL;
    else process.env.LOGIBRICKS_RELEASES_URL = value;
    assert.equal(await loadElectronUpdater(), null);
    for (const platform of ["linux", "macos", "windows"] as const) {
      let fetched = false;
      const response = await Effect.runPromise(
        latestDownloadResponse(
          platform,
          fixtureFetch(async () => {
            fetched = true;
            throw new Error("An invalid company URL must not fetch a manifest.");
          }),
          "x64",
          value,
        ),
      );
      assert.equal(response.status, 503);
      assert.equal(response.headers.get("location"), null);
      assert.equal(fetched, false);
    }
  }
  checks.push("Invalid or missing company feeds disable updater and all downloads before network access.");
  const base = "https://releases.example.test/company";
  assert.equal(companyReleaseUrl(`${base}/`), base);
  for (const [platform, asset, manifest] of [
    ["macos", "LogiBricks-Workspace-0.67.1-arm64.dmg", "latest-mac.yml"],
    ["linux", "LogiBricks-Workspace-0.67.1-arm64.AppImage", "latest-linux-arm64.yml"],
    ["windows", "LogiBricks-Workspace-0.67.1-x64.exe", "latest.yml"],
  ] as const) {
    const response = await Effect.runPromise(
      latestDownloadResponse(
        platform,
        fixtureFetch(async (url) => {
          assert.equal(url, `${base}/${manifest}`);
          return new Response(`files:\n  - url: ${asset}\n`);
        }),
        "arm64",
        base,
      ),
    );
    assert.equal(response.status, 302);
    assert.equal(response.headers.get("location"), `${base}/${asset}`);
  }
  checks.push("Valid manifests redirect each platform only under its configured company origin.");
  for (const fetcher of [
    async () => new Response("unavailable", { status: 503 }),
    async () => new Response("files:\n  - url: https://openbot.run/app.dmg\n"),
    async () => new Response("files:\n  - url: ../app.dmg\n"),
    async () => {
      throw new Error("Synthetic manifest failure");
    },
  ]) {
    const response = await Effect.runPromise(latestDownloadResponse("macos", fixtureFetch(fetcher), "arm64", base));
    assert.equal(response.status, 503);
    assert.equal(response.headers.get("location"), null);
  }
  checks.push("Failed, external, or traversing manifest assets never fall back to upstream downloads.");
  await writeFile(resolve(directory, "report.json"), `${JSON.stringify({ passed: true, checks }, null, 2)}\n`);
  logger.info(`Verified ${checks.length} company release policy scenarios.`);
} finally {
  if (previous === undefined) delete process.env.LOGIBRICKS_RELEASES_URL;
  else process.env.LOGIBRICKS_RELEASES_URL = previous;
}
