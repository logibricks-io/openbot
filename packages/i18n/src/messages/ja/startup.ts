import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace を起動できませんでした",
  "startup.failedBody":
    "{message}\n\nお使いのデータは初期化も上書きもされていません。復旧の手順はトラブルシューティングガイドをご覧ください。",
  "startup.archiveChangedTitle": "LogiBricks Workspace のファイルが変更されました",
  "startup.archiveChangedBody":
    "別のプログラムが LogiBricks Workspace のファイル app.asar を変更しました。LogiBricks Workspace は今は動作していますが、終了すると次は起動しません。\n\n修復するには、LogiBricks Workspace をもう一度インストールしてください。ローカルのデータはそのまま残ります。",
  "startup.archiveChangedDownload": "LogiBricks をダウンロード",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace を更新しています",
  "startup.newerDataUpdatingBody":
    "新しいバージョンの LogiBricks Workspace がデータを保存しました。LogiBricks Workspace は最新バージョンをインストールしてから、もう一度開きます。\n\nローカルデータはリセットも上書きもされていません。",
  "startup.newerDataTitle": "最新の LogiBricks Workspace をインストールしてください",
  "startup.newerDataBody":
    "新しいバージョンの LogiBricks Workspace がデータを保存したため、このバージョン ({version}) では開けません。データを開くには最新バージョンをインストールしてください。\n\nローカルデータはリセットも上書きもされていません。",
  "startup.newerDataDownload": "LogiBricks Workspace をダウンロード",
  "startup.newerDataGuide": "ガイドを開く",
  "startup.newerDataQuit": "終了",
} as const satisfies PartialTranslation<typeof source>;
