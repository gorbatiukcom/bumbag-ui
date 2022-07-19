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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
var Columns = function Columns(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isGapless && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: -", "rem;\n      margin-right: -", "rem;\n      margin-top: -", "rem;\n\n      &:last-child {\n        margin-bottom: -", "rem;\n      }\n    "])), utils_colors.space(styleProps.spacing)(styleProps) / 2, utils_colors.space(styleProps.spacing)(styleProps) / 2, utils_colors.space(styleProps.spacing)(styleProps) / 2, utils_colors.space(styleProps.spacing)(styleProps) / 2), getWrapProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Column = function Column(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  flex: 1;\n  max-width: 100%;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isGapless && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding: ", "rem;\n    "])), utils_colors.space(styleProps.spacing)(styleProps) / 2), getSpreadProperties(styleProps), getSpreadOffsetProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var marginAutoOffsets = {
  left: react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-left: auto;\n  "]))),
  both: react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-left: auto;\n    margin-right: auto;\n  "]))),
  right: react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    margin-right: auto;\n  "])))
};
var getWidth = function getWidth(spread) {
  return spread / 12 * 100 + "%";
};
function getWrapProperties(styleProps) {
  var isOneLine = styleProps.isOneLine,
      minBreakpoint = styleProps.minBreakpoint;

  if (isOneLine) {
    if (minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile') {
      return utils_colors.breakpoint('max-tablet', react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          flex-wrap: wrap;\n        "]))))(styleProps);
    }

    if (minBreakpoint !== 'mobile') {
      return utils_colors.breakpoint('max-mobile', react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          flex-wrap: wrap;\n        "]))))(styleProps);
    }

    return null;
  } else {
    return react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      flex-wrap: wrap;\n    "])));
  }
}
function getSpreadProperties(styleProps) {
  var minBreakpoint = styleProps.minBreakpoint,
      spread = styleProps.spread,
      spreadMobile = styleProps.spreadMobile,
      spreadTablet = styleProps.spreadTablet,
      spreadDesktop = styleProps.spreadDesktop,
      spreadWidescreen = styleProps.spreadWidescreen,
      spreadFullHD = styleProps.spreadFullHD;

  if (!minBreakpoint && !spread && !spreadMobile && !spreadTablet && !spreadDesktop && !spreadWidescreen && !spreadFullHD) {
    return react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      @media (max-width: ", "px) {\n        flex: none;\n        width: 100%;\n      }\n    "])), utils_colors.theme('breakpoints', 'tablet')(styleProps));
  }

  var getProperties = function getProperties(_ref) {
    var _breakpoint = _ref.breakpoint,
        spread = _ref.spread;
    var properties = react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      flex: none;\n      width: ", ";\n    "])), getWidth(spread));
    if (!spread) return null;

    if (_breakpoint) {
      return utils_colors.breakpoint("max-" + _breakpoint, react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n        "])), properties))(styleProps);
    }

    return properties;
  };

  return react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), getProperties({
    spread: spread
  }), getProperties({
    spread: spreadFullHD,
    breakpoint: 'fullHD'
  }), getProperties({
    spread: spreadWidescreen,
    breakpoint: 'widescreen'
  }), getProperties({
    spread: spreadDesktop,
    breakpoint: 'desktop'
  }), minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile' && !spreadTablet && !spreadMobile && utils_colors.breakpoint("max-tablet", react.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))))(styleProps), getProperties({
    spread: spreadTablet,
    breakpoint: 'tablet'
  }), minBreakpoint !== 'mobile' && !spreadMobile && utils_colors.breakpoint("max-mobile", react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))))(styleProps), getProperties({
    spread: spreadMobile,
    breakpoint: 'mobile'
  }));
}
function getSpreadOffsetProperties(styleProps) {
  var spreadOffset = styleProps.spreadOffset,
      spreadMobileOffset = styleProps.spreadMobileOffset,
      spreadTabletOffset = styleProps.spreadTabletOffset,
      spreadDesktopOffset = styleProps.spreadDesktopOffset,
      spreadWidescreenOffset = styleProps.spreadWidescreenOffset,
      spreadFullHDOffset = styleProps.spreadFullHDOffset;

  if (!spreadOffset && !spreadMobileOffset && !spreadTabletOffset && !spreadDesktopOffset && !spreadWidescreenOffset && !spreadFullHDOffset) {
    return null;
  }

  var getProperties = function getProperties(_ref2) {
    var _breakpoint = _ref2.breakpoint,
        spreadOffset = _ref2.spreadOffset;
    var properties = react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      margin-left: ", ";\n    "])), getWidth(spreadOffset));
    if (!spreadOffset) return null;

    if (_breakpoint) {
      return utils_colors.breakpoint("max-" + _breakpoint, react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n        "])), properties))(styleProps);
    }

    return properties;
  };

  if (typeof spreadOffset === 'number') {
    return react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n    "])), getProperties({
      spreadOffset: spreadOffset
    }), getProperties({
      spreadOffset: spreadFullHDOffset,
      breakpoint: 'fullHD'
    }), getProperties({
      spreadOffset: spreadWidescreenOffset,
      breakpoint: 'widescreen'
    }), getProperties({
      spreadOffset: spreadDesktopOffset,
      breakpoint: 'desktop'
    }), !spreadTabletOffset && !spreadMobileOffset && utils_colors.breakpoint("max-tablet", react.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          margin-left: 0;\n        "]))))(styleProps), getProperties({
      spreadOffset: spreadTabletOffset,
      breakpoint: 'tablet'
    }), !spreadMobileOffset && utils_colors.breakpoint("max-mobile", react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          margin-left: 0;\n        "]))))(styleProps), getProperties({
      spreadOffset: spreadMobileOffset,
      breakpoint: 'mobile'
    }));
  }

  return marginAutoOffsets[spreadOffset];
}

var Columns_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Columns: Columns,
  Column: Column,
  marginAutoOffsets: marginAutoOffsets,
  getWidth: getWidth,
  getWrapProperties: getWrapProperties,
  getSpreadProperties: getSpreadProperties,
  getSpreadOffsetProperties: getSpreadOffsetProperties
});

exports.Column = Column;
exports.Columns = Columns;
exports.Columns_styles = Columns_styles;
exports.getSpreadOffsetProperties = getSpreadOffsetProperties;
exports.getSpreadProperties = getSpreadProperties;
exports.getWidth = getWidth;
exports.getWrapProperties = getWrapProperties;
exports.marginAutoOffsets = marginAutoOffsets;
