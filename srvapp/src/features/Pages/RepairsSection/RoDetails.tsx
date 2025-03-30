// RoDetails.tsx
import React from 'react';
import {View} from 'react-native';
import ServiceDetails from '../ServicesSection/ServicesReusableDetails';
import OffersCarousal from '../ServicesSection/OffersCarousalReusable';

const RoDetails = () => {
  const offerData = [
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
    require('@assets/images/offerCard2.png'),
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
  ];

  // Define different content for each tab
  const tabContent = {
    PreFilters: {
      price: '₹15 - ₹20 per sq. ft',
      description: 'Transform your interior spaces with premium paints',
      details: ['Wall preparation', 'Primer application', '2 coats of paint'],
    },
    carbonFilter: {
      price: '₹18 - ₹25 per sq. ft',
      description: 'Weather-resistant exterior painting solutions',
      details: ['Surface cleaning', 'Crack filling', 'Waterproof coating'],
    },
    MembraneReplacement: {
      price: '₹15 - ₹25 per sq. ft',
      description: 'Complete painting solution for your home',
      details: [
        'Interior & exterior surfaces',
        'Premium quality paints',
        'Professional finish',
      ],
    },
  };

  return (
    <View>
      <ServiceDetails
        title="RO Services & Reapirs"
        rating="4.82"
        bookings="32K"
        offers={<OffersCarousal adData={offerData} />}
        subtitle={['Filter Replacement']}
        tabs={['PreFilters', 'carbonFilter', 'Membrane']}
        tabContent={tabContent}
      />
    </View>
  );
};

export default RoDetails;
