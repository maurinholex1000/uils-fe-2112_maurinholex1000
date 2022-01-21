import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import HomeStyles from '../../styles/home.style';
import ProfileStyles from '../../styles/profile.style';

const ProfileScreen = () => {
  const userRedux = useSelector(state => state.user.data);
  const navigation = useNavigation();

  const signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    console.log('token eliminado');
    navigation.dispatch(CommonActions.navigate({name: 'LoginRegister'}));
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View style={{marginHorizontal: 20}}>
        <Text style={ProfileStyles.titleProfile}>
          {userRedux.name} {userRedux.surname}
        </Text>
        <Text style={HomeStyles.subtitleCard}>Conductor</Text>

        <View style={ProfileStyles.containerCardCar}>
          <View style={{margin: 16}}>
            <Text
              style={{
                fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
                fontSize: 20,
                color: COLORS.black,
              }}>
              Chevrolet Onix 1.4 LT
            </Text>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <TouchableOpacity
                  style={[
                    ProfileStyles.buttonCardCar,
                    {
                      width: 92,

                      marginRight: 8,
                    },
                  ]}>
                  <Text style={ProfileStyles.textButtonCar}>AD 737 FG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    ProfileStyles.buttonCardCar,
                    {
                      width: 58,
                    },
                  ]}>
                  <Text style={ProfileStyles.textButtonCar}>2017</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={HomeStyles.subtitleHome}>TUS APLICACIONES</Text>

        <View style={ProfileStyles.containerCardApplications}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/uber.png')}
              style={{
                width: 54,
                height: 54,
                marginRight: 13.71,
              }}
            />
            <Image
              source={require('../../assets/images/cabify2.png')}
              style={{
                width: 54,
                height: 54,
                marginRight: 13.71,
              }}
            />
            <Image
              source={require('../../assets/images/add.png')}
              style={{
                width: 54,
                height: 54,
              }}
            />
          </View>
        </View>

        <Text style={HomeStyles.subtitleHome}>TU ESTADISTICA SEMANAL</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={ProfileStyles.containerCardStatistics}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={ProfileStyles.valueCardStatistics}>150</Text>
                <Text style={ProfileStyles.subtitleCardStatistics}>
                  Horas trabajadas
                </Text>
              </View>
              <Image
                source={require('../../assets/images/horas.png')}
                style={ProfileStyles.imgCardStatistics}
              />
            </View>
          </View>

          <View style={ProfileStyles.containerCardStatistics}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={ProfileStyles.valueCardStatistics}>42</Text>
                <Text style={ProfileStyles.subtitleCardStatistics}>
                  Viajes Completos
                </Text>
              </View>
              <Image
                source={require('../../assets/images/viajes.png')}
                style={ProfileStyles.imgCardStatistics}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={[
              ProfileStyles.containerCardStatistics,
              {
                marginTop: 20,
              },
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={ProfileStyles.valueCardStatistics}>650</Text>
                <Text style={ProfileStyles.subtitleCardStatistics}>
                  Kilometros recorridos
                </Text>
              </View>
              <Image
                source={require('../../assets/images/recorrido.png')}
                style={ProfileStyles.imgCardStatistics}
              />
            </View>
          </View>

          <View
            style={[
              ProfileStyles.containerCardStatistics,
              {
                marginTop: 20,
              },
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={ProfileStyles.valueCardStatistics}>$1.240</Text>
                <Text style={ProfileStyles.subtitleCardStatistics}>
                  Ganancia promedio
                </Text>
              </View>
              <Image
                source={require('../../assets/images/ganancias2.png')}
                style={ProfileStyles.imgCardStatistics}
              />
            </View>
          </View>
        </View>

        <Text style={HomeStyles.subtitleHome}>AJUSTES</Text>

        <View
          style={{
            backgroundColor: COLORS.white,
            height: 346,
            borderRadius: 20,
          }}>
          <View style={{margin: 16, flexDirection: 'column'}}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={ProfileStyles.optionCardSettings}>Mis datos</Text>
              <TouchableOpacity style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={ProfileStyles.dividerCardSettings}></View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={ProfileStyles.optionCardSettings}>
                Suscripciones
              </Text>
              <TouchableOpacity style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ProfileStyles.dividerCardSettings}></View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={ProfileStyles.optionCardSettings}>
                Preguntas frecuentes
              </Text>
              <TouchableOpacity style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ProfileStyles.dividerCardSettings}></View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={ProfileStyles.optionCardSettings}>
                Cambiar contraseña
              </Text>
              <TouchableOpacity style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ProfileStyles.dividerCardSettings}></View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={ProfileStyles.optionCardSettings}>
                Terminos y Condiciones
              </Text>
              <TouchableOpacity style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ProfileStyles.dividerCardSettings}></View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: FONTS.MANROPE_MEDIUM,
                  fontSize: 14,
                  color: COLORS.pink,
                }}>
                Cerrar Sesion
              </Text>
              <TouchableOpacity
                onPress={signOut}
                style={HomeStyles.buttonRightArrow}>
                <Text
                  style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={HomeStyles.subtitleHome}>COMUNIDAD</Text>

        <View style={ProfileStyles.containerCardTopCommunity}>
          <View style={{flexDirection: 'column'}}>
            <Text style={ProfileStyles.titleCardTopCommunity}>
              Sumate a la comunidad Uils en Whatsapp
            </Text>
          </View>

          <Image
            source={require('../../assets/images/whatsapp2.png')}
            style={{
              width: 70,
              height: 70,
            }}></Image>
        </View>
        <View style={ProfileStyles.containerCardBottomCommunity}>
          <Text
            style={[
              HomeStyles.textCard,
              {
                width: 185,
              },
            ]}>
            Conoce a otros conductores y comparti tu experiencia.
          </Text>
          <TouchableOpacity style={ProfileStyles.buttonCardBottomCommunity}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                fontSize: 10,
                color: COLORS.greenlight,
              }}>
              QUIERO SUMARME
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={ProfileStyles.textFooter}>
          Uils© 2021.            Version de la App V.0.01
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
