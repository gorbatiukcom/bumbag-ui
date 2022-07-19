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
var ProgressBar = function ProgressBar(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  overflow: hidden;\n  width: 100%;\n  height: 1rem;\n  background-color: ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.color + "Tint", {
    dark: styleProps.color + "Shade"
  })(styleProps), getSizeAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ProgressBarIndicator = function ProgressBarIndicator(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  height: 100%;\n  background-color: ", ";\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  width: ", "%;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.color)(styleProps), styleProps.value || '0', utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 0.6rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 1.5rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 2rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var ProgressBar_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ProgressBar: ProgressBar,
  ProgressBarIndicator: ProgressBarIndicator
});

exports.ProgressBar = ProgressBar;
exports.ProgressBarIndicator = ProgressBarIndicator;
exports.ProgressBar_styles = ProgressBar_styles;
