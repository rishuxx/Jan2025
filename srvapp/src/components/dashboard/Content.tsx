//Contnent
import {View, StyleSheet} from 'react-native';
import React from 'react';

import {adData, Basic, categories} from '@utils/dummyData';
import AdCarousal from './AdCarousal';
import BreakerText from '@components/ui/BreakerText';
import CategoryContainer from './CategoryContainer';
import Basics from './Basics';

const Content = () => {
  return (
    <View style={styles.container}>
      <BreakerText text="SERVENTICA ORGINALS" />
      <AdCarousal adData={adData} />
      <BreakerText text="CATEGORIES" />
      <CategoryContainer data={categories} />
      <BreakerText text="BASICS" />
     <Basics data={Basic}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Content;
