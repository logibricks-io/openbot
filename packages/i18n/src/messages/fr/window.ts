import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "LogiBricks Workspace – Hôte local",
  "window.localClientTitle": "LogiBricks Workspace – Client local",
  "window.computerUsePermissionTitle": "Activer Computer Use",
  "window.rendererStoppedTitle": "LogiBricks Workspace ne fonctionne plus",
  "window.rendererStoppedBody":
    "La fenêtre s’est arrêtée plusieurs fois. Vos discussions sont enregistrées et vos agents continuent de travailler.",
  "window.rendererStoppedReload": "Recharger",
} as const satisfies PartialTranslation<typeof source>;
