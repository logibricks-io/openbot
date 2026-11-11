import { Effect, Schema } from "effect";
import { companyReleaseUrl } from "../lib/company-release";

export type AvailableDownloadPlatform = "linux" | "macos" | "windows";

/**
 * `latest-mac.yml` lists the Apple silicon and the Intel installer, so a macOS download also names
 * its architecture. electron-builder puts `arm64` in the Apple silicon asset name and no
 * architecture suffix that contains it in the Intel one. Linux has one manifest per architecture,
 * and Windows ships x64 only.
 */
export type DownloadArchitecture = "arm64" | "x64";

interface DownloadManifestConfig {
  /**
   * Compared against a lowercased asset name, so it must be lowercase itself. The Linux asset is
   * published as `.AppImage`.
   */
  extension: ".appimage" | ".dmg" | ".exe";
  manifest: "latest-linux-arm64.yml" | "latest-linux.yml" | "latest-mac.yml" | "latest.yml";
}

const DOWNLOAD_PLATFORMS = ["linux", "macos", "windows"] as const satisfies readonly AvailableDownloadPlatform[];

function downloadManifest(
  platform: AvailableDownloadPlatform,
  architecture: DownloadArchitecture,
): DownloadManifestConfig {
  if (platform === "linux")
    return {
      extension: ".appimage",
      manifest: architecture === "arm64" ? "latest-linux-arm64.yml" : "latest-linux.yml",
    };
  if (platform === "macos") return { extension: ".dmg", manifest: "latest-mac.yml" };
  return { extension: ".exe", manifest: "latest.yml" };
}

export function isAvailableDownloadPlatform(value: string): value is AvailableDownloadPlatform {
  return DOWNLOAD_PLATFORMS.some((platform) => platform === value);
}

/**
 * The architecture a `?arch=` value asks for. Most Macs are Apple silicon and most Linux computers
 * are x64, so anything else gets those. Windows has only the x64 installer.
 */
export function downloadArchitecture(platform: AvailableDownloadPlatform, arch: string | null): DownloadArchitecture {
  if (platform === "macos") return arch === "x64" ? "x64" : "arm64";
  if (platform === "linux") return arch === "arm64" ? "arm64" : "x64";
  return "x64";
}

function redirect(location: string): Response {
  return new Response(null, {
    status: 302,
    headers: {
      "cache-control": "no-store",
      location,
    },
  });
}

function findInstaller(
  manifest: string,
  extension: DownloadManifestConfig["extension"],
  macArchitecture: DownloadArchitecture | undefined,
): string | undefined {
  const assetLines = manifest.matchAll(/^\s*-\s+url:\s*["']?([^\s"']+)["']?\s*$/gim);
  for (const match of assetLines) {
    const asset = match[1];
    if (!asset?.toLowerCase().endsWith(extension) || !/^[a-z0-9][a-z0-9._+-]+$/i.test(asset)) continue;
    if (macArchitecture && asset.toLowerCase().includes("arm64") !== (macArchitecture === "arm64")) continue;
    return asset;
  }
  return undefined;
}

/** No manifest error may redirect a company download to upstream releases. */
function unavailableDownload(platform: AvailableDownloadPlatform, reason: string): Response {
  console.warn(`latest-download: installer unavailable for ${platform} (${reason})`);
  return new Response("LogiBricks Workspace installers are not available from this deployment.", {
    status: 503,
    headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" },
  });
}

class DownloadManifestError extends Schema.TaggedError<DownloadManifestError>()("DownloadManifestError", {}) {}

const latestDownload = Effect.fn("LatestDownload.resolve")(function* (
  platform: AvailableDownloadPlatform,
  fetcher: typeof fetch,
  architecture: DownloadArchitecture,
  releasesBase: string,
) {
  const config = downloadManifest(platform, architecture);
  const manifestUrl = `${releasesBase}/${config.manifest}`;
  const response = yield* Effect.tryPromise({
    try: (signal) =>
      fetcher(manifestUrl, {
        headers: { accept: "text/yaml, text/plain" },
        signal: AbortSignal.any([signal, AbortSignal.timeout(5_000)]),
      }),
    catch: () => new DownloadManifestError({}),
  });
  if (!response.ok) return unavailableDownload(platform, `manifest status ${response.status}`);
  const manifest = yield* Effect.tryPromise({
    try: () => response.text(),
    catch: () => new DownloadManifestError({}),
  });
  // Only the macOS manifest lists two architectures.
  const installer = findInstaller(manifest, config.extension, platform === "macos" ? architecture : undefined);
  if (!installer) return unavailableDownload(platform, `no ${config.extension} asset in the manifest`);
  return redirect(`${releasesBase}/${encodeURIComponent(installer)}`);
});

export function latestDownloadResponse(
  platform: AvailableDownloadPlatform,
  fetcher: typeof fetch = fetch,
  architecture: DownloadArchitecture = downloadArchitecture(platform, null),
  configuredReleaseUrl?: string,
) {
  const releasesBase = companyReleaseUrl(configuredReleaseUrl);
  if (!releasesBase) return Effect.sync(() => unavailableDownload(platform, "company release base is not configured"));
  return latestDownload(platform, fetcher, architecture, releasesBase).pipe(
    Effect.catch(() => Effect.sync(() => unavailableDownload(platform, "the manifest request failed"))),
  );
}
