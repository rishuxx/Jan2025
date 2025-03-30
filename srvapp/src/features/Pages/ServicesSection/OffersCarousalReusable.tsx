import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {navigate} from '@utils/NavigationUtils';

const OffersCarousal: FC<{adData: any}> = ({adData}) => {
  const progressValue = useSharedValue(0);

  // Dimensions for the offers section
  const width = Dimensions.get('window').width - 40;
  const height = 80;

  // Calculate item width to show multiple items
  const itemWidth = width / 2.2; // Show about 2 items with a bit of the next one

  const handlePress = () => {
    console.log('Pressed');
    navigate('ServenticaOriginals');
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={itemWidth} // Set to single item width
        height={height}
        loop
        autoPlay
        autoPlayInterval={3000}
        style={{width}} // Full width of container
        defaultIndex={0}
        data={adData}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({item}: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePress}
              style={styles.imageContainer}>
              <Image source={item} style={styles.img} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    height: 80,
  },
  imageContainer: {
    width: '90%', // Almost full width of the item
    height: '100%', // Almost full height
    marginHorizontal: 5, // Small horizontal margin
  },
  img: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default OffersCarousal;
