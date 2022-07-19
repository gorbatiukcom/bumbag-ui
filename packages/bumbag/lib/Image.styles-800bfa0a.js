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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var Image = function Image(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFixed && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      max-width: unset;\n\n      ", ";\n    "])), utils_colors.theme(styleProps.themeKey, "styles.fixed")(styleProps)), styleProps.fit === 'contain' && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      object-fit: contain;\n\n      ", ";\n\n      ", ";\n    "])), styleProps.fitPosition && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        object-position: ", ";\n      "])), styleProps.fitPosition), utils_colors.theme(styleProps.themeKey, "styles.contain")(styleProps)), styleProps.fit === 'cover' && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      object-fit: cover;\n\n      ", ";\n\n      ", ";\n    "])), styleProps.fitPosition && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        object-position: ", ";\n      "])), styleProps.fitPosition), utils_colors.theme(styleProps.themeKey, "styles.cover")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Image_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Image: Image
});

exports.Image = Image;
exports.Image_styles = Image_styles;
