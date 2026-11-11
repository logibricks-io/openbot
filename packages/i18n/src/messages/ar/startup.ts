import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "تعذّر بدء تشغيل LogiBricks Workspace",
  "startup.failedBody":
    "{message}\n\nلم تُعَد تعيين بياناتك المحلية ولم يُكتب فوقها. راجع دليل استكشاف الأخطاء وإصلاحها لمعرفة خطوات الاسترداد.",
  "startup.archiveChangedTitle": "تم تغيير ملفات LogiBricks Workspace",
  "startup.archiveChangedBody":
    "غيّر برنامج آخر ملف LogiBricks Workspace المسمى app.asar. يعمل LogiBricks Workspace الآن، لكنه لن يفتح بعد إنهائه.\n\nلإصلاح LogiBricks Workspace، ثبّته من جديد. تبقى بياناتك المحلية.",
  "startup.archiveChangedDownload": "تنزيل LogiBricks",
  "startup.newerDataUpdatingTitle": "جارٍ تحديث LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "حفظ إصدار أحدث من LogiBricks Workspace بياناتك. يثبّت LogiBricks Workspace أحدث إصدار ثم يفتح مرة أخرى.\n\nلم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  "startup.newerDataTitle": "ثبّت أحدث إصدار من LogiBricks Workspace",
  "startup.newerDataBody":
    "حفظ إصدار أحدث من LogiBricks Workspace بياناتك، ولا يستطيع هذا الإصدار ({version}) فتحها. ثبّت أحدث إصدار لفتح بياناتك.\n\nلم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  "startup.newerDataDownload": "تنزيل LogiBricks Workspace",
  "startup.newerDataGuide": "فتح الدليل",
  "startup.newerDataQuit": "إنهاء",
} as const satisfies PartialTranslation<typeof source>;
