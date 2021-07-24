import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {items, Slide} from '../data/slideItems';
import {styles} from '../styles/slidesStyles';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage} source={item.img} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => setActiveIndex(index)}
      />

      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.pagination}
        />

        <TouchableOpacity style={styles.menuButton}>
          <Text>Menu</Text>
          <Icon name="double-arrow" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
