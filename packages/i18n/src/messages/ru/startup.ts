import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace не удалось запустить",
  "startup.failedBody":
    "{message}\n\nЛокальные данные не сброшены и не перезаписаны. Шаги восстановления — в руководстве по устранению неполадок.",
  "startup.archiveChangedTitle": "Файлы LogiBricks Workspace изменены",
  "startup.archiveChangedBody":
    "Другая программа изменила файл LogiBricks Workspace app.asar. Сейчас LogiBricks Workspace работает, но после выхода он больше не запустится.\n\nЧтобы исправить это, установите LogiBricks Workspace заново. Ваши локальные данные сохранятся.",
  "startup.archiveChangedDownload": "Скачать LogiBricks",
  "startup.newerDataUpdatingTitle": "Обновление LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "Более новая версия LogiBricks Workspace сохранила ваши данные. LogiBricks Workspace устанавливает последнюю версию и затем откроется снова.\n\nВаши локальные данные не были сброшены или перезаписаны.",
  "startup.newerDataTitle": "Установите последнюю версию LogiBricks Workspace",
  "startup.newerDataBody":
    "Более новая версия LogiBricks Workspace сохранила ваши данные, и эта версия ({version}) не может их открыть. Установите последнюю версию, чтобы открыть данные.\n\nВаши локальные данные не были сброшены или перезаписаны.",
  "startup.newerDataDownload": "Скачать LogiBricks Workspace",
  "startup.newerDataGuide": "Открыть руководство",
  "startup.newerDataQuit": "Выйти",
} as const satisfies PartialTranslation<typeof source>;
