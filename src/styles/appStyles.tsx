import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.text,
    },
    flatListContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    itemSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: theme.dividerColor,
      marginVertical: 5,
      opacity: 0.3,
    },
  });
