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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var Menu = function Menu(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuItem = function MenuItem(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: unset;\n  cursor: pointer;\n  display: block;\n  font-weight: ", ";\n  padding: ", "rem ", "rem;\n  text-align: left;\n  width: 100%;\n  transition: background-color 0.1s;\n\n  a& {\n    color: unset;\n    fill: unset;\n    text-decoration: unset;\n\n    &:hover {\n      color: unset;\n      fill: unset;\n    }\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:not(:disabled):focus {\n    outline: unset;\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n  &:not(:disabled):hover {\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n  &:not(:disabled):focus:active,\n  &:not(:disabled):hover:active {\n    background-color: ", ";\n  }\n\n  ", "\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), utils_colors.space(1.5)(styleProps), utils_colors.space(4)(styleProps), utils_colors.theme(styleProps.themeKey, "disabled")(styleProps), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "focus")(styleProps), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "hover")(styleProps), utils_colors.palette('white700', {
    dark: 'black300'
  })(styleProps), styleProps.isActive && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n\n      &&:hover,\n      &&:focus {\n        background-color: ", ";\n      }\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('white700', {
    dark: 'black300'
  })(styleProps), utils_colors.palette('white800', {
    dark: 'black400'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "active")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuItemIcon = function MenuItemIcon(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isBefore && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-right: ", "rem;\n    "])), utils_colors.space(2)(styleProps)), styleProps.isAfter && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: ", "rem;\n    "])), utils_colors.space(2)(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuDivider = function MenuDivider(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    margin: ", "rem 0;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuGroup = function MenuGroup(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & + & {\n    margin-top: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionGroup = function MenuOptionGroup(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionItem = function MenuOptionItem(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  &[aria-checked=\"true\"] {\n    color: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('primary')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionItemIconWrapper = function MenuOptionItemIconWrapper(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n  width: 16px;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuGroupTitle = function MenuGroupTitle(styleProps) {
  return css.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  letter-spacing: ", ";\n  padding: ", "rem ", "rem;\n  padding-top: ", "rem;\n  text-transform: uppercase;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('text100')(styleProps), utils_colors.fontSize('100')(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.letterSpacing('400')(styleProps), utils_colors.space(2)(styleProps), utils_colors.space(4)(styleProps), utils_colors.space(1)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Menu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Menu: Menu,
  MenuItem: MenuItem,
  MenuItemIcon: MenuItemIcon,
  MenuDivider: MenuDivider,
  MenuGroup: MenuGroup,
  MenuOptionGroup: MenuOptionGroup,
  MenuOptionItem: MenuOptionItem,
  MenuOptionItemIconWrapper: MenuOptionItemIconWrapper,
  MenuGroupTitle: MenuGroupTitle
});

exports.Menu = Menu;
exports.MenuDivider = MenuDivider;
exports.MenuGroup = MenuGroup;
exports.MenuGroupTitle = MenuGroupTitle;
exports.MenuItem = MenuItem;
exports.MenuItemIcon = MenuItemIcon;
exports.MenuOptionGroup = MenuOptionGroup;
exports.MenuOptionItem = MenuOptionItem;
exports.MenuOptionItemIconWrapper = MenuOptionItemIconWrapper;
exports.Menu_styles = Menu_styles;
