import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import HomeStyles from '../../styles/home.style';

const WinningsScreen = () => {

  return (
  
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={HomeStyles.titleHome}>
          Esta es la screen de Ganancias! 👋
        </Text>
      </View>  
  )    
  }
export default WinningsScreen;

