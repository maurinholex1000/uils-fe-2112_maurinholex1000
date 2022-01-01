import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {createUser} from '../../store/user/actions';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadToken = async () => {
      const tokenstorage = await AsyncStorage.getItem('userToken');
      console.log('tokenstorage stack', tokenstorage);
      //   setToken(tokenstorage)
      //   console.log('tokenseteado',token)
      if (tokenstorage) {
        const userToken = jwt_decode(tokenstorage);
        console.log(userToken);
        dispatch(createUser(userToken));
        setTimeout(() => {
          navigation.dispatch(CommonActions.navigate({name: 'MainTab'}));
        }, 1000);
      } else {
        setTimeout(() => {
          navigation.dispatch(CommonActions.navigate({name: 'Onboarding'}));
        }, 1000);
      }
    };
    loadToken();
  });

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
    </ImageBackground>
  );
};
export default SplashScreen;
