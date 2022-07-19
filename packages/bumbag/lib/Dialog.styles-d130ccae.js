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
var utils_getHiddenScrollbarStyles = require('./utils/getHiddenScrollbarStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Dialog = function Dialog(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.borderRadius('default')(styleProps), utils_colors.palette('background')(styleProps), utils_colors.altitude('100')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogContent = function DialogContent(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogHeader = function DialogHeader(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogTitle = function DialogTitle(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-size: ", "em;\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontSize('300')(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogFooter = function DialogFooter(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  padding: ", "rem ", "rem;\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps), utils_colors.space(5, 'minor')(styleProps), utils_colors.space(6, 'minor')(styleProps), styleProps.showActionButtons && styleProps.footer && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: space-between;\n    "]))), styleProps.showActionButtons && !styleProps.footer && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogClose = function DialogClose(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogIconWrapper = function DialogIconWrapper(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n  & .bb-CalloutContent .bb-Icon {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogModal = function DialogModal(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  max-width: 600px;\n  width: 100%;\n\n  ", ";\n\n  & .bb-DialogContent {\n    max-height: 70vh;\n    overflow-y: ", ";\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.altitude('400')(styleProps), styleProps.hasScroll ? 'scroll' : 'visible', utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Dialog_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Dialog: Dialog,
  DialogContent: DialogContent,
  DialogHeader: DialogHeader,
  DialogTitle: DialogTitle,
  DialogFooter: DialogFooter,
  DialogClose: DialogClose,
  DialogIconWrapper: DialogIconWrapper,
  DialogModal: DialogModal
});

exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogIconWrapper = DialogIconWrapper;
exports.DialogModal = DialogModal;
exports.DialogTitle = DialogTitle;
exports.Dialog_styles = Dialog_styles;
