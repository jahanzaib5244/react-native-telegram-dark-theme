import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '../hooks/useTheme';

const Button = () => {
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
      <Feather
        name={colorScheme === 'light' ? 'moon' : 'sun'}
        color={colors?.black}
        size={32}
      />
    </GestureDetector>
  );
};

export default Button;
