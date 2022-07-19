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
var Rating = function Rating(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RatingItem = function RatingItem(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  display: inline-flex;\n  transition: color 0.1s, transform 0.2s;\n\n  ", "\n\n  ", "\n\n  &:not(:first-of-type) {\n    margin-left: ", "rem;\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.isActive ? utils_colors.palette(styleProps.color)(styleProps) : utils_colors.palette('white900', {
    dark: 'gray800'
  })(styleProps), !styleProps.disabled && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      &:hover {\n        transform: scale(1.2);\n      }\n      &:hover:active {\n        transform: scale(1.1);\n      }\n    "]))), styleProps.disabled && !styleProps.isStatic && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      cursor: not-allowed;\n      opacity: 0.5;\n    "]))), utils_colors.space(1)(styleProps), getSizeAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('400')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('500')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('600')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var Rating_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Rating: Rating,
  RatingItem: RatingItem
});

exports.Rating = Rating;
exports.RatingItem = RatingItem;
exports.Rating_styles = Rating_styles;
