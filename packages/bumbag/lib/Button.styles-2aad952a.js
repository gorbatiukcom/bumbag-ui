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
var theme_palette = require('./theme/palette.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
var defaultPalette = theme_palette['default']({});
var Button = function Button(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  fill: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: ", ";\n  min-height: 2.75rem;\n  justify-content: center;\n  padding: 0 ", "rem;\n  text-decoration: none;\n  hyphens: auto;\n  transition: box-shadow 0.1s ease-in-out 0s, border 0.1s, background-color 0.1s;\n\n  ", "\n\n  & {\n    ", ";\n  }\n\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    ", ";\n  }\n\n  ", "\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n  ", ";\n  ", ";\n"])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.space(4)(styleProps), styleProps.palette === 'default' && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), utils_colors.palette('white900', {
    dark: 'gray600'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps), getDisabledProperties(styleProps), styleProps.size && getSizeProperties(styleProps), styleProps.isLoading && getLoadingProperties(styleProps), styleProps.isStatic && getStaticProperties(styleProps), isInteractive(styleProps) && getInteractiveProperties(styleProps), styleProps.variant === 'outlined' && getOutlinedProperties(styleProps), styleProps.variant === 'link' && getLinkProperties(styleProps), styleProps.variant === 'ghost' && getGhostProperties(styleProps));
};
var ButtonIcon = function ButtonIcon(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.isBefore && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: -", "em;\n      margin-right: ", "em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(1)(styleProps), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.before")(styleProps)), styleProps.isAfter && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: ", "em;\n      margin-right: -", "em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(2)(styleProps), utils_colors.space(1)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.after")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonSpinnerWrapper = function ButtonSpinnerWrapper(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n\n  & + .bb-Text {\n    opacity: 0;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonSpinner = function ButtonSpinner(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonClose = function ButtonClose(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    min-height: unset;\n    padding: ", "em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var isInteractive = function isInteractive(styleProps) {
  return !styleProps.isStatic && !styleProps.isLoading && !styleProps.disabled && styleProps.variant !== 'link';
};
var getDisabledProperties = function getDisabledProperties(styleProps) {
  return react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    cursor: not-allowed;\n    opacity: ", ";\n    outline: unset;\n    pointer-events: unset;\n  }\n  & {\n    ", ";\n  }\n"])), styleProps.colorMode === 'dark' ? '0.5' : '0.7', utils_colors.theme(styleProps.themeKey, "styles.disabled")(styleProps));
};
var getSizeProperties = function getSizeProperties(styleProps) {
  var styles = {
    small: react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "em;\n        min-height: 2rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('100')(styleProps), utils_colors.space(3)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        min-height: 3rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "em;\n        min-height: 3.25rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.space(6)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return styles[styleProps.size];
};
var getLoadingProperties = function getLoadingProperties(styleProps) {
  return react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    cursor: not-allowed;\n    position: relative;\n\n    &:focus {\n      box-shadow: unset !important;\n      outline: unset !important;\n    }\n  }\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.loading")(styleProps));
};
var getStaticProperties = function getStaticProperties(styleProps) {
  return react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    cursor: default;\n    outline: unset;\n\n    &:focus {\n      box-shadow: unset !important;\n      outline: unset !important;\n    }\n  }\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.static")(styleProps));
};
var getInteractiveProperties = function getInteractiveProperties(styleProps) {
  return react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &:focus {\n    outline: unset;\n    z-index: 2;\n    box-shadow: ", "\n        0px 0px 0px 1px,\n      ", "\n        0px 0px 0px 3px;\n\n    ", ";\n\n    && {\n      ", ";\n    }\n  }\n\n  ", ";\n\n  ", ";\n"])), utils_colors.palette(styleProps.palette === 'default' ? 'gray200' : styleProps.palette, {
    dark: styleProps.palette === 'default' ? 'gray700' : styleProps.palette
  })(styleProps), utils_colors.palette(styleProps.palette === 'default' ? 'gray100' : styleProps.palette + "200", {
    dark: styleProps.palette === 'default' ? 'gray600' : styleProps.palette + "200"
  })(styleProps), styleProps.palette === 'default' && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-color: transparent;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.variant !== 'link' && react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    &:hover {\n      background-color: ", ";\n\n      & {\n        ", ";\n      }\n    }\n  "])), utils_colors.palette((styleProps.palette === 'default' ? 'white' : styleProps.palette) + "600", {
    dark: "" + (styleProps.palette === 'default' ? 'black100' : styleProps.palette + "600")
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.hover")(styleProps)), styleProps.variant !== 'link' && react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    &:hover:active {\n      background-color: ", ";\n\n      & {\n        ", ";\n      }\n    }\n  "])), utils_colors.palette(styleProps.palette === 'default' ? 'white800' : styleProps.palette + "700", {
    dark: "" + (styleProps.palette === 'default' ? 'black200' : styleProps.palette + "700")
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.hoveractive")(styleProps)));
};
var getLinkProperties = function getLinkProperties(styleProps) {
  return react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    border: 0;\n    background: unset;\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.palette === 'default' ? utils_colors.palette('text')(styleProps) : utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.palette === 'default' ? utils_colors.palette('text')(styleProps) : utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.link")(styleProps));
};
var getOutlinedProperties = function getOutlinedProperties(styleProps) {
  return react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    ", ";\n  }\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('default')(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), isInteractive(styleProps) && react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      &:hover {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &:hover:active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n    "])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "Tint", {
    dark: styleProps.palette + "Shade"
  })(styleProps), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "100", {
    dark: styleProps.palette + "900"
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var getGhostProperties = function getGhostProperties(styleProps) {
  return react.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    background-color: unset;\n    border: unset;\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n    &:hover:active {\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n  }\n  & {\n    ", ";\n  }\n"])), styleProps.palette === 'default' ? utils_colors.palette('defaultInverted')(styleProps) : utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.palette === 'default' ? utils_colors.palette('defaultInverted')(styleProps) : utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.ghost")(styleProps));
};

var Button_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: Button,
  ButtonIcon: ButtonIcon,
  ButtonSpinnerWrapper: ButtonSpinnerWrapper,
  ButtonSpinner: ButtonSpinner,
  ButtonClose: ButtonClose,
  isInteractive: isInteractive,
  getDisabledProperties: getDisabledProperties,
  getSizeProperties: getSizeProperties,
  getLoadingProperties: getLoadingProperties,
  getStaticProperties: getStaticProperties,
  getInteractiveProperties: getInteractiveProperties,
  getLinkProperties: getLinkProperties,
  getOutlinedProperties: getOutlinedProperties,
  getGhostProperties: getGhostProperties
});

exports.Button = Button;
exports.ButtonClose = ButtonClose;
exports.ButtonIcon = ButtonIcon;
exports.ButtonSpinner = ButtonSpinner;
exports.ButtonSpinnerWrapper = ButtonSpinnerWrapper;
exports.Button_styles = Button_styles;
exports.getDisabledProperties = getDisabledProperties;
exports.getGhostProperties = getGhostProperties;
exports.getInteractiveProperties = getInteractiveProperties;
exports.getLinkProperties = getLinkProperties;
exports.getLoadingProperties = getLoadingProperties;
exports.getOutlinedProperties = getOutlinedProperties;
exports.getSizeProperties = getSizeProperties;
exports.getStaticProperties = getStaticProperties;
exports.isInteractive = isInteractive;
