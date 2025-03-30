// ServiceDetails.tsx
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';

interface TabContent {
  price: string;
  description: string;
  details: string[];
}

interface ServiceDetailsProps {
  title: string;
  rating: string;
  bookings: string;
  offers: any; // Changed to accept any component or data
  subtitle: string[];
  tabs: string[];
  tabContent?: {
    [key: string]: TabContent;
  }; // Make tabContent optional
}

const ServiceDetails: FC<ServiceDetailsProps> = ({
  title,
  rating,
  bookings,
  offers,
  subtitle,
  tabs,
  tabContent = {}, // Default empty object
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Default content if tab content is not provided
  const defaultContent = {
    price: '',
    description: '',
    details: [],
  };

  // Check if tabContent exists and has the active tab
  const activeContent =
    tabContent && tabContent[activeTab]
      ? tabContent[activeTab]
      : defaultContent;

  return (
    <View style={styles.sectionContainer}>
      <CustomText
        fontFamily={Fonts.CoolR}
        numberOfLines={3}
        variant="h1"
        style={styles.sectionTitle}>
        {title}
      </CustomText>

      <CustomText fontFamily={Fonts.CoolR} style={styles.bookings}>
        ⭐ {rating} ({bookings} Bookings)
      </CustomText>

      {/* Offers */}
      <View style={styles.offersContainer}>{offers}</View>

      {/* subtitle */}
      <CustomText
        fontFamily={Fonts.CoolR}
        numberOfLines={3}
        variant="h1"
        style={styles.subTitle}>
        {subtitle}
      </CustomText>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pricing and Details */}
      <CustomText
        fontFamily={Fonts.CoolR}
        numberOfLines={3}
        variant="h1"
        style={styles.price}>
        {activeContent.price}
      </CustomText>
      <Text style={styles.description}>{activeContent.description}</Text>
      {activeContent.details.map((item, index) => (
        <Text key={index} style={styles.details}>
          • {item}
        </Text>
      ))}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 36,
    color: '#595956',
    letterSpacing: -1,
  },
  subTitle: {
    fontSize: 30,
    color: '#595956',
    letterSpacing: -0.5,
  },
  bookings: {
    fontSize: 18,
    color: '#555555',
    marginVertical: 5,
    letterSpacing: 0.25,
  },
  offersContainer: {
    marginVertical: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tab: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#FFC107', // Yellow for active tab
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#595956',
    letterSpacing: -0.5,
    fontSize: 22,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  viewDetailsButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ServiceDetails;
