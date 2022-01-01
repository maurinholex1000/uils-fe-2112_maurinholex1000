import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {useSelector} from 'react-redux';
import HomeStyles from '../../styles/home.style';

const HomeScreen = () => {
  const userRedux = useSelector(state => state.user.data);

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View style={{marginHorizontal: 20}}>
        <Text style={HomeStyles.titleHome}>
          Hola {userRedux.name} {userRedux.surname}! 👋{' '}
        </Text>
        <View style={HomeStyles.containerCardMoney}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                fontSize: 14,
                color: COLORS.white,
              }}>
              Dinero Disponible
            </Text>
            <Text
              style={{
                fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
                fontSize: 36,
                color: COLORS.white,
              }}>
              $13.859,40
            </Text>
            <TouchableOpacity style={HomeStyles.buttonCardMoney}>
              <Image
                source={require('../../assets/images/dinero.png')}
                style={{
                  width: 20,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  paddingVertical: 13.5,
                  fontFamily: FONTS.MANROPE_SEMIBOLD,
                  fontSize: 14,
                  color: COLORS.black,
                }}>
                Retirar mi dinero
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={HomeStyles.button2CardMoney}>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONTS.MANROPE_MEDIUM,
                fontSize: 12,
              }}>
              Mi CVU
            </Text>
          </TouchableOpacity>
        </View>

        <View style={HomeStyles.containerCardMoney2}>
          <View style={{margin: 16}}>
            <Text style={HomeStyles.subtitleCard}>Dinero a liquidar</Text>
            <Text
              style={{
                fontFamily: FONTS.RED_HAT_DISPLAY_MEDIUM,
                fontSize: 24,
                color: COLORS.black,
              }}>
              $7.821
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={require('../../assets/images/cabify.png')}
                style={{
                  width: 38,
                  height: 34,
                  marginRight: 8,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={HomeStyles.subtitleCard}>Proximo Cobro</Text>
                <Text
                  style={{
                    fontFamily: FONTS.MANROPE_MEDIUM,
                    fontSize: 14,
                    color: COLORS.black,
                  }}>
                  En dos dias
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={HomeStyles.containerMovements}>
          <Text
            style={{
              fontFamily: FONTS.MANROPE_SEMIBOLD,
              fontSize: 14,
              color: COLORS.black,
            }}>
            Ver Movimientos
          </Text>
          <TouchableOpacity style={HomeStyles.buttonRightArrow}>
            <Text style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={HomeStyles.subtitleHome}>PRODUCTOS</Text>

        <View style={HomeStyles.containerCardAdvancement}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View>
              <TouchableOpacity style={HomeStyles.buttonCardAdvancement}>
                <Text
                  style={{
                    fontFamily: FONTS.MANROPE_SEMIBOLD,
                    fontSize: 10,
                    color: COLORS.yellow,
                  }}>
                  ADELANTO INMEDIATO
                </Text>
              </TouchableOpacity>
              <Text style={HomeStyles.titleCardAdvancement}>
                Cobrá ya hasta $3.000
              </Text>
            </View>
            <Image
              source={require('../../assets/images/ahorro.png')}
              style={{
                width: 127,
                height: 123.06,
              }}
            />
          </View>
        </View>
        <View style={HomeStyles.cardBottomAdvancement}>
          <Text style={[HomeStyles.textCard, {width: 205}]}>
            Solicitá un adelanto, tené el dinero en el acto, y devolvelo la
            próxima semana.
          </Text>
          <TouchableOpacity style={HomeStyles.buttonCardBottom}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                fontSize: 10,
                color: COLORS.yellow,
              }}>
              SOLICITAR
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={HomeStyles.subtitleHome}>DISPONIBLE PARA VOS</Text>

        <View style={HomeStyles.cardTopSubscribe}>
          <Image
            source={require('../../assets/images/discount.png')}
            style={{marginRight: 7.25}}></Image>
          <Text style={HomeStyles.textCard}>
            ¡Disfruta el primer mes 100% bonificado!
          </Text>
        </View>
        <ImageBackground
          source={require('../../assets/images/disfruta_adelantos.png')}
          style={{
            height: 191,
            justifyContent: 'flex-end',
          }}>
          <Text style={HomeStyles.titleCardSubscribe}>
            Adelantos inmediatos, sin interes por solo $200
          </Text>
        </ImageBackground>
        <View style={HomeStyles.cardBottomSubscribe}>
          <Text style={[HomeStyles.textCard, {width: 185}]}>
            Suscribite a nuestro plan de adelantos por $200 semanales
          </Text>
          <TouchableOpacity style={HomeStyles.buttonCardBottom}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                fontSize: 10,
                color: COLORS.black,
              }}>
              SUSCRIBIRME
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={HomeStyles.subtitleHome}>COMUNIDAD</Text>

        <View style={HomeStyles.containerCommunity}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={{
                width: 60,
                height: 35.27,
              }}></Image>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: FONTS.MANROPE_SEMIBOLD,
                  fontSize: 14,
                  color: COLORS.black,
                }}>
                Sumate a la Comunidad 🚘
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.MANROPE_MEDIUM,
                  fontSize: 11,
                  color: COLORS.graylight2,
                }}>
                Conoce la comunidad Uils en Whatsapp
              </Text>
            </View>
          </View>
          <TouchableOpacity style={HomeStyles.buttonRightArrow}>
            <Text style={{fontFamily: FONTS.MANROPE_SEMIBOLD, fontSize: 12}}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
