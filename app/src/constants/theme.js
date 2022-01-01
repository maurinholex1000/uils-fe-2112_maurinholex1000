import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


export const COLORS = {
    gray:'#F4F4F4',
    graylight:'#BCBCBC',
    graylight2: '#585858',
    graylight3:'#F2F2F2',
    graylight4: '#B4B4B4',
    primary : "#FF5678",
    pink: '#D3375C',
    pinklight:'#DF869B',
    black: "#000000",
    white: "#FFFFFF",
    yellow: '#EAB42A',
    yellowlight:'#FFF1CC',
    green:'#4A865B',
    greenlight:'#4CAB56',
    background_white: '#FFFFFF',
    background_gray: "#E5E5E5"
}

export const SIZES = {
    base: 10,
    width,
    height
}

export const FONTS = {
    MANROPE_MEDIUM:'Manrope-Medium',
    MANROPE_REGULAR:'Manrope-Regular',
    MANROPE_SEMIBOLD:'Manrope-SemiBold',
    RED_HAT_DISPLAY_MEDIUM:'RedHatDisplay-Medium'
  }


const theme = { COLORS, SIZES, FONTS };

export default theme;