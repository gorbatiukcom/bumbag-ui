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
var Key = function Key(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: inline;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: ", ";\n  font-size: 0.875em;\n  border-radius: ", ";\n  padding: 0.25em 0.5em;\n  border-style: solid;\n  border-color: ", ";\n  border-width: 1px 1px 2px;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('default')(styleProps), utils_colors.borderRadius('2')(styleProps), utils_colors.palette('white900')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Key_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Key: Key
});

exports.Key = Key;
exports.Key_styles = Key_styles;
