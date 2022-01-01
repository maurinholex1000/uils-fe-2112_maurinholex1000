import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import OnboardingStyles from '../../styles/onboarding.style';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import data from '../../data/Onboarding';
import {CommonActions, useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage == data.length - 1) return;

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage == 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1,
    });
  };

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={[OnboardingStyles.containerTopSection]}>
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={OnboardingStyles.buttonTopSection}>
            <Image
              source={require('../../assets/images/arrowleft.png')}
              style={{
                width: 6.59,
                height: 11.17,
                opacity: currentPage == 0 ? 0.2 : 1,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity
            onPress={handleSkipToEnd}
            style={OnboardingStyles.buttonTopSection}>
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
        <View style={OnboardingStyles.containerBottomSection}>
          {/* Pagination */}
          <TouchableOpacity
            onPress={handleSkipToEnd}
            style={[
              OnboardingStyles.buttonBottomSection,
              {backgroundColor: COLORS.gray, width: 161},
            ]}>
            <Text
              style={{
                fontFamily: FONTS.MANROPE_SEMIBOLD,
                color: COLORS.black,
                fontSize: 16,
                opacity: currentPage == 2 ? 0.2 : 1,
              }}>
              Omitir
            </Text>
          </TouchableOpacity>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage != data.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={[
                OnboardingStyles.buttonBottomSection,
                {backgroundColor: COLORS.pink, width: 161},
              ]}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontFamily: FONTS.MANROPE_SEMIBOLD,
                  color: COLORS.white,
                  fontSize: 16,
                }}>
                Continuar
              </Text>
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <TouchableOpacity
              onPress={goToLoginRegister}
              style={[
                OnboardingStyles.buttonBottomSection,
                {backgroundColor: COLORS.pink, width: 161},
              ]}>
              <Text
                style={{
                  fontFamily: FONTS.MANROPE_SEMIBOLD,
                  color: COLORS.white,
                  fontSize: 16,
                }}>
                Comenzar
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({item}) => {
    return (
      <View style={[OnboardingStyles.containerFlatList,{marginTop:35,marginBottom:30}]}>
        {/* TEXTO Y DESCRIPCION */}
        <View >
          <Text style={OnboardingStyles.titleFlatList}>{item.title}</Text>
          <Text style={OnboardingStyles.descriptionFlatList}>
            {item.description}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            
          }}>
          <ImageBackground
            source={item.img}
            style={{width: 375, height: 311}}
          />
        </View>
      </View>
    );
  };

  const goToLoginRegister = () => {
    navigation.dispatch(CommonActions.navigate({name: 'LoginRegister'}));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background_white,
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
        // extraData={SIZES.width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default OnboardingScreen;
