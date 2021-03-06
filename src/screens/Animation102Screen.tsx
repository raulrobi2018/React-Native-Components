import React, {useContext} from 'react';
import {useRef} from 'react';
import {Animated, PanResponder, View} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles as animation102Styles} from '../styles/animation102Styles';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const {theme} = useContext(ThemeContext);

  const styles = animation102Styles(theme);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    //Cuando se suelta el objeto
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Header title="Draggable" />

      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
};
