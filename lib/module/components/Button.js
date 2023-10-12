import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';
import { Image } from 'react-native';
const Button = _ref => {
  let {
    button,
    iconStyle
  } = _ref;
  const {
    toggle,
    colorScheme,
    active,
    colors
  } = useTheme();
  const tap = Gesture.Tap().runOnJS(true).onStart(e => {
    if (!active) {
      toggle(e.absoluteX, e.absoluteY);
    }
  });
  return /*#__PURE__*/React.createElement(GestureDetector, {
    gesture: tap
  }, !!button ? button : colorScheme === 'dark' ? /*#__PURE__*/React.createElement(Image, {
    source: require('../assets/sun.png'),
    style: [{
      tintColor: colors?.black,
      height: 30,
      width: 30
    }, iconStyle]
  }) : /*#__PURE__*/React.createElement(Image, {
    source: require('../assets/moon.png'),
    style: [{
      tintColor: colors?.black,
      height: 30,
      width: 30
    }, iconStyle]
  }));
};
export default Button;
//# sourceMappingURL=Button.js.map