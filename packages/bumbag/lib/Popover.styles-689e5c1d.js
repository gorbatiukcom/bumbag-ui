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
var Modal_Modal_styles = require('./Modal.styles-a83df364.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
var Popover = function Popover(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  max-width: 350px;\n  z-index: 19900410;\n\n  ", ";\n\n  ", "\n\n  &[hidden] {\n    display: inherit !important;\n    visibility: hidden !important;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", " 0px 0px 0px 3px;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background')(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.altitude('200')(styleProps), getPlacementAttributes(styleProps), utils_colors.palette('primary200', {
    dark: 'primary'
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverContent = function PopoverContent(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'minor')(styleProps), utils_colors.space(3, 'minor')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverHeader = function PopoverHeader(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps), utils_colors.space(2, 'minor')(styleProps), utils_colors.space(3, 'minor')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverTitle = function PopoverTitle(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverFooter = function PopoverFooter(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid ", ";\n  padding: ", "rem ", "rem;\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps), utils_colors.space(2, 'minor')(styleProps), utils_colors.space(3, 'minor')(styleProps), styleProps.showActionButtons && styleProps.footer && react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: space-between;\n    "]))), styleProps.showActionButtons && !styleProps.footer && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverClose = function PopoverClose(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverBackdrop = function PopoverBackdrop(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 19900409;\n\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), Modal_Modal_styles.getAnimatedAttributes({})(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverDisclosure = function PopoverDisclosure(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverArrow = function PopoverArrow(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: grid;\n  overflow: hidden;\n\n  & > svg {\n    background-color: transparent;\n\n    & .stroke {\n      fill: ", ";\n    }\n    & .fill {\n      fill: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps), utils_colors.palette('background')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getPlacementAttributes = function getPlacementAttributes(styleProps) {
  var placementAttributes = {
    // @ts-ignore
    top: react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.top")(styleProps)),
    // @ts-ignore
    bottom: react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottom")(styleProps)),
    // @ts-ignore
    left: react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'right',
      defaultExpand: 'right',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.left")(styleProps)),
    // @ts-ignore
    right: react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'left',
      defaultExpand: 'left',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.right")(styleProps)),
    // @ts-ignore
    'top-start': react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topStart")(styleProps)),
    // @ts-ignore
    'top-end': react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topEnd")(styleProps)),
    // @ts-ignore
    'bottom-end': react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomEnd")(styleProps)),
    // @ts-ignore
    'bottom-start': react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomStart")(styleProps))
  };
  return react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    ", ";\n  "])), placementAttributes[styleProps.placement || 'center']);
};

var Popover_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Popover: Popover,
  PopoverContent: PopoverContent,
  PopoverHeader: PopoverHeader,
  PopoverTitle: PopoverTitle,
  PopoverFooter: PopoverFooter,
  PopoverClose: PopoverClose,
  PopoverBackdrop: PopoverBackdrop,
  PopoverDisclosure: PopoverDisclosure,
  PopoverArrow: PopoverArrow,
  getPlacementAttributes: getPlacementAttributes
});

exports.Popover = Popover;
exports.PopoverArrow = PopoverArrow;
exports.PopoverBackdrop = PopoverBackdrop;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverDisclosure = PopoverDisclosure;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverTitle = PopoverTitle;
exports.Popover_styles = Popover_styles;
exports.getPlacementAttributes = getPlacementAttributes;
