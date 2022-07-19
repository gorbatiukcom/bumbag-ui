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
var Container = function Container(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isFluid && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      max-width: ", "px;\n    "])), utils_colors.theme('breakpoints', 'fullHD')(styleProps)), styleProps.isFluid && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding-left: ", "rem;\n      padding-right: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, 'fluidMargin')(styleProps), utils_colors.theme(styleProps.themeKey, 'fluidMargin')(styleProps), utils_colors.theme(styleProps.themeKey, 'styles.fluid')(styleProps)), (styleProps.isLayout || styleProps.isFluid) && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      @media (max-width: ", "px) {\n        padding-left: ", "rem;\n        padding-right: ", "rem;\n      }\n    "])), utils_colors.theme('breakpoints.tablet')(styleProps), utils_colors.theme(styleProps.themeKey, 'tabletMargin')(styleProps), utils_colors.theme(styleProps.themeKey, 'tabletMargin')(styleProps)), styleProps.isLayout && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, 'styles.layout')(styleProps)), getResponsiveProperties(styleProps), styleProps.align && !styleProps.isFluid ? alignProperties[styleProps.align] : null, utils_colors.theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var alignProperties = {
  left: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-right: auto;\n  "]))),
  center: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-left: auto;\n    margin-right: auto;\n  "]))),
  right: react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-left: auto;\n  "])))
};
function getResponsiveProperties(styleProps) {
  var breakpoint = styleProps.breakpoint,
      isFluid = styleProps.isFluid;
  if (isFluid) return;

  if (breakpoint) {
    return react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        max-width: ", "px;\n      }\n    "])), utils_colors.theme('breakpoints', breakpoint)(styleProps));
  }

  return react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n  "])), utils_colors.theme('breakpoints', 'fullHD')(styleProps) + 128, utils_colors.theme('breakpoints', 'widescreen')(styleProps), utils_colors.theme('breakpoints', 'widescreen')(styleProps) + 128, utils_colors.theme('breakpoints', 'desktop')(styleProps), utils_colors.theme('breakpoints', 'desktop')(styleProps) + 128, utils_colors.theme('breakpoints', 'tablet')(styleProps));
}

var Container_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Container: Container,
  alignProperties: alignProperties,
  getResponsiveProperties: getResponsiveProperties
});

exports.Container = Container;
exports.Container_styles = Container_styles;
exports.alignProperties = alignProperties;
exports.getResponsiveProperties = getResponsiveProperties;
