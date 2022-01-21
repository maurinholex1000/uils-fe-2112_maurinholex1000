import React from 'react';
import LoginRegisterScreen from '../../screens/LoginRegister/LoginRegister';
import RegisterScreen from '../../screens/Register/Register';
import LoginScreen from '../../screens/Login/Login';
import OnboardingScreen from '../../screens/Onboarding/Onboarding';
import SplashScreen from '../../screens/Splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabScreen from '../MainTab/MainTab';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Splash'}>
        <AppStack.Screen name="Splash" component={SplashScreen} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="LoginRegister" component={LoginRegisterScreen} />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="MainTab" component={MainTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
