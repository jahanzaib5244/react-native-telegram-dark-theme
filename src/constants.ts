import {Dimensions} from 'react-native';
import {vec} from '@shopify/react-native-skia';
import {createContext} from 'react';
import {ColorSchemeContext} from './interface/interface';

export const {width, height} = Dimensions.get('window');
export const corners = [
  vec(0, 0),
  vec(width, 0),
  vec(width, height),
  vec(0, height),
];

export const ColorSchemesContext = createContext<ColorSchemeContext | null>(
  null,
);
