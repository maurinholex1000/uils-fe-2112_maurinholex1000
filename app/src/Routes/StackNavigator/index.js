import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import LoginRegisterScreen from '../../screens/LoginRegister/LoginRegister';
import RegisterScreen from '../../screens/Register/Register';
import LoginScreen from '../../screens/Login/Login';
import OnboardingScreen from '../../screens/Onboarding/Onboarding';
import SplashScreen from '../../screens/Splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
import MainTabScreen from '../MainTab/MainTab';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  // const [isFirstLaunch,setIsFirstLaunch] = React.useState(null)
  // const userRedux = useSelector(state => state.user.data)
  // const [token,setToken]=useState('')

  // useEffect(()=>{
  //     const loadToken = async () => {
  //     // AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     //     if(value == null){
  //     //         AsyncStorage.setItem('alreadyLaunched', 'true');
  //     //         setIsFirstLaunch(true);
  //     //     } else {
  //     //         setIsFirstLaunch(false);
  //     //     }
  //     // });

  //       const tokenstorage= await AsyncStorage.getItem('userToken')
  //       console.log('tokenstorage stack',tokenstorage)
  //       setToken(tokenstorage)
  //       console.log('tokenseteado',token)
  //       const userToken= jwt_decode(tokenstorage);
  //       console.log(userToken)

  // }
  // loadToken()
  // });

  // return (
  // <View style={{
  //     flex:1,
  //     justifyContent: 'center'
  // }}>
  //     <Text style={{
  //         fontSize: 45,
  //         textAlign: 'center'
  //     }}>Hola Mundo</Text>
  // </View>

  // <Onboarding/>
  // )

  // if( isFirstLaunch === null){
  //     return null;
  // } else if (isFirstLaunch===true){
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Splash'}>
        {/* {!token ? (
                <> */}
        <AppStack.Screen name="Splash" component={SplashScreen} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="LoginRegister" component={LoginRegisterScreen} />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        {/* </>
               ) : ( */}
        <AppStack.Screen name="MainTab" component={MainTabScreen} />
        {/* )} */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
  // }else{
  //     <LoginRegisterScreen/>
  // }
};

export default AppStackNavigator;
