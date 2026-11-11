import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "Lokale LogiBricks Workspace-host",
  "window.localClientTitle": "Lokale LogiBricks Workspace-client",
  "window.computerUsePermissionTitle": "Zet Computerbesturing aan",
} as const satisfies PartialTranslation<typeof source>;
