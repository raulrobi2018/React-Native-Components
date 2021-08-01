import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    row: {
      marginVertical: 10,
      marginHorizontal: 10,
    },
    imageItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      marginVertical: 15,
      borderRadius: 10,
      marginHorizontal: 10,
    },
    activityIndicator: {
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
