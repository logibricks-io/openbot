import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "LogiBricks Workspace: локальный хост",
  "window.localClientTitle": "LogiBricks Workspace: локальный клиент",
  "window.computerUsePermissionTitle": "Включите управление компьютером",
} as const satisfies PartialTranslation<typeof source>;
