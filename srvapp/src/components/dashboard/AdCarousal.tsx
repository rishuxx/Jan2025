import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {screenWidth} from '@utils/Scaling';
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import ScalePress from '@components/ui/ScalePress';

const AdCarousal: FC<{adData: any}> = ({adData}) => {
  const progressValue = useSharedValue(0);
  const baseOptions = {
    vertical: false,
    width: screenWidth,
    height: parseFloat((screenWidth * 0.7).toFixed(5)),
  };

  return (
    <View style={{left: -20, marginTop: 2}}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3000}
        mode="default"
        data={adData}
        modeConfig={{parallaxScrollingOffset: 0, parallaxScrollingScale: 0.94}}
        renderItem={({item}: any) => {
          return (
            <ScalePress style={styles.imageContainer}>
              <Image source={item} style={styles.img} />
            </ScalePress>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '90%',
    padding:15,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default AdCarousal;
////
