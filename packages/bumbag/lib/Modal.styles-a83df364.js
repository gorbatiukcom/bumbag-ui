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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
var Modal = function Modal(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 19900410;\n  min-width: 320px;\n\n  @media screen and (max-width: 320px) {\n    min-width: unset;\n    width: 100%;\n  }\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getPlacementAttributes(styleProps), utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ModalContainer = function ModalContainer(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ModalDisclosure = function ModalDisclosure(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ModalBackdrop = function ModalBackdrop(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 19900409;\n\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getAnimatedAttributes({})(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getPlacementAttributes = function getPlacementAttributes(styleProps) {
  var placementAttributes = {
    // @ts-ignore
    center: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      left: 50%;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      transformX: '-50%',
      transformY: '-50%',
      defaultSlide: 'top'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.center")(styleProps)),
    // @ts-ignore
    top: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: ", "em;\n      left: 50%;\n      transform: translate3d(-50%, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '-50%',
      transformY: '0px',
      defaultSlide: 'top'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.top")(styleProps)),
    // @ts-ignore
    bottom: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      bottom: ", "em;\n      left: 50%;\n      transform: translate3d(-50%, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '-50%',
      transformY: '0px',
      defaultSlide: 'bottom'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottom")(styleProps)),
    // @ts-ignore
    left: react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: 50%;\n      left: ", "em;\n      transform: translate3d(0px, -50%, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '-50%',
      defaultSlide: 'left'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.left")(styleProps)),
    // @ts-ignore
    right: react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: 50%;\n      right: ", "em;\n      transform: translate3d(0px, -50%, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '-50%',
      defaultSlide: 'right'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.right")(styleProps)),
    // @ts-ignore
    'top-start': react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: ", "em;\n      left: ", "em;\n      transform: translate3d(0, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'left'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topStart")(styleProps)),
    // @ts-ignore
    'top-end': react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      top: ", "em;\n      right: ", "em;\n      transform: translate3d(0, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'right'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.topEnd")(styleProps)),
    // @ts-ignore
    'bottom-end': react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      bottom: ", "em;\n      right: ", "em;\n      transform: translate3d(0, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomEnd")(styleProps)),
    // @ts-ignore
    'bottom-start': react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      bottom: ", "em;\n      left: ", "em;\n      transform: translate3d(0, 0, 0px);\n\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(5)(styleProps), utils_colors.space(5)(styleProps), getAnimatedAttributes({
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom'
    })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.placements.bottomStart")(styleProps))
  };
  return react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    ", ";\n  "])), placementAttributes[styleProps.placement || 'center']);
};

var getSlideOffset = function getSlideOffset(_ref) {
  var position = _ref.position,
      axis = _ref.axis,
      _ref$defaultSlide = _ref.defaultSlide,
      defaultSlide = _ref$defaultSlide === void 0 ? undefined : _ref$defaultSlide,
      _ref$slideOffset = _ref.slideOffset,
      slideOffset = _ref$slideOffset === void 0 ? '100%' : _ref$slideOffset;
  return function (styleProps) {
    var newSlide = typeof styleProps.slide === 'string' ? styleProps.slide : defaultSlide;
    var offset = '';

    if (axis === 'vertical') {
      if (newSlide === 'top') {
        offset = " - " + slideOffset;
      }

      if (newSlide === 'bottom') {
        offset = " + " + slideOffset;
      }
    }

    if (axis === 'horizontal') {
      if (newSlide === 'left') {
        offset = " - " + slideOffset;
      }

      if (newSlide === 'right') {
        offset = " + " + slideOffset;
      }
    }

    return "calc(" + position + offset + ")";
  };
};

var getAnimatedAttributes = function getAnimatedAttributes(opts) {
  return function (styleProps) {
    if (!styleProps.slide && !styleProps.expand && !styleProps.fade) return;
    var transitionPropertyValue = [(styleProps.slide || styleProps.expand) && 'transform', styleProps.fade && 'opacity'].filter(Boolean).join(', ');
    var hiddenTransformX = getSlideOffset({
      position: opts.transformX,
      axis: 'horizontal',
      defaultSlide: opts.defaultSlide,
      slideOffset: opts.slideOffset
    })(styleProps);
    var hiddenTransformY = getSlideOffset({
      position: opts.transformY,
      axis: 'vertical',
      defaultSlide: opts.defaultSlide,
      slideOffset: opts.slideOffset
    })(styleProps);
    var hiddenSlideTransformValue = "translate3d(" + (styleProps.slide ? hiddenTransformX : opts.transformX) + ", " + (styleProps.slide ? hiddenTransformY : opts.transformY) + ", 0px)";
    var hiddenExpandTransformValue = styleProps.expand ? "scale(0.01)" : undefined;
    var hiddenTransformValue = [hiddenSlideTransformValue, hiddenExpandTransformValue].filter(Boolean).join(' ');
    var showTransformValue = "translate3d(" + opts.transformX + ", " + opts.transformY + ", 0px) scale(1)";
    var expandTransformOrigins = {
      center: '50% 50%',
      left: '0% 50%',
      right: '100% 50%',
      top: '50% 0%',
      bottom: '50% 100%'
    };
    return react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    transform-origin: ", ";\n    align-items: center;\n    transition-property: ", ";\n    transition-duration: ", ";\n    transition-timing-function: ", ";\n    transition-delay: ", ";\n    transform: ", " ", " !important;\n\n    ", ";\n\n    &[data-enter] {\n      transform: ", " ", " !important;\n\n      ", ";\n    }\n  "])), expandTransformOrigins[opts.defaultExpand || styleProps.expand || 'center'], transitionPropertyValue, styleProps.duration || '250ms', styleProps.timingFunction || 'ease-in-out', styleProps.delay || '0s', opts.prevTransformValue, hiddenTransformValue, styleProps.fade && react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      opacity: 0;\n    "]))), opts.prevTransformValue, showTransformValue, styleProps.fade && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        opacity: 1;\n      "]))));
  };
};

var Modal_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Modal: Modal,
  ModalContainer: ModalContainer,
  ModalDisclosure: ModalDisclosure,
  ModalBackdrop: ModalBackdrop,
  getPlacementAttributes: getPlacementAttributes,
  getAnimatedAttributes: getAnimatedAttributes
});

exports.Modal = Modal;
exports.ModalBackdrop = ModalBackdrop;
exports.ModalContainer = ModalContainer;
exports.ModalDisclosure = ModalDisclosure;
exports.Modal_styles = Modal_styles;
exports.getAnimatedAttributes = getAnimatedAttributes;
exports.getPlacementAttributes = getPlacementAttributes;
