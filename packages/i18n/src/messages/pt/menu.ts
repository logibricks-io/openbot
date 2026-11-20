import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/menu";

export const messages = {
  "menu.stopAllAgents": "Parar todos os agentes",
  "menu.checkForUpdates": "Buscar atualizações…",
  "menu.preferences": "Configurações…",
  "menu.actualSize": "Tamanho real",
  "menu.zoomIn": "Ampliar",
  "menu.zoomOut": "Reduzir",
  "menu.copyLink": "Copiar link",
  "menu.copyImage": "Copiar imagem",
  "menu.quit": "Sair do LogiBricks",
  "menu.quitConfirmTitle": "Sair do LogiBricks Workspace?",
  "menu.quitConfirmBody": "Os agentes e as rotinas param até você abrir o LogiBricks Workspace de novo.",
  "menu.quitConfirm": "Sair",
  "menu.quitHint": "Mantenha ⌘Q pressionado ou pressione duas vezes para sair",
  "menu.closeWorkingTitle": {
    one: "{count} agente ainda está trabalhando",
    other: "{count} agentes ainda estão trabalhando",
  },
  "menu.closeWorkingBody":
    "Se você sair do LogiBricks Workspace, os agentes param. Mantenha-o aberto para que terminem. Para mostrar a janela de novo, abra o LogiBricks Workspace.",
  "menu.closeKeepRunning": "Continuar",
  "menu.trayOpen": "Abrir o LogiBricks",
  "menu.trayQuit": "Sair do LogiBricks",
  "menu.trayTooltip": "LogiBricks",
  "menu.hideDynamicIsland": "Ocultar Dynamic Island",
  "menu.undo": "Desfazer",
  "menu.redo": "Refazer",
  "menu.cut": "Recortar",
  "menu.copy": "Copiar",
  "menu.paste": "Colar",
  "menu.pasteAndMatchStyle": "Colar e manter estilo",
  "menu.delete": "Excluir",
  "menu.selectAll": "Selecionar tudo",
} as const satisfies PartialTranslation<typeof source>;
