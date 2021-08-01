import React from 'react';
import {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles as appStyles} from '../styles/appStyles';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);

  const styles = appStyles(theme);

  return <View style={styles.itemSeparator} />;
};
