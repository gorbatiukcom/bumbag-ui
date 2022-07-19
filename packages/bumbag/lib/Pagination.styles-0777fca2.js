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
var Pagination = function Pagination(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationButton = function PaginationButton(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationSelect = function PaginationSelect(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationPrepositionText = function PaginationPrepositionText(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Pagination_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Pagination: Pagination,
  PaginationButton: PaginationButton,
  PaginationSelect: PaginationSelect,
  PaginationPrepositionText: PaginationPrepositionText
});

exports.Pagination = Pagination;
exports.PaginationButton = PaginationButton;
exports.PaginationPrepositionText = PaginationPrepositionText;
exports.PaginationSelect = PaginationSelect;
exports.Pagination_styles = Pagination_styles;
