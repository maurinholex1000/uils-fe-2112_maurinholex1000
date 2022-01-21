import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import RegisterStyles from '../../styles/register.style';
import OnboardingStyles from '../../styles/onboarding.style';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import data from '../../data/Register';
import {CommonActions, useNavigation} from '@react-navigation/native';
import AuthenticationService from '../../services/AuthenticationService';
import {useDispatch} from 'react-redux';
import {createUser} from '../../store/user/actions';
import {useSelector} from 'react-redux';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userRedux = useSelector(state => state.user.data);
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const [name, setName] = useState('');
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [surname, setSurname] = useState('');
  const [isFocusedSurname, setIsFocusedSurname] = useState(false);
  const [email, setEmail] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [password, setPassword] = useState(['', '', '', '', '', '']);
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const register = () => {
    console.log(password);
    let user = {
      name,
      surname,
      email,
      password: password.join(''),
    };
    console.log('USER', user);
    console.log('llega hasta antes del await', email);

    AuthenticationService.checkUserExist('email', email).then(response => {
      console.log('llega hasta antes del check', response.status);
      if (!response.status) {
        console.log('el email ya existe');
        Alert.alert('ERROR', 'El Usuario ya existe', [{text: 'OK'}]);
      } else {
        AuthenticationService.register(user).then(response => {
          console.log(response.data);
          console.log('HOLA MAURO');
          if (response.data) {
            console.log('pudiste registrarte y loguearte', response.data);
            dispatch(createUser(response.data));
            console.log('entraste al loguin', userRedux);
            navigation.dispatch(CommonActions.navigate({name: 'MainTab'}));
          }
        });
      }
    });
  };

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const isAlphanumeric = value => {
    console.log('entra al control');
    if (/[^a-zA-Z0-9]/.test(value)) {
      return false;
    } else {
      return true;
    }
  };

  const isEmail = value => {
    console.log('entra al control');
    if (!/\S+@\S+\.\S+/.test(value)) {
      return false;
    } else {
      return true;
    }
  };

  const handleNext = () => {
    if (
      currentPage == 2 &&
      password[0] &&
      password[1] &&
      password[2] &&
      password[3] &&
      password[4] &&
      password[5]
    ) {
      register();
    }
    if (currentPage == 1 && email) {
      if (isEmail(email)) {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: currentPage + 1,
        });
      } else {
        Alert.alert('ERROR', 'Ingrese un Email válido', [{text: 'OK'}]);
      }
    }
    if (currentPage == 0 && name && surname) {
      console.log('entra al control de nombre y apellido');
      if (isAlphanumeric(name)) {
        if (isAlphanumeric(surname)) {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1,
          });
        } else {
          Alert.alert('ERROR', 'Apellido es un campo alfanumérico', [
            {text: 'OK'},
          ]);
        }
      } else {
        Alert.alert('ERROR', 'Nombre es un campo alfanumérico', [{text: 'OK'}]);
      }
    }
  };

  const handleBack = () => {
    if (currentPage == 0) {
      navigation.dispatch(CommonActions.navigate({name: 'LoginRegister'}));
    } else {
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentPage - 1,
      });
    }
  };

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={[OnboardingStyles.containerTopSection, {marginBottom: 20}]}>
          <TouchableOpacity
            onPress={handleBack}
            style={OnboardingStyles.buttonTopSection}>
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <Image
              source={require('../../assets/images/arrowleft.png')}
              style={{width: 6.59, height: 11.17}}
            />
          </TouchableOpacity>

          <Text style={RegisterStyles.titleTopSection}>Registro</Text>
          <TouchableOpacity style={OnboardingStyles.buttonTopSection}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                fontSize: 16,
                color: COLORS.black,
              }}>
              {currentPage + 1}/3
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        {currentPage != 0 ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
              source={require('../../assets/images/alerta_validacion.png')}
              style={{
                width: 18,
                height: 21.81,
                marginLeft: 33,
              }}></ImageBackground>

            <Text style={RegisterStyles.textBottomSection}>
              Luego de este paso, enviaremos un mail para validar esta dirección
              de correo electrónico.
            </Text>
          </View>
        ) : null}
        <View
          style={[
            RegisterStyles.containerBottomSection,
            {
              opacity:
                currentPage == 0
                  ? name && surname
                    ? 1
                    : 0.2
                  : currentPage == 1
                  ? email
                    ? 1
                    : 0.2
                  : password[0] &&
                    password[1] &&
                    password[2] &&
                    password[3] &&
                    password[4] &&
                    password[5]
                  ? 1
                  : 0.2,
            },
          ]}>
          {/* Pagination */}

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}

          {
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={handleNext}
                style={[
                  OnboardingStyles.buttonBottomSection,
                  {backgroundColor: COLORS.pink},
                ]}
                activeOpacity={0.8}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,
                    fontFamily: FONTS.MANROPE_SEMIBOLD,
                  }}>
                  Siguiente
                </Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({item}) => {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
        }}>
        <View style={{paddingHorizontal: 22, marginBottom: 22}}>
          <Text style={RegisterStyles.tittleFlatList}>{item.title}</Text>
        </View>

        {currentPage + 1 == 1 ? (
          <View style={{marginHorizontal: 20}}>
            <View>
              <Text
                style={{
                  position: 'absolute',
                  fontSize: !isFocusedName && !name ? 16 : 10,
                  paddingLeft: 18,
                  paddingTop: !isFocusedName && !name ? 18 : 10,
                  color: !isFocusedName && !name ? COLORS.black : '#BCBCBC',
                  opacity: !isFocusedName && !name ? 0.6 : 1,
                  fontFamily: FONTS.MANROPE_MEDIUM,
                }}>
                Nombre/s
              </Text>
              <TextInput
                value={name}
                style={[
                  RegisterStyles.inputFlatList,
                  {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    marginBottom: -1,
                  },
                ]}
                onChangeText={text => setName(text)}
                onFocus={() => setIsFocusedName(true)}
                onBlur={() => setIsFocusedName(false)}
                onSubmitEditing={() => {
                  surname.focus();
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  position: 'absolute',
                  fontSize: !isFocusedSurname && !surname ? 16 : 10,
                  paddingLeft: 18,
                  paddingTop: !isFocusedSurname && !surname ? 18 : 10,
                  color:
                    !isFocusedSurname && !surname ? COLORS.black : '#BCBCBC',
                  opacity: !isFocusedSurname && !surname ? 0.6 : 1,
                  fontFamily: FONTS.MANROPE_MEDIUM,
                }}>
                Apellido/s
              </Text>
              <TextInput
                value={surname}
                style={[
                  RegisterStyles.inputFlatList,
                  {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  },
                ]}
                onChangeText={text => setSurname(text)}
                onFocus={() => setIsFocusedSurname(true)}
                onBlur={() => setIsFocusedSurname(false)}
              />
            </View>
          </View>
        ) : null}

        {currentPage + 1 == 2 ? (
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Text
              style={{
                position: 'absolute',
                fontSize: !isFocusedEmail && !email ? 16 : 10,
                paddingLeft: 18,
                paddingTop: !isFocusedEmail && !email ? 18 : 10,
                color: !isFocusedEmail && !email ? COLORS.black : '#BCBCBC',
                opacity: !isFocusedEmail && !email ? 0.6 : 1,
                fontFamily: FONTS.MANROPE_MEDIUM,
              }}>
              Mail
            </Text>
            <TextInput
              value={email}
              style={[RegisterStyles.inputFlatList, {borderRadius: 16}]}
              onChangeText={text => setEmail(text)}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}></TextInput>
          </View>
        ) : null}

        {currentPage + 1 == 3 ? (
          <View style={RegisterStyles.otpContainer}>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[0]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={text => {
                  const array = [...password];
                  array[0] = text;
                  setPassword(array);
                  if (array[0] != '') secondInput.current.focus();
                }}
              />
            </View>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[1]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={text => {
                  const array = [...password];
                  array[1] = text;
                  setPassword(array);
                  if (array[1] != '') thirdInput.current.focus();
                }}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    firstInput.current.focus();
                  }
                }}
              />
            </View>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[2]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={text => {
                  const array = [...password];
                  array[2] = text;
                  setPassword(array);
                  if (array[2] != '') fourthInput.current.focus();
                }}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    secondInput.current.focus();
                  }
                }}
              />
            </View>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[3]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={text => {
                  const array = [...password];
                  array[3] = text;
                  setPassword(array);
                  if (array[3] != '') fifthInput.current.focus();
                }}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    thirdInput.current.focus();
                  }
                }}
              />
            </View>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[4]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fifthInput}
                onChangeText={text => {
                  const array = [...password];
                  array[4] = text;
                  setPassword(array);
                  if (array[4] != '') sixthInput.current.focus();
                }}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    fourthInput.current.focus();
                  }
                }}
              />
            </View>
            <View style={RegisterStyles.otpBox}>
              <TextInput
                value={password[5]}
                style={RegisterStyles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={sixthInput}
                onChangeText={text => {
                  const array = [...password];
                  array[5] = text;
                  setPassword(array);
                }}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    fifthInput.current.focus();
                  }
                }}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* TOP SECTION - Back & Skip button */}
      {renderTopSection()}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        extraData={SIZES.width}
        scrollEnabled={false}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default RegisterScreen;
