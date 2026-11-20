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
  "startup.filesDamagedBody":
    "Некоторые файлы LogiBricks Workspace повреждены или отсутствуют.\n\nЧтобы исправить это, установите LogiBricks Workspace заново. Ваши локальные данные сохранятся.",
  "startup.newerDataUpdatingTitle": "Обновление LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "Более новая версия LogiBricks Workspace сохранила ваши данные. LogiBricks Workspace устанавливает последнюю версию и затем откроется снова.\n\nВаши локальные данные не были сброшены или перезаписаны.",
  "startup.newerDataTitle": "Установите последнюю версию LogiBricks Workspace",
  "startup.newerDataBody":
    "Более новая версия LogiBricks Workspace сохранила ваши данные, и эта версия ({version}) не может их открыть. Установите последнюю версию, чтобы открыть данные.\n\nВаши локальные данные не были сброшены или перезаписаны.",
  "startup.newerDataDownload": "Скачать LogiBricks Workspace",
  "startup.newerDataGuide": "Открыть руководство",
  "startup.newerDataQuit": "Выйти",
  "startup.newerDataLoopTitle": "Последняя версия LogiBricks Workspace не открылась",
  "startup.newerDataLoopBody":
    "Более новая версия LogiBricks Workspace сохранила ваши данные, и эта версия ({version}) не может их открыть. LogiBricks Workspace {loopVersion} несколько раз подряд останавливался до открытия, поэтому он не будет установлен снова.\n\nУстановите версию новее {loopVersion}, когда она появится. Чтобы получить помощь, откройте руководство.\n\nВаши локальные данные не были сброшены или перезаписаны.",
  "startup.newerDataReleases": "Показать версии",
  "startup.recoveryWindowTitle": "Восстановление LogiBricks Workspace",
  "startup.recoveryTitle": "LogiBricks Workspace не открылся",
  "startup.recoveryBody": {
    one: "LogiBricks Workspace {version} остановился до открытия {count} раз подряд. Ваши локальные данные не сброшены и не перезаписаны.",
    few: "LogiBricks Workspace {version} остановился до открытия {count} раза подряд. Ваши локальные данные не сброшены и не перезаписаны.",
    many: "LogiBricks Workspace {version} остановился до открытия {count} раз подряд. Ваши локальные данные не сброшены и не перезаписаны.",
    other:
      "LogiBricks Workspace {version} остановился до открытия {count} раза подряд. Ваши локальные данные не сброшены и не перезаписаны.",
  },
  "startup.recoveryHint":
    "Попробуйте снова или установите последнюю версию, которая открывалась. Чтобы получить помощь, экспортируйте диагностику и отправьте файл вместе с отчётом.",
  "startup.recoveryHintLatest":
    "LogiBricks Workspace не нашёл более раннюю версию, которая может открыть ваши данные. Попробуйте снова или установите последнюю версию. Чтобы получить помощь, экспортируйте диагностику и отправьте файл вместе с отчётом.",
  "startup.recoveryRetry": "Повторить",
  "startup.recoveryPreviousVersion": "Скачать прошлую версию",
  "startup.recoveryLatestVersion": "Скачать последнюю версию",
  "startup.recoveryExportDiagnostics": "Экспорт диагностики",
  "startup.recoveryOpenDataFolder": "Открыть папку данных",
  "startup.recoveryQuit": "Выйти",
  "startup.recoveryDiagnosticsSaved": "Файл диагностики сохранён.",
  "startup.recoveryActionFailed": "LogiBricks Workspace не удалось выполнить это действие.",
} as const satisfies PartialTranslation<typeof source>;
