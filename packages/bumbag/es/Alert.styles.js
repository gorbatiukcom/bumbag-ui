import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { css as css$1, keyframes } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, p as borderRadius, m as altitude, k as theme, J as space } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
var Alert = function Alert(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  position: relative;\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('background', {
    dark: 'gray900'
  })(styleProps), borderRadius('default')(styleProps), styleProps.variant === 'bordered' && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), palette('white800', {
    dark: 'gray'
  })(styleProps)), styleProps.variant === 'shadowed' && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      ", ";\n    "])), altitude('100')(styleProps)), styleProps.variant === 'tint' && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), palette(styleProps.type + "Tint", {
    dark: styleProps.type + "Shade"
  })(styleProps)), styleProps.variant === 'fill' && getFillAttributes(styleProps), (styleProps.accent === 'top' || styleProps.accent === 'bottom') && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      display: block;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertContent = function AlertContent(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isInline && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      display: flex;\n\n      & > *:first-child {\n        margin-right: ", "rem;\n      }\n    "])), space(1)(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertWrapper = function AlertWrapper(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  padding: ", "rem ", "rem;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), space(1, 'major')(styleProps), space(2, 'major')(styleProps), styleProps.isInline && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      display: flex;\n\n      & > *:first-child {\n        margin-right: ", "rem;\n      }\n    "])), space(1)(styleProps)), styleProps.accent === true && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      margin-left: ", ";\n    "])), styleProps.accentSize), styleProps.accent === 'bottom' && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      margin-bottom: ", ";\n    "])), styleProps.accentSize), styleProps.accent === 'top' && css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      margin-top: ", ";\n    "])), styleProps.accentSize), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertTitle = function AlertTitle(styleProps) {
  return css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertDescription = function AlertDescription(styleProps) {
  return css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertIconWrapper = function AlertIconWrapper(styleProps) {
  return css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  line-height: 0.9;\n  margin-right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(4)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertCloseButton = function AlertCloseButton(styleProps) {
  return css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.isInline && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n        padding: 0;\n      "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var AlertAccent = function AlertAccent(styleProps) {
  return css(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  background-color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.type)(styleProps), (styleProps.accent === true || styleProps.accent === 'bottom') && css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      bottom: 0;\n    "]))), styleProps.accent === 'top' && css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n      top: 0;\n    "]))), (styleProps.accent === true || styleProps.accent === 'left') && css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      height: 100%;\n      width: ", ";\n    "])), styleProps.accentSize), (styleProps.accent === 'top' || styleProps.accent === 'bottom') && css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      width: 100%;\n      height: ", ";\n    "])), styleProps.accentSize), styleProps.isBackground && css$1(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n      opacity: 0.3;\n      left: 0;\n    "]))), !styleProps.isBackground && styleProps.countdown && css$1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      ", "\n      ", ";\n    "])), styleProps.accent === true ? css$1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n            animation: ", " ", "ms linear forwards;\n          "])), heightCountdown, styleProps.countdown) : css$1(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose([""]))), styleProps.accent === 'top' || styleProps.accent === 'bottom' ? css$1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n            animation: ", " ", "ms linear forwards;\n          "])), widthCountdown, styleProps.countdown) : css$1(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose([""])))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getFillAttributes = function getFillAttributes(styleProps) {
  return css$1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n"])), palette(styleProps.type)(styleProps), palette(styleProps.type + "Inverted")(styleProps));
};
var heightCountdown = keyframes(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose(["\n  from {\n    height: 100%;\n  }\n\n  to {\n    height: 0%;\n  }\n"])));
var widthCountdown = keyframes(_templateObject31 || (_templateObject31 = _taggedTemplateLiteralLoose(["\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n"])));

var Alert_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Alert: Alert,
  AlertContent: AlertContent,
  AlertWrapper: AlertWrapper,
  AlertTitle: AlertTitle,
  AlertDescription: AlertDescription,
  AlertIconWrapper: AlertIconWrapper,
  AlertCloseButton: AlertCloseButton,
  AlertAccent: AlertAccent,
  getFillAttributes: getFillAttributes,
  heightCountdown: heightCountdown,
  widthCountdown: widthCountdown
});

export { Alert_styles as A, AlertIconWrapper as a, AlertContent as b, AlertWrapper as c, AlertAccent as d, AlertTitle as e, AlertDescription as f, Alert as g, AlertCloseButton as h, getFillAttributes as i, heightCountdown as j, widthCountdown as w };
