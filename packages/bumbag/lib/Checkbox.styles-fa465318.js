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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Checkbox = function Checkbox(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxIcon = function CheckboxIcon(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.2em;\n  height: 1em;\n  position: relative;\n  min-width: 1em;\n  width: 1em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('default')(styleProps), utils_colors.palette('white900', {
    dark: 'gray700'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxLabel = function CheckboxLabel(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('normal')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenCheckbox = function HiddenCheckbox(styleProps) {
  return utils_getHiddenInputStyles.getHiddenInputStyles({
    iconClassName: 'bb-CheckboxIcon',
    checkedIconCss: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-clip: padding-box;\n      content: '';\n      left: calc(50% - 0.1875em);\n      top: calc(50% - 0.375em);\n      position: absolute;\n\n      & {\n        ", ";\n      }\n    "])), styleProps.indeterminate ? react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              background-color: ", ";\n              height: 0.125em;\n              width: 0.625em;\n              top: calc(50% - 0.0625em);\n              left: calc(50% - 0.3125em);\n            "])), utils_colors.palette('primary', {
      dark: 'primary300'
    })(styleProps)) : react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              border: 0.1rem solid ", ";\n              border-left-width: 0;\n              border-top-width: 0;\n              height: 0.625em;\n              transform: rotate(45deg);\n              width: 0.375em;\n            "])), utils_colors.palette('primary', {
      dark: 'primary300'
    })(styleProps))),
    disabledCheckedIconCss: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-color: ", ";\n    "])), utils_colors.palette('gray300', {
      dark: 'gray'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Checkbox.Icon'
  });
};
var CheckboxGroup = function CheckboxGroup(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxField = function CheckboxField(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxGroupField = function CheckboxGroupField(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Checkbox_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Checkbox: Checkbox,
  CheckboxIcon: CheckboxIcon,
  CheckboxLabel: CheckboxLabel,
  HiddenCheckbox: HiddenCheckbox,
  CheckboxGroup: CheckboxGroup,
  CheckboxField: CheckboxField,
  CheckboxGroupField: CheckboxGroupField
});

exports.Checkbox = Checkbox;
exports.CheckboxField = CheckboxField;
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroupField = CheckboxGroupField;
exports.CheckboxIcon = CheckboxIcon;
exports.CheckboxLabel = CheckboxLabel;
exports.Checkbox_styles = Checkbox_styles;
exports.HiddenCheckbox = HiddenCheckbox;
