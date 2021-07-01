import React, {useRef, useState} from 'react';
import {Animated, Button, Easing, View} from 'react-native';
import {styles} from '../styles/animation101Styles';

export const Animation101Screen = () => {
  //El '.current' es propio del useRef
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      // Al valor que quiero que llegue la opacidad
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      // Al valor que quiero que llegue la opacidad
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('La animación terminó'));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [{translateY: top}],
        }}
      />
      <Button title="Fade in" onPress={fadeIn} />
      <View style={{marginTop: 20}}>
        <Button title="Fade out" onPress={fadeOut} />
      </View>
    </View>
  );
};
