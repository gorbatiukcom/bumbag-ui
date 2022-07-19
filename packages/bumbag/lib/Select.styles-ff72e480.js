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
var Input_Input_styles = require('./Input.styles-a731033b.js');
require('./Input/index.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
var Select = function Select(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  appearance: none;\n  color: ", ";\n  height: 2.75em;\n  line-height: ", ";\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n  position: relative;\n  width: 100%;\n\n  ", ";\n\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    background: ", ";\n    box-shadow: unset;\n\n    & {\n      ", ";\n    }\n  }\n\n  &[disabled] + .bb-Icon {\n    color: ", ";\n    fill: ", ";\n  }\n\n  &:focus {\n    outline: unset;\n    z-index: 2;\n    position: unset;\n  }\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette(styleProps.color)(styleProps), utils_colors.lineHeight('default')(styleProps), getVariantStyles(styleProps), utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.disabled")(styleProps), utils_colors.palette('gray400')(styleProps), utils_colors.palette('gray400')(styleProps), styleProps.containLabel && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      height: 3.25em;\n      padding-top: 0.8em;\n      padding-bottom: 0px;\n    "]))), !styleProps.isPlaceholderSelected && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      position: unset;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid\n        ", ";\n      border-radius: ", ";\n      padding: 0.4em ", " 0.4em 0.8em;\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), utils_colors.borderRadius('default')(styleProps), styleProps.hasIcon ? '2em' : '0.8em', utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), styleProps.state && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", "\n            0px 0px 0px 3px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n      border-radius: ", ";\n      padding: 0.4em ", " 0.4em 0.8em;\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.borderRadius('default')(styleProps), styleProps.hasIcon ? '2em' : '0.8em', utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), styleProps.state && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", "\n            0px 0px 0px 3px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid transparent;\n\n      ", "\n\n      &:focus,\n      &[aria-expanded='true'] {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        border-radius: ", ";\n        padding: 0.4em 2em 0.4em 0.8em;\n      }\n\n      ", "\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps), styleProps.hasIcon && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding-right: 2em;\n      "]))), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), utils_colors.borderRadius('default')(styleProps), styleProps.disabled && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        border-radius: ", ";\n        padding: 0.4em 0.8em 0.4em 0.8em;\n      "])), utils_colors.borderRadius('default')(styleProps)), styleProps.state && react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.borderless.styles.base")(styleProps));
  }

  if (styleProps.variant === 'underline') {
    return react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid\n        ", ";\n\n      ", "\n\n      &:focus,\n      &[aria-expanded='true'] {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        padding: 0.4em 2em 0.4em 0.8em;\n      }\n\n      ", "\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), styleProps.hasIcon && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding-right: 2em;\n      "]))), utils_colors.palette(styleProps.palette || 'primary')(styleProps), utils_colors.palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), styleProps.disabled && react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding: 0.4em 0.8em 0.4em 0.8em;\n      "]))), styleProps.state && react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), utils_colors.palette("" + styleProps.state)(styleProps), utils_colors.palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.underline.styles.base")(styleProps));
  }

  return react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
} ////////////////////////////////////////////////////////////////////////


var SelectWrapper = function SelectWrapper(styleProps) {
  return css.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  position: relative;\n  width: fit-content;\n  transition: background-color 0.2s ease;\n\n  ", ";\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getSelectWrapperVariantStyles(styleProps), styleProps.size && getWrapperSizeStyles(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSelectWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-radius: ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('white', {
      dark: 'black100'
    })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-radius: ", ";\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        background-color: ", ";\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.palette('white700', {
      dark: 'black300'
    })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.palette('white', {
      dark: 'black100'
    })(styleProps), styleProps.isFocused && react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), utils_colors.palette('white', {
      dark: 'black100'
    })(styleProps)), utils_colors.theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "variants.borderless.styles.base")(styleProps));
  }

  if (styleProps.variant === 'underline') {
    return react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "variants.underline.styles.base")(styleProps));
  }

  return react.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
}

function getWrapperSizeStyles(styleProps) {
  var properties = {
    small: react.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('150')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: react.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: react.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: react.css(_templateObject27 || (_templateObject27 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.fontSize('400')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
} ////////////////////////////////////////////////////////////////////////

var SelectIcon = function SelectIcon(styleProps) {
  return css.css(_templateObject28 || (_templateObject28 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    position: absolute;\n    width: 0.8em;\n    height: 2.75em;\n    right: 0.8em;\n    z-index: 1;\n    color: ", ";\n    fill: ", ";\n    pointer-events: none;\n\n    ", "\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('text')(styleProps), utils_colors.palette('text')(styleProps), styleProps.containLabel && react.css(_templateObject29 || (_templateObject29 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        height: 3.25em;\n      "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
}; ////////////////////////////////////////////////////////////////////////

var SelectSpinner = function SelectSpinner(styleProps) {
  return css.css(_templateObject30 || (_templateObject30 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  && {\n    font-size: inherit;\n    align-items: center;\n    display: flex;\n    position: absolute;\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n    right: 0;\n    z-index: 2;\n\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
}; ////////////////////////////////////////////////////////////////////////

var SelectField = function SelectField(styleProps) {
  return css.css(_templateObject31 || (_templateObject31 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LabelWrapper = function LabelWrapper(styleProps) {
  return css.css(_templateObject32 || (_templateObject32 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), Input_Input_styles.LabelWrapper(styleProps));
};
var LabelWrapperBackground = function LabelWrapperBackground(styleProps) {
  return css.css(_templateObject33 || (_templateObject33 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), Input_Input_styles.LabelWrapperBackground(styleProps));
};

var Select_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Select: Select,
  SelectWrapper: SelectWrapper,
  getWrapperSizeStyles: getWrapperSizeStyles,
  SelectIcon: SelectIcon,
  SelectSpinner: SelectSpinner,
  SelectField: SelectField,
  LabelWrapper: LabelWrapper,
  LabelWrapperBackground: LabelWrapperBackground
});

exports.LabelWrapper = LabelWrapper;
exports.LabelWrapperBackground = LabelWrapperBackground;
exports.Select = Select;
exports.SelectField = SelectField;
exports.SelectIcon = SelectIcon;
exports.SelectSpinner = SelectSpinner;
exports.SelectWrapper = SelectWrapper;
exports.Select_styles = Select_styles;
exports.getWrapperSizeStyles = getWrapperSizeStyles;
