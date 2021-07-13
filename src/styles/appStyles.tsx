import {StyleSheet} from 'react-native';

export const PRIMARY_COLOR = '#5856D6';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
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
