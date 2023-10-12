import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useTheme} from '../hooks/useTheme';
import {Image, ImageStyle, StyleProp} from 'react-native';

interface props {
  button?: React.ReactNode;
  iconStyle?: StyleProp<ImageStyle>;
}

const Button: React.FC<props> = ({button, iconStyle}) => {
  const {toggle, colorScheme, active, colors} = useTheme();
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart(e => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });
  return (
    <GestureDetector gesture={tap}>
      {!!button ? (
        button
      ) : colorScheme === 'dark' ? (
        <Image
          source={require('../assets/sun.png')}
          style={[{tintColor: colors?.black, height: 30, width: 30}, iconStyle]}
        />
      ) : (
        <Image
          source={require('../assets/moon.png')}
          style={[{tintColor: colors?.black, height: 30, width: 30}, iconStyle]}
        />
      )}
    </GestureDetector>
  );
};

export default Button;
