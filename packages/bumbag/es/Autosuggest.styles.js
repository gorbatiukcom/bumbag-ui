import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { k as theme, H as palette, J as space } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import { getHiddenScrollbarStyles } from './utils/getHiddenScrollbarStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Autosuggest = function Autosuggest(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestPopover = function AutosuggestPopover(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&& {\n    max-width: 100%;\n    width: 100%;\n    max-height: ", ";\n    display: flex;\n    flex-direction: column;\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestItem = function AutosuggestItem(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  &&& {\n    font-weight: 300;\n\n    &[aria-selected=\"true\"] {\n      background-color: ", ";\n    }\n\n    &[aria-disabled=\"true\"] {\n      color: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('white600')(styleProps), palette('gray100')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestItemText = function AutosuggestItemText(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestStaticItem = function AutosuggestStaticItem(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), space(1.5)(styleProps), space(4)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestClearButtonWrapper = function AutosuggestClearButtonWrapper(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: center;\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(1)(styleProps), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestClearButton = function AutosuggestClearButton(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(1)(styleProps), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestInput = function AutosuggestInput(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AutosuggestField = function AutosuggestField(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ItemsWrapper = function ItemsWrapper(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  max-height: calc(", " - 1rem);\n  overflow-y: scroll;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, getHiddenScrollbarStyles(), theme(styleProps.themeKey, "styles.base")(styleProps));
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

export { Autosuggest_styles as A, ItemsWrapper as I, Autosuggest as a, AutosuggestPopover as b, AutosuggestInput as c, AutosuggestClearButtonWrapper as d, AutosuggestClearButton as e, AutosuggestItemText as f, AutosuggestStaticItem as g, AutosuggestItem as h, AutosuggestField as i };
