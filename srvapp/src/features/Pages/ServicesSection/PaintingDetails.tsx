// PaintingDetails.tsx
import React from 'react';
import {View} from 'react-native';
import ServiceDetails from './ServicesReusableDetails';
import OffersCarousal from './OffersCarousalReusable';

// Import the images at the top level
const interiorImage = require('@assets/images/InteriorPaint.jpg');
const exteriorImage = require('@assets/images/ExteriorPaint.jpg');
const bothImage = require('@assets/images/BothPaint.jpg');

const PaintingDetails = () => {
  const offerData = [
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
    require('@assets/images/offerCard2.png'),
    require('@assets/images/offerCard1.png'),
    require('@assets/images/offerCard3.png'),
  ];

  // Use the imported image variables in your tabContent
  const tabContent = {
    Interior: {
      price: '₹15 - ₹20 / sq.ft',
      description: 'Transform your indoor spaces with premium paints',
      details: ['Wall preparation', 'Primer application', '2 coats of paint'],
      image: interiorImage, // Use the imported image
    },
    Exterior: {
      price: '₹18 - ₹25 / sq. ft',
      description: 'Weather-resistant exterior painting solutions',
      details: ['Surface cleaning', 'Crack filling', 'Waterproof coating'],
      image: exteriorImage, // Use the imported image
    },
    Both: {
      price: '₹15 - ₹25 / sq. ft',
      description: 'Complete painting solution for your home',
      details: [
        'Interior & exterior surfaces',
        'Premium quality paints',
        'Professional finish',
      ],
      image: bothImage, // Use the imported image
    },
  };

  return (
    <View>
      <ServiceDetails
        title="Painting & Waterproofing"
        rating="4.82"
        bookings="32K"
        offers={<OffersCarousal adData={offerData} />}
        subtitle={['House Painting']}
        tabs={['Interior', 'Exterior', 'Both']}
        tabContent={tabContent}
        onViewDetails={() => console.log('View Details clicked')}
        onAdd={() => console.log('Add service clicked')}
      />
    </View>
  );
};

export default PaintingDetails;
