import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../styles/pullToRefreshSyles';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      // Le agrega un top porque en IOS queda detrás del knoch
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          colors={[theme.buttonText]}
          //Solo para Android
          progressBackgroundColor="green"
          //Solo para IOS
          style={{backgroundColor: theme.colors.primary}}
          title="Refreshing"
          titleColor="black"
        />
      }>
      <View style={styles.container}>
        <Header title="Pull to refresh" />
        {data && <Text>{data}</Text>}
      </View>
    </ScrollView>
  );
};
