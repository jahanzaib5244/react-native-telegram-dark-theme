"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.width = exports.height = exports.corners = exports.ColorSchemesContext = void 0;
var _reactNative = require("react-native");
var _reactNativeSkia = require("@shopify/react-native-skia");
var _react = require("react");
const {
  width,
  height
} = _reactNative.Dimensions.get('window');
exports.height = height;
exports.width = width;
const corners = exports.corners = [(0, _reactNativeSkia.vec)(0, 0), (0, _reactNativeSkia.vec)(width, 0), (0, _reactNativeSkia.vec)(width, height), (0, _reactNativeSkia.vec)(0, height)];
const ColorSchemesContext = exports.ColorSchemesContext = /*#__PURE__*/(0, _react.createContext)(null);
//# sourceMappingURL=constants.js.map