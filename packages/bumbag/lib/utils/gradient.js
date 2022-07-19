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
var utils_cssProps = require('./cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('./isFunction.js');
require('./get.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function getValue(value, defaultValue) {
  var newValue = value || defaultValue;

  if (typeof newValue !== 'object') {
    newValue = {
      default: newValue
    };
  }

  return newValue;
}

function gradient(opts) {
  return function (styleProps) {
    if (!opts.from && !opts.to) return '';
    var direction = getValue(opts.direction, 'right');
    var from = getValue(opts.from, 'rgba(0,0,0,0)');
    var fromAt = getValue(opts.fromAt, undefined);
    var via = getValue(opts.via, undefined);
    var viaAt = getValue(opts.viaAt, undefined);
    var to = getValue(opts.to, 'rgba(0,0,0,0)');
    var toAt = getValue(opts.toAt, undefined);
    var breakpoints = Object.keys(opts).reduce(function (breakpoints, stop) {
      if (typeof opts[stop] !== 'object') return breakpoints;
      var keys = Object.keys(opts[stop] || {});
      return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, breakpoints), keys.reduce(function (breakpoints, bp) {
        var _objectSpread2;

        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, breakpoints), {}, (_objectSpread2 = {}, _objectSpread2[bp] = true, _objectSpread2));
      }, {}));
    }, {
      default: true
    }); // @ts-ignore

    return Object.keys(breakpoints).reduce(function (style, bp) {
      var fromColor = utils_colors.palette(from[bp] || from['default'])(styleProps);
      var fromAtStop = fromAt[bp] || fromAt['default'];
      var viaColor = via[bp] || via['default'] ? utils_colors.palette(via[bp] || via['default'])(styleProps) : undefined;
      var viaAtStop = viaAt[bp] || viaAt['default'];
      var toColor = utils_colors.palette(to[bp] || from['default'])(styleProps);
      var toAtStop = toAt[bp] || toAt['default']; // eslint-disable-next-line

      var gradientCss = react.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["background-image: linear-gradient(to ", ",", "", ",", " ", "", ");"])), direction[bp] || direction['default'], fromColor, fromAtStop ? " " + fromAtStop : '', viaColor ? "" + viaColor + (viaAtStop ? " " + viaAtStop : '') + "," : '', toColor, toAtStop ? " " + toAtStop : '');

      if (bp === 'default') {
        return react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n          ", ";\n        "])), style, gradientCss);
      }

      return react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", ";\n        ", ";\n      "])), style, utils_colors.breakpoint(bp, react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            ", ";\n          "])), gradientCss))(styleProps));
    }, '');
  };
}

gradient.text = function (styleProps) {
  if (styleProps.gradientFrom || styleProps.gradientTo) {
    return react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-clip: text;\n      color: rgba(0, 0, 0, 0);\n    "])));
  }

  return '';
};

function getGradientStyles(opts) {
  return function (styleProps) {
    var defaultStyles = gradient(opts)(styleProps);
    if (!defaultStyles) return react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""])));
    var pseudoStyles = Object.entries(styleProps).reduce(function (styles, _ref) {
      var prop = _ref[0],
          value = _ref[1];

      if (prop[0] === '_') {
        var pseudoSelector = utils_cssProps.cssProps[prop];
        return react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", "\n          ", " {\n            ", ";\n          }\n        "])), styles, pseudoSelector, gradient({
          // @ts-ignore
          direction: value.gradientDirection || opts.direction,
          // @ts-ignore
          from: value.gradientFrom || opts.from,
          // @ts-ignore
          via: value.gradientVia || opts.via,
          // @ts-ignore
          to: value.gradientTo || opts.to
        })(styleProps));
      }

      return styles;
    }, react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))));
    return react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n      ", ";\n    "])), defaultStyles, pseudoStyles);
  };
}

exports.getGradientStyles = getGradientStyles;
exports.gradient = gradient;
