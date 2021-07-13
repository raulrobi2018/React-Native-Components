import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {Header} from '../components/Header';
import {styles} from '../styles/switchStyles';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: false,
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Switches" />
      <View style={styles.row}>
        <Text style={styles.text}>Is Active?</Text>

        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Is Hungry?</Text>

        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Is Happy?</Text>

        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.textContainer}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};
