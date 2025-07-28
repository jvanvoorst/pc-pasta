import { PropsWithChildren } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  AnimatedRef,
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/component/ScrollView";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 150;

type Props = PropsWithChildren<{
  img: HTMLImageElement;
  className?: string;
  scrollRef: AnimatedRef<AnimatedScrollView>;
}>;

export default function ParallaxScrollView({
  children,
  img,
  scrollRef,
  className,
}: Props) {
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.Image
          source={img}
          style={[
            {
              width: width,
              height: IMG_HEIGHT,
            },
            imageAnimatedStyle,
          ]}
        />
        <View className={className}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}
