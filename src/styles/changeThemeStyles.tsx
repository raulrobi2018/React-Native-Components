import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    button: {
      backgroundColor: theme.colors.primary,
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: theme.buttonText,
    },
  });
