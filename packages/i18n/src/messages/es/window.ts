import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "Host local de LogiBricks Workspace",
  "window.localClientTitle": "Cliente local de LogiBricks Workspace",
  "window.computerUsePermissionTitle": "Activar el uso del equipo",
} as const satisfies PartialTranslation<typeof source>;
