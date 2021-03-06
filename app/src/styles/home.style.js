import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';

const HomeStyles = StyleSheet.create({
  titleHome: {
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 22,
    color: COLORS.black,
    textAlign: 'left',
    marginTop: 27,
    marginBottom: 20,
  },
  containerCardMoney: {
    backgroundColor: COLORS.pink,
    height: 175,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCardMoney: {
    marginTop: 29,
    backgroundColor: COLORS.white,
    width: 173,
    flexDirection: 'row',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button2CardMoney: {
    backgroundColor: COLORS.pinklight,
    height: 30,
    width: 69,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCardMoney2: {
    backgroundColor: COLORS.white,
    height: 138,
    borderRadius: 20,
    marginTop: 30,
  },
  subtitleCard: {
    fontFamily: FONTS.MANROPE_MEDIUM,
    fontSize: 14,
    color: COLORS.black,
    opacity: 0.3,
  },
  containerMovements: {
    backgroundColor: COLORS.white,
    height: 56,
    borderRadius: 20,
    marginTop: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRightArrow: {
    borderWidth: 1,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  subtitleHome: {
    fontFamily: FONTS.MANROPE_SEMIBOLD,
    fontSize: 14,
    color: COLORS.black,
    opacity: 0.4,
    marginTop: 22,
    marginBottom: 16,
    marginLeft: 10,
  },
  containerCardAdvancement: {
    backgroundColor: COLORS.white,
    height: 138.06,
    paddingTop: 12,
    paddingLeft: 16,
    flexDirection: 'column',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  buttonCardAdvancement: {
    marginBottom: 10,
    backgroundColor: COLORS.yellowlight,
    width: 149,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCardAdvancement: {
    width: 158,
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 20,
    color: COLORS.black,
  },
  cardBottomAdvancement: {
    backgroundColor: COLORS.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  textCard: {
    fontFamily: FONTS.MANROPE_MEDIUM,
    color: COLORS.white,
    fontSize: 11,
  },
  buttonCardBottom: {
    backgroundColor: COLORS.white,
    width: 82,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTopSubscribe: {
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    paddingHorizontal: 17.25,
    paddingVertical: 8.25,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  titleCardSubscribe: {
    fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
    fontSize: 18,
    color: COLORS.white,
    width: 210,
    height: 48,
    marginLeft: 16,
  },
  cardBottomSubscribe: {
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  containerCommunity: {
    backgroundColor: COLORS.white,
    height: 56,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginBottom: 37,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
});

export default HomeStyles;
