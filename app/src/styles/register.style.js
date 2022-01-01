import { StyleSheet } from "react-native";
import { COLORS,FONTS } from "../constants/theme";

const RegisterStyles = StyleSheet.create({

    titleTopSection:{
      fontSize: 16,
      fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
      color: COLORS.black,
      opacity: 0.3,
    },
  
    textBottomSection:{
      fontSize: 13,
      fontFamily: FONTS.MANROPE_MEDIUM,
      width: 279,
      height: 36,
      marginLeft: 15
    },
  
    containerBottomSection:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom:20,
      marginVertical:22
    },
  
    buttonBottomSection:{
      height: 54,
      borderRadius: 16,
      backgroundColor: COLORS.pink,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
      
    tittleFlatList:{
      fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
      color: COLORS.black,
      fontSize: 24,
      textAlign: 'left',
    },
  
    inputFlatList:{
      height: 58,
      borderColor: COLORS.graylight,
      fontFamily: FONTS.MANROPE_MEDIUM,
      borderWidth: 1,
      fontSize: 16,
      paddingLeft: 18,
      paddingTop: 20,
    },
  
    otpContainer: {
      marginHorizontal: 20,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    otpBox: {
      width: 50,
      height: 58,
      borderRadius: 16,
      borderWidth: 0.5,
    },
    otpText: {
      fontSize: 22,
      fontFamily: FONTS.MANROPE_REGULAR,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 14,
    },
  });

  export default RegisterStyles;