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

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var List = function List(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  list-style: unset;\n  list-style-type: none;\n\n  & & {\n    margin-left: ", "rem;\n  }\n\n  & li {\n    &:not(:last-child) {\n      margin-bottom: ", "rem;\n    }\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(4)(styleProps), utils_colors.space(1)(styleProps), styleProps.isOrdered && getOrderedProperties(styleProps), styleProps.orientation === 'horizontal' && getHorizontalProperties(styleProps), utils_colors.theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var ListItem = function ListItem(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var getOrderedProperties = function getOrderedProperties(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  list-style-type: decimal;\n\n  & & {\n    list-style-type: lower-alpha;\n  }\n\n  & & & {\n    list-style-type: lower-roman;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, 'styles.ordered')(styleProps));
};
var getHorizontalProperties = function getHorizontalProperties(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& li {\n    display: inline-block;\n    margin-bottom: unset;\n\n    &:not(:last-child) {\n      margin-right: 1rem;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, 'styles.horizontal')(styleProps));
};

var List_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  List: List,
  ListItem: ListItem,
  getOrderedProperties: getOrderedProperties,
  getHorizontalProperties: getHorizontalProperties
});

exports.List = List;
exports.ListItem = ListItem;
exports.List_styles = List_styles;
exports.getHorizontalProperties = getHorizontalProperties;
exports.getOrderedProperties = getOrderedProperties;
