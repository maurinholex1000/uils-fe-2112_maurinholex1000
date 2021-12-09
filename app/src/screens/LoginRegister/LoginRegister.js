import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {CommonActions,useNavigation} from '@react-navigation/native';

const LoginRegisterScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: 'Register' })
    );
  }
    
  const goToLogin = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: 'Login' })
    );
  }

  return(
    
    <ImageBackground
    source={require('../../assets/images/menu_principal.png')}
    resizeMode="cover" 
    style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <ImageBackground
       source={require('../../assets/images/logo_uils.png')}
       style={{width: 190.44, height: 76.16 ,marginBottom:180,marginTop:220}}>
      </ImageBackground> 
      <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal:SIZES.base *2,
                    paddingVertical: SIZES.base *2
                    
                }}>
                          <TouchableOpacity 
                            onPress={goToLogin}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:161,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.gray,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight:13
                            }}
                            activeOpacity={0.8}
                            >
                             <Text style={{
                                    color: COLORS.black,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Iniciar Sesion</Text>         
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={goToRegister}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:161,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.pink,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            activeOpacity={0.8}
                            >
                             <Text style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Registrate</Text>
                                
                            </TouchableOpacity>

                          
                    </View>
                    <Text style={{
                            fontSize: 13,
                            color: COLORS.white,
                            marginHorizontal:28
                            
                        }}>Al continuar aceptás los Términos y Condiciones y las Políticas de Privacidad.</Text>
                    </SafeAreaView>
      
    </ImageBackground>
  
  )
}

export default LoginRegisterScreen
