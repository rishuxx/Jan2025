import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import ScalePress from '@components/ui/ScalePress';

interface CategoryItem {
  image: any;
  name: string;
  navigationTarget: string; // Kept for compatibility, but not used here
}

interface IconCarouselProps {
  data: CategoryItem[];
  selectedCategory: string | null; // New prop to track the selected category
  onSelectCategory: (category: string) => void; // Callback to notify parent
}

const IconCarousel: FC<IconCarouselProps> = ({
  data,
  selectedCategory,
  onSelectCategory,
}) => {
  const renderItems = (items: CategoryItem[]) => {
    return (
      <>
        {items.map((item, index) => (
          <ScalePress
            key={index}
            onPress={() => {
              onSelectCategory(item.name); // Notify parent of selection
            }}
            style={styles.item}>
            <View
              style={[
                styles.imageWrapper,
                item.name === selectedCategory && styles.selectedImageWrapper, // Highlight if selected
              ]}>
              <Image source={item.image} style={styles.image} />
            </View>
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
    borderRadius: 16,
    padding: 12,
  },
  selectedImageWrapper: {
    backgroundColor: '#FFE175', // Yellow background for selected icon
    width: 80,
    height: 80,
    padding: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default IconCarousel;
