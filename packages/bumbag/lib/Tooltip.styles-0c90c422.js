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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var TooltipContent = function TooltipContent(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background: black;\n  border-radius: ", ";\n  color: ", ";\n  opacity: 0.8;\n  hyphens: auto;\n  font-size: ", "rem;\n  font-weight: ", ";\n  padding: ", "rem ", "rem;\n  z-index: 19900411;\n\n  ", "\n\n  &[hidden] {\n    display: inherit !important;\n    visibility: hidden !important;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.borderRadius('1')(styleProps), utils_colors.palette('white')(styleProps), utils_colors.fontSize('100')(styleProps), utils_colors.fontWeight('normal')(styleProps), utils_colors.space(1)(styleProps), utils_colors.space(2)(styleProps), getPlacementAttributes(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipReference = function TooltipReference(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipArrow = function TooltipArrow(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  display: grid;\n  overflow: hidden;\n\n  & > svg {\n    background-color: transparent;\n\n    & .stroke {\n      fill: black;\n    }\n    & .fill {\n      fill: black;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getPlacementAttributes = function getPlacementAttributes(styleProps) {
  var placementAttributes = {
    // @ts-ignore
    top: react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.top")(styleProps)),
    // @ts-ignore
    bottom: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottom")(styleProps)),
    // @ts-ignore
    left: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'right',
      defaultExpand: 'right',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.left")(styleProps)),
    // @ts-ignore
    right: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'left',
      defaultExpand: 'left',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.right")(styleProps)),
    // @ts-ignore
    'top-start': react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topStart")(styleProps)),
    // @ts-ignore
    'top-end': react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topEnd")(styleProps)),
    // @ts-ignore
    'bottom-end': react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomEnd")(styleProps)),
    // @ts-ignore
    'bottom-start': react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), Modal_Modal_styles.getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomStart")(styleProps))
  };
  return react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    ", ";\n  "])), placementAttributes[styleProps.placement || 'center']);
};

var Tooltip_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TooltipContent: TooltipContent,
  TooltipReference: TooltipReference,
  TooltipArrow: TooltipArrow,
  getPlacementAttributes: getPlacementAttributes
});

exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipReference = TooltipReference;
exports.Tooltip_styles = Tooltip_styles;
exports.getPlacementAttributes = getPlacementAttributes;
