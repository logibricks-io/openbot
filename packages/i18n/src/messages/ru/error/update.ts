import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/update";

export const messages = {
  "error.update.unsupported": "Обновления доступны в установленных сборках для компьютера.",
  "error.update.notReady": "Обновление не готово к установке.",
  "error.update.restartFailed": "LogiBricks Workspace не смог перезапуститься для установки обновления.",
  "error.update.downloadStalled": "Загрузка обновления перестала отвечать. Повторите попытку.",
  "error.update.installFailed":
    "Не удалось установить обновление. Закройте и снова откройте LogiBricks Workspace, затем повторите попытку.",
  "error.update.downloadFailed": "Не удалось загрузить обновление. Повторите попытку.",
  "error.update.checkFailed": "Не удалось проверить обновления. Повторите попытку.",
  "error.update.checkStalled": "Проверка обновлений перестала отвечать. Повторите попытку.",
  "error.update.checkOffline":
    "Не удалось связаться со службой обновлений. Проверьте подключение к интернету и повторите попытку.",
  "error.update.checkUnavailable":
    "Служба обновлений не ответила. LogiBricks Workspace сам повторит попытку через несколько минут.",
  "error.update.checkNoRelease":
    "Для этой платформы не найдено опубликованных обновлений. LogiBricks Workspace сам повторит попытку через несколько минут.",
  "error.update.managedByNix": "Обновления этой копии LogiBricks Workspace устанавливает Nix. Обновите её через Nix.",
  "error.update.managedByHost":
    "Обновления на этом Mac устанавливает хост. Обновление остаётся готовым до начала обслуживания хоста.",
  "error.update.siblingSession":
    "Из этого приложения всё ещё запущена другая сессия LogiBricks Workspace. Сначала закройте LogiBricks Workspace во всех других учётных записях macOS, затем установите обновление снова.",
  "error.update.siblingSessionSameAccount":
    "В этой учётной записи всё ещё работает другой процесс LogiBricks Workspace. Завершите его, затем установите обновление снова.",
  "error.update.siblingCheckFailed":
    "Не удалось проверить другие сессии LogiBricks Workspace. Повторите попытку перед установкой.",
  "error.update.readOnlyLocation":
    "LogiBricks Workspace не может устанавливать обновления из этого места. Закройте LogiBricks Workspace. В Finder перетащите LogiBricks Workspace в папку «Программы» (если он уже там, перетащите его наружу и обратно). Затем откройте LogiBricks Workspace и установите обновление снова.",
  "error.update.remoteDisabled": "Обновления от администраторов сервера отключены на этом компьютере.",
  "error.update.restartStarted": "LogiBricks Workspace уже перезапускается для установки обновления.",
  "error.update.alreadyRestarting": "LogiBricks Workspace уже перезапускается.",
} as const satisfies PartialTranslation<typeof source>;
