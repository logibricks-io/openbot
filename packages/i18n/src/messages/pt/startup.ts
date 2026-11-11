import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "O LogiBricks Workspace não conseguiu iniciar",
  "startup.failedBody":
    "{message}\n\nSeus dados locais não foram redefinidos nem sobrescritos. Consulte o guia de solução de problemas para ver os passos de recuperação.",
  "startup.archiveChangedTitle": "Arquivos do LogiBricks Workspace foram alterados",
  "startup.archiveChangedBody":
    "Outro programa alterou o arquivo app.asar do LogiBricks Workspace. O LogiBricks Workspace funciona agora, mas não vai abrir depois que você fechá-lo.\n\nPara reparar, instale o LogiBricks Workspace novamente. Seus dados locais são mantidos.",
  "startup.archiveChangedDownload": "Baixar LogiBricks",
  "startup.newerDataUpdatingTitle": "Atualizando o LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "Uma versão mais recente do LogiBricks Workspace salvou seus dados. O LogiBricks Workspace instala a versão mais recente e depois abre de novo.\n\nSeus dados locais não foram redefinidos nem substituídos.",
  "startup.newerDataTitle": "Instale o LogiBricks Workspace mais recente",
  "startup.newerDataBody":
    "Uma versão mais recente do LogiBricks Workspace salvou seus dados, e esta versão ({version}) não consegue abri-los. Instale a versão mais recente para abrir seus dados.\n\nSeus dados locais não foram redefinidos nem substituídos.",
  "startup.newerDataDownload": "Baixar LogiBricks Workspace",
  "startup.newerDataGuide": "Abrir guia",
  "startup.newerDataQuit": "Sair",
} as const satisfies PartialTranslation<typeof source>;
