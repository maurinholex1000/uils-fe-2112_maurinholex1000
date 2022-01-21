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
  Image,
  Alert,
} from 'react-native';
import OnboardingStyles from '../../styles/onboarding.style';
import RegisterStyles from '../../styles/register.style';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import data from '../../data/Login';
import {CommonActions, useNavigation} from '@react-navigation/native';
import AuthenticationService from '../../services/AuthenticationService';
import {useDispatch} from 'react-redux';
import {createUser} from '../../store/user/actions';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userRedux = useSelector(state => state.user.data);
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const [email, setEmail] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [password, setPassword] = useState(['', '', '', '', '', '']);
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);
  const [locked, setLocked] = useState([true, true, true, true, true, true]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const signIn = async () => {
    console.log(email);
    console.log(password);
    let user = {
      email,
      password: password.join(''),
    };
    console.log('USER', user);
    console.log('llega hasta antes del await');
    AuthenticationService.login(user).then(response => {
      console.log(response.data);
      console.log('HOLA MAURO');
      if (response.data) {
        console.log('pudiste loguearte', response.data);
        dispatch(createUser(response.data));
        console.log('entraste al loguin', userRedux);
        console.log('token', userRedux.token);
        navigation.dispatch(CommonActions.navigate({name: 'MainTab'}));
      } else {
        Alert.alert('ERROR', 'Usuario Inexistente', [{text: 'OK'}]);
      }
    });
  };

  const onChangeLocked = () => {
    console.log('locked entra', locked[0], locked[5]);
    setLocked([
      !locked[0],
      !locked[1],
      !locked[2],
      !locked[3],
      !locked[4],
      !locked[5],
    ]);
    console.log('locked sale', locked[0], locked[5]);
  };

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (
      currentPage == 1 &&
      password[0] &&
      password[1] &&
      password[2] &&
      password[3] &&
      password[4] &&
      password[5]
    ) {
      signIn();
    }
    if (currentPage == 0 && email) {
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentPage + 1,
      });
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
        <View style={OnboardingStyles.containerTopSection}>
          {/* Back button */}
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
          <Text style={[RegisterStyles.titleTopSection, {marginRight: 131}]}>
            Iniciar sesión
          </Text>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={[
            RegisterStyles.containerBottomSection,
            {
              opacity:
                currentPage == 0
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
                style={RegisterStyles.buttonBottomSection}>
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
        {/* TEXTO Y DESCRIPCION */}
        <View style={{paddingHorizontal: 22, marginTop: 20, marginBottom: 22}}>
          <Text style={RegisterStyles.tittleFlatList}>{item.title}</Text>
        </View>

        {currentPage + 1 == 1 ? (
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
              style={[
                RegisterStyles.inputFlatList,
                {
                  borderRadius: 16,
                },
              ]}
              // placeholder={'Mail'}
              onChangeText={text => setEmail(text)}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}></TextInput>
          </View>
        ) : null}

        {currentPage + 1 == 2 ? (
          <View style={{flexDirection: 'column'}}>
            <View style={[RegisterStyles.otpContainer, {marginBottom: 16}]}>
              <View style={RegisterStyles.otpBox}>
                <TextInput
                  secureTextEntry={locked[0]}
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
                  secureTextEntry={locked[1]}
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
                  secureTextEntry={locked[2]}
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
                  secureTextEntry={locked[3]}
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
                  secureTextEntry={locked[4]}
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
                  secureTextEntry={locked[5]}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <ImageBackground
                source={require('../../assets/images/PIN_1.png')}
                style={{
                  width: 143,
                  height: 36,
                  marginLeft: 20,
                }}></ImageBackground>
              <TouchableOpacity onPress={onChangeLocked}>
                <ImageBackground
                  source={
                    locked[0] &&
                    locked[1] &&
                    locked[2] &&
                    locked[3] &&
                    locked[4] &&
                    locked[5]
                      ? require('../../assets/images/PIN_2.png')
                      : require('../../assets/images/PIN_3.png')
                  }
                  style={{
                    width: 143,
                    height: 36,
                    marginRight: 20,
                  }}></ImageBackground>
              </TouchableOpacity>
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

export default LoginScreen;
