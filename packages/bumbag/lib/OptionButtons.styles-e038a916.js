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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var OptionButtons = function OptionButtons(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButton = function OptionButton(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFullWidth && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      flex: 1;\n    "]))), styleProps.checked && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButtonsWrapper = function OptionButtonsWrapper(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isFullWidth && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: fit-content;\n    "]))), styleProps.state && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      box-shadow: ", " 0px 0px 0px\n        3px;\n\n      & > *[aria-checked='false'] {\n        border-color: ", ";\n      }\n    "])), utils_colors.palette(styleProps.state + "Tint", {
    dark: styleProps.state + "Shade"
  })(styleProps), utils_colors.palette("" + styleProps.state)(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButtonsField = function OptionButtonsField(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var OptionButtons_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  OptionButtons: OptionButtons,
  OptionButton: OptionButton,
  OptionButtonsWrapper: OptionButtonsWrapper,
  OptionButtonsField: OptionButtonsField
});

exports.OptionButton = OptionButton;
exports.OptionButtons = OptionButtons;
exports.OptionButtonsField = OptionButtonsField;
exports.OptionButtonsWrapper = OptionButtonsWrapper;
exports.OptionButtons_styles = OptionButtons_styles;
