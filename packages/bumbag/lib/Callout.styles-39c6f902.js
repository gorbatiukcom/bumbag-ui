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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Callout = function Callout(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background', {
    dark: 'gray900'
  })(styleProps), styleProps.showCloseButton && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      position: relative;\n    "]))), styleProps.hasTint && getTintAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutContent = function CalloutContent(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutHeader = function CalloutHeader(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3, 'minor')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutTitle = function CalloutTitle(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-size: ", "em;\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('300')(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutFooter = function CalloutFooter(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-top: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutIconWrapper = function CalloutIconWrapper(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n  & .bb-CalloutContent .bb-Icon {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutClose = function CalloutClose(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1, 'major')(styleProps), utils_colors.space(1, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutOverlay = function CalloutOverlay(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  max-width: 500px;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.altitude('200')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getTintAttributes = function getTintAttributes(styleProps) {
  return react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    && {\n      border-color: ", " !important;\n    }\n\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n\n    & {\n      ", ";\n    }\n  "])), utils_colors.palette(styleProps.type + "100")(styleProps), utils_colors.palette(styleProps.type + "Tint", {
    dark: styleProps.type + "Shade"
  })(styleProps), utils_colors.palette(styleProps.type + "TintInverted", {
    dark: styleProps.type + "ShadeInverted"
  })(styleProps), utils_colors.palette(styleProps.type + "TintInverted", {
    dark: styleProps.type + "ShadeInverted"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "tint")(styleProps));
};

var Callout_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Callout: Callout,
  CalloutContent: CalloutContent,
  CalloutHeader: CalloutHeader,
  CalloutTitle: CalloutTitle,
  CalloutFooter: CalloutFooter,
  CalloutIconWrapper: CalloutIconWrapper,
  CalloutClose: CalloutClose,
  CalloutOverlay: CalloutOverlay,
  getTintAttributes: getTintAttributes
});

exports.Callout = Callout;
exports.CalloutClose = CalloutClose;
exports.CalloutContent = CalloutContent;
exports.CalloutFooter = CalloutFooter;
exports.CalloutHeader = CalloutHeader;
exports.CalloutIconWrapper = CalloutIconWrapper;
exports.CalloutOverlay = CalloutOverlay;
exports.CalloutTitle = CalloutTitle;
exports.Callout_styles = Callout_styles;
exports.getTintAttributes = getTintAttributes;
