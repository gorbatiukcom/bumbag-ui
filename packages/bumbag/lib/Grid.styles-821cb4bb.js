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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
var Grid = function Grid(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: grid;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.autoFlow && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-auto-flow: ", ";\n    "])), styleProps.autoFlow), styleProps.gap && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-gap: ", ";\n    "])), styleProps.gap), styleProps.template && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-template: ", ";\n    "])), styleProps.template), styleProps.templateAreas && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-template-areas: ", ";\n    "])), styleProps.templateAreas), styleProps.templateColumns && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-template-columns: ", ";\n    "])), styleProps.templateColumns), styleProps.templateRows && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-template-rows: ", ";\n    "])), styleProps.templateRows), styleProps.autoColumns && react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-auto-columns: ", ";\n    "])), styleProps.autoColumns), styleProps.autoRows && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-auto-rows: ", ";\n    "])), styleProps.autoRows), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var GridItem = function GridItem(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: grid-item;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.area && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-area: ", ";\n    "])), styleProps.area), styleProps.column && react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-column: ", ";\n    "])), styleProps.column), styleProps.row && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-row: ", ";\n    "])), styleProps.row), styleProps.columnStart && react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-column-start: ", ";\n    "])), styleProps.columnStart), styleProps.columnEnd && react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-column-end: ", ";\n    "])), styleProps.columnEnd), styleProps.rowStart && react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-row-start: ", ";\n    "])), styleProps.rowStart), styleProps.rowEnd && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      grid-row-end: ", ";\n    "])), styleProps.rowEnd), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Grid_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Grid: Grid,
  GridItem: GridItem
});

exports.Grid = Grid;
exports.GridItem = GridItem;
exports.Grid_styles = Grid_styles;
