import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';

const ProfileStyles = StyleSheet.create({
  titleProfile: {
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 22,
    color: COLORS.black,
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 6,
  },
  containerCardCar: {
    backgroundColor: COLORS.white,
    height: 99,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonCardCar: {
    backgroundColor: COLORS.graylight3,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  textButtonCar: {
    fontFamily: FONTS.MANROPE_SEMIBOLD,
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.5,
  },
  containerCardApplications: {
    backgroundColor: COLORS.white,
    height: 86,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  containerCardStatistics: {
    backgroundColor: COLORS.white,
    width: 162,
    height: 82,
    borderRadius: 20,
    paddingLeft: 14,
    paddingTop: 8,
  },
  valueCardStatistics: {
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 22,
    color: COLORS.black,
  },
  subtitleCardStatistics: {
    fontFamily: FONTS.MANROPE_MEDIUM,
    fontSize: 12,
    color: COLORS.black,
    width: 62,
    opacity: 0.4,
  },
  imgCardStatistics: {
    width: 18,
    height: 20,
    marginRight: 17,
    marginTop: 4,
  },
  optionCardSettings: {
    fontFamily: FONTS.MANROPE_MEDIUM,
    fontSize: 14,
    color: COLORS.black,
  },
  dividerCardSettings: {
    height: 1,
    backgroundColor: COLORS.black,
    opacity: 0.5,
    marginVertical: 14,
  },
  containerCardTopCommunity: {
    backgroundColor: COLORS.white,
    height: 87,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  titleCardTopCommunity: {
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 18,
    color: COLORS.black,
    width: 192,
    height: 48,
  },
  containerCardBottomCommunity: {
    backgroundColor: COLORS.greenlight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  buttonCardBottomCommunity: {
    backgroundColor: COLORS.white,
    width: 126,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    fontFamily: FONTS.MANROPE_MEDIUM,
    fontSize: 12,
    color: COLORS.graylight4,
    width: 132,
    marginTop: 12,
    marginBottom: 40,
  },
});

export default ProfileStyles;
