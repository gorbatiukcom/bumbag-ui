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

var _templateObject, _templateObject2;
var Code = function Code(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-family: ", ";\n  padding: 0.1rem 0.2rem;\n  overflow: auto;\n\n  & {\n    ", "\n  };\n\n  & {\n    ", ";\n  };\n"])), styleProps.palette === 'default' ? utils_colors.palette('white700', {
    dark: 'black300'
  })(styleProps) : utils_colors.palette(styleProps.palette + "Tint", {
    dark: styleProps.palette + "Shade"
  })(styleProps), utils_colors.borderRadius('1')(styleProps), styleProps.palette === 'default' ? utils_colors.palette('text')(styleProps) : utils_colors.palette(styleProps.palette + "700", {
    dark: styleProps.palette + "200"
  })(styleProps), utils_colors.font('mono')(styleProps), styleProps.isBlock && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding: 1rem;\n        ", ";\n      "])), utils_colors.theme(styleProps.themeKey, "styles.block")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Code_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Code: Code
});

exports.Code = Code;
exports.Code_styles = Code_styles;
