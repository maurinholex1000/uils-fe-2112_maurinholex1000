import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants/theme";

const OnboardingStyles = StyleSheet.create({
    containerTopSection:{
      marginTop: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    
    buttonTopSection:{
      borderWidth: 1,
      borderRadius: 14,
      borderColor: COLORS.graylight,
      width: 48,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    containerBottomSection:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 55,
    },
  
    buttonBottomSection:{
      height: 54,
      borderRadius: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    containerFlatList:{
      width: SIZES.width,
      flex: 1,
      paddingHorizontal: 22,
    },
  
    titleFlatList:{
      fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
      color: COLORS.black,
      fontSize: 28,
      textAlign: 'left',
      lineHeight: 32,
      marginBottom: 14,
    },
  
    descriptionFlatList:{
      color: COLORS.black,
      fontFamily: FONTS.MANROPE_REGULAR,
      fontSize: 16,
      textAlign: 'left',
      lineHeight: 23,
      marginBottom:42,
    }
  
  
    
  
  })

  export default OnboardingStyles;