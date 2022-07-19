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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var Toast = function Toast(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ToastOverlay = function ToastOverlay(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    min-width: 350px;\n    z-index: 19900411;\n  }\n\n  & .bb-Toast {\n    animation: ", " 250ms ease-in-out forwards;\n  }\n\n  & {\n    ", ";\n  }\n"])), getAnimation(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var getAnimation = function getAnimation(styleProps) {
  return react.keyframes(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  from {\n    ", "\n\n    ", "\n  }\n\n  to {\n    ", "\n\n    ", "\n  }\n"])), styleProps.fade && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        opacity: 0;\n      "]))), styleProps.slide && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", "\n        ", "\n        ", "\n        ", "\n      "])), ['top-end', 'right', 'bottom-end'].includes(styleProps.placement) && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            transform: translateX(", ");\n          "])), styleProps.fade ? '10%' : '130%'), ['bottom'].includes(styleProps.placement) && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            transform: translateY(", ");\n          "])), styleProps.fade ? '10%' : '130%'), ['top-start', 'left', 'bottom-start'].includes(styleProps.placement) && react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            transform: translateX(", ");\n          "])), styleProps.fade ? '-10%' : '-130%'), ['top'].includes(styleProps.placement) && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            transform: translateY(", ");\n          "])), styleProps.fade ? '-10%' : '-130%')), styleProps.fade && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        opacity: 1;\n      "]))), styleProps.slide && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", " ", ";\n      "])), ['top-end', 'right', 'bottom-end', 'top-start', 'left', 'bottom-start'].includes(styleProps.placement) && react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          transform: translateX(0);\n        "]))), ['bottom', 'top'].includes(styleProps.placement) && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          transform: translateY(0);\n        "])))));
};

var Toast_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Toast: Toast,
  ToastOverlay: ToastOverlay
});

exports.Toast = Toast;
exports.ToastOverlay = ToastOverlay;
exports.Toast_styles = Toast_styles;
