import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import ScalePress from '@components/ui/ScalePress';
import {navigate} from '@utils/NavigationUtils';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';

interface BasicsItem {
  price: string;
  image: any;
  name: string;
  Des: string;
}

interface BasicsContainerProps {
  data: BasicsItem[];
}

const Basics: FC<BasicsContainerProps> = ({data}) => {
  const renderItems = (items: BasicsItem[]) => {
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
                variant="h5"
                fontFamily={Fonts.CoolR}
                numberOfLines={1}
                style={styles.customText}>
                {item.name}
              </CustomText>

              <CustomText
                variant="h7"
                fontFamily={Fonts.CoolR}
                numberOfLines={1}
                style={styles.customText}>
                {item.Des}
              </CustomText>
              
            </View>
          </ScalePress>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderItems(data?.slice(0, 4))}</View>
      <View style={[styles.row, styles.secondRow]}>
        {renderItems(data?.slice(4))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '20%',
    marginBottom: 30, // Add space between rows
  },
  secondRow: {
    marginTop: 30, // Add additional space for the second row
  },
  item: {
    left: -20,
    flex: 5,
    alignItems: 'center',
    maxWidth: '80%',
  },
  imageWrapper: {
    left: -15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginBottom: 30, // Add space between image wrapper and next element
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  customText: {
    opacity: 0.6,
    marginTop: 5, // Changed paddingTop to marginTop for better spacing
    textAlign: 'center',
  },
});

export default Basics;
