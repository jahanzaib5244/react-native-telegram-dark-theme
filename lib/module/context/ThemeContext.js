import { Appearance, StatusBar, View, StyleSheet } from 'react-native';
import { Image, Canvas, mix, ImageShader, Circle } from '@shopify/react-native-skia';
import React, { useReducer, useRef } from 'react';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import ViewShot from 'react-native-view-shot';
import { ColorSchemesContext, height, width } from '../constants';
const defaultValue = {
  colorScheme: Appearance.getColorScheme() ?? 'light',
  colors: null,
  active: false,
  overlay1: null,
  overlay2: null
};
const colorSchemeReducer = (_, colorScheme) => {
  return colorScheme;
};
export const ColorSchemeProvider = _ref => {
  let {
    lightColors,
    darkColors,
    children
  } = _ref;
  const circle = useSharedValue({
    x: 0,
    y: 0,
    r: 0
  });
  const transition = useSharedValue(0);
  const ref = useRef(null);
  const [{
    colorScheme,
    active,
    overlay1,
    overlay2
  }, dispatch] = useReducer(colorSchemeReducer, defaultValue);
  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });
  return /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: colorScheme === 'light' ? 'dark-content' : 'light-content'
  }), /*#__PURE__*/React.createElement(ViewShot, {
    ref: ref,
    style: {
      height,
      width
    }
  }, /*#__PURE__*/React.createElement(ColorSchemesContext.Provider, {
    value: {
      colorScheme,
      dispatch,
      colors: colorScheme === 'light' ? lightColors : darkColors,
      active,
      overlay1,
      overlay2,
      ref,
      circle,
      transition
    }
  }, children)), /*#__PURE__*/React.createElement(Canvas, {
    style: StyleSheet.absoluteFill,
    pointerEvents: 'none'
  }, /*#__PURE__*/React.createElement(Image, {
    fit: 'cover',
    image: overlay1,
    x: 0,
    y: 0,
    width: width,
    height: height
  }), overlay2 && /*#__PURE__*/React.createElement(Circle, {
    c: circle,
    r: r
  }, /*#__PURE__*/React.createElement(ImageShader, {
    image: overlay2,
    x: 0,
    y: 0,
    width: width,
    height: height,
    fit: 'cover'
  }))));
};
export default ColorSchemeProvider;
//# sourceMappingURL=ThemeContext.js.map