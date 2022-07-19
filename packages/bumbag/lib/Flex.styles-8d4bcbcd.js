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
var Flex = function Flex(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), getFlexAlignmentAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
function getFlexAlignmentAttributes(styleProps) {
  return react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    && {\n      ", "\n    }\n  "])), (styleProps.alignY || styleProps.alignX) && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        flex-direction: unset;\n\n        ", "\n\n        ", "\n      "])), styleProps.alignY && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          align-items: ", ";\n          ", "\n        "])), FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY], !styleProps.alignX && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            justify-content: unset;\n          "])))), styleProps.alignX && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          justify-content: ", ";\n          ", "\n        "])), FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX], !styleProps.alignY && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            align-items: unset;\n          "]))))));
}

var Flex_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Flex: Flex,
  getFlexAlignmentAttributes: getFlexAlignmentAttributes
});

exports.Flex = Flex;
exports.Flex_styles = Flex_styles;
exports.getFlexAlignmentAttributes = getFlexAlignmentAttributes;
