import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {styles} from '../styles/switchStyles';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: 'lightgray', true: 'gray'}}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
