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
  "startup.filesDamagedBody":
    "Bazı LogiBricks Workspace dosyaları hasarlı veya eksik.\n\nOnarmak için LogiBricks Workspace’u yeniden yükleyin. Yerel verileriniz korunur.",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace güncelleniyor",
  "startup.newerDataUpdatingBody":
    "LogiBricks Workspace’un daha yeni bir sürümü verilerinizi kaydetti. LogiBricks Workspace en son sürümü yüklüyor ve ardından yeniden açılacak.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataTitle": "En son LogiBricks Workspace’u yükleyin",
  "startup.newerDataBody":
    "LogiBricks Workspace’un daha yeni bir sürümü verilerinizi kaydetti ve bu sürüm ({version}) onları açamıyor. Verilerinizi açmak için en son sürümü yükleyin.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataDownload": "LogiBricks Workspace’u indir",
  "startup.newerDataGuide": "Kılavuzu aç",
  "startup.newerDataQuit": "Çık",
  "startup.newerDataLoopTitle": "En son LogiBricks Workspace açılmadı",
  "startup.newerDataLoopBody":
    "LogiBricks Workspace’un daha yeni bir sürümü verilerinizi kaydetti ve bu sürüm ({version}) onları açamıyor. LogiBricks Workspace {loopVersion} art arda birkaç kez açılmadan durdu, bu yüzden yeniden yüklenmiyor.\n\n{loopVersion} sürümünden daha yeni bir sürüm çıktığında onu yükleyin. Yardım almak için kılavuzu açın.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataReleases": "Sürümleri göster",
  "startup.recoveryWindowTitle": "LogiBricks Workspace kurtarma",
  "startup.recoveryTitle": "LogiBricks Workspace açılmadı",
  "startup.recoveryBody": {
    one: "LogiBricks Workspace {version}, açılmadan önce art arda {count} kez durdu. Yerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
    other:
      "LogiBricks Workspace {version}, açılmadan önce art arda {count} kez durdu. Yerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  },
  "startup.recoveryHint":
    "Yeniden deneyin veya açılan son sürümü yükleyin. Yardım almak için tanılamayı dışa aktarın ve dosyayı raporunuzla gönderin.",
  "startup.recoveryHintLatest":
    "LogiBricks Workspace verilerinizi açabilen daha eski bir sürüm bulamadı. Yeniden deneyin veya en son sürümü yükleyin. Yardım almak için tanılamayı dışa aktarın ve dosyayı raporunuzla gönderin.",
  "startup.recoveryRetry": "Yeniden dene",
  "startup.recoveryPreviousVersion": "Önceki sürümü indir",
  "startup.recoveryLatestVersion": "En son sürümü indir",
  "startup.recoveryExportDiagnostics": "Tanılamayı dışa aktar",
  "startup.recoveryOpenDataFolder": "Veri klasörünü aç",
  "startup.recoveryQuit": "Çık",
  "startup.recoveryDiagnosticsSaved": "Tanılama dosyası kaydedildi.",
  "startup.recoveryActionFailed": "LogiBricks Workspace bu işlemi yapamadı.",
} as const satisfies PartialTranslation<typeof source>;
