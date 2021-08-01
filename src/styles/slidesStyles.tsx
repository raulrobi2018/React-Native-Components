import {StyleSheet} from 'react-native';
import {ThemeState} from '../context/theme/themeReducer';

export const styles = (theme: ThemeState) =>
  StyleSheet.create({
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
      backgroundColor: theme.colors.background,
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
      color: theme.colors.primary,
    },
    itemSubTitle: {
      fontSize: 16,
      color: theme.colors.text,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    pagination: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
    },
    textMenuButton: {
      fontSize: 25,
      color: theme.buttonText,
    },
    iconMenuButton: {
      fontSize: 25,
      color: theme.buttonText,
      marginLeft: 15,
      marginTop: 5,
    },
    menuButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      width: 150,
      height: 50,
      borderRadius: 10,
    },
  });
