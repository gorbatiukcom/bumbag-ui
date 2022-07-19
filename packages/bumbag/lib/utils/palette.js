'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('./useTheme.js');
require('conditional-wrap');
require('./useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('./omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('./pick.js');
require('./cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('./isFunction.js');
require('./get.js');

var generateTextVariants = function generateTextVariants(textColor) {
  return {
    text100: utils_colors.lighten(0.2, textColor)(),
    text200: utils_colors.lighten(0.15, textColor)(),
    text300: utils_colors.lighten(0.1, textColor)(),
    text400: utils_colors.lighten(0.05, textColor)(),
    text: textColor,
    textTint: utils_colors.tint(0.8, textColor)(),
    textInverted: utils_colors.readableColor(textColor)(),
    textTintInverted: utils_colors.shade(0.3, textColor)()
  };
};
var generateColorVariants = function generateColorVariants(_ref) {
  var _objectSpread2;

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

  return _rollupPluginBabelHelpers._objectSpread2((_objectSpread2 = {}, _objectSpread2[paletteKey + "100"] = utils_colors.tint(0.7, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey + "200"] = utils_colors.tint(0.5, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey + "300"] = utils_colors.tint(0.3, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey + "400"] = utils_colors.tint(0.1, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey] = color, _objectSpread2[paletteKey + "500"] = color, _objectSpread2[paletteKey + "600"] = utils_colors.shade(0.1, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2[paletteKey + "700"] = utils_colors.shade(0.3, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2[paletteKey + "800"] = utils_colors.shade(0.5, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2[paletteKey + "900"] = utils_colors.shade(0.7, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2[paletteKey + "Shade"] = utils_colors.shade(0.8, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2[paletteKey + "Tint"] = utils_colors.tint(0.9, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey + "Inverted"] = utils_colors.readableColor(color)(), _objectSpread2[paletteKey + "ShadeInverted"] = utils_colors.tint(0.7, color)({
    referenceColor: tintColorReference
  }), _objectSpread2[paletteKey + "TintInverted"] = utils_colors.shade(0.5, color)({
    referenceColor: shadeColorReference
  }), _objectSpread2), paletteOverrides ? paletteOverrides({
    color: color
  }) : {});
};

exports.generateColorVariants = generateColorVariants;
exports.generateTextVariants = generateTextVariants;
