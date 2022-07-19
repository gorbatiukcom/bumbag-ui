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
var Flex_Flex_styles = require('./Flex.styles-8d4bcbcd.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Stack = function Stack(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.orientation === 'vertical' && getVerticalAttributes(styleProps), styleProps.orientation === 'horizontal' && getHorizontalAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var getVerticalAttributes = function getVerticalAttributes(styleProps) {
  return react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& > *:not(:last-child) {\n    margin-bottom: ", "rem;\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.vertical")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.vertical")(styleProps));
};

var getHorizontalAttributes = function getHorizontalAttributes(styleProps) {
  var breakpoint = utils_colors.theme('breakpoints', styleProps.verticalBelow)(styleProps);
  breakpoint = breakpoint ? breakpoint + "px" : styleProps.verticalBelow;
  return react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    @media screen and (min-width: ", ") {\n      display: flex;\n\n      ", "\n\n      ", "\n\n      & > *:not(:last-child) {\n        margin-right: ", "rem;\n\n        & {\n          ", ";\n        }\n      }\n\n      & {\n        ", ";\n      }\n    }\n\n    @media screen and (max-width: ", ") {\n      ", ";\n    }\n  "])), breakpoint, !styleProps.alignX && !styleProps.alignY && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & > * {\n          flex: 1;\n        }\n      "]))), Flex_Flex_styles.getFlexAlignmentAttributes(styleProps), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.horizontal")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.horizontal")(styleProps), breakpoint, getVerticalAttributes(styleProps));
};

var Stack_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Stack: Stack
});

exports.Stack = Stack;
exports.Stack_styles = Stack_styles;
