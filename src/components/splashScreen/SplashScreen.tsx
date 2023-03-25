import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={require('../../assets/Animation.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        autoSize
      />
    </View>
  );
};
