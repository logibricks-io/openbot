import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "Nie udało się uruchomić LogiBricks Workspace",
  "startup.failedBody":
    "{message}\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane. Kroki przywracania znajdziesz w przewodniku rozwiązywania problemów.",
  "startup.archiveChangedTitle": "Pliki LogiBricks Workspace zostały zmienione",
  "startup.archiveChangedBody":
    "Inny program zmienił plik app.asar LogiBricks Workspace. LogiBricks Workspace działa teraz, ale nie uruchomi się po zamknięciu.\n\nAby naprawić LogiBricks Workspace, zainstaluj go ponownie. Twoje lokalne dane zostaną zachowane.",
  "startup.archiveChangedDownload": "Pobierz LogiBricks",
  "startup.newerDataUpdatingTitle": "Aktualizowanie LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "Nowsza wersja LogiBricks Workspace zapisała Twoje dane. LogiBricks Workspace instaluje najnowszą wersję, a potem uruchomi się ponownie.\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane.",
  "startup.newerDataTitle": "Zainstaluj najnowszy LogiBricks Workspace",
  "startup.newerDataBody":
    "Nowsza wersja LogiBricks Workspace zapisała Twoje dane, a ta wersja ({version}) nie może ich otworzyć. Zainstaluj najnowszą wersję, aby otworzyć swoje dane.\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane.",
  "startup.newerDataDownload": "Pobierz LogiBricks Workspace",
  "startup.newerDataGuide": "Otwórz przewodnik",
  "startup.newerDataQuit": "Zakończ",
} as const satisfies PartialTranslation<typeof source>;
