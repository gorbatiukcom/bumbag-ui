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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var SideNav = function SideNav(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavLevel = function SideNavLevel(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    margin-left: unset;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.level === 0 && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-bottom: ", "rem;\n    "])), utils_colors.space(3, 'major')(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavLevelTitle = function SideNavLevelTitle(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-size: ", "rem;\n  font-weight: ", ";\n  margin-bottom: ", "rem;\n  padding-left: ", "rem;\n  text-transform: uppercase;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('150')(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.space(2)(styleProps), styleProps.level + 1, utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavItem = function SideNavItem(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  min-height: 2.75em;\n  padding: 0 1rem;\n  padding-left: ", "rem;\n  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;\n\n  a& {\n    color: ", ";\n    fill: ", ";\n    text-decoration: unset;\n\n    &:hover {\n      color: ", ";\n      fill: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n\n  &&&:hover {\n    color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  ", "\n"])), utils_colors.palette('text200')(styleProps), styleProps.level === 1 ? utils_colors.space(2, 'major')(styleProps) : styleProps.level, utils_colors.palette('text200')(styleProps), utils_colors.palette('text200')(styleProps), utils_colors.palette('text200')(styleProps), utils_colors.palette('text200')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps), utils_colors.palette('primary', {
    dark: 'primary300'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.hover")(styleProps), utils_colors.palette('primaryTint', {
    dark: 'primaryShade'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.isActive && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      box-shadow: inset 3px 0 0 0 ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('primaryTint', {
    dark: 'primaryShade'
  })(styleProps), utils_colors.palette('primary')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.active")(styleProps)));
};

var SideNav_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SideNav: SideNav,
  SideNavLevel: SideNavLevel,
  SideNavLevelTitle: SideNavLevelTitle,
  SideNavItem: SideNavItem
});

exports.SideNav = SideNav;
exports.SideNavItem = SideNavItem;
exports.SideNavLevel = SideNavLevel;
exports.SideNavLevelTitle = SideNavLevelTitle;
exports.SideNav_styles = SideNav_styles;
