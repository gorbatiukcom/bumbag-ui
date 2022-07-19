'use strict';

require('react');
require('./Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c170a0e0.js');
require('./ColorMode/ColorModeContext.js');
require('./utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('./getCSSFromStyleObject-fcc96724.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var defaultDashArrayValueMax = 325;
var defaultDashOffset = 200;
var progressDashArrayValue = 126;
var progressDashOffset = 60;
var SpinnerWrapper = function SpinnerWrapper(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  line-height: ", ";\n  font-size: 20px;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.lineHeight('none')(styleProps), styleProps.size && getSizeProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Spinner = function Spinner(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 1em;\n  height: 1em;\n  transform: rotate(-90deg);\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), typeof styleProps.value === 'undefined' && getSpinnerAnimation(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TrackCircle = function TrackCircle(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  stroke: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.trackColor || styleProps.color + "100", {
    dark: styleProps.trackColor || styleProps.color + "900"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LoaderCircle = function LoaderCircle(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  stroke-dasharray: ", ";\n  stroke-dashoffset: ", ";\n  stroke: ", ";\n  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  & {\n    ", ";\n  }\n"])), typeof styleProps.value === 'number' ? progressDashArrayValue : getDashArrayValue(styleProps), typeof styleProps.value === 'number' ? progressDashArrayValue - styleProps.value / 100 * progressDashArrayValue + "px" : defaultDashOffset + "px", utils_colors.palette(styleProps.color)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getDashArrayValue = function getDashArrayValue(styleProps) {
  var percentageString = styleProps.perimeter.split('%')[0];
  var percentage = parseFloat(percentageString);
  var scalar = percentage / 100;
  return defaultDashOffset + scalar * (defaultDashArrayValueMax - defaultDashOffset);
};
var getSizeProperties = function getSizeProperties(styleProps) {
  var sizeProperties = {
    small: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 14px;\n        border-width: 2px;\n      }\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 28px;\n      }\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 36px;\n      }\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeProperties[styleProps.size];
};
var rotate = react.keyframes(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var getSpinnerAnimation = function getSpinnerAnimation(styleProps) {
  return react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  animation: ", " ", " infinite linear;\n"])), rotate, styleProps.duration);
};

var Spinner_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  defaultDashArrayValueMax: defaultDashArrayValueMax,
  defaultDashOffset: defaultDashOffset,
  progressDashArrayValue: progressDashArrayValue,
  progressDashOffset: progressDashOffset,
  SpinnerWrapper: SpinnerWrapper,
  Spinner: Spinner,
  TrackCircle: TrackCircle,
  LoaderCircle: LoaderCircle,
  getDashArrayValue: getDashArrayValue,
  getSizeProperties: getSizeProperties,
  rotate: rotate,
  getSpinnerAnimation: getSpinnerAnimation
});

exports.LoaderCircle = LoaderCircle;
exports.Spinner = Spinner;
exports.SpinnerWrapper = SpinnerWrapper;
exports.Spinner_styles = Spinner_styles;
exports.TrackCircle = TrackCircle;
exports.defaultDashArrayValueMax = defaultDashArrayValueMax;
exports.defaultDashOffset = defaultDashOffset;
exports.getDashArrayValue = getDashArrayValue;
exports.getSizeProperties = getSizeProperties;
exports.getSpinnerAnimation = getSpinnerAnimation;
exports.progressDashArrayValue = progressDashArrayValue;
exports.progressDashOffset = progressDashOffset;
exports.rotate = rotate;
