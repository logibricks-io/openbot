import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace başlatılamadı",
  "startup.failedBody":
    "{message}\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı. Kurtarma adımları için sorun giderme kılavuzuna bakın.",
  "startup.archiveChangedTitle": "LogiBricks Workspace dosyaları değiştirildi",
  "startup.archiveChangedBody":
    "Başka bir program LogiBricks Workspace’in app.asar dosyasını değiştirdi. LogiBricks Workspace şu an çalışıyor, ancak kapattıktan sonra açılmayacak.\n\nOnarmak için LogiBricks Workspace’i yeniden yükleyin. Yerel verileriniz korunur.",
  "startup.archiveChangedDownload": "LogiBricks’i indir",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace güncelleniyor",
  "startup.newerDataUpdatingBody":
    "LogiBricks Workspace’un daha yeni bir sürümü verilerinizi kaydetti. LogiBricks Workspace en son sürümü yüklüyor ve ardından yeniden açılacak.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataTitle": "En son LogiBricks Workspace’u yükleyin",
  "startup.newerDataBody":
    "LogiBricks Workspace’un daha yeni bir sürümü verilerinizi kaydetti ve bu sürüm ({version}) onları açamıyor. Verilerinizi açmak için en son sürümü yükleyin.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataDownload": "LogiBricks Workspace’u indir",
  "startup.newerDataGuide": "Kılavuzu aç",
  "startup.newerDataQuit": "Çık",
} as const satisfies PartialTranslation<typeof source>;
