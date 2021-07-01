import React from 'react';
import {Text, View} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/flatListItemStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={25} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={styles.arrowIcon}>
          <Icon name="arrow-forward" color="gray" size={25} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
