import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import LogoImage from '@assets/images/TopLogo.png';
import {useAuthStore} from '@state/authStore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeroText from './HeroText';

const Header: FC<{showNotice: () => void}> = ({showNotice}) => {
  const {setUser, user} = useAuthStore();

  return (
    <View style={styles.mainContainer}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image
          source={LogoImage}
          style={styles.logoStyle}
          resizeMode="contain"
        />
      </View>

      {/* Address Section */}
      <View style={styles.addressSection}>
        <View style={styles.addressRow}>
          <CustomText
            variant="h6"
            numberOfLines={1}
            fontFamily={Fonts.CoolR}
            style={styles.addressText}>
            {user?.address || 'Knowwhere, Somewhre'}
          </CustomText>
          <Icon
            name="menu-down"
            color="#fff"
            size={RFValue(20)}
            style={styles.addressIcon}
          />
        </View>
      </View>

      {/* Message Section */}
   <HeroText/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'android' ? 40 : 5,
    paddingHorizontal: 15,
  },
  // Logo Section
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoStyle: {
    width: 80,
    height: 30,
  },
  // Address Section
  addressSection: {
    marginBottom: 15,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to align left
  },
  addressText: {
    color: '#fff',
    opacity: 0.9,
    textAlign: 'left', // Changed to align left
  },
  addressIcon: {
    bottom: -1,
    marginLeft: 5,
  },
  // Message Section
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
  noticeBtn: {
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  noticeBtnText: {
    color: '#fff',
  },
});

export default Header;



