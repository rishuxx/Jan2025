import {View, StyleSheet, Image, Animated} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import ScalePress from '@components/ui/ScalePress';
import {navigate} from '@utils/NavigationUtils';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';

interface CategoryItem {
  image: any;
  name: string;
  navigationTarget: string;
}

interface CategoryContainerProps {
  data: CategoryItem[];
}

const IconCarousel: FC<CategoryContainerProps> = ({data}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scaleAnims = useRef(data.map(() => new Animated.Value(1))).current;

  const animatePress = (index: number) => {
    Animated.sequence([
      Animated.spring(scaleAnims[index], {
        toValue: 0.9,
        useNativeDriver: true,
        speed: 5,
        bounciness: 5,
      }),
      Animated.spring(scaleAnims[index], {
        toValue: 0.8,
        useNativeDriver: true,
        speed: 1,
        bounciness: 10,
      }),
    ]).start();
  };

  const renderItems = (items: CategoryItem[]) => {
    return (
      <>
        {items.map((item, index) => (
          <ScalePress
            key={index}
            onPress={() => {
              setSelectedIndex(index);
              animatePress(index);
              navigate(item.navigationTarget);
            }}
            style={styles.item}>
            <Animated.View
              style={[
                styles.imageWrapper,
                selectedIndex === index && styles.selectedImageWrapper,
                {
                  transform: [{scale: scaleAnims[index]}],
                },
              ]}>
              <Image source={item.image} style={styles.image} />
            </Animated.View>
          </ScalePress>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderItems(data?.slice(0, 4))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 17,
    paddingVertical: 30,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    maxWidth: '25%',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginBottom: 8,
    borderRadius: 16,
    padding: 12,
  },
  selectedImageWrapper: {
    backgroundColor: '#FFE175',
    borderRadius: 16,
    width: 80,
    height: 80,
    padding: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  customText: {
    opacity: 0.6,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default IconCarousel;
