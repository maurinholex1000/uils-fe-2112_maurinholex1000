import React from 'react';
import {Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/Home/Home';
import ProfileScreen from '../../screens/Profile/Profile';
import WinningsScreen from '../../screens/Winnings/Winnings';
import CreditsScreen from '../../screens/Credits/Credits';
import {FONTS, COLORS} from '../../constants/theme';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.pink}
      inactiveColor={COLORS.black}
      barStyle={{
        backgroundColor: COLORS.white,
        height: 78,
        paddingHorizontal: 39,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/inicio2.png')
                  : require('../../assets/images/inicio.png')
              }
              style={{
                width: 21,
                height: 22.17,
                tintColor: focused ? COLORS.pink : COLORS.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Ganancias"
        component={WinningsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/ganancias.png')}
              style={{
                width: 21,
                height: 22.17,
                tintColor: focused ? COLORS.pink : COLORS.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Créditos"
        component={CreditsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/creditos.png')}
              style={{
                width: 21,
                height: 22.17,
                tintColor: focused ? COLORS.pink : COLORS.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/perfil2.png')
                  : require('../../assets/images/perfil.png')
              }
              style={{
                width: 21,
                height: 22.17,
                tintColor: focused ? COLORS.pink : COLORS.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
