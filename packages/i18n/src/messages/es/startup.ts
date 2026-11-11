import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace no pudo iniciarse",
  "startup.failedBody":
    "{message}\n\nTus datos locales no se han restablecido ni sobrescrito. Consulta la guía de solución de problemas para recuperarlos.",
  "startup.archiveChangedTitle": "Se cambiaron archivos de LogiBricks Workspace",
  "startup.archiveChangedBody":
    "Otro programa cambió el archivo app.asar de LogiBricks Workspace. LogiBricks Workspace funciona ahora, pero no se abrirá después de cerrarlo.\n\nPara repararlo, vuelve a instalar LogiBricks Workspace. Tus datos locales se conservan.",
  "startup.archiveChangedDownload": "Descargar LogiBricks",
  "startup.newerDataUpdatingTitle": "Actualizando LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "Una versión más reciente de LogiBricks Workspace guardó tus datos. LogiBricks Workspace instala la última versión y luego se abre de nuevo.\n\nTus datos locales no se restablecieron ni se sobrescribieron.",
  "startup.newerDataTitle": "Instala la última versión de LogiBricks Workspace",
  "startup.newerDataBody":
    "Una versión más reciente de LogiBricks Workspace guardó tus datos y esta versión ({version}) no puede abrirlos. Instala la última versión para abrir tus datos.\n\nTus datos locales no se restablecieron ni se sobrescribieron.",
  "startup.newerDataDownload": "Descargar LogiBricks Workspace",
  "startup.newerDataGuide": "Abrir guía",
  "startup.newerDataQuit": "Salir",
} as const satisfies PartialTranslation<typeof source>;
