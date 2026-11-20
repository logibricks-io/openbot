import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/update";

export const messages = {
  "error.update.unsupported": "Updates zijn beschikbaar in geïnstalleerde desktopbuilds.",
  "error.update.notReady": "Er is geen update klaar om te installeren.",
  "error.update.restartFailed": "LogiBricks Workspace kon niet herstarten om de update te installeren.",
  "error.update.downloadStalled": "De download van de update reageert niet meer. Probeer het opnieuw.",
  "error.update.installFailed":
    "Kan de update niet installeren. Stop LogiBricks Workspace, open het opnieuw en probeer het nog eens.",
  "error.update.notInstalled":
    "Bij de laatste herstart is de update niet geïnstalleerd. Start opnieuw om het nog eens te proberen.",
  "error.update.downloadFailed": "Kan de update niet downloaden. Probeer het opnieuw.",
  "error.update.signatureNotConfirmed":
    "LogiBricks Workspace kan de update niet verifiëren. Probeer het opnieuw. Blijft het probleem bestaan, vraag je beheerder dan om het installatieprogramma.",
  "error.update.checkFailed": "Kan niet controleren op updates. Probeer het opnieuw.",
  "error.update.checkStalled": "De controle op updates reageert niet meer. Probeer het opnieuw.",
  "error.update.checkOffline":
    "Kan de updateservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw.",
  "error.update.checkUnavailable":
    "De updateservice reageerde niet. LogiBricks Workspace probeert het over een paar minuten zelf opnieuw.",
  "error.update.checkNoRelease":
    "Er is geen gepubliceerde update gevonden voor dit platform. LogiBricks Workspace probeert het over een paar minuten zelf opnieuw.",
  "error.update.managedByNix":
    "Nix installeert updates voor deze kopie van LogiBricks Workspace. Werk hem bij met Nix.",
  "error.update.managedByHost":
    "Updates op deze Mac worden door de host geïnstalleerd. De update blijft klaarstaan tot het onderhoud van de host draait.",
  "error.update.siblingSession":
    "Er draait nog een andere LogiBricks Workspace-sessie vanuit deze app. Stop LogiBricks Workspace eerst in alle andere macOS-gebruikersaccounts en installeer de update dan opnieuw.",
  "error.update.siblingSessionSameAccount":
    "Er draait nog een ander LogiBricks Workspace-proces in dit gebruikersaccount. Stop het en installeer de update dan opnieuw.",
  "error.update.siblingCheckFailed":
    "Kan andere LogiBricks Workspace-sessies niet controleren. Probeer het opnieuw voordat je installeert.",
  "error.update.readOnlyLocation":
    "LogiBricks Workspace kan vanaf deze locatie geen updates installeren. Sluit LogiBricks Workspace af. Sleep LogiBricks Workspace in de Finder naar de map Apps (staat het er al, sleep het er dan uit en weer in). Open LogiBricks Workspace daarna en installeer de update opnieuw.",
  "error.update.appImageMissing":
    "LogiBricks Workspace kan de update niet installeren, omdat het AppImage-bestand is verplaatst, hernoemd of vervangen. Sluit LogiBricks Workspace af en open het AppImage-bestand opnieuw.",
  "error.update.appImageReadOnly":
    "LogiBricks Workspace kan geen updates installeren in de map van het AppImage-bestand. Sluit LogiBricks Workspace af, verplaats het AppImage-bestand naar een map in je thuismap, open het en installeer de update opnieuw.",
  "error.update.remoteDisabled": "Updates door serverbeheerders staan uit op deze computer.",
  "error.update.restartStarted": "LogiBricks Workspace herstart al om de update te installeren.",
  "error.update.alreadyRestarting": "LogiBricks Workspace herstart al.",
} as const satisfies PartialTranslation<typeof source>;
