import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const styles = (theme: Theme) =>
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
      borderBottomColor: 'gray',
      marginVertical: 5,
      opacity: 0.3,
    },
  });
