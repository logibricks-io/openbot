import { useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useReducedMotion } from "@/shared/lib/motion";
import { BLOUB_MOVE, BLOUB_RADIUS, bloubGradient, brandMarkFrame, useBloubColors } from "./bloub-look";
import { MARK_HEIGHT, MARK_WIDTH, StageMark } from "./stage-mark";

/** Where the lower edge of the block is: over the whole screen, at a point, or above the screen. */
export type BloubEdge = "cover" | "gone" | number;

/**
 * The neutral block with the brand mark, for a window that draws above the stage, such as the app lock.
 * It starts covered, as the stage does, and moves its edge to `edge` on the UI thread.
 */
export function BloubBlock({ edge, dimmed }: { edge: BloubEdge; dimmed: boolean }) {
  const window = useWindowDimensions();
  const [height, setHeight] = useState(window.height);
  const insets = useSafeAreaInsets();
  const reduced = useReducedMotion();
  const colors = useBloubColors();
  const span = height + BLOUB_RADIUS;
  const target = edge === "cover" ? span : edge === "gone" ? 0 : edge;
  const position = useSharedValue(span);
  useEffect(() => {
    position.set(reduced ? target : withTiming(target, BLOUB_MOVE));
  }, [position, reduced, target]);

  const top = insets.top;
  const blockStyle = useAnimatedStyle(() => ({ transform: [{ translateY: position.get() - span }] }));
  // The gradient stays still on the screen while the block's edge moves over it.
  const lightStyle = useAnimatedStyle(() => ({ transform: [{ translateY: span - position.get() }] }));
  const markStyle = useAnimatedStyle(() => {
    const frame = brandMarkFrame(position.get(), height, top);
    return {
      opacity: frame.opacity,
      transform: [{ translateY: frame.center - MARK_HEIGHT / 2 }, { scale: frame.scale }],
    };
  });
  const body = dimmed ? colors.dimBody : colors.body;
  const light = dimmed ? colors.dimLight : colors.light;

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={StyleSheet.absoluteFill}
      onLayout={({ nativeEvent: { layout } }) => setHeight(layout.height)}
    >
      <Animated.View style={[styles.block, { height: span }, blockStyle]}>
        <View style={[styles.clip, { backgroundColor: body }]}>
          <Animated.View
            style={[styles.light, { height, experimental_backgroundImage: bloubGradient(light, body) }, lightStyle]}
          />
        </View>
      </Animated.View>
      <Animated.View style={[styles.mark, { left: (window.width - MARK_WIDTH) / 2 }, markStyle]}>
        <StageMark mood="idle" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: { position: "absolute", left: 0, right: 0, top: 0 },
  clip: {
    flex: 1,
    overflow: "hidden",
    borderBottomLeftRadius: BLOUB_RADIUS,
    borderBottomRightRadius: BLOUB_RADIUS,
    borderCurve: "continuous",
  },
  light: { position: "absolute", left: 0, right: 0, top: 0 },
  mark: { position: "absolute", top: 0, width: MARK_WIDTH, height: MARK_HEIGHT },
});
