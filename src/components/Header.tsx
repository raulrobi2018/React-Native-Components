import React, {useContext} from 'react';
import {Platform, Text} from 'react-native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles as headerStyles} from '../styles/appStyles';

interface Props {
  title: string;
}

export const Header = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  let topM = Platform.OS === 'ios' ? top + 20 : top + 5;

  const {theme} = useContext(ThemeContext);

  const styles = headerStyles(theme);

  return (
    <View style={{marginTop: topM}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
