// ServicesReusableDetails.tsx - with your requested changes
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';

// Keep all the existing interfaces

const ServiceDetails: FC<ServiceDetailsProps> = ({
  title,
  rating,
  bookings,
  offers,
  subtitle,
  tabs,
  tabContent = {},
  onViewDetails,
  onAdd,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const defaultContent = {
    price: '',
    description: '',
    details: [],
    image: null,
  };

  const activeContent =
    tabContent && tabContent[activeTab]
      ? tabContent[activeTab]
      : defaultContent;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.divider} />
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

      {/* Horizontal grey line above subtitle */}
      <View style={styles.divider} />

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
            <CustomText
              fontFamily={Fonts.CoolR}
              numberOfLines={1}
              style={styles.tabText}>
              {tab}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content container with image and details */}
      <View style={styles.contentContainer}>
        {/* Left side content */}
        <View style={styles.contentDetails}>
          {/* Pricing and Details */}
          <CustomText
            fontFamily={Fonts.CoolR}
            numberOfLines={1}
            style={styles.price}>
            {activeContent.price}
          </CustomText>
          <CustomText
            fontFamily={Fonts.CoolR}
            numberOfLines={3}
            style={styles.description}>
            {activeContent.description}
          </CustomText>
          <View style={styles.bulletPoints}>
            {activeContent.details.map((item, index) => (
              <CustomText
                fontFamily={Fonts.CoolR}
                key={index}
                style={styles.details}>
                • {item}
              </CustomText>
            ))}
          </View>

          {/* Buttons moved to left side */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={onViewDetails}>
              <CustomText fontFamily={Fonts.CoolR} style={styles.buttonText}>
                View Details
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={onAdd}>
              <CustomText fontFamily={Fonts.CoolR} style={styles.buttonText}>
                Add
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Right side image */}
        {activeContent.image && (
          <View style={styles.imageContainer}>
            <Image
              source={activeContent.image}
              style={styles.tabImage}
              resizeMode="cover"
            />
            <CustomText fontFamily={Fonts.CoolR} style={styles.imageLabel}>
              {activeTab}
            </CustomText>
          </View>
        )}
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
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 30,
    color: '#595956',
    letterSpacing: -0.5,
    marginTop: 5,
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
    backgroundColor: '#FFE175',
  },
  tabText: {
    fontSize: 20,
    color: '#595956',
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 10,
    // Reduce space between image and text
    columnGap: 5,
  },
  contentDetails: {
    flex: 1,
    paddingRight: 5, // Reduced right padding
  },
  imageContainer: {
    marginTop:25,
    width: '50%',
    alignItems: 'center',
  },
  tabImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  imageLabel: {
    marginTop: 5,
    fontSize: 18,
    color: '#595956',
    textAlign: 'center',
  },
  price: {
    color: '#595956',
    letterSpacing: -0.5,
    fontSize: 22,
    marginVertical: 5,
  },
  description: {
    paddingVertical: 5, // Reduced vertical padding
    fontSize: 16,
    color: '#8C8C87',
  },
  bulletPoints: {
    marginBottom: 10,
  },
  details: {
    fontSize: 15,
    color: '#8C8C87',
    marginVertical: 2,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    gap: 10,
  },
  viewDetailsButton: {
    backgroundColor: '#9E9E9E',
    padding: 8,
    borderRadius: 5,
    width: '60%',
  },
  addButton: {
    backgroundColor: '#83CFA3',
    padding: 8,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ServiceDetails;
