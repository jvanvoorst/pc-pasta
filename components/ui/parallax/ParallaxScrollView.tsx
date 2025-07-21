import type { PropsWithChildren, ReactElement } from "react";
import { View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { useBottomTabOverflow } from "@/components/ui/parallax/TabBarBackground";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  className?: string;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  className,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View className="flex-1">
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <Animated.View
          style={headerAnimatedStyle}
          className={`h-[${HEADER_HEIGHT}] overflow-hidden ${className}`}
        >
          {headerImage}
        </Animated.View>
        <View className="flex-1 overflow-hidden">{children}</View>
      </Animated.ScrollView>
    </View>
  );
}
