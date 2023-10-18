import {Appearance, StatusBar, View, StyleSheet} from 'react-native';
import {
  Image,
  Canvas,
  mix,
  ImageShader,
  Circle,
} from '@shopify/react-native-skia';
import React, {useReducer, useRef} from 'react';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';

import ViewShot from 'react-native-view-shot';
import {ColorScheme, ColorSchemeProviderProps} from '../interface/interface';

import {ColorSchemesContext, height, width} from '../constants';

const defaultValue: ColorScheme = {
  colorScheme: Appearance.getColorScheme() ?? 'light',
  colors: null,
  active: false,
  overlay1: null,
  overlay2: null,
};

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const ColorSchemeProvider = ({
  lightColors,
  darkColors,
  children,
}: ColorSchemeProviderProps) => {
  const circle = useSharedValue({x: 0, y: 0, r: 0});
  const transition = useSharedValue(0);
  const ref = useRef(null);

  const [{colorScheme, active, overlay1, overlay2}, dispatch] = useReducer(
    colorSchemeReducer,
    defaultValue,
  );

  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <ViewShot ref={ref} style={{height, width}}>
        <ColorSchemesContext.Provider
          value={{
            colorScheme,
            dispatch,
            colors: (colorScheme === 'light'
              ? lightColors
              : darkColors) as typeof darkColors,
            active,
            overlay1,
            overlay2,
            ref,
            circle,
            transition,
          }}>
          {children}
        </ColorSchemesContext.Provider>
      </ViewShot>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
        <Image
          fit={'cover'}
          image={overlay1}
          x={0}
          y={0}
          width={width}
          height={height}
        />
        {overlay2 && (
          <Circle c={circle} r={r}>
            <ImageShader
              image={overlay2}
              x={0}
              y={0}
              width={width}
              height={height}
              fit={'cover'}
            />
          </Circle>
        )}
      </Canvas>
    </View>
  );
};

export default ColorSchemeProvider;
