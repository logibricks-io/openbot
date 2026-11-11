import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AppLogo } from "@/features/auth/components/app-logo";
import type { BloubMood } from "./bloub-stage-store";

export const MARK_WIDTH = 160;
export const MARK_HEIGHT = 160;

/** The mark stays intact. The camera uses a separate frame, never a distorted logo. */
export function StageMark({ mood }: { mood: BloubMood }) {
  if (mood === "frame" || mood === "found") {
    return (
      <View style={styles.frame}>
        <Svg width={250} height={250} viewBox="0 0 250 250">
          <Path
            d="M3 49V3H49M201 3H247V49M247 201V247H201M49 247H3V201"
            fill="none"
            stroke="#ffffff"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    );
  }
  return <AppLogo size={MARK_WIDTH} />;
}

const styles = StyleSheet.create({
  frame: { position: "absolute", left: -45, top: -45, width: 250, height: 250 },
});
