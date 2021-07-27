import React, {useContext} from 'react';
import {Animated, Button, View} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';
import {styles as animation101Styles} from '../styles/animation101Styles';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startPosition} = useAnimation();

  const {theme} = useContext(ThemeContext);
  const styles = animation101Styles(theme);

  return (
    <View style={styles.container}>
      <Header title="Fade in/Fade out" />

      <Animated.View
        style={{
          ...styles.box,
          opacity: opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="Fade in"
        onPress={() => {
          fadeIn();
          startPosition(100, 600);
        }}
        color={theme.colors.primary}
      />
      <View style={styles.button}>
        <Button
          title="Fade out"
          onPress={fadeOut}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};
