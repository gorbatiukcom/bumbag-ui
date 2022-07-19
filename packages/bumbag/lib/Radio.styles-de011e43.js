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
var utils_getHiddenInputStyles = require('./utils/getHiddenInputStyles.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Radio = function Radio(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioIcon = function RadioIcon(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 100%;\n  height: 1em;\n  position: relative;\n  min-width: 1em;\n  width: 1em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('default')(styleProps), utils_colors.palette('white900', {
    dark: 'gray700'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioLabel = function RadioLabel(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('normal')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenRadio = function HiddenRadio(styleProps) {
  return utils_getHiddenInputStyles.getHiddenInputStyles({
    iconClassName: 'bb-RadioIcon',
    checkedIconCss: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background: ", ";\n      border-radius: 50%;\n      content: '';\n      height: 0.5em;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 0.5em;\n    "])), utils_colors.palette('primary', {
      dark: 'primary300'
    })(styleProps)),
    disabledCheckedIconCss: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-color: ", ";\n      background: ", ";\n    "])), utils_colors.palette('gray300', {
      dark: 'gray'
    })(styleProps), utils_colors.palette('gray300', {
      dark: 'gray'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Radio.Icon'
  });
};
var RadioField = function RadioField(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioGroup = function RadioGroup(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioGroupField = function RadioGroupField(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Radio_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Radio: Radio,
  RadioIcon: RadioIcon,
  RadioLabel: RadioLabel,
  HiddenRadio: HiddenRadio,
  RadioField: RadioField,
  RadioGroup: RadioGroup,
  RadioGroupField: RadioGroupField
});

exports.HiddenRadio = HiddenRadio;
exports.Radio = Radio;
exports.RadioField = RadioField;
exports.RadioGroup = RadioGroup;
exports.RadioGroupField = RadioGroupField;
exports.RadioIcon = RadioIcon;
exports.RadioLabel = RadioLabel;
exports.Radio_styles = Radio_styles;
