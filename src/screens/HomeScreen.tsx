import React from 'react';
import {Text, View, Platform} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/interfaces';
import {styles} from '../styles/appStyles';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'widgets',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'collections',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    let topM = Platform.OS === 'ios' ? top + 20 : top + 5;

    return (
      <View style={{marginTop: topM}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={menuItems}
        //El 'item' es una representación del item de la iteración en la que se encuentra
        //en el array 'menuItems'.
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        //El 'keyExtractor tiene que ser único y debe ser un string'
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};
