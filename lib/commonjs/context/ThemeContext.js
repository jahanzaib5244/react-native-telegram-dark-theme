"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ColorSchemeProvider = void 0;
var _reactNative = require("react-native");
var _reactNativeSkia = require("@shopify/react-native-skia");
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _reactNativeViewShot = _interopRequireDefault(require("react-native-view-shot"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultValue = {
  colorScheme: _reactNative.Appearance.getColorScheme() ?? 'light',
  colors: null,
  active: false,
  overlay1: null,
  overlay2: null
};
const colorSchemeReducer = (_, colorScheme) => {
  return colorScheme;
};
const ColorSchemeProvider = _ref => {
  let {
    lightColors,
    darkColors,
    children
  } = _ref;
  const circle = (0, _reactNativeReanimated.useSharedValue)({
    x: 0,
    y: 0,
    r: 0
  });
  const transition = (0, _reactNativeReanimated.useSharedValue)(0);
  const ref = (0, _react.useRef)(null);
  const [{
    colorScheme,
    active,
    overlay1,
    overlay2
  }, dispatch] = (0, _react.useReducer)(colorSchemeReducer, defaultValue);
  const r = (0, _reactNativeReanimated.useDerivedValue)(() => {
    return (0, _reactNativeSkia.mix)(transition.value, 0, circle.value.r);
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: colorScheme === 'light' ? 'dark-content' : 'light-content'
  }), /*#__PURE__*/_react.default.createElement(_reactNativeViewShot.default, {
    ref: ref,
    style: {
      height: _constants.height,
      width: _constants.width
    }
  }, /*#__PURE__*/_react.default.createElement(_constants.ColorSchemesContext.Provider, {
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
  }, children)), /*#__PURE__*/_react.default.createElement(_reactNativeSkia.Canvas, {
    style: _reactNative.StyleSheet.absoluteFill,
    pointerEvents: 'none'
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSkia.Image, {
    fit: 'cover',
    image: overlay1,
    x: 0,
    y: 0,
    width: _constants.width,
    height: _constants.height
  }), overlay2 && /*#__PURE__*/_react.default.createElement(_reactNativeSkia.Circle, {
    c: circle,
    r: r
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSkia.ImageShader, {
    image: overlay2,
    x: 0,
    y: 0,
    width: _constants.width,
    height: _constants.height,
    fit: 'cover'
  }))));
};
exports.ColorSchemeProvider = ColorSchemeProvider;
var _default = exports.default = ColorSchemeProvider;
//# sourceMappingURL=ThemeContext.js.map