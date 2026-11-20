import { PRODUCT_NAME } from "@openbot/brand/product-identity";
import { Share } from "react-native";
import { supportLog, supportLogValue } from "@/features/support/model/support-log";
import { appStoreUrl } from "@/shared/lib/app-store";
import { isIOS } from "@/shared/lib/platform";

export function shareOpenBot(): void {
  const url = appStoreUrl();
  const content = url && isIOS ? { url } : { message: url ?? PRODUCT_NAME };
  Share.share(content).catch((error: unknown) => {
    supportLog.add("warn", "app", `Share sheet not opened: ${supportLogValue(error)}`);
  });
}
