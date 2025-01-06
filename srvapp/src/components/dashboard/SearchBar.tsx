import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fonts} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import RollingBar from 'react-native-rolling-bar';
import CustomText from '@components/ui/CustomText';

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContent}>
        <MaterialCommunityIcons
          name="magnify"
          color={Colors.text}
          size={RFValue(22)}
        />

        <View style={styles.textContainer}>
          <TextInput
            style={[styles.textInput, {fontFamily: Fonts.Medium}]}
            value={searchText}
            onChangeText={setSearchText}
            placeholder=""
          />
          {!searchText && (
            <View style={styles.rollingBarContainer}>
              <RollingBar
                interval={3000}
                defaultStyle={false}
                customStyle={styles.rollingTextContainer}>
                <CustomText
                  variant="h5"
                  fontFamily={Fonts.Medium}
                  style={styles.searchText}>
                  Search "Electrician"
                </CustomText>
                <CustomText
                  variant="h5"
                  fontFamily={Fonts.Medium}
                  style={styles.searchText}>
                  Search "Plumber"
                </CustomText>
                <CustomText
                  variant="h5"
                  fontFamily={Fonts.Medium}
                  style={styles.searchText}>
                  Search "Painter"
                </CustomText>
              </RollingBar>
            </View>
          )}
        </View>

        <View style={styles.divider} />
        <MaterialCommunityIcons
          name="microphone"
          color={Colors.text}
          size={RFValue(22)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    overflow: 'hidden',
    paddingHorizontal: 16,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  textContainer: {
    flex: 1,
    position: 'relative',
    height: 55,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 12,
    fontSize: RFValue(16),
    color: Colors.text,
    textAlignVertical: 'center',
  },
  rollingBarContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  rollingTextContainer: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'flex-start', // This ensures text starts from the left
    paddingLeft: 12,
  },
  searchText: {
    opacity: 0.2,
    textAlignVertical: 'center',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 12,
  },
});

export default SearchBar;
