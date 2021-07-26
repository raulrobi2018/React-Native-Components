import React from 'react';
import {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../components/Header';
import {styles as changeStyles} from '../styles/changeThemeStyles';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useState} from 'react';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState('light');

  const styles = changeStyles(theme);

  const changeTheme = () => {
    if (currentTheme === 'light') {
      setDarkTheme();
      setCurrentTheme('dark');
    } else {
      setLightTheme();
      setCurrentTheme('light');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Change Theme" />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => changeTheme()}>
        <Text style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};
