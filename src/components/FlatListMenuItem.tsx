import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles as flatItemStyles} from '../styles/flatListItemStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);

  const styles = flatItemStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={25} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={styles.arrowIcon}>
          <Icon name="arrow-forward" color={theme.colors.primary} size={25} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
