import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  "status.host.registered": "تم تسجيل LogiBricks Workspace هذا للوصول عبر WebRTC.",
  "status.host.keyRotated": "تغيّر مفتاح الخادم. تبقى الأجهزة المقترنة مقترنة.",
  "status.host.identityUpdated": "تم تحديث هوية الخادم.",
  "status.host.starting": "جارٍ تشغيل مضيف WebRTC…",
  "status.host.ready": "LogiBricks Workspace هذا جاهز لاتصالات WebRTC.",
  "status.host.signalLost": "لا يمكن للأجهزة الأخرى الوصول إلى LogiBricks Workspace هذا الآن. سيتصل مرة أخرى.",
  "status.host.stopping": "جارٍ جعل LogiBricks Workspace هذا خاصًا…",
  "status.host.private": "LogiBricks Workspace هذا خاص.",
  "status.host.removed": "أُزيل LogiBricks Workspace هذا من حسابك. انشره مرة أخرى لمشاركته.",
} as const satisfies PartialTranslation<typeof source>;
