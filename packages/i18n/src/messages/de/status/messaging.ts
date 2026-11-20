import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/messaging";

export const messages = {
  "status.messaging.working": "Wird bearbeitet…",
  "status.messaging.queued": "Wartet, bis eine frühere Anfrage fertig ist. Die Antwort erscheint hier.",
  "status.messaging.busy": "Zu viele Anfragen warten. Versuche es später erneut.",
  "status.messaging.failed":
    "LogiBricks Workspace konnte diese Anfrage nicht abschließen. Der LogiBricks Workspace-Host hat die Details.",
  "status.messaging.noAnswer": "LogiBricks Workspace wurde ohne schriftliche Antwort fertig.",
  "status.messaging.noAgent":
    "Hier kann noch kein Agent antworten. Füge den Slack Orchestrator in LogiBricks Workspace hinzu.",
  "status.messaging.delegated": "Ein Teamkollege arbeitet daran. Die Antwort erscheint hier.",
  "status.messaging.stopped": "Gestoppt.",
  "status.messaging.stop": "Stoppen",
  "status.messaging.approvalTitle": "LogiBricks Workspace bittet um Genehmigung, um fortzufahren.",
  "status.messaging.approvalTitleTeammate": "Teamkollege {agent} bittet um Genehmigung, um fortzufahren.",
  "status.messaging.approvalCommand": "Einen Befehl ausführen",
  "status.messaging.approvalFileChange": "Dateien ändern",
  "status.messaging.approvalPermissions": "Weitere Berechtigungen erhalten",
  "status.messaging.approve": "Genehmigen",
  "status.messaging.deny": "Ablehnen",
  "status.messaging.approvedBy": "Von {user} genehmigt.",
  "status.messaging.deniedBy": "Von {user} abgelehnt.",
  "status.messaging.answeredOnHost": "Auf dem LogiBricks Workspace-Host beantwortet.",
  "status.messaging.requestInactive": "Diese Anfrage ist nicht mehr aktiv.",
  "status.messaging.onlyRequester": "Nur {user} kann dies tun. Der LogiBricks Workspace-Host kann ebenfalls antworten.",
  "status.messaging.hostOnly": "Nur der LogiBricks Workspace-Host kann diese Anfrage beantworten.",
  "status.messaging.filesSkipped": "Einige Dateien wurden nicht gesendet: {names}.",
  "status.messaging.orchestratorName": "Slack Orchestrator",
  "status.messaging.orchestratorTitle": "Antwortet in Slack und fragt das Team",
  "status.messaging.discordNoAgent":
    "Hier kann noch kein Agent antworten. Füge den Discord Orchestrator in LogiBricks Workspace hinzu.",
  "status.messaging.discordOrchestratorName": "Discord Orchestrator",
  "status.messaging.discordOrchestratorTitle": "Antwortet in Discord und fragt das Team",
  "status.messaging.integrationsSection": "Integrationen",
  "status.messaging.signInReceived":
    "LogiBricks Workspace hat die Slack-Installation empfangen. Du kannst diesen Tab schließen.",
  "status.messaging.signInUnknown":
    "LogiBricks Workspace hat diese Slack-Installation nicht gestartet. Starte sie erneut in LogiBricks Workspace.",
  "status.messaging.telegramNoAgent":
    "Hier kann noch kein Agent antworten. Füge den Telegram-Orchestrator in LogiBricks Workspace hinzu.",
  "status.messaging.telegramLinked":
    "OpenBot ist mit diesem Chat verbunden. Erwähne {bot} oder antworte auf eine Nachricht von OpenBot, um die Agenten zu fragen.",
  "status.messaging.telegramOrchestratorName": "Telegram-Orchestrator",
  "status.messaging.telegramOrchestratorTitle": "Antwortet in Telegram und fragt das Team",
  "status.messaging.whatsappNoAgent":
    "Hier kann noch kein Agent antworten. Füge den WhatsApp-Orchestrator in LogiBricks Workspace hinzu.",
  "status.messaging.whatsappApprovalMenu": "Antworte 1 zum Genehmigen oder 2 zum Ablehnen.",
  "status.messaging.whatsappStopMenu": "Antworte „stop“, um zu stoppen.",
  "status.messaging.whatsappPairingCode":
    "Diese Nummer antwortet nur Personen, die ihr Besitzer zugelassen hat. Gib dem Besitzer diesen Code: {code}",
  "status.messaging.whatsappPairingApproved": "Du kannst jetzt Anfragen an diese Nummer senden.",
  "status.messaging.whatsappOwnChat": "Nachricht an dich selbst",
  "status.messaging.whatsappWelcomeOwn":
    "👋 *LogiBricks Workspace ist verbunden*\n\nSchreib hier, um deine Agenten zu fragen. Der WhatsApp Orchestrator antwortet oder gibt die Arbeit an den passenden Agenten.\n\nSende *stop*, um eine Anfrage zu stoppen.",
  "status.messaging.whatsappWelcomeDedicated":
    "👋 *LogiBricks Workspace ist verbunden*\n\nDie Personen, die du in LogiBricks Workspace erlaubst, können dieser Nummer jetzt schreiben. Eine neue Person bekommt einen Code: Genehmige ihn in LogiBricks Workspace unter Anfragen.\n\nSende *stop*, um eine Anfrage zu stoppen.",
  "status.messaging.whatsappOtherOpenBot":
    "Ein anderer LogiBricks Workspace ist mit dieser WhatsApp-Nummer verknüpft, darum bekommst du vielleicht zwei Antworten. Öffne dazu in WhatsApp auf deinem Handy „Verknüpfte Geräte“ und melde den LogiBricks Workspace ab, den du nicht nutzt.",
  "status.messaging.whatsappPaused":
    "LogiBricks Workspace antwortet hier 10 Minuten lang nicht: In kurzer Zeit kamen zu viele Nachrichten. Wenn ein anderer LogiBricks Workspace mit dieser Nummer verknüpft ist, öffne in WhatsApp auf deinem Handy „Verknüpfte Geräte“ und melde den LogiBricks Workspace ab, den du nicht nutzt.",
  "status.messaging.whatsappOrchestratorName": "WhatsApp-Orchestrator",
  "status.messaging.whatsappOrchestratorTitle": "Antwortet in WhatsApp und fragt das Team",
} as const satisfies PartialTranslation<typeof source>;
