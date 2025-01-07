//Contnent
import {View, StyleSheet} from 'react-native';
import React from 'react';

import { Basic, categories, ServicesIcons} from '@utils/dummyData';

import BreakerText from '@components/ui/BreakerText';
import AdCarousal from '@components/dashboard/AdCarousal';
import CategoryContainer from '@components/dashboard/CategoryContainer';
import Basics from '@components/dashboard/Basics';
import IconCarousel from './IconCarousel';

const ServicesContent = () => {
  return (
    <View style={styles.container}>
      {/* Top Icon Bars */}
      <BreakerText text="SERVENTICA ORGINALS" />
      <IconCarousel data={ServicesIcons} />

      {/* content */}

      <BreakerText text="CATEGORIES" />
      <CategoryContainer data={categories} />

      {/* other content */}
      <BreakerText text="BASICS" />
      <Basics data={Basic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default ServicesContent;
