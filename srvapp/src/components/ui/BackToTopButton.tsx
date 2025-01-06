import React, {FC, useRef} from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useCollapsibleContext} from '@r0b0t3d/react-native-collapsible';
import CustomText from './CustomText';
import {Fonts} from '@utils/Constants';
import {screenHeight} from '@utils/Scaling';

const BackToTopButton: FC = () => {
  const {scrollY, expand} = useCollapsibleContext();
  const previousScroll = useRef<number>(0);

  const backToTopStyle = useAnimatedStyle(() => {
    // Check if the user has scrolled past a threshold and is scrolling up
    const isScrollingUp =
      scrollY.value < previousScroll.current && scrollY.value > 200; // Adjust threshold if needed
    const opacity = withTiming(isScrollingUp ? 1 : 0, {duration: 300});
    const translateY = withTiming(isScrollingUp ? 0 : 20, {duration: 300});

    // Update previous scroll position
    previousScroll.current = scrollY.value;

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  return (
    <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
      <TouchableOpacity
        onPress={() => {
          scrollY.value = 0; // Reset scroll position
          expand(); // Expand the content if necessary
        }}
        style={styles.touchable}>
        <MaterialCommunityIcons
          name="arrow-up-circle-outline"
          color="white"
          size={RFValue(18)}
        />
        <CustomText variant="h7" style={styles.text} fontFamily={Fonts.CoolR}>
          Back To Top
        </CustomText>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backToTopButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? screenHeight * 0.18 : 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    color: 'white',
  },
});

export default BackToTopButton;
