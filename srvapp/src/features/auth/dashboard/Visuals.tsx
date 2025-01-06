import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {screenHeight, screenWidth} from '@utils/Scaling';
import LottieView from 'lottie-react-native';
import {useCollapsibleContext} from '@r0b0t3d/react-native-collapsible';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

interface VisualsProps {
  backgroundImage?: ImageSourcePropType;
  backgroundColor?: string[];
  lottieSource: any;
  lottieStyle?: StyleProp<ViewStyle>;
  customTextComponent: ReactNode;
}

const Visuals: FC<VisualsProps> = ({
  backgroundImage,
  backgroundColor,
  lottieSource,
  lottieStyle,
  customTextComponent,
}) => {
  const {scrollY} = useCollapsibleContext();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 120], [1, 0]);
    return {opacity};
  });

  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      {backgroundImage ? (
        <Image
          source={backgroundImage}
          style={styles.gradient}
          resizeMode="cover"
        />
      ) : (
        <LinearGradient
          colors={backgroundColor || ['#FFD700', '#FFA500']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}
        />
      )}
      <LottieView
        style={[styles.lottie, lottieStyle]}
        source={lottieSource}
        autoPlay
        loop
      />
      <View style={styles.messageSection}>
        <View style={styles.messageRow}>{customTextComponent}</View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: screenHeight * 0.8,
  },
  lottie: {
    width: '100%',
    height: 180,
    position: 'absolute',
    transform: [{scaleX: -1}],
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: screenHeight * 0.4,
    borderRadius: 25,
  },
  messageSection: {
    width: '100%',
    paddingVertical: 235,
    paddingLeft: 15,
    paddingRight: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'flex-start',
  },
});

export default Visuals;
