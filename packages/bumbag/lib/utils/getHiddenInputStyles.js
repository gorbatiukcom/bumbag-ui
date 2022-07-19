'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('../Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
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
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('./gradient.js');
require('@emotion/is-prop-valid');
require('./OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3;
function getHiddenInputStyles(_ref) {
  var iconClassName = _ref.iconClassName,
      checkedCss = _ref.checkedCss,
      disabledCheckedCss = _ref.disabledCheckedCss,
      disabledCheckedIconCss = _ref.disabledCheckedIconCss,
      disabledUncheckedIconCss = _ref.disabledUncheckedIconCss,
      checkedIconCss = _ref.checkedIconCss,
      uncheckedIconCss = _ref.uncheckedIconCss,
      styleProps = _ref.styleProps,
      themeKey = _ref.themeKey;
  // @ts-ignore
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    height: 1em;\n    width: 1em;\n    overflow: hidden;\n    position: absolute;\n    opacity: 0;\n\n    &:focus {\n      outline: none;\n    }\n\n    & + .", " {\n      ", "\n\n      &::before {\n        ", ";\n\n        & {\n          ", ";\n        }\n      }\n    }\n    &:not(:checked) + .", " {\n      ", "\n    }\n    &[disabled] + .", " {\n      background-color: ", ";\n      box-shadow: unset;\n\n      &::before {\n        ", ";\n        & {\n          ", ";\n        }\n      }\n\n      & {\n        ", ";\n      }\n    }\n    &:focus + .", " {\n      border-color: ", ";\n      box-shadow: ", " 0px 0px 0px 3px !important;\n\n      & {\n        ", ";\n      }\n    }\n    &:not([disabled]):checked + .", " {\n      border-color: ", ";\n      ", ";\n    }\n    &:checked + .", " {\n      ", ";\n\n      &::before {\n        ", ";\n      }\n\n      & {\n        ", ";\n      }\n    }\n    &[disabled]:checked + .", "::before {\n      ", ";\n\n      & {\n        ", ";\n      }\n    }\n\n    & {\n      ", ";\n    }\n  "])), iconClassName, styleProps.state && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          border-color: ", ";\n        "])), utils_colors.palette("" + styleProps.state, {
    dark: styleProps.state + "300"
  })(styleProps)), uncheckedIconCss, utils_colors.theme(themeKey, "unchecked")(styleProps), iconClassName, styleProps.state && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        "])), utils_colors.palette(styleProps.state + "Tint", {
    dark: styleProps.state + "Shade"
  })(styleProps)), iconClassName, utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps), disabledUncheckedIconCss, utils_colors.theme(themeKey, "uncheckedDisabled")(styleProps), utils_colors.theme(themeKey, "disabled")(styleProps), iconClassName, utils_colors.palette("" + (styleProps.palette || 'primary'), {
    dark: (styleProps.palette || 'primary') + "300"
  })(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "100", {
    dark: (styleProps.palette || 'primary') + "900"
  })(styleProps), utils_colors.theme(themeKey, "focusChecked")(styleProps), iconClassName, utils_colors.palette("" + (styleProps.palette || 'primary'), {
    dark: (styleProps.palette || 'primary') + "300"
  })(styleProps), checkedCss, iconClassName, disabledCheckedCss, checkedIconCss, utils_colors.theme(themeKey, "checked")(styleProps), iconClassName, disabledCheckedIconCss, utils_colors.theme(themeKey, "checkedDisabled")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
}

exports.getHiddenInputStyles = getHiddenInputStyles;
