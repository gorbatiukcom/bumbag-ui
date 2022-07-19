'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var lineHeights = (function (overrides) {
  return _rollupPluginBabelHelpers._objectSpread2({
    none: 1,
    default: 1.5,
    100: 1.125,
    200: 1.25,
    300: 1.5,
    400: 1.625,
    500: 1.75,
    600: 2
  }, overrides);
});

exports.default = lineHeights;
