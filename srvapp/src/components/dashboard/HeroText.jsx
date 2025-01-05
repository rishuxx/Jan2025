import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';

const HeroText = () => {
  return (
    <View style={styles.messageSection}>
      <View style={styles.messageRow}>
        <CustomText
          fontFamily={Fonts.CoolR}
          numberOfLines={4}
          variant="h1"
          style={styles.messageText}>
          Sit back and relax, we'll take care of the rest!
        </CustomText>
        {/* 
          <TouchableOpacity style={styles.noticeBtn} onPress={showNotice}>
            <CustomText
              fontFamily={Fonts.SemiBold}
              fontSize={RFValue(6)}
              style={styles.noticeBtnText}>
              ⛈️ Rain
            </CustomText>
          </TouchableOpacity> */}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  messageSection: {
    width: '100%',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'flex-start', // Ensures left alignment
  },
  messageText: {
    color: '#fff',
  },
});


export default HeroText