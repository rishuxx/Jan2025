import {Animated as RNAnimated, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import NoticeAnimation from './NoticeAnimation';
import {NoticeHeight, screenHeight} from '@utils/Scaling.tsx';
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  withCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import Visuals from './Visuals';
import AnimatedHeader from './AnimatedHeader.tsx';
import StickSearchBar from './StickSearchBar.tsx';
import Content from '@components/dashboard/Content.tsx';
import CustomText from '@components/ui/CustomText.tsx';
import {RFValue} from 'react-native-responsive-fontsize';
import {Fonts} from '@utils/Constants.tsx';

const NOTICE_HEIGHT = -(NoticeHeight + 12);
const HEADER_HEIGHT = screenHeight * 0.4;

const ProductDashboard = () => {
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
});

export default withCollapsibleContext(ProductDashboard);
