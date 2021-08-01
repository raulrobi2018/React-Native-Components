import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
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
      color: theme.colors.border,
    },
    internalSpace: {
      height: 100,
    },
    text: {
      color: theme.colors.border,
    },
  });
