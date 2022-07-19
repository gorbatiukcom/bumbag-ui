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
var Tabbable = function Tabbable(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    opacity: 0.5;\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.disabled")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Tabbable_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tabbable: Tabbable
});

exports.Tabbable = Tabbable;
exports.Tabbable_styles = Tabbable_styles;
