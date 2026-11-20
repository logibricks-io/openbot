import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/messaging";

export const messages = {
  "status.messaging.working": "Trabalhando nisso…",
  "status.messaging.queued": "Aguardando o fim de uma solicitação anterior. A resposta chegará aqui.",
  "status.messaging.busy": "Há muitas solicitações na fila. Tente novamente mais tarde.",
  "status.messaging.failed":
    "O LogiBricks Workspace não conseguiu concluir esta solicitação. Os detalhes estão no computador anfitrião do LogiBricks Workspace.",
  "status.messaging.noAnswer": "O LogiBricks Workspace terminou sem uma resposta por escrito.",
  "status.messaging.noAgent":
    "Nenhum agente pode responder aqui ainda. Adicione o Orquestrador do Slack no LogiBricks Workspace.",
  "status.messaging.delegated": "Um colega está trabalhando nisso. A resposta chegará aqui.",
  "status.messaging.stopped": "Interrompido.",
  "status.messaging.stop": "Parar",
  "status.messaging.approvalTitle": "O LogiBricks Workspace pede aprovação para continuar.",
  "status.messaging.approvalTitleTeammate": "O colega {agent} pede aprovação para continuar.",
  "status.messaging.approvalCommand": "Executar um comando",
  "status.messaging.approvalFileChange": "Alterar arquivos",
  "status.messaging.approvalPermissions": "Obter mais permissões",
  "status.messaging.approve": "Aprovar",
  "status.messaging.deny": "Negar",
  "status.messaging.approvedBy": "Aprovado por {user}.",
  "status.messaging.deniedBy": "Negado por {user}.",
  "status.messaging.answeredOnHost": "Respondido no computador anfitrião do LogiBricks Workspace.",
  "status.messaging.requestInactive": "Esta solicitação não está mais ativa.",
  "status.messaging.onlyRequester":
    "Somente {user} pode fazer isso. Também é possível responder no computador anfitrião do LogiBricks Workspace.",
  "status.messaging.hostOnly":
    "Esta solicitação só pode ser respondida no computador anfitrião do LogiBricks Workspace.",
  "status.messaging.filesSkipped": "Alguns arquivos não foram enviados: {names}.",
  "status.messaging.orchestratorName": "Orquestrador do Slack",
  "status.messaging.orchestratorTitle": "Responde no Slack e consulta a equipe",
  "status.messaging.discordNoAgent":
    "Nenhum agente pode responder aqui ainda. Adicione o Orquestrador do Discord no LogiBricks Workspace.",
  "status.messaging.discordOrchestratorName": "Orquestrador do Discord",
  "status.messaging.discordOrchestratorTitle": "Responde no Discord e consulta a equipe",
  "status.messaging.integrationsSection": "Integrações",
  "status.messaging.signInReceived": "O LogiBricks Workspace recebeu a instalação do Slack. Você pode fechar esta aba.",
  "status.messaging.signInUnknown":
    "O LogiBricks Workspace não iniciou esta instalação do Slack. Inicie a instalação novamente no LogiBricks Workspace.",
  "status.messaging.telegramNoAgent":
    "Nenhum agente pode responder aqui ainda. Adicione o Orquestrador do Telegram no LogiBricks Workspace.",
  "status.messaging.telegramLinked":
    "O OpenBot está conectado a este chat. Mencione {bot} ou responda a uma mensagem do OpenBot para falar com os agentes.",
  "status.messaging.telegramOrchestratorName": "Orquestrador do Telegram",
  "status.messaging.telegramOrchestratorTitle": "Responde no Telegram e consulta a equipe",
  "status.messaging.whatsappNoAgent":
    "Nenhum agente pode responder aqui ainda. Adicione o Orquestrador do WhatsApp no LogiBricks Workspace.",
  "status.messaging.whatsappApprovalMenu": "Responda 1 para aprovar ou 2 para recusar.",
  "status.messaging.whatsappStopMenu": "Responda “stop” para parar.",
  "status.messaging.whatsappPairingCode":
    "Este número só responde a pessoas que o dono permitiu. Passe este código ao dono: {code}",
  "status.messaging.whatsappPairingApproved": "Agora você pode enviar solicitações para este número.",
  "status.messaging.whatsappOwnChat": "Mensagem para você mesmo",
  "status.messaging.whatsappWelcomeOwn":
    "👋 *O LogiBricks Workspace está conectado*\n\nEscreva aqui para pedir aos seus agentes. O WhatsApp Orchestrator responde ou passa o trabalho para o agente certo.\n\nEnvie *stop* para parar um pedido.",
  "status.messaging.whatsappWelcomeDedicated":
    "👋 *O LogiBricks Workspace está conectado*\n\nAs pessoas que você permitir no LogiBricks Workspace já podem escrever para este número. Uma pessoa nova recebe um código: aprove-o no LogiBricks Workspace, em Pedidos.\n\nEnvie *stop* para parar um pedido.",
  "status.messaging.whatsappOtherOpenBot":
    "Outro LogiBricks Workspace está conectado a este número do WhatsApp, então você pode receber duas respostas. Para corrigir, abra Dispositivos conectados no WhatsApp do seu celular e desconecte o LogiBricks Workspace que você não usa.",
  "status.messaging.whatsappPaused":
    "O LogiBricks Workspace parou de responder aqui por 10 minutos: chegaram mensagens demais em pouco tempo. Se outro LogiBricks Workspace estiver conectado a este número, abra Dispositivos conectados no WhatsApp do seu celular e desconecte o LogiBricks Workspace que você não usa.",
  "status.messaging.whatsappOrchestratorName": "Orquestrador do WhatsApp",
  "status.messaging.whatsappOrchestratorTitle": "Responde no WhatsApp e consulta a equipe",
} as const satisfies PartialTranslation<typeof source>;
