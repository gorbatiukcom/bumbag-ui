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
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var Tag = function Tag(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: inline-flex;\n  fill: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  height: 1.5rem;\n  justify-content: center;\n\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette === 'text' ? 'gray900' : styleProps.palette
  })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.fontSize('100')(styleProps), utils_colors.fontWeight('semibold')(styleProps), styleProps.variant === 'outlined' && outlinedProperties(styleProps), styleProps.variant === 'tint' && tintProperties(styleProps), styleProps.size && sizeProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TagContent = function TagContent(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  height: inherit;\n  padding: 0 ", "em;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TagClose = function TagClose(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n    height: 1.5em;\n    padding: 0 ", "em;\n    margin-right: ", "em;\n    margin-left: -", "em;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      box-shadow: unset;\n    }\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n"])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.space(1)(styleProps), utils_colors.space(1)(styleProps), utils_colors.space(1)(styleProps), utils_colors.darken(0.1, styleProps.palette)(styleProps), styleProps.variant === 'outlined' && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: unset;\n        color: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette('white700')(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var outlinedProperties = function outlinedProperties(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    background-color: unset;\n    border: 1px solid ", ";\n    color: ", ";\n    fill: ", ";\n  }\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var tintProperties = function tintProperties(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n  }\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.palette + "Tint", {
    dark: styleProps.palette === 'text' ? 'gray900' : styleProps.palette + "Shade"
  })(styleProps), utils_colors.palette(styleProps.palette + "TintInverted", {
    dark: styleProps.palette === 'text' ? 'white' : styleProps.palette + "ShadeInverted"
  })(styleProps), utils_colors.palette(styleProps.palette + "TintInverted", {
    dark: styleProps.palette === 'text' ? 'white' : styleProps.palette + "ShadeInverted"
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var sizeProperties = function sizeProperties(styleProps) {
  var sizes = {
    default: css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    & {\n      ", ";\n    }\n  "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    font-size: 1em;\n    height: 2rem;\n    & {\n      ", ";\n    }\n  "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    font-size: 1.25em;\n    height: 2.5rem;\n    & {\n      ", ";\n    }\n  "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizes[styleProps.size];
};

var Tag_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tag: Tag,
  TagContent: TagContent,
  TagClose: TagClose,
  outlinedProperties: outlinedProperties,
  tintProperties: tintProperties,
  sizeProperties: sizeProperties
});

exports.Tag = Tag;
exports.TagClose = TagClose;
exports.TagContent = TagContent;
exports.Tag_styles = Tag_styles;
exports.outlinedProperties = outlinedProperties;
exports.sizeProperties = sizeProperties;
exports.tintProperties = tintProperties;
