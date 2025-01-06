import {
  Platform,
  Animated as RNAnimated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import NoticeAnimation from './NoticeAnimation';
import {NoticeHeight, screenHeight} from '@utils/Scaling.tsx';
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import Visuals from './Visuals';
import AnimatedHeader from './AnimatedHeader.tsx';
import StickSearchBar from './StickSearchBar.tsx';
import Content from '@components/dashboard/Content.tsx';
import CustomText from '@components/ui/CustomText.tsx';
import {RFValue} from 'react-native-responsive-fontsize';
import {Fonts} from '@utils/Constants.tsx';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NOTICE_HEIGHT = -(NoticeHeight + 12);
const HEADER_HEIGHT = screenHeight * 0.4;

const ProductDashboard: FC = () => {
  const {scrollY, expand} = useCollapsibleContext();
  const previousScroll = useRef<number>(0);

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollY.value < previousScroll.current && scrollY.value > 180;
    const opacity = withTiming(isScrollingUp ? 1 : 0, {duration: 300});
    const translateY = withTiming(isScrollingUp ? 0 : 10, {duration: 300});

    previousScroll.current = scrollY.value;

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  const noticePosition = useRef(new RNAnimated.Value(NOTICE_HEIGHT)).current;

  const slideUp = () => {
    RNAnimated.timing(noticePosition, {
      toValue: NOTICE_HEIGHT,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    RNAnimated.timing(noticePosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideDown();
    const timeoutId = setTimeout(() => {
      slideUp();
    }, 3500);
    return () => clearTimeout(timeoutId);
  });

  return (
    <NoticeAnimation noticePosition={noticePosition}>
      <View style={styles.container}>
        <SafeAreaView />

        <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
          <TouchableOpacity
            onPress={() => {
              scrollY.value = 0;
              expand();
            }}
            style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <MaterialCommunityIcons
              name="arrow-up-circle-outline"
              color="white"
              size={RFValue(18)}
            />
            <CustomText
              variant="h7"
              style={{color: 'white'}}
              fontFamily={Fonts.CoolR}>
              Back To Top
            </CustomText>
          </TouchableOpacity>
        </Animated.View>

        <CollapsibleContainer>
          <CollapsibleHeaderContainer containerStyle={styles.headerContainer}>
            <View style={styles.visualsContainer}>
              <Visuals />
              <View style={styles.headerContent}>
                <AnimatedHeader
                  showNotice={() => {
                    const timeoutId = setTimeout(() => {
                      slideDown();
                    }, 3500);
                    return () => clearTimeout(timeoutId);
                  }}
                />
                <StickSearchBar />
              </View>
            </View>
          </CollapsibleHeaderContainer>

          <CollapsibleScrollView
            nestedScrollEnabled
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <Content />
              <View style={styles.footer}>
                <CustomText
                  fontSize={RFValue(28)}
                  fontFamily={Fonts.CoolR}
                  style={styles.footerTitle}>
                  Now Available in Prayagraj
                </CustomText>
                <CustomText
                  fontSize={RFValue(12)}
                  fontFamily={Fonts.CoolR}
                  style={styles.footerSubtitle}>
                  Coming Soon in your City
                </CustomText>
              </View>
            </View>
          </CollapsibleScrollView>
        </CollapsibleContainer>
      </View>
    </NoticeAnimation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    backgroundColor: 'transparent',
  },
  visualsContainer: {
    height: HEADER_HEIGHT,
    width: '100%',
    position: 'relative',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  footerTitle: {
    opacity: 0.2,
  },
  footerSubtitle: {
    marginTop: 18,
    paddingBottom: 100,
    opacity: 0.2,
  },
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
});

export default withCollapsibleContext(ProductDashboard);
