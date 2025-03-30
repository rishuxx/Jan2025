import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Basic, categories, RepairsIcons} from '@utils/dummyData';
import BreakerText from '@components/ui/BreakerText';
import CategoryContainer from '@components/dashboard/CategoryContainer';
import Basics from '@components/dashboard/Basics';
import IconCarousel from '../../../components/ui/IconCarousel';

// Import details components (create these separately)
import RoDetails from '../RepairsSection/RoDetails';
import FanDetails from '../RepairsSection/FanDetails';
import PlumbingDetails from '../ServicesSection/PlumbingDetails';

const RepairsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'painting',
  ); // Default to 'painting'

  // Mapping of category names to their detail components
  const detailsComponents = {
    Ro: RoDetails,
    Fan: FanDetails,
    Ac: PlumbingDetails,
    WashingMachine: PlumbingDetails,
  };

  // Get the component to render based on the selected category
  const SelectedComponent = selectedCategory
    ? detailsComponents[selectedCategory]
    : null;

  return (
    <View style={styles.container}>
      <BreakerText text="CATEGORIES" />
      <IconCarousel
        data={RepairsIcons}
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

export default RepairsContent;
