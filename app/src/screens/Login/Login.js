import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground,TextInput,StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import data from '../../data/Login'
import {CommonActions,useNavigation} from '@react-navigation/native';
import AuthenticationService from '../../services/AuthenticationService';

const LoginScreen = () => {
    const navigation = useNavigation();
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);
//   const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  const [pin1, setPin1] = useState(null);
  const [pin2, setPin2] = useState(null);
  const [pin3, setPin3] = useState(null);
  const [pin4, setPin4] = useState(null);
  const [pin5, setPin5] = useState(null);
  const [pin6, setPin6] = useState(null);

  const signIn = async () => {
    // setIsLoading(true);
    console.log(email)
    console.log(password)
    setPassword(pin1+pin2+pin3+pin4+pin5+pin6)
    let user = {
      email,
      password,
    };
    AuthenticationService.login(user).then(response => {
    //   setIsLoading(false);
    //   setToken(response?.data);
    //   if (!response?.status) {
    //     setErrorMessage(response?.message);
    //   }
      console.log(response.data)
    });
  };

    const handleViewableItemsChanged = useRef(({viewableItems})=> {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if(!viewableItems[0] || currentPage === viewableItems[0].index) 
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const handleNext = () => {
        if(currentPage == data.length-1)
            return;

        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage +1
        })
    }

    const handleBack = () => {
        if(currentPage==0){
            navigation.dispatch(
                CommonActions.navigate({ name: 'LoginRegister' })
              );
        }else{
            flatlistRef.current.scrollToIndex({
                animated: true,
                index: currentPage - 1
            })
        } 
            
       
    }

    const handleSkipToEnd = () => {
        flatlistRef.current.scrollToIndex({
            animate: true,
            index: data.length - 1
        })
    }

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.base * 2
                }}>
                    {/* Back button */}
                    <TouchableOpacity
                     onPress={handleBack}
                     style={{
                        padding: SIZES.base
                    }}>
                        {/* Back icon */}
                        {/* Hide back button on 1st screen */}
                        <AntDesignIcons name="left" style={{
                            fontSize: 25,
                            color: COLORS.black,
                           
                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on last screen */}
                    {/* <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.black,
                            
                        }}>{currentPage+1}/3</Text>
                    </TouchableOpacity> */}

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal:SIZES.base *2,
                    paddingVertical: SIZES.base *2
                }}>
                    {/* Pagination */}
                    {/* <TouchableOpacity 
                            onPress={handleSkipToEnd}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:161,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.gray,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            activeOpacity={0.8}
                            >
                             <Text style={{
                                    color: COLORS.black,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Omitir</Text>
                                
                    </TouchableOpacity> */}

                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity 
                            onPress={handleNext}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:335,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.pink,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}
                            activeOpacity={0.8}
                            >
                             <Text style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Siguiente</Text>
                                
                            </TouchableOpacity>
                        ) : (
                        //     // Get Started Button
                        //     <TouchableOpacity 
                        //     onPress={goToLoginRegister}
                        //     style={{
                        //         paddingHorizontal: SIZES.base * 2,
                        //         width:161,
                        //         height: 54,
                        //         borderRadius: 16,
                        //         backgroundColor: COLORS.pink,
                        //         flexDirection: 'row',
                        //         justifyContent: 'center',
                        //         alignItems: 'center'
                        //     }}>
                        //         <Text style={{
                        //             color: COLORS.white,
                        //             fontSize: 18,
                        //             marginLeft: SIZES.base
                        //         }}>Comenzar</Text>
                                
                                
                        //     </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => signIn()}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:335,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.pink,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}
                            activeOpacity={0.8}
                            >
                             <Text style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Siguiente</Text>
                                
                            </TouchableOpacity>

                        )
                    }
                    
                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({item}) => {
        return (
            <View style={{
                width: SIZES.width,
                flex: 1,
                
            }}>
                  {/* TEXTO Y DESCRIPCION */}
                <View style={{paddingHorizontal: SIZES.base * 4, marginVertical: SIZES.base * 4}}>
                    <Text style={{fontFamily:'Red Hat Display',color: COLORS.black,fontSize: 24, textAlign:'left', fontWeight: 'bold'}}>
                        {item.title}
                    </Text>
                    {/* <Text style={{
                        color: COLORS.black,
                        fontFamily:'Manrope',
                        fontSize: 16,
                        opacity: 0.4,
                        textAlign: 'center',
                        lineHeight: 28
                    }}>
                        {item.description}
                    </Text> */}
                </View>

                {/* <View style={{
                    alignItems: 'center',
                    marginVertical: SIZES.base * 2
                }}>
                    <ImageBackground
                    source={item.img}
                    style={{width: 375, height: 311}}
                    />
                </View> */}

        
        {currentPage+1==1?(
            <View
            style={{alignItems:'center'}}
            >
            <TextInput
            style={{width:335,height:58,color:COLORS.black,borderColor:'black',borderWidth:1,borderRadius:16,fontSize:16}}
            placeholder={'Mail'}
            // onChange={}
            onChangeText={text => setEmail(text)}
            />
            </View>
        ):null}       
            

        {currentPage+1==2?(
        <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text =>{ 
                setPin1(text)
                if(pin1 != "")
                    secondInput.current.focus();
                }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text =>{ 
                setPin2(text)
                if(pin2 != "")
                    thirdInput.current.focus();
                }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text =>{ 
                setPin3(text)
                if(pin3 != "")
                    fourthInput.current.focus();
                }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text =>{ 
                setPin4(text)
                if(pin4 != "")
                    fifthInput.current.focus();
                }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fifthInput}
            onChangeText={text =>{ 
                setPin5(text)
                if(pin5 != "")
                    sixthInput.current.focus();
                }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={sixthInput}
            onChangeText={text =>{ 
                setPin6(text)
            }}
          />
        </View>
      </View>
):null}


            </View>
        )
    }


    const goToLoginRegister = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: 'LoginRegister' })
    );
  }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: 'center'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

            {/* TOP SECTION - Back & Skip button */}
            { renderTopSection() }

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
            />

            {/* BOTTOM SECTION - pagination & next or GetStarted button */}
            { renderBottomSection() }

        </View>
    )
}


const styles = StyleSheet.create({

    
    otpContainer: {
      marginHorizontal: 20,
      marginBottom: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    otpBox: {
      width:50,
      height:58,
      borderRadius: 16,
      
    //   borderColor: Colors.DEFAULT_GREEN,
      borderWidth: 0.5,
    },
    otpText: {
      fontSize: 25,
    //   color: Colors.DEFAULT_BLACK,
      padding: 20,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    
  });

export default LoginScreen
