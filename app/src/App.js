import React, { useEffect } from 'react';
import {Text,View} from 'react-native';
import OnboardingScreen from './screens/Onboarding/Onboarding';
import LoginRegisterScreen from './screens/LoginRegister/LoginRegister';
import RegisterScreen from './screens/Register/Register';
import LoginScreen from './screens/Login/Login';
import Onboarding from './screens/Onboarding/Onboarding'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppStack = createStackNavigator();

const App = () =>{
    const [isFirstLaunch,setIsFirstLaunch] = React.useState(null)

    useEffect(()=>{
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null){
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    },[]);

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
                    headerShown: false
                  }}
              >
                <AppStack.Screen name='Onboarding' component={OnboardingScreen}/>
                <AppStack.Screen name='LoginRegister' component={LoginRegisterScreen}/>
                <AppStack.Screen name='Register' component={RegisterScreen}/>
                <AppStack.Screen name='Login' component={LoginScreen}/>
              </AppStack.Navigator>
            </NavigationContainer>
        );
    // }else{
    //     <LoginRegisterScreen/>
    // }

}

export default App;