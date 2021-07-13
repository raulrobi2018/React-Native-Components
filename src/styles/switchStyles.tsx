import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from './appStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purpleBox: {
    backgroundColor: PRIMARY_COLOR,
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 15,
    fontSize: 20,
  },
});
