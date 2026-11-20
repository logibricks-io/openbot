import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/menu";

export const messages = {
  "menu.stopAllAgents": "Tüm ajanları durdur",
  "menu.checkForUpdates": "Güncellemeleri Denetle…",
  "menu.preferences": "Ayarlar…",
  "menu.actualSize": "Gerçek Boyut",
  "menu.zoomIn": "Yakınlaştır",
  "menu.zoomOut": "Uzaklaştır",
  "menu.copyLink": "Bağlantıyı Kopyala",
  "menu.copyImage": "Görüntüyü Kopyala",
  "menu.quit": "LogiBricks'ten çık",
  "menu.quitConfirmTitle": "LogiBricks Workspace'ten çıkılsın mı?",
  "menu.quitConfirmBody": "LogiBricks Workspace'i yeniden açana kadar ajanlar ve rutinler durur.",
  "menu.quitConfirm": "Çık",
  "menu.quitHint": "Çıkmak için ⌘Q'yu basılı tutun veya iki kez basın",
  "menu.closeWorkingTitle": { one: "{count} ajan hâlâ çalışıyor", other: "{count} ajan hâlâ çalışıyor" },
  "menu.closeWorkingBody":
    "LogiBricks Workspace'tan çıkarsanız ajanlar durur. Bitirmeleri için çalışır bırakın. Pencereyi yeniden göstermek için LogiBricks Workspace'u açın.",
  "menu.closeKeepRunning": "Çalışsın",
  "menu.trayOpen": "LogiBricks'i aç",
  "menu.trayQuit": "LogiBricks'ten çık",
  "menu.trayTooltip": "LogiBricks",
  "menu.hideDynamicIsland": "Dynamic Island'ı gizle",
  "menu.undo": "Geri al",
  "menu.redo": "Yinele",
  "menu.cut": "Kes",
  "menu.copy": "Kopyala",
  "menu.paste": "Yapıştır",
  "menu.pasteAndMatchStyle": "Yapıştır ve stili eşleştir",
  "menu.delete": "Sil",
  "menu.selectAll": "Tümünü seç",
} as const satisfies PartialTranslation<typeof source>;
