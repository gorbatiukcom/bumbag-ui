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

var _templateObject;
var Divider = function Divider(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    border: 1px solid ", ";\n    border-width: 0 0 1px 0;\n    padding: 0;\n    width: auto;\n    height: 0;\n\n    &[aria-orientation=\"vertical\"] {\n      border-width: 0 1px 0 0;\n      width: 0;\n      height: auto;\n\n      & {\n        ", ";\n      }\n    }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.vertical")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Divider_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Divider: Divider
});

exports.Divider = Divider;
exports.Divider_styles = Divider_styles;
