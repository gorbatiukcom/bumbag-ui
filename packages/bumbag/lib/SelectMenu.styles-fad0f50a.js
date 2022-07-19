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
var utils_colors = require('./getCSSFromStyleObject-fcc96724.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
var utils_getHiddenScrollbarStyles = require('./utils/getHiddenScrollbarStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');
var Select_Select_styles = require('./Select.styles-ff72e480.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
var SelectMenu = function SelectMenu(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: relative;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuPopover = function SelectMenuPopover(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    max-width: 100%;\n    width: 100%;\n    max-height: ", ";\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonWrapper = function SelectMenuButtonWrapper(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  width: 100%;\n"])), Select_Select_styles.SelectWrapper(styleProps));
};
var SelectMenuButton = function SelectMenuButton(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  & {\n    cursor: default;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  && {\n    position: relative;\n  }\n\n  &[aria-expanded=\"true\"] {\n    position: unset;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), Select_Select_styles.Select(styleProps), styleProps.isSelected && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      && {\n        position: unset;\n      }\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonIcon = function SelectMenuButtonIcon(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuClearButtonWrapper = function SelectMenuClearButtonWrapper(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuClearButton = function SelectMenuClearButton(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonIconsWrapper = function SelectMenuButtonIconsWrapper(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 4rem;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.containLabel && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-top: -0.75em;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonText = function SelectMenuButtonText(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  max-width: calc(100% - 4rem);\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.color)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuStaticItem = function SelectMenuStaticItem(styleProps) {
  return css.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1.5)(styleProps), utils_colors.space(4)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItem = function SelectMenuItem(styleProps) {
  return css.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    font-weight: 300;\n\n    &[aria-selected=\"true\"] {\n      background-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      ", "\n    }\n\n    &[aria-disabled=\"true\"] {\n      color: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('primaryTint')(styleProps), utils_colors.palette('primary900')(styleProps), utils_colors.darken(0.01, 'primaryTint')(styleProps), styleProps.tabIndex === 0 && react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          background-color: ", ";\n        "])), utils_colors.darken(0.01, 'primaryTint')(styleProps)), utils_colors.palette('gray100')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItemText = function SelectMenuItemText(styleProps) {
  return css.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItemsWrapper = function SelectMenuItemsWrapper(styleProps) {
  return css.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    padding: ", "rem 0;\n    overflow-y: scroll;\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuSearchInputWrapper = function SelectMenuSearchInputWrapper(styleProps) {
  return css.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuSearchInput = function SelectMenuSearchInput(styleProps) {
  return css.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & > input {\n    border-color: transparent;\n    border-bottom-color: ", ";\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuTagsWrapper = function SelectMenuTagsWrapper(styleProps) {
  return css.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white600')(styleProps), utils_colors.palette('white800')(styleProps), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuField = function SelectMenuField(styleProps) {
  return css.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuLabelWrapper = function SelectMenuLabelWrapper(styleProps) {
  return css.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), Select_Select_styles.LabelWrapper(styleProps));
};
var SelectMenuLabelWrapperBackground = function SelectMenuLabelWrapperBackground(styleProps) {
  return css.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), Select_Select_styles.LabelWrapperBackground(styleProps));
};
function wrapperSizeProperties(styleProps) {
  var properties = {
    small: react.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('400')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
}

var SelectMenu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectMenu: SelectMenu,
  SelectMenuPopover: SelectMenuPopover,
  SelectMenuButtonWrapper: SelectMenuButtonWrapper,
  SelectMenuButton: SelectMenuButton,
  SelectMenuButtonIcon: SelectMenuButtonIcon,
  SelectMenuClearButtonWrapper: SelectMenuClearButtonWrapper,
  SelectMenuClearButton: SelectMenuClearButton,
  SelectMenuButtonIconsWrapper: SelectMenuButtonIconsWrapper,
  SelectMenuButtonText: SelectMenuButtonText,
  SelectMenuStaticItem: SelectMenuStaticItem,
  SelectMenuItem: SelectMenuItem,
  SelectMenuItemText: SelectMenuItemText,
  SelectMenuItemsWrapper: SelectMenuItemsWrapper,
  SelectMenuSearchInputWrapper: SelectMenuSearchInputWrapper,
  SelectMenuSearchInput: SelectMenuSearchInput,
  SelectMenuTagsWrapper: SelectMenuTagsWrapper,
  SelectMenuField: SelectMenuField,
  SelectMenuLabelWrapper: SelectMenuLabelWrapper,
  SelectMenuLabelWrapperBackground: SelectMenuLabelWrapperBackground,
  wrapperSizeProperties: wrapperSizeProperties
});

exports.SelectMenu = SelectMenu;
exports.SelectMenuButton = SelectMenuButton;
exports.SelectMenuButtonIcon = SelectMenuButtonIcon;
exports.SelectMenuButtonIconsWrapper = SelectMenuButtonIconsWrapper;
exports.SelectMenuButtonText = SelectMenuButtonText;
exports.SelectMenuButtonWrapper = SelectMenuButtonWrapper;
exports.SelectMenuClearButton = SelectMenuClearButton;
exports.SelectMenuClearButtonWrapper = SelectMenuClearButtonWrapper;
exports.SelectMenuField = SelectMenuField;
exports.SelectMenuItem = SelectMenuItem;
exports.SelectMenuItemText = SelectMenuItemText;
exports.SelectMenuItemsWrapper = SelectMenuItemsWrapper;
exports.SelectMenuLabelWrapper = SelectMenuLabelWrapper;
exports.SelectMenuLabelWrapperBackground = SelectMenuLabelWrapperBackground;
exports.SelectMenuPopover = SelectMenuPopover;
exports.SelectMenuSearchInput = SelectMenuSearchInput;
exports.SelectMenuSearchInputWrapper = SelectMenuSearchInputWrapper;
exports.SelectMenuStaticItem = SelectMenuStaticItem;
exports.SelectMenuTagsWrapper = SelectMenuTagsWrapper;
exports.SelectMenu_styles = SelectMenu_styles;
exports.wrapperSizeProperties = wrapperSizeProperties;
