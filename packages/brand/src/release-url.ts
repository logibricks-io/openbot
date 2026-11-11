/** Public company release base. No fallback may send a company download to upstream binaries. */
export function companyReleaseUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) return null;
    const hostname = url.hostname.replace(/\.$/u, "");
    if (hostname === "openbot.run" || hostname.endsWith(".openbot.run")) return null;
    if (
      (hostname === "github.com" || hostname === "www.github.com") &&
      decodeURIComponent(url.pathname).toLowerCase().startsWith("/nightly-labs/openbot")
    )
      return null;
    return url.toString().replace(/\/+$/u, "");
  } catch {
    return null;
  }
}
