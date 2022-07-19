'use strict';

require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c170a0e0.js');
var utils_colors = require('./getCSSFromStyleObject-fcc96724.js');
var utils_gradient = require('./utils/gradient.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var FLEX_HORIZONTAL_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
var FLEX_VERTICAL_ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};
var style = function style(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n"])), styleProps.style, getAlignmentAttributes(styleProps), utils_gradient.getGradientStyles({
    direction: styleProps.gradientDirection,
    from: styleProps.gradientFrom,
    fromAt: styleProps.gradientFromAt,
    via: styleProps.gradientVia,
    viaAt: styleProps.gradientViaAt,
    to: styleProps.gradientTo,
    toAt: styleProps.gradientToAt
  })(styleProps));
};
var Box = function Box(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin: unset;\n  padding: unset;\n  border: unset;\n  background: unset;\n  font: unset;\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n\n  &:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, 'styles.base')(styleProps));
};
function getAlignmentAttributes(styleProps) {
  return react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    ", "\n  "])), (styleProps.alignY || styleProps.alignX) && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: flex;\n\n      ", "\n\n      ", "\n\n      ", "\n    "])), !styleProps.display && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          flex-direction: column;\n        "]))), styleProps.alignY && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          justify-content: ", ";\n        "])), FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY]), styleProps.alignX && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          align-items: ", ";\n        "])), FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX])));
}

var Box_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  style: style,
  Box: Box,
  getAlignmentAttributes: getAlignmentAttributes
});

exports.Box = Box;
exports.Box_styles = Box_styles;
exports.getAlignmentAttributes = getAlignmentAttributes;
exports.style = style;
