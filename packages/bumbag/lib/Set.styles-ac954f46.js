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
var Box_Box_styles = require('./Box.styles-0ffb7463.js');
var Flex_Flex_styles = require('./Flex.styles-8d4bcbcd.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var Set = function Set(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: flex;\n\n  ", ";\n\n  &&& > * {\n    ", ";\n\n    ", ";\n  }\n\n  &&& > *:first-child {\n    ", ";\n  }\n\n  &&& > *:not(:last-child):not(:first-child) {\n    ", ";\n  }\n\n  &&& > *:last-child {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.orientation === 'vertical' ? react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          flex-direction: column;\n\n          ", ";\n\n          ", "\n\n          & {\n            ", ";\n          }\n        "])), !styleProps.isFilled && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            align-items: flex-start;\n          "]))), Box_Box_styles.getAlignmentAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.vertical")(styleProps)) : react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n        "])), utils_colors.breakpoint(styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              flex-direction: column;\n\n              ", ";\n\n              ", "\n\n              & {\n                ", ";\n              }\n            "])), !styleProps.isFilled && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                align-items: flex-start;\n              "]))), Box_Box_styles.getAlignmentAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.vertical")(styleProps)), {
    else: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                flex-wrap: wrap;\n                align-items: center;\n                justify-content: flex-start;\n                margin-left: -", "rem;\n                margin-top: -", "rem;\n\n                ", "\n\n                & {\n                  ", ";\n                }\n              "])), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.space(styleProps.spacing)(styleProps), Flex_Flex_styles.getFlexAlignmentAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.horizontal")(styleProps))
  })(styleProps)), styleProps.orientation === 'vertical' ? react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            &:not(:last-child) {\n              margin-bottom: ", "rem;\n            }\n\n            & {\n              ", ";\n            }\n          "])), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.vertical")(styleProps)) : react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            ", ";\n          "])), utils_colors.breakpoint(styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                &:not(:last-child) {\n                  margin-bottom: ", "rem;\n                }\n\n                & {\n                  ", ";\n                }\n              "])), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.vertical")(styleProps)), {
    else: react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                  margin-left: ", "rem;\n                  margin-top: ", "rem;\n\n                  & {\n                    ", ";\n                  }\n                "])), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.space(styleProps.spacing)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.horizontal")(styleProps))
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.child.base")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.first")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.middle")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.child.last")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Set_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Set: Set
});

exports.Set = Set;
exports.Set_styles = Set_styles;
