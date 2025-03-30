import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Basic, categories, ServicesIcons} from '@utils/dummyData';
import BreakerText from '@components/ui/BreakerText';
import CategoryContainer from '@components/dashboard/CategoryContainer';
import Basics from '@components/dashboard/Basics';
import IconCarousel from '../../../components/ui/IconCarousel';

// Import details components (create these separately)
import PaintingDetails from '../ServicesSection/PaintingDetails';
import ElectricalDetails from '../ServicesSection/ElectricalDetails';
import PlumbingDetails from '../ServicesSection/PlumbingDetails';

const ServicesContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'painting',
  ); // Default to 'painting'

  // Mapping of category names to their detail components
  const detailsComponents = {
    Painting: PaintingDetails,
    Electric: ElectricalDetails,
    Plumbing: PlumbingDetails,
  };

  // Get the component to render based on the selected category
  const SelectedComponent = selectedCategory
    ? detailsComponents[selectedCategory]
    : null;

  return (
    <View style={styles.container}>
      <BreakerText text="CATEGORIES" />
      <IconCarousel
        data={ServicesIcons}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} // Pass the setter directly
      />
      {/* Render the selected details component below the carousel */}
      {SelectedComponent && <SelectedComponent />}
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
