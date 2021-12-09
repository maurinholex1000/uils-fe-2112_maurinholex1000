import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import data from '../../data/Onboarding'
import {CommonActions,useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])

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
        if(currentPage==0) 
            return;
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1
        })
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
                            opacity: currentPage == 0 ? 0 : 1
                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on last screen */}
                    <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.black,
                            
                        }}>{currentPage+1}/3</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal:SIZES.base *2,
                    paddingVertical: SIZES.base *2
                }}>
                    {/* Pagination */}
                    <TouchableOpacity 
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
                                
                    </TouchableOpacity>

                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity 
                            onPress={handleNext}
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
                                }}>Continuar</Text>
                                
                            </TouchableOpacity>
                        ) : (
                            // Get Started Button
                            <TouchableOpacity 
                            onPress={goToLoginRegister}
                            style={{
                                paddingHorizontal: SIZES.base * 2,
                                width:161,
                                height: 54,
                                borderRadius: 16,
                                backgroundColor: COLORS.pink,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    marginLeft: SIZES.base
                                }}>Comenzar</Text>
                                
                                
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
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                  {/* TEXTO Y DESCRIPCION */}
                <View style={{paddingHorizontal: SIZES.base * 4, marginVertical: SIZES.base * 4}}>
                    <Text style={{fontFamily:'Red Hat Display',color: COLORS.black,fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>
                        {item.title}
                    </Text>
                    <Text style={{
                        color: COLORS.black,
                        fontFamily:'Manrope',
                        fontSize: 16,
                        opacity: 0.4,
                        textAlign: 'center',
                        lineHeight: 28
                    }}>
                        {item.description}
                    </Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    marginVertical: SIZES.base * 2
                }}>
                    <ImageBackground
                    source={item.img}
                    style={{width: 375, height: 311}}
                    />
                </View>
                

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

export default OnboardingScreen
