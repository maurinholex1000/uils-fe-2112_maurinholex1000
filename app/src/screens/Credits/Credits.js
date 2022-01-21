import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import HomeStyles from '../../styles/home.style';

const CreditsScreen = () => {

  return (
  
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={HomeStyles.titleHome}>
          Esta es la screen de Creditos! 👋
        </Text>
      </View>  
  )    
  }
export default CreditsScreen;


