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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
var Tab = function Tab(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 2.75em;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0 1rem;\n  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;\n\n  ", "\n\n  ", "\n\n  ", "\n\n    ", "\n\n  &[aria-selected='true'] {\n    color: ", ";\n    fill: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:not([aria-selected='true']):hover {\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.disabled && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      color: ", ";\n    "])), utils_colors.palette('gray300')(styleProps)), styleProps.variant === 'boxed' && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n    "]))), styleProps.variant === 'button' && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n    "])), utils_colors.borderRadius('default')(styleProps)), styleProps.orientation === 'vertical' ? react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            width: 100%;\n            border-top-left-radius: ", ";\n            border-bottom-left-radius: ", ";\n            margin-right: -2px;\n\n            &:not(:last-child) {\n              margin-bottom: 0.5rem;\n            }\n          "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps)) : react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            border-top-left-radius: ", ";\n            border-top-right-radius: ", ";\n\n            &:not(:last-child) {\n              margin-right: 0.5rem;\n            }\n          "])), utils_colors.borderRadius('default')(styleProps), utils_colors.borderRadius('default')(styleProps)), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", ";\n      "])), styleProps.orientation === 'vertical' ? react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              box-shadow: inset -2px 0 0 0 ", ";\n            "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)) : react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              box-shadow: inset 0 -2px 0 0 ", ";\n            "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps))), styleProps.variant === 'boxed' && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        border: 1px solid ", ";\n\n        ", ";\n      "])), utils_colors.palette('white900', {
    dark: 'gray700'
  })(styleProps), styleProps.orientation === 'vertical' ? react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              border-right-color: ", ";\n            "])), utils_colors.palette('white', {
    dark: 'background'
  })(styleProps)) : react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              border-bottom-color: ", ";\n            "])), utils_colors.palette('white', {
    dark: 'background'
  })(styleProps))), styleProps.variant === 'button' && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: ", ";\n        color: ", ";\n      "])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "Inverted")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.selected")(styleProps), styleProps.variant === 'default' && react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", ";\n      "])), styleProps.orientation === 'vertical' ? react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              box-shadow: inset -2px 0 0 0 ", ";\n            "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)) : react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              box-shadow: inset 0 -2px 0 0 ", ";\n            "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps))), (styleProps.variant === 'boxed' || styleProps.variant === 'button') && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        box-shadow: ", " 0px 0px 0px 1px,\n          ", " 0px 0px 0px 3px;\n      "])), utils_colors.palette(styleProps.palette)(styleProps), utils_colors.palette(styleProps.palette + "200")(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.variant !== 'button' && react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), utils_colors.palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'button' && react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), utils_colors.palette('white700', {
    dark: 'black200'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.hover")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Tabs = function Tabs(styleProps) {
  return css.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFitted && react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & .bb-TabsTab {\n        flex: 1;\n      }\n    "]))), styleProps.orientation === 'vertical' && react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: flex;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TabsList = function TabsList(styleProps) {
  return css.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  font-weight: ", ";\n\n  ", "\n\n  ", "\n\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), styleProps.orientation === 'vertical' && react.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      flex-direction: column;\n    "]))), (styleProps.variant === 'boxed' || styleProps.variant === 'default') && react.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n    "])), styleProps.orientation === 'vertical' ? react.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            border-right: 1px solid ", ";\n          "])), utils_colors.palette('white900', {
    dark: 'gray700'
  })(styleProps)) : react.css(_templateObject27 || (_templateObject27 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            border-bottom: 1px solid ", ";\n          "])), utils_colors.palette('white900', {
    dark: 'gray700'
  })(styleProps))), getAlignAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TabsPanel = function TabsPanel(styleProps) {
  return css.css(_templateObject28 || (_templateObject28 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &:focus {\n    outline: none;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getAlignAttributes(styleProps) {
  var sizeAttributes = {
    left: react.css(_templateObject29 || (_templateObject29 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & {\n        justify-content: start;\n\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.align.left")(styleProps)),
    center: react.css(_templateObject30 || (_templateObject30 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: center;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.align.center")(styleProps)),
    right: react.css(_templateObject31 || (_templateObject31 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.theme(styleProps.themeKey, "styles.align.right")(styleProps))
  };
  return sizeAttributes[styleProps.align || 'left'];
}

var Tabs_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tab: Tab,
  Tabs: Tabs,
  TabsList: TabsList,
  TabsPanel: TabsPanel
});

exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TabsList = TabsList;
exports.TabsPanel = TabsPanel;
exports.Tabs_styles = Tabs_styles;
