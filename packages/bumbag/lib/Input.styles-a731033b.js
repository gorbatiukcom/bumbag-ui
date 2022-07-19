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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
var InputWrapper = function InputWrapper(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  position: relative;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.size && wrapperSizeProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Input = function Input(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background: ", ";\n  color: ", ";\n  height: 2.75em;\n  width: 100%;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  ", "\n\n  &[disabled] {\n    background-color: ", ";\n    box-shadow: unset;\n    color: ", ";\n    cursor: not-allowed;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n    z-index: 2;\n\n    & {\n      ", ";\n    }\n  }\n\n  &::placeholder {\n    color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white', {
    dark: 'black100'
  })(styleProps), utils_colors.palette('text')(styleProps), getVariantStyles(styleProps), utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps), utils_colors.palette('text100')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.disabled")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), utils_colors.palette(styleProps.palette || 'gray300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placeholder")(styleProps), styleProps.containLabel && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 3.25em;\n      padding-top: 0.8em;\n      padding-bottom: 0px;\n    "]))), (styleProps.after || styleProps.isLoading) && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        padding-right: 2.3em;\n      }\n    "]))), styleProps.before && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        padding-left: 2.3em;\n      }\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid\n        ", ";\n      border-radius: ", ";\n      padding: 0.4em 0.8em;\n\n      &:focus {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n\n        & {\n          ", ";\n        }\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.focus")(styleProps), styleProps.state && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border: 1px solid transparent;\n      border-radius: ", ";\n      padding: 0.4em 0.8em;\n\n      &:focus {\n        background-color: ", ";\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n\n        & {\n          ", ";\n        }\n      }\n\n      &&[disabled] {\n        color: ", ";\n\n        & {\n          ", ";\n        }\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('white700', {
      dark: 'black300'
    })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette('white', {
      dark: 'black100'
    })(styleProps), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.focus")(styleProps), utils_colors.palette('gray300')(styleProps), utils_colors.theme(styleProps.themeKey, "variants.bordered.disabled")(styleProps), styleProps.state && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid transparent;\n\n      &:focus {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        border-radius: ", ";\n        padding: 0.4em 0.8em;\n      }\n\n      ", "\n    "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), utils_colors.borderRadius('default')(styleProps), styleProps.state && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)));
  }

  if (styleProps.variant === 'underline') {
    return react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid\n        ", ";\n\n      &:focus {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        padding: 0.4em 0.8em;\n      }\n\n      ", "\n    "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), styleProps.state && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)));
  }

  return react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
}

var InputIcon = function InputIcon(styleProps) {
  return css.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    fill: ", ";\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n\n    ", ";\n  }\n"])), utils_colors.palette('text100')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputSpinner = function InputSpinner(styleProps) {
  return css.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-size: inherit;\n    align-items: center;\n    display: flex;\n    position: absolute;\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n    right: 0;\n    z-index: 2;\n\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputField = function InputField(styleProps) {
  return css.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputFieldGroup = function InputFieldGroup(styleProps) {
  return css.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & .bb-InputWrapper {\n    flex: 1;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
function wrapperSizeProperties(styleProps) {
  var properties = {
    small: react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('400')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
} /////////////////////////////////////////////////////////////////////

var LabelWrapper = function LabelWrapper(styleProps) {
  return css.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  transition: transform 100ms;\n  transform-origin: top left;\n  transform: translateY(0px) scale(1);\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.palette || 'gray300')(styleProps), getLabelWrapperVariantStyles(styleProps), styleProps.isFocused && react.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      transform: translateY(-1.1em) scale(0.75);\n\n      ", "\n    "])), styleProps.containLabel && react.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        margin-left: 0.875em;\n        transform: translateY(-0.3em) scale(0.75);\n      "])))), (styleProps.after || styleProps.isLoading) && react.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        margin-right: 2.3em;\n      }\n    "]))), styleProps.before && react.css(_templateObject27 || (_templateObject27 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        margin-left: 2.3em;\n      }\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getLabelWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return react.css(_templateObject28 || (_templateObject28 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: 0.8em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return react.css(_templateObject29 || (_templateObject29 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: 0.8em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  return react.css(_templateObject30 || (_templateObject30 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
} /////////////////////////////////////////////////////////////////////


var LabelWrapperBackground = function LabelWrapperBackground(styleProps) {
  return css.css(_templateObject31 || (_templateObject31 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: 0 0.25em;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 100ms;\n  transform: translateY(-1em) scale(0.75);\n  transform-origin: top left;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getLabelWrapperBackgroundVariantStyles(styleProps), styleProps.isFocused && react.css(_templateObject32 || (_templateObject32 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      opacity: 1;\n    "]))), (styleProps.after || styleProps.isLoading) && react.css(_templateObject33 || (_templateObject33 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        margin-right: 2.1em;\n      }\n    "]))), styleProps.before && react.css(_templateObject34 || (_templateObject34 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        margin-left: 2.1em;\n      }\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getLabelWrapperBackgroundVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return react.css(_templateObject35 || (_templateObject35 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      margin-left: 0.6em;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('white', {
      dark: 'black100'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  return react.css(_templateObject36 || (_templateObject36 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
}

var Input_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputWrapper: InputWrapper,
  Input: Input,
  InputIcon: InputIcon,
  InputSpinner: InputSpinner,
  InputField: InputField,
  InputFieldGroup: InputFieldGroup,
  wrapperSizeProperties: wrapperSizeProperties,
  LabelWrapper: LabelWrapper,
  LabelWrapperBackground: LabelWrapperBackground
});

exports.Input = Input;
exports.InputField = InputField;
exports.InputFieldGroup = InputFieldGroup;
exports.InputIcon = InputIcon;
exports.InputSpinner = InputSpinner;
exports.InputWrapper = InputWrapper;
exports.Input_styles = Input_styles;
exports.LabelWrapper = LabelWrapper;
exports.LabelWrapperBackground = LabelWrapperBackground;
exports.wrapperSizeProperties = wrapperSizeProperties;
