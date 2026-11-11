import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  "status.host.registered": "Bu LogiBricks Workspace, WebRTC erişimi için kaydedildi.",
  "status.host.keyRotated": "Sunucu anahtarı değiştirildi. Eşlenmiş cihazlar eşli kalır.",
  "status.host.identityUpdated": "Sunucu kimliği güncellendi.",
  "status.host.starting": "WebRTC ana makinesi başlatılıyor…",
  "status.host.ready": "Bu LogiBricks Workspace, WebRTC bağlantıları için hazır.",
  "status.host.signalLost": "Diğer cihazlar şu anda bu LogiBricks Workspace'a ulaşamıyor. Yeniden bağlanıyor.",
  "status.host.stopping": "Bu LogiBricks Workspace özel yapılıyor…",
  "status.host.private": "Bu LogiBricks Workspace özel.",
  "status.host.removed": "Bu LogiBricks Workspace hesabınızdan kaldırıldı. Paylaşmak için yeniden yayımlayın.",
} as const satisfies PartialTranslation<typeof source>;
