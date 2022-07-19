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
var utils_getCapsizeStyles = require('./utils/getCapsizeStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var FieldWrapper = function FieldWrapper(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Label = function Label(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    margin-bottom: 0px;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LabelWrapper = function LabelWrapper(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3)(styleProps), (styleProps.variant === 'borderless' || styleProps.variant === 'underline') && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-bottom: ", "rem;\n    "])), utils_colors.space(1)(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DescriptionText = function DescriptionText(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: block;\n  margin-top: ", "rem;\n\n  && {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2)(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    fontSize: '150'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HintText = function HintText(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionalText = function OptionalText(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-size: ", "rem;\n  color: ", ";\n  margin-left: ", "rem;\n  line-height: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('150')(styleProps), utils_colors.palette('text100')(styleProps), utils_colors.space(2)(styleProps), utils_colors.lineHeight('none')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RequiredText = function RequiredText(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-left: ", "rem;\n  font-weight: ", ";\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('danger')(styleProps), utils_colors.space(1)(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ValidationText = function ValidationText(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipTrigger = function TooltipTrigger(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-size: ", "rem;\n    padding: ", "rem;\n    min-height: unset;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('100')(styleProps), utils_colors.space(1)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipPopover = function TooltipPopover(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    position: absolute;\n    padding: ", "rem;\n    margin-top: ", "rem;\n    width: max-content;\n    max-width: 400px;\n    z-index: 999999;\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(1, 'major')(styleProps), utils_colors.space(1, 'major')(styleProps), utils_colors.altitude('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var FieldWrapper_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FieldWrapper: FieldWrapper,
  Label: Label,
  LabelWrapper: LabelWrapper,
  DescriptionText: DescriptionText,
  HintText: HintText,
  OptionalText: OptionalText,
  RequiredText: RequiredText,
  ValidationText: ValidationText,
  TooltipTrigger: TooltipTrigger,
  TooltipPopover: TooltipPopover
});

exports.DescriptionText = DescriptionText;
exports.FieldWrapper = FieldWrapper;
exports.FieldWrapper_styles = FieldWrapper_styles;
exports.HintText = HintText;
exports.Label = Label;
exports.LabelWrapper = LabelWrapper;
exports.OptionalText = OptionalText;
exports.RequiredText = RequiredText;
exports.TooltipPopover = TooltipPopover;
exports.TooltipTrigger = TooltipTrigger;
exports.ValidationText = ValidationText;
