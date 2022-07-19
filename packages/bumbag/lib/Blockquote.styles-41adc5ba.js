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
var Blockquote = function Blockquote(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-left: 4px solid ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.darken(0.2, 'white')(styleProps), utils_colors.space(6)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Blockquote_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Blockquote: Blockquote
});

exports.Blockquote = Blockquote;
exports.Blockquote_styles = Blockquote_styles;
