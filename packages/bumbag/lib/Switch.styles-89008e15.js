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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var Switch = function Switch(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchIcon = function SwitchIcon(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 1em;\n  height: 1.5em;\n  position: relative;\n  width: 2.5em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('default')(styleProps), utils_colors.palette('gray100', {
    dark: 'gray700'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchLabel = function SwitchLabel(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('normal')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenSwitch = function HiddenSwitch(styleProps) {
  return utils_getHiddenInputStyles.getHiddenInputStyles({
    iconClassName: 'bb-SwitchIcon',
    checkedCss: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      transition: all ease 0.2s;\n    "])), utils_colors.palette(styleProps.palette || 'primary', {
      dark: (styleProps.palette || 'primary') + "700"
    })(styleProps)),
    disabledCheckedCss: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-color: ", ";\n    "])), utils_colors.palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps)),
    disabledUncheckedIconCss: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background: ", ";\n    "])), utils_colors.palette('white700')(styleProps)),
    checkedIconCss: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-color: ", ";\n      left: 1.25em;\n    "])), utils_colors.palette(styleProps.palette || 'primary', {
      dark: (styleProps.palette || 'primary') + "700"
    })(styleProps)),
    disabledCheckedIconCss: react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-color: ", ";\n    "])), utils_colors.palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps)),
    uncheckedIconCss: react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background: ", ";\n      content: '';\n      border-radius: 100%;\n      border: 1px solid ", ";\n      height: 1em;\n      width: 1em;\n      top: 0.2em;\n      left: 0.2em;\n      transition: all ease 0.2s;\n      position: absolute;\n    "])), utils_colors.palette('default', {
      dark: 'gray100'
    })(styleProps), utils_colors.palette('gray100', {
      dark: 'gray700'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Switch.Icon'
  });
};
var SwitchGroup = function SwitchGroup(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchField = function SwitchField(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchGroupField = function SwitchGroupField(styleProps) {
  return css.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Switch_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Switch: Switch,
  SwitchIcon: SwitchIcon,
  SwitchLabel: SwitchLabel,
  HiddenSwitch: HiddenSwitch,
  SwitchGroup: SwitchGroup,
  SwitchField: SwitchField,
  SwitchGroupField: SwitchGroupField
});

exports.HiddenSwitch = HiddenSwitch;
exports.Switch = Switch;
exports.SwitchField = SwitchField;
exports.SwitchGroup = SwitchGroup;
exports.SwitchGroupField = SwitchGroupField;
exports.SwitchIcon = SwitchIcon;
exports.SwitchLabel = SwitchLabel;
exports.Switch_styles = Switch_styles;
