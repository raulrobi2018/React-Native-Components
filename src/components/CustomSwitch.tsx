import React, {useState}  from 'react';
import {Platform} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

interface Props {
  isOn: boolean,
  onChange: (value: boolean) => void
}

export const CustomSwitch = ({isOn, onChange} : Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {setIsEnabled(!isEnabled); onChange(!isEnabled);};

    return (
<Switch
        trackColor={{false: 'lightgray', true: 'gray'}}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )
}
