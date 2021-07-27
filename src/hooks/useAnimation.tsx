import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  //El '.current' es propio del useRef
  const opacity = useRef(new Animated.Value(0.4)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    console.log('fade in', opacity);
    Animated.timing(opacity, {
      // Al valor que quiero que llegue la opacidad
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => console.log('Opacity en fade in', opacity));
  };

  const fadeOut = () => {
    console.log('fade out', opacity);
    Animated.timing(opacity, {
      // Al valor que quiero que llegue la opacidad
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('La animación terminó', opacity));
  };

  const startPosition = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      //easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startPosition,
  };
};
