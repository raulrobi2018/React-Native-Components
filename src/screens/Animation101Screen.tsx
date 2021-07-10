import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {styles} from '../styles/animation101Styles';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button title="Fade in" 
      onPress={
        () => {
          fadeIn(); 
          startPosition(100, 600)
          }
          } />
      <View style={{marginTop: 20}}>
        <Button title="Fade out" onPress={fadeOut} />
      </View>
    </View>
  );
};
