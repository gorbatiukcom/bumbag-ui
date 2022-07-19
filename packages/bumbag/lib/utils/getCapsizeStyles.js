'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
require('./useTheme.js');
require('conditional-wrap');
require('./useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('./omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('./pick.js');
require('./cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('./isFunction.js');
var utils_get = require('./get.js');
var capsize = require('capsize');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var capsize__default = /*#__PURE__*/_interopDefaultLegacy(capsize);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function getCapsizeAttributes(opts) {
  return function (_ref) {
    var _theme$fontMetrics, _theme$lineHeights, _theme$fontSizes, _theme$global;

    var theme = _ref.theme,
        props = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["theme"]);

    var shrinkScale = opts.shrink ? utils_get.get(theme, opts.themeKey + ".shrinkScale") || 1 : 1;
    var fontFamily = props.font || props.fontFamily || opts.fontFamily;
    var fontMetrics = props.fontMetrics || utils_get.get(theme, "fontMetrics." + fontFamily) || ((_theme$fontMetrics = theme.fontMetrics) === null || _theme$fontMetrics === void 0 ? void 0 : _theme$fontMetrics.default) || {};
    var lineHeight = props.lineHeight || opts.lineHeight || 'default';
    var lineHeightScale = (_theme$lineHeights = theme.lineHeights) === null || _theme$lineHeights === void 0 ? void 0 : _theme$lineHeights[lineHeight];
    var fontSizeInPx = shrinkScale * ((_theme$fontSizes = theme.fontSizes) === null || _theme$fontSizes === void 0 ? void 0 : _theme$fontSizes[opts.fontSize]) * ((_theme$global = theme.global) === null || _theme$global === void 0 ? void 0 : _theme$global.fontSize);
    var leading = fontSizeInPx * lineHeightScale;
    var capHeight = fontSizeInPx * (fontMetrics.capHeight / fontMetrics.unitsPerEm);
    var lineGap = leading - capHeight;
    return {
      fontMetrics: fontMetrics,
      lineHeight: lineHeight,
      lineHeightScale: lineHeightScale,
      lineGap: lineGap,
      fontSizeInPx: fontSizeInPx,
      leading: leading
    };
  };
}
function getFontSize(opts) {
  return function (props) {
    var fontSize = props.fontSize || opts.fontSize || utils_get.get(props, "theme." + opts.themeKey + ".fontSize") || '200';

    if (typeof fontSize === 'string') {
      fontSize = {
        default: fontSize
      };
    }

    return fontSize;
  };
}
function getCapsizeStyles(opts) {
  return function (props) {
    // We want to cater for responsive `fontSize` CSS props, so let's
    // transform fontSize in the shape of a responsive CSS prop.
    var fontSize = getFontSize(opts)(props); // If a responsive `fontSize` CSS prop exists, then ignore the shrinked variant...

    if (opts.shrink && Object.keys(fontSize).length > 1) return {}; // For each fontSize on the breakpoint, we want to apply Capsize.

    return Object.entries(fontSize).reduce(function (currentStyles, _ref2) {
      var bp = _ref2[0],
          fontSize = _ref2[1];

      var _getCapsizeAttributes = getCapsizeAttributes(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, opts), {}, {
        fontSize: fontSize
      }))(props),
          _getCapsizeAttributes2 = _getCapsizeAttributes.fontMetrics,
          fontMetrics = _getCapsizeAttributes2 === void 0 ? {} : _getCapsizeAttributes2,
          fontSizeInPx = _getCapsizeAttributes.fontSizeInPx,
          leading = _getCapsizeAttributes.leading,
          lineGap = _getCapsizeAttributes.lineGap,
          lineHeightScale = _getCapsizeAttributes.lineHeightScale; // @ts-ignore


      var styles = function styles(fontSize) {
        return react.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", "\n\n        ", "\n      "])), capsize__default['default']({
          fontMetrics: fontMetrics,
          fontSize: fontSizeInPx,
          leading: leading
        }), opts.includeBottomGap && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          &:not(:last-child) {\n            margin-bottom: ", "px;\n          }\n\n          ", "\n        "])), lineGap, opts.lineHeight === 'heading' && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            &:last-of-type:not(:last-child) {\n              margin-bottom: ", "px;\n            }\n          "])), lineHeightScale * lineGap)));
      };

      return react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", "\n        ", ";\n      "])), currentStyles, bp === 'default' ? styles() : // @ts-ignore
      react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              ", ";\n            "])), utils_colors.breakpoint(bp, styles())(props)));
    }, react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))));
  };
}

exports.getCapsizeAttributes = getCapsizeAttributes;
exports.getCapsizeStyles = getCapsizeStyles;
exports.getFontSize = getFontSize;
