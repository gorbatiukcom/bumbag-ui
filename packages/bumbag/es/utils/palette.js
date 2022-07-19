import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './pick.js';
import './cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { t as tint, s as shade, r as readableColor, l as lighten } from '../getCSSFromStyleObject.js';
import './isFunction.js';
import './get.js';

var generateTextVariants = function generateTextVariants(textColor) {
  return {
    text100: lighten(0.2, textColor)(),
    text200: lighten(0.15, textColor)(),
    text300: lighten(0.1, textColor)(),
    text400: lighten(0.05, textColor)(),
    text: textColor,
    textTint: tint(0.8, textColor)(),
    textInverted: readableColor(textColor)(),
    textTintInverted: shade(0.3, textColor)()
  };
};
var generateColorVariants = function generateColorVariants(_ref) {
  var _objectSpread2$1;

  var backgroundColor = _ref.backgroundColor,
      _tintColorReference = _ref.tintColorReference,
      _shadeColorReference = _ref.shadeColorReference,
      color = _ref.color,
      _ref$colorMode = _ref.colorMode,
      colorMode = _ref$colorMode === void 0 ? 'default' : _ref$colorMode,
      paletteKey = _ref.paletteKey,
      paletteOverrides = _ref.paletteOverrides;
  var tintColorReference = _tintColorReference;
  var shadeColorReference = _shadeColorReference;

  if (backgroundColor) {
    if (colorMode === 'default') {
      tintColorReference = backgroundColor;
    }

    if (colorMode === 'dark') {
      shadeColorReference = backgroundColor;
    }
  }

  return _objectSpread2((_objectSpread2$1 = {}, _objectSpread2$1[paletteKey + "100"] = tint(0.7, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey + "200"] = tint(0.5, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey + "300"] = tint(0.3, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey + "400"] = tint(0.1, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey] = color, _objectSpread2$1[paletteKey + "500"] = color, _objectSpread2$1[paletteKey + "600"] = shade(0.1, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1[paletteKey + "700"] = shade(0.3, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1[paletteKey + "800"] = shade(0.5, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1[paletteKey + "900"] = shade(0.7, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1[paletteKey + "Shade"] = shade(0.8, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1[paletteKey + "Tint"] = tint(0.9, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey + "Inverted"] = readableColor(color)(), _objectSpread2$1[paletteKey + "ShadeInverted"] = tint(0.7, color)({
    referenceColor: tintColorReference
  }), _objectSpread2$1[paletteKey + "TintInverted"] = shade(0.5, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2$1), paletteOverrides ? paletteOverrides({
    color: color
  }) : {});
};

export { generateColorVariants, generateTextVariants };
