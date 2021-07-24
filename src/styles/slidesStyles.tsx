import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  row: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  itemImage: {
    width: 350,
    height: 400,
    //Para que se quede centrada la imagen
    resizeMode: 'center',
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  itemSubTitle: {
    fontSize: 16,
  },
  paginationContainer: {
    backgroundColor: 'gray',
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#5856D6',
  },
  textMenuButton: {},
  menuButton: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
    width: 150,
    height: 50,
    borderRadius: 10,
  },
});
