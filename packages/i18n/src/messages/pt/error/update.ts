import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/update";

export const messages = {
  "error.update.unsupported": "As atualizações estão disponíveis nas versões instaladas para computador.",
  "error.update.notReady": "Nenhuma atualização está pronta para instalar.",
  "error.update.restartFailed": "O LogiBricks Workspace não conseguiu reiniciar para instalar a atualização.",
  "error.update.downloadStalled": "O download da atualização parou de responder. Tente novamente.",
  "error.update.installFailed":
    "Não foi possível instalar a atualização. Encerre e abra o LogiBricks Workspace novamente, depois tente outra vez.",
  "error.update.notInstalled": "A última reinicialização não instalou a atualização. Reinicie para tentar outra vez.",
  "error.update.downloadFailed": "Não foi possível baixar a atualização. Tente novamente.",
  "error.update.signatureNotConfirmed":
    "O LogiBricks Workspace não conseguiu verificar a atualização. Tente novamente. Se o problema persistir, peça o instalador ao administrador.",
  "error.update.checkFailed": "Não foi possível verificar se há atualizações. Tente novamente.",
  "error.update.checkStalled": "A verificação de atualizações parou de responder. Tente novamente.",
  "error.update.checkOffline":
    "Não foi possível acessar o serviço de atualizações. Verifique sua conexão com a internet e tente novamente.",
  "error.update.checkUnavailable":
    "O serviço de atualizações não respondeu. O LogiBricks Workspace tentará novamente automaticamente em alguns minutos.",
  "error.update.checkNoRelease":
    "Nenhuma atualização publicada foi encontrada para esta plataforma. O LogiBricks Workspace tentará novamente automaticamente em alguns minutos.",
  "error.update.managedByNix":
    "O Nix instala as atualizações desta cópia do LogiBricks Workspace. Atualize-a com o Nix.",
  "error.update.managedByHost":
    "As atualizações neste Mac são instaladas pelo computador anfitrião. A atualização permanece pronta para instalação até a manutenção do computador anfitrião ser executada.",
  "error.update.siblingSession":
    "Outra sessão do LogiBricks Workspace ainda está em execução neste aplicativo. Encerre o LogiBricks Workspace em todas as outras contas de usuário do macOS e instale a atualização novamente.",
  "error.update.siblingSessionSameAccount":
    "Outro processo do LogiBricks Workspace ainda está rodando nesta conta de usuário. Feche-o e instale a atualização de novo.",
  "error.update.siblingCheckFailed":
    "Não foi possível verificar outras sessões do LogiBricks Workspace. Tente novamente antes de instalar.",
  "error.update.readOnlyLocation":
    "O LogiBricks Workspace não consegue instalar atualizações deste local. Encerre o LogiBricks Workspace. No Finder, arraste o LogiBricks Workspace para a pasta Aplicativos (se ele já estiver lá, arraste-o para fora e de volta). Depois, abra o LogiBricks Workspace e instale a atualização novamente.",
  "error.update.appImageMissing":
    "O LogiBricks Workspace não pode instalar a atualização porque o arquivo AppImage dele foi movido, renomeado ou substituído. Feche o LogiBricks Workspace e abra o arquivo AppImage novamente.",
  "error.update.appImageReadOnly":
    "O LogiBricks Workspace não pode instalar atualizações na pasta do arquivo AppImage dele. Feche o LogiBricks Workspace, mova o arquivo AppImage para uma pasta dentro da sua pasta pessoal, abra-o e instale a atualização novamente.",
  "error.update.remoteDisabled":
    "As atualizações feitas por administradores do servidor estão desativadas neste computador.",
  "error.update.restartStarted": "O LogiBricks Workspace já está reiniciando para instalar a atualização.",
  "error.update.alreadyRestarting": "O LogiBricks Workspace já está reiniciando.",
} as const satisfies PartialTranslation<typeof source>;
