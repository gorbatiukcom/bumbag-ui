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
var Breadcrumb = function Breadcrumb(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbItem = function BreadcrumbItem(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&&&&:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbSeparator = function BreadcrumbSeparator(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: inline;\n  margin-left: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbLink = function BreadcrumbLink(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Breadcrumb_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Breadcrumb: Breadcrumb,
  BreadcrumbItem: BreadcrumbItem,
  BreadcrumbSeparator: BreadcrumbSeparator,
  BreadcrumbLink: BreadcrumbLink
});

exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Breadcrumb_styles = Breadcrumb_styles;
