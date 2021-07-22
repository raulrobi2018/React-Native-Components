import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data/menuItems';
import {styles} from '../styles/appStyles';

export const HomeScreen = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={menuItems}
        //El 'item' es una representación del item de la iteración en la que se encuentra
        //en el array 'menuItems'.
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        //El 'keyExtractor tiene que ser único y debe ser un string'
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <Header title="Opciones de menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
