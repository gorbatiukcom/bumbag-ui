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
var utils_getCapsizeStyles = require('./utils/getCapsizeStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject;
var Label = function Label(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: block;\n  font-weight: 500;\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_getCapsizeStyles.getCapsizeStyles({
    lineHeight: '100',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Label_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Label: Label
});

exports.Label = Label;
exports.Label_styles = Label_styles;
