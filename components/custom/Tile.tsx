import { PropsWithChildren } from "react";
import { View } from "react-native";
import Animated, { FadeOut, SlideInRight } from "react-native-reanimated";

type Props = PropsWithChildren<{
  animate?: boolean;
}>;

export default function Tile({ children, animate = false }: Props) {
  const name = "p-6 bg-white rounded-xl shadow-md";

  return animate ? (
    <Animated.View
      entering={SlideInRight.delay(400)}
      exiting={FadeOut.duration(400)}
      className={name}
    >
      {children}
    </Animated.View>
  ) : (
    <View className={name}>{children}</View>
  );
}
