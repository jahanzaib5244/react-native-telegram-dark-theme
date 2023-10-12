"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _useTheme = require("../hooks/useTheme");
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  } = (0, _useTheme.useTheme)();
  const tap = _reactNativeGestureHandler.Gesture.Tap().runOnJS(true).onStart(e => {
    if (!active) {
      toggle(e.absoluteX, e.absoluteY);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.GestureDetector, {
    gesture: tap
  }, !!button ? button : colorScheme === 'dark' ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../assets/sun.png'),
    style: [{
      tintColor: colors?.black,
      height: 30,
      width: 30
    }, iconStyle]
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../assets/moon.png'),
    style: [{
      tintColor: colors?.black,
      height: 30,
      width: 30
    }, iconStyle]
  }));
};
var _default = exports.default = Button;
//# sourceMappingURL=Button.js.map