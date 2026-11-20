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
  "startup.filesDamagedBody":
    "Sommige LogiBricks Workspace-bestanden zijn beschadigd of ontbreken.\n\nInstalleer LogiBricks Workspace opnieuw om het te herstellen. Je lokale gegevens blijven bewaard.",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace wordt bijgewerkt",
  "startup.newerDataUpdatingBody":
    "Een nieuwere versie van LogiBricks Workspace heeft je gegevens opgeslagen. LogiBricks Workspace installeert de nieuwste versie en opent daarna opnieuw.\n\nJe lokale gegevens zijn niet gereset of overschreven.",
  "startup.newerDataTitle": "Installeer de nieuwste LogiBricks Workspace",
  "startup.newerDataBody":
    "Een nieuwere versie van LogiBricks Workspace heeft je gegevens opgeslagen, en deze versie ({version}) kan ze niet openen. Installeer de nieuwste versie om je gegevens te openen.\n\nJe lokale gegevens zijn niet gereset of overschreven.",
  "startup.newerDataDownload": "LogiBricks Workspace downloaden",
  "startup.newerDataGuide": "Gids openen",
  "startup.newerDataQuit": "Stoppen",
  "startup.newerDataLoopTitle": "De nieuwste LogiBricks Workspace opende niet",
  "startup.newerDataLoopBody":
    "Een nieuwere versie van LogiBricks Workspace heeft je gegevens opgeslagen, en deze versie ({version}) kan ze niet openen. LogiBricks Workspace {loopVersion} stopte meerdere keren achter elkaar voordat het opende, dus het wordt niet opnieuw geïnstalleerd.\n\nInstalleer een versie nieuwer dan {loopVersion} zodra er een beschikbaar is. Open de gids voor hulp.\n\nJe lokale gegevens zijn niet gereset of overschreven.",
  "startup.newerDataReleases": "Versies tonen",
  "startup.recoveryWindowTitle": "LogiBricks Workspace-herstel",
  "startup.recoveryTitle": "LogiBricks Workspace is niet geopend",
  "startup.recoveryBody": {
    one: "LogiBricks Workspace {version} stopte voordat het openging, {count} keer achter elkaar. Je lokale gegevens zijn niet gewist of overschreven.",
    other:
      "LogiBricks Workspace {version} stopte voordat het openging, {count} keer achter elkaar. Je lokale gegevens zijn niet gewist of overschreven.",
  },
  "startup.recoveryHint":
    "Probeer het opnieuw, of installeer de laatste versie die wel opende. Exporteer voor hulp de diagnose en stuur het bestand mee met je melding.",
  "startup.recoveryHintLatest":
    "LogiBricks Workspace vond geen eerdere versie die je gegevens kan openen. Probeer het opnieuw, of installeer de nieuwste versie. Exporteer voor hulp de diagnose en stuur het bestand mee met je melding.",
  "startup.recoveryRetry": "Opnieuw",
  "startup.recoveryPreviousVersion": "Vorige versie downloaden",
  "startup.recoveryLatestVersion": "Nieuwste versie downloaden",
  "startup.recoveryExportDiagnostics": "Diagnose exporteren",
  "startup.recoveryOpenDataFolder": "Gegevensmap openen",
  "startup.recoveryQuit": "Stoppen",
  "startup.recoveryDiagnosticsSaved": "Het diagnosebestand is opgeslagen.",
  "startup.recoveryActionFailed": "LogiBricks Workspace kon deze actie niet uitvoeren.",
} as const satisfies PartialTranslation<typeof source>;
