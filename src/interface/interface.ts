import {RefObject, ReactNode} from 'react';
import type {SkImage} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';
import {View} from 'react-native';

export interface ColorScheme {
  colorScheme: ColorSchemeName;
  colors: Record<string, string> | null;
  active: boolean;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
}

export interface ColorSchemeContext extends ColorScheme {
  ref: RefObject<View>;
  transition: SharedValue<number>;
  circle: SharedValue<{x: number; y: number; r: number}>;
  dispatch: (scheme: ColorScheme) => void;
}

export interface ColorSchemeProviderProps {
  children: ReactNode;
  lightColors: Record<string, string>;
  darkColors: Record<string, string>;
}

export type ColorSchemeName = 'light' | 'dark';
