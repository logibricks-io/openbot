import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace kan niet starten",
  "startup.failedBody":
    "{message}\n\nJe lokale gegevens zijn niet gereset of overschreven. Bekijk de handleiding voor probleemoplossing voor herstelstappen.",
  "startup.archiveChangedTitle": "LogiBricks Workspace-bestanden zijn gewijzigd",
  "startup.archiveChangedBody":
    "Een ander programma heeft het LogiBricks Workspace-bestand app.asar gewijzigd. LogiBricks Workspace werkt nu, maar opent niet meer nadat je het afsluit.\n\nInstalleer LogiBricks Workspace opnieuw om het te herstellen. Je lokale gegevens blijven bewaard.",
  "startup.archiveChangedDownload": "LogiBricks downloaden",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace wordt bijgewerkt",
  "startup.newerDataUpdatingBody":
    "Een nieuwere versie van LogiBricks Workspace heeft je gegevens opgeslagen. LogiBricks Workspace installeert de nieuwste versie en opent daarna opnieuw.\n\nJe lokale gegevens zijn niet gereset of overschreven.",
  "startup.newerDataTitle": "Installeer de nieuwste LogiBricks Workspace",
  "startup.newerDataBody":
    "Een nieuwere versie van LogiBricks Workspace heeft je gegevens opgeslagen, en deze versie ({version}) kan ze niet openen. Installeer de nieuwste versie om je gegevens te openen.\n\nJe lokale gegevens zijn niet gereset of overschreven.",
  "startup.newerDataDownload": "LogiBricks Workspace downloaden",
  "startup.newerDataGuide": "Gids openen",
  "startup.newerDataQuit": "Stoppen",
} as const satisfies PartialTranslation<typeof source>;
