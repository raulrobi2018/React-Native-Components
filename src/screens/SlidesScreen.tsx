import React, {useContext} from 'react';
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
import {styles as slidesStyles} from '../styles/slidesStyles';
import {useAnimation} from '../hooks/useAnimation';
import {useRef} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/theme/ThemeContext';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const {fadeIn, fadeOut} = useAnimation();

  const [activeIndex, setActiveIndex] = useState(0);

  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage} source={item.img} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.desc}</Text>
      </View>
    );
  };

  const {theme} = useContext(ThemeContext);
  const styles = slidesStyles(theme);

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
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn(600);
          } else {
            isVisible.current = false;
            fadeOut();
          }
        }}
      />

      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.pagination}
        />

        {isVisible.current && (
          <TouchableOpacity
            style={styles.menuButton}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.textMenuButton}>Menu</Text>
            <Icon name="arrow-forward-ios" style={styles.iconMenuButton} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
