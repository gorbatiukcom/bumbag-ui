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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Avatar = function Avatar(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  object-fit: cover;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.variant === 'circle' && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-radius: 50%;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "circle.base")(styleProps)), styleProps.initials && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      color: ", ";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps)), getSizeAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: 40px;\n      height: 40px;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: 60px;\n      height: 60px;\n      font-size: 24px;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: 80px;\n      height: 80px;\n      font-size: 36px;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: 100px;\n      height: 100px;\n      font-size: 48px;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size] || react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      width: ", ";\n      height: ", ";\n    "])), styleProps.size, styleProps.size);
}

var Avatar_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Avatar: Avatar
});

exports.Avatar = Avatar;
exports.Avatar_styles = Avatar_styles;
