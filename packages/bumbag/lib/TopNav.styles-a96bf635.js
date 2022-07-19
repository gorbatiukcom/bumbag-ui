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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var TopNav = function TopNav(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  min-height: 60px;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TopNavSection = function TopNavSection(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n\n  &:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  &&&&& li {\n    align-items: center;\n    display: flex;\n  }\n\n  &&&&& > *:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.space(1, 'minor')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TopNavItem = function TopNavItem(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: inherit;\n  height: 100%;\n  font-weight: ", ";\n  text-decoration: none;\n\n  &&&& {\n    display: flex;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n    fill: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), (styleProps.href || styleProps.onClick || styleProps.navId) && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      &&&&&& {\n        cursor: pointer;\n        padding: 0 0.8rem;\n      }\n    "]))), styleProps.variant === 'default' && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      min-height: 2.75rem;\n    "]))), styleProps.variant === 'pill' && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n      height: 44px;\n    "])), utils_colors.borderRadius('default')(styleProps)), styleProps.isActive && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      color: ", ";\n      fill: ", ";\n\n      ", " & {\n        ", ";\n      }\n    "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        box-shadow: inset 0 -2px 0 0 ", ";\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.active")(styleProps)), styleProps.variant !== 'pill' && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'pill' && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.hover")(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        box-shadow: inset 0 -2px 0 0 ", ";\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant !== 'pill' && react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'pill' && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var TopNav_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TopNav: TopNav,
  TopNavSection: TopNavSection,
  TopNavItem: TopNavItem
});

exports.TopNav = TopNav;
exports.TopNavItem = TopNavItem;
exports.TopNavSection = TopNavSection;
exports.TopNav_styles = TopNav_styles;
