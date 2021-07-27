import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: theme.colors.primary,
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    button: {
      backgroundColor: theme.colors.primary,
      marginVertical: 20,
    },
  });
