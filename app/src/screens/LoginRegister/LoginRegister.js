import React,{useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  BackHandler
} from 'react-native';
import OnboardingStyles from '../../styles/onboarding.style';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {CommonActions, useNavigation} from '@react-navigation/native';


const LoginRegisterScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
  
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => BackHandler.exitApp()
      );
    
      return () => backHandler.remove();
    }, []);

  const goToRegister = () => {
    navigation.dispatch(CommonActions.navigate({name: 'Register'}));
  };

  const goToLogin = () => {
    navigation.dispatch(CommonActions.navigate({name: 'Login'}));
  };

  return (
    <ImageBackground
      source={require('../../assets/images/menu_principal.png')}
      resizeMode="cover"
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/logo_uils.png')}
        style={{
          width: 190.44,
          height: 76.16,
          marginBottom: 180,
          marginTop: 220,
        }}></ImageBackground>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            onPress={goToLogin}
            style={[
              OnboardingStyles.buttonBottomSection,
              {backgroundColor: COLORS.gray, width: 161},
            ]}
            activeOpacity={0.8}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 16,
                fontFamily: FONTS.MANROPE_SEMIBOLD,
              }}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToRegister}
            style={[
              OnboardingStyles.buttonBottomSection,
              {
                width: 161,
                backgroundColor: COLORS.pink,
              },
            ]}
            activeOpacity={0.8}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontFamily: FONTS.MANROPE_SEMIBOLD,
              }}>
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: COLORS.white,
            marginHorizontal: 28,
            fontFamily: FONTS.MANROPE_MEDIUM,
            textAlign: 'center',
          }}>
          Al continuar aceptás los Términos y Condiciones y las Políticas de
          Privacidad.
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginRegisterScreen;
