import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {screenHeight, screenWidth} from '@utils/Scaling';
import LottieView from 'lottie-react-native';
import {useCollapsibleContext} from '@r0b0t3d/react-native-collapsible';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const Visuals: FC = () => {
  const {scrollY} = useCollapsibleContext();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 120], [1, 0]);
    return {opacity};
  });

  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      <LinearGradient
        colors={['#FFD700', '#FFA500']} // Yellow to Orange gradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}
      />
      <LottieView
        style={styles.lottie}
       source={require('@assets/animations/raining.json')} // Make sure to add your Lottie file
        autoPlay
        loop
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: screenHeight * 0.5,
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
  }
});

export default Visuals;




