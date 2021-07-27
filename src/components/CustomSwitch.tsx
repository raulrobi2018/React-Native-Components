import React, {useState} from 'react';
import {useContext} from 'react';
import {Platform} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const {theme} = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: theme.switchOff, true: theme.switchOn}}
      thumbColor={Platform.OS === 'android' ? theme.colors.primary : ''}
      ios_backgroundColor={theme.switchOn}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
