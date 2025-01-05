import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import CustomText from './CustomText';
import {Fonts} from '@utils/Constants';

const BreakerText: FC<{text: string}> = ({text}) => {
  return (
    <View style={styles.breakerContainer}>
      <View style={styles.lineContainer}>
        <View style={styles.horizontalLine} />
        <CustomText fontSize={12} fontFamily={Fonts.Regular} style={styles.text}>
          {text}
        </CustomText>
        <View style={styles.horizontalLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  breakerContainer: {
    marginTop: 1,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10 ,
    color:'#b9b9b9',
  },
  horizontalLine: {
    height: 0.8,
    flex: 1,
    backgroundColor: '#b9b9b9', // Changed from color to backgroundColor
  },
});

export default BreakerText;
