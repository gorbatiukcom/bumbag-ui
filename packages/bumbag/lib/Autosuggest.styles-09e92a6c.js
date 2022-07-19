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
var utils_getHiddenScrollbarStyles = require('./utils/getHiddenScrollbarStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Autosuggest = function Autosuggest(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: relative;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestPopover = function AutosuggestPopover(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    max-width: 100%;\n    width: 100%;\n    max-height: ", ";\n    display: flex;\n    flex-direction: column;\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestItem = function AutosuggestItem(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    font-weight: 300;\n\n    &[aria-selected=\"true\"] {\n      background-color: ", ";\n    }\n\n    &[aria-disabled=\"true\"] {\n      color: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white600')(styleProps), utils_colors.palette('gray100')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestItemText = function AutosuggestItemText(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestStaticItem = function AutosuggestStaticItem(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1.5)(styleProps), utils_colors.space(4)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestClearButtonWrapper = function AutosuggestClearButtonWrapper(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: center;\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1)(styleProps), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestClearButton = function AutosuggestClearButton(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1)(styleProps), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestInput = function AutosuggestInput(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestField = function AutosuggestField(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ItemsWrapper = function ItemsWrapper(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  max-height: calc(", " - 1rem);\n  overflow-y: scroll;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Autosuggest_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Autosuggest: Autosuggest,
  AutosuggestPopover: AutosuggestPopover,
  AutosuggestItem: AutosuggestItem,
  AutosuggestItemText: AutosuggestItemText,
  AutosuggestStaticItem: AutosuggestStaticItem,
  AutosuggestClearButtonWrapper: AutosuggestClearButtonWrapper,
  AutosuggestClearButton: AutosuggestClearButton,
  AutosuggestInput: AutosuggestInput,
  AutosuggestField: AutosuggestField,
  ItemsWrapper: ItemsWrapper
});

exports.Autosuggest = Autosuggest;
exports.AutosuggestClearButton = AutosuggestClearButton;
exports.AutosuggestClearButtonWrapper = AutosuggestClearButtonWrapper;
exports.AutosuggestField = AutosuggestField;
exports.AutosuggestInput = AutosuggestInput;
exports.AutosuggestItem = AutosuggestItem;
exports.AutosuggestItemText = AutosuggestItemText;
exports.AutosuggestPopover = AutosuggestPopover;
exports.AutosuggestStaticItem = AutosuggestStaticItem;
exports.Autosuggest_styles = Autosuggest_styles;
exports.ItemsWrapper = ItemsWrapper;
