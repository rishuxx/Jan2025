// ElectricalDetails.tsx
import React from 'react';
import {View} from 'react-native';
import ServiceDetails from './ServicesReusableDetails';
import OffersCarousal from './OffersCarousalReusable';

const ElectricalDetails = () => {
  const offerData = [
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
    require('@assets/images/offerCard2.png'),
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
  ];

  // Define different content for each tab
  const tabContent = {
    Interior: {
      price: '₹15 - ₹20 per sq. ft',
      description: 'Transform your interior spaces with premium paints',
      details: ['Wall preparation', 'Primer application', '2 coats of paint'],
    },
    Exterior: {
      price: '₹18 - ₹25 per sq. ft',
      description: 'Weather-resistant exterior painting solutions',
      details: ['Surface cleaning', 'Crack filling', 'Waterproof coating'],
    },
    Both: {
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
        title="Electrical Works"
        rating="4.02"
        bookings="142K"
        offers={<OffersCarousal adData={offerData} />}
        subtitle={['Wiring']}
        tabs={['Interior', 'Exterior', 'Both']}
        tabContent={tabContent}
      />
    </View>
  );
};

export default ElectricalDetails;
