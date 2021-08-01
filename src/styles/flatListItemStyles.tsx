import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {flexDirection: 'row'},
    itemText: {
      marginLeft: 10,
      fontSize: 15,
      color: theme.colors.primary,
    },
    arrowIcon: {
      position: 'absolute',
      right: 10,
    },
  });
