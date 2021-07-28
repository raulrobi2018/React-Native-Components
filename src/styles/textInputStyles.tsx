import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      marginVertical: 10,
      marginHorizontal: 10,
    },
    input: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 20,
      opacity: 0.8,
    },
    internalSpace: {
      height: 100,
    },
  });
