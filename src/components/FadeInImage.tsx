import React, {useState} from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import {ActivityIndicator, Animated, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  styles?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, styles}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color="yellow"
          size={60}
          style={{position: 'absolute'}}
        />
      )}

      <Animated.Image
        onLoadEnd={finishLoading}
        source={{uri}}
        style={{...(styles as any), opacity}}
      />
    </View>
  );
};
