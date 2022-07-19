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
var Badge = function Badge(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  border-radius: 1rem;\n  display: inline-flex;\n  justify-content: center;\n  background-color: ", ";\n  box-sizing: content-box;\n  padding: 0 0.4em;\n  color: ", ";\n  fill: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  height: 1.2em;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps), utils_colors.fontSize('100')(styleProps), utils_colors.fontWeight('semibold')(styleProps), !styleProps.children && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 1em;\n      width: 1em;\n      padding: 0px;\n    "]))), styleProps.isAttached && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      position: absolute;\n      top: -0.5em;\n      right: -0.5em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.attached")(styleProps)), getSizeAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    default: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "rem;\n        ", ";\n      }\n    "])), utils_colors.fontSize('200')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "rem;\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var Badge_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Badge: Badge
});

exports.Badge = Badge;
exports.Badge_styles = Badge_styles;
