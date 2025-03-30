// FanDetails.tsx
import React from 'react';
import {View} from 'react-native';
import ServiceDetails from '../ServicesSection/ServicesReusableDetails';
import OffersCarousal from '../ServicesSection/OffersCarousalReusable';

const FanDetails = () => {
  const offerData = [
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
    require('@assets/images/offerCard2.png'),
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
  ];

  // Define different content for each tab
  const tabContent = {
    NewInstallation: {
      price: '₹15 - ₹20 per sq. ft',
      description: 'Transform your interior spaces with premium paints',
      details: ['Wall preparation', 'Primer application', '2 coats of paint'],
    },
    Replacement: {
      price: '₹18 - ₹25 per sq. ft',
      description: 'Weather-resistant exterior painting solutions',
      details: ['Surface cleaning', 'Crack filling', 'Waterproof coating'],
    },
  };

  return (
    <View>
      <ServiceDetails
        title="Fan Services & Repairs"
        rating="4.82"
        bookings="32K"
        offers={<OffersCarousal adData={offerData} />}
        subtitle={['Capacitor']}
        tabs={['NewInstallation', 'Replacement']}
        tabContent={tabContent}
      />
    </View>
  );
};

export default FanDetails;
