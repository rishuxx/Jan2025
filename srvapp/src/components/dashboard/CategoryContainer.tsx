import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import ScalePress from '@components/ui/ScalePress';
import {navigate} from '@utils/NavigationUtils';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';

interface CategoryItem {
  image: any;
  name: string;
}

interface CategoryContainerProps {
  data: CategoryItem[];
}

const CategoryContainer: FC<CategoryContainerProps> = ({data}) => {
  const renderItems = (items: CategoryItem[]) => {
    return (
      <>
        {items.map((item, index) => (
          <ScalePress
            key={index}
            onPress={() => navigate('ProductCategories')}
            style={styles.item}>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.image} />
              <CustomText
                variant="h3"
                fontFamily={Fonts.CoolR}
                numberOfLines={1}
                style={styles.customText}>
                {item.name}
              </CustomText>
            </View>
          </ScalePress>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderItems(data?.slice(0, 3))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 17,
    paddingVertical: 10,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '20%',
  },
  item: {
    left: -28,
    flex: 5,
    alignItems: 'center',
    maxWidth: '80%', // Increased from 32% to 40%
  },
  imageWrapper: {
    left: -28,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180, // Added explicit width
    height: 180, // Added explicit height
    marginBottom: 15,
  },
  image: {
    width: '100%', // Make image fill the wrapper
    height: '100%', // Make image fill the wrapper
    resizeMode: 'contain',
  },
  customText: {
    opacity: 0.6, // Adjust text transparency
    paddingTop: -18, // Add space between the image and text
    textAlign: 'center', // Optional: Center-align the text
  },
});

export default CategoryContainer;
