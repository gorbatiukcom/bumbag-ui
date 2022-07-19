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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
var Alert = function Alert(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  position: relative;\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background', {
    dark: 'gray900'
  })(styleProps), utils_colors.borderRadius('default')(styleProps), styleProps.variant === 'bordered' && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), utils_colors.palette('white800', {
    dark: 'gray'
  })(styleProps)), styleProps.variant === 'shadowed' && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n    "])), utils_colors.altitude('100')(styleProps)), styleProps.variant === 'tint' && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), utils_colors.palette(styleProps.type + "Tint", {
    dark: styleProps.type + "Shade"
  })(styleProps)), styleProps.variant === 'fill' && getFillAttributes(styleProps), (styleProps.accent === 'top' || styleProps.accent === 'bottom') && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: block;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertContent = function AlertContent(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isInline && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: flex;\n\n      & > *:first-child {\n        margin-right: ", "rem;\n      }\n    "])), utils_colors.space(1)(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertWrapper = function AlertWrapper(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  padding: ", "rem ", "rem;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1, 'major')(styleProps), utils_colors.space(2, 'major')(styleProps), styleProps.isInline && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: flex;\n\n      & > *:first-child {\n        margin-right: ", "rem;\n      }\n    "])), utils_colors.space(1)(styleProps)), styleProps.accent === true && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: ", ";\n    "])), styleProps.accentSize), styleProps.accent === 'bottom' && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-bottom: ", ";\n    "])), styleProps.accentSize), styleProps.accent === 'top' && react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-top: ", ";\n    "])), styleProps.accentSize), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertTitle = function AlertTitle(styleProps) {
  return css.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertDescription = function AlertDescription(styleProps) {
  return css.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertIconWrapper = function AlertIconWrapper(styleProps) {
  return css.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  line-height: 0.9;\n  margin-right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(4)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertCloseButton = function AlertCloseButton(styleProps) {
  return css.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.isInline && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding: 0;\n      "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertAccent = function AlertAccent(styleProps) {
  return css.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: absolute;\n  background-color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.type)(styleProps), (styleProps.accent === true || styleProps.accent === 'bottom') && react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      bottom: 0;\n    "]))), styleProps.accent === 'top' && react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: 0;\n    "]))), (styleProps.accent === true || styleProps.accent === 'left') && react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 100%;\n      width: ", ";\n    "])), styleProps.accentSize), (styleProps.accent === 'top' || styleProps.accent === 'bottom') && react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: 100%;\n      height: ", ";\n    "])), styleProps.accentSize), styleProps.isBackground && react.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      opacity: 0.3;\n      left: 0;\n    "]))), !styleProps.isBackground && styleProps.countdown && react.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", "\n      ", ";\n    "])), styleProps.accent === true ? react.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            animation: ", " ", "ms linear forwards;\n          "])), heightCountdown, styleProps.countdown) : react.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))), styleProps.accent === 'top' || styleProps.accent === 'bottom' ? react.css(_templateObject27 || (_templateObject27 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            animation: ", " ", "ms linear forwards;\n          "])), widthCountdown, styleProps.countdown) : react.css(_templateObject28 || (_templateObject28 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getFillAttributes = function getFillAttributes(styleProps) {
  return react.css(_templateObject29 || (_templateObject29 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n"])), utils_colors.palette(styleProps.type)(styleProps), utils_colors.palette(styleProps.type + "Inverted")(styleProps));
};
var heightCountdown = react.keyframes(_templateObject30 || (_templateObject30 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  from {\n    height: 100%;\n  }\n\n  to {\n    height: 0%;\n  }\n"])));
var widthCountdown = react.keyframes(_templateObject31 || (_templateObject31 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n"])));

var Alert_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Alert: Alert,
  AlertContent: AlertContent,
  AlertWrapper: AlertWrapper,
  AlertTitle: AlertTitle,
  AlertDescription: AlertDescription,
  AlertIconWrapper: AlertIconWrapper,
  AlertCloseButton: AlertCloseButton,
  AlertAccent: AlertAccent,
  getFillAttributes: getFillAttributes,
  heightCountdown: heightCountdown,
  widthCountdown: widthCountdown
});

exports.Alert = Alert;
exports.AlertAccent = AlertAccent;
exports.AlertCloseButton = AlertCloseButton;
exports.AlertContent = AlertContent;
exports.AlertDescription = AlertDescription;
exports.AlertIconWrapper = AlertIconWrapper;
exports.AlertTitle = AlertTitle;
exports.AlertWrapper = AlertWrapper;
exports.Alert_styles = Alert_styles;
exports.getFillAttributes = getFillAttributes;
exports.heightCountdown = heightCountdown;
exports.widthCountdown = widthCountdown;
