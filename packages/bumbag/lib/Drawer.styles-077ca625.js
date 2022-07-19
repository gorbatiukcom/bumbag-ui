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
var Drawer = function Drawer(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    position: fixed;\n    background-color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background')(styleProps), styleProps.placement === 'left' && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        left: 0;\n      "]))), styleProps.placement === 'right' && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        right: 0;\n      "]))), styleProps.placement === 'top' && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        top: 0;\n      "]))), styleProps.placement === 'bottom' && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        bottom: 0;\n      "]))), (styleProps.placement === 'left' || styleProps.placement === 'right' || styleProps.isFullScreen) && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        height: ", ";\n      "])), styleProps.viewportHeight), (styleProps.placement === 'top' || styleProps.placement === 'bottom' || styleProps.isFullScreen) && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))), utils_colors.altitude('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DrawerDisclosure = function DrawerDisclosure(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Drawer_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Drawer: Drawer,
  DrawerDisclosure: DrawerDisclosure
});

exports.Drawer = Drawer;
exports.DrawerDisclosure = DrawerDisclosure;
exports.Drawer_styles = Drawer_styles;
