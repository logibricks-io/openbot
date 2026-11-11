import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace konnte nicht starten",
  "startup.failedBody":
    "{message}\n\nDeine lokalen Daten wurden weder zurückgesetzt noch überschrieben. Schritte zur Wiederherstellung findest du in der Anleitung zur Fehlerbehebung.",
  "startup.archiveChangedTitle": "LogiBricks Workspace-Dateien wurden geändert",
  "startup.archiveChangedBody":
    "Ein anderes Programm hat die LogiBricks Workspace-Datei app.asar geändert. LogiBricks Workspace läuft jetzt, startet aber nicht mehr, wenn du es beendest.\n\nInstalliere LogiBricks Workspace erneut, um es zu reparieren. Deine lokalen Daten bleiben erhalten.",
  "startup.archiveChangedDownload": "LogiBricks laden",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace wird aktualisiert",
  "startup.newerDataUpdatingBody":
    "Eine neuere Version von LogiBricks Workspace hat deine Daten gespeichert. LogiBricks Workspace installiert die neueste Version und startet dann neu.\n\nDeine lokalen Daten wurden nicht zurückgesetzt oder überschrieben.",
  "startup.newerDataTitle": "Neueste LogiBricks Workspace-Version installieren",
  "startup.newerDataBody":
    "Eine neuere Version von LogiBricks Workspace hat deine Daten gespeichert, und diese Version ({version}) kann sie nicht öffnen. Installiere die neueste Version, um deine Daten zu öffnen.\n\nDeine lokalen Daten wurden nicht zurückgesetzt oder überschrieben.",
  "startup.newerDataDownload": "LogiBricks Workspace laden",
  "startup.newerDataGuide": "Anleitung öffnen",
  "startup.newerDataQuit": "Beenden",
} as const satisfies PartialTranslation<typeof source>;
