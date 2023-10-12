"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeButton", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeContext.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function () {
    return _useTheme.useTheme;
  }
});
var _ThemeContext = _interopRequireDefault(require("./context/ThemeContext"));
var _Button = _interopRequireDefault(require("./components/Button"));
var _useTheme = require("./hooks/useTheme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _ThemeContext.default;
//# sourceMappingURL=index.d.js.map