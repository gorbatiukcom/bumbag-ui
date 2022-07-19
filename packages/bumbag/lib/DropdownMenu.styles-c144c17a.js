'use strict';

require('react');
require('./Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
require('@emotion/react');
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
var Menu_Menu_styles = require('./Menu.styles-17849743.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var DropdownMenu = function DropdownMenu(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuPopover = function DropdownMenuPopover(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", " !important;\n\n  ", "\n\n  padding: ", "rem 0;\n  position: absolute;\n  min-width: 200px;\n  width: unset;\n"])), utils_colors.altitude(styleProps.altitude)(styleProps), Menu_Menu_styles.Menu(styleProps), utils_colors.space(2)(styleProps));
};
var DropdownMenuItem = function DropdownMenuItem(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuItem(styleProps));
};
var DropdownMenuButton = function DropdownMenuButton(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuDisclosure = function DropdownMenuDisclosure(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuItemIcon = function DropdownMenuItemIcon(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuItemIcon(styleProps));
};
var DropdownMenuDivider = function DropdownMenuDivider(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuDivider(styleProps));
};
var DropdownMenuGroup = function DropdownMenuGroup(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuGroup(styleProps));
};
var DropdownMenuGroupTitle = function DropdownMenuGroupTitle(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuGroupTitle(styleProps));
};
var DropdownMenuOptionGroup = function DropdownMenuOptionGroup(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuOptionGroup(styleProps));
};
var DropdownMenuOptionItem = function DropdownMenuOptionItem(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuOptionItem(styleProps));
};
var DropdownMenuOptionItemIconWrapper = function DropdownMenuOptionItemIconWrapper(styleProps) {
  return css.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n"])), Menu_Menu_styles.MenuOptionItemIconWrapper(styleProps));
};

var DropdownMenu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DropdownMenu: DropdownMenu,
  DropdownMenuPopover: DropdownMenuPopover,
  DropdownMenuItem: DropdownMenuItem,
  DropdownMenuButton: DropdownMenuButton,
  DropdownMenuDisclosure: DropdownMenuDisclosure,
  DropdownMenuItemIcon: DropdownMenuItemIcon,
  DropdownMenuDivider: DropdownMenuDivider,
  DropdownMenuGroup: DropdownMenuGroup,
  DropdownMenuGroupTitle: DropdownMenuGroupTitle,
  DropdownMenuOptionGroup: DropdownMenuOptionGroup,
  DropdownMenuOptionItem: DropdownMenuOptionItem,
  DropdownMenuOptionItemIconWrapper: DropdownMenuOptionItemIconWrapper
});

exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuButton = DropdownMenuButton;
exports.DropdownMenuDisclosure = DropdownMenuDisclosure;
exports.DropdownMenuDivider = DropdownMenuDivider;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuGroupTitle = DropdownMenuGroupTitle;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuItemIcon = DropdownMenuItemIcon;
exports.DropdownMenuOptionGroup = DropdownMenuOptionGroup;
exports.DropdownMenuOptionItem = DropdownMenuOptionItem;
exports.DropdownMenuOptionItemIconWrapper = DropdownMenuOptionItemIconWrapper;
exports.DropdownMenuPopover = DropdownMenuPopover;
exports.DropdownMenu_styles = DropdownMenu_styles;
