import { Image } from "expo-image";
import { router } from "expo-router";
import { Typography } from "heroui-native";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SettingsRow, SettingsSection } from "@/features/settings/components/settings-content";
import { APP_ICON_LABELS, appIconAsset, loadAppIcon, useAppIcon } from "@/features/settings/model/app-icon";
import { useText } from "@/shared/lib/text";

export function AppIconSection() {
  const { t } = useText();
  const systemDark = useColorScheme() === "dark";
  const { value, ready } = useAppIcon();

  useEffect(() => {
    void loadAppIcon().catch(() => undefined);
  }, []);

  if (!ready || value === null) return null;
  return (
    <SettingsSection>
      <SettingsRow
        value={t(APP_ICON_LABELS[value])}
        onPress={() => router.push("/settings/app-icon")}
        leading={
          <Image
            source={appIconAsset(value, systemDark)}
            style={{ width: 32, height: 32, borderRadius: 8 }}
            contentFit="contain"
            accessible={false}
          />
        }
      >
        <Typography.Paragraph>{t("mobile.settings.appearance.appIcon")}</Typography.Paragraph>
      </SettingsRow>
    </SettingsSection>
  );
}
