import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "Lokaler LogiBricks Workspace-Host",
  "window.localClientTitle": "Lokaler LogiBricks Workspace-Client",
  "window.computerUsePermissionTitle": "Computersteuerung aktivieren",
} as const satisfies PartialTranslation<typeof source>;
