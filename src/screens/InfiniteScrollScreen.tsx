import React, {useContext} from 'react';
import {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../components/FadeInImage';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles as infiniteStyles} from '../styles/infiniteScrollStyles';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      //   <Image
      //     source={{uri: `https://picsum.photos/id/${item}/200/300`}}
      //     style={styles.imageItem}
      //   />
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/200/300`}
        styles={{width: '100%', height: 400, borderRadius: 10}}
      />
    );
  };

  const loadMore = () => {
    const array: number[] = [];
    for (let i = 0; i < 5; i++) {
      array[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...array]);
  };

  const {theme} = useContext(ThemeContext);
  const styles = infiniteStyles(theme);

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={
          <View>
            <Header title="Infinite Scroll" />
          </View>
        }
        onEndReached={loadMore}
        // Esta función indica cuan lejos estamos del fin de la lista
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return (
            <View style={styles.activityIndicator}>
              <ActivityIndicator size={50} color="white" />
            </View>
          );
        }}
      />
    </View>
  );
};
