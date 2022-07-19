'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var omitBy = function omitBy(obj, check) {
  obj = _rollupPluginBabelHelpers._objectSpread2({}, obj);
  Object.entries(obj).forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return check(value) && delete obj[key];
  });
  return obj;
};

exports.omitBy = omitBy;
