'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var utils_omit = require('../utils/omit.js');

var rootElementClassPrefix = 'bb-mode';
var cssVariablePrefix = '--bb';
var palettePrefix = cssVariablePrefix + "-palette";
function mapCSSVariables(obj) {
  return Object.entries(obj).reduce(function (cssVariables, _ref) {
    var _objectSpread2;

    var key = _ref[0],
        value = _ref[1];
    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, cssVariables), {}, (_objectSpread2 = {}, _objectSpread2[palettePrefix + "-" + key] = value, _objectSpread2));
  }, {});
}
function getColorModesCSSVariables(theme) {
  var _ref4;

  if (!theme.palette) {
    var _ref2;

    return _ref2 = {}, _ref2[theme.cssVariablesSelector] = {}, _ref2;
  }

  var cssVariables = mapCSSVariables(utils_omit.omit(theme.palette, 'modes'));
  cssVariables = Object.entries(theme.palette.modes || {}).reduce(function (cssVariables, _ref3) {
    var _objectSpread3;

    var modeKey = _ref3[0],
        value = _ref3[1];
    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, cssVariables), {}, (_objectSpread3 = {}, _objectSpread3["&." + rootElementClassPrefix + "-" + modeKey] = mapCSSVariables(value), _objectSpread3));
  }, cssVariables);
  return _ref4 = {}, _ref4[theme.cssVariablesSelector] = _rollupPluginBabelHelpers._objectSpread2({}, cssVariables), _ref4;
}
function getColorFromCSSVariable(selector, fallback) {
  return "var(" + palettePrefix + "-" + selector + ", " + fallback + ")";
}
function addColorModeRootElementClassName(nextMode, prevMode) {
  var _window$document$getE, _window, _window$document, _window$document$getE2, _window$document$getE3, _window2, _window2$document;

  var rootElement = (_window$document$getE = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : (_window$document$getE2 = _window$document.getElementsByTagName) === null || _window$document$getE2 === void 0 ? void 0 : (_window$document$getE3 = _window$document$getE2.call(_window$document, 'html')) === null || _window$document$getE3 === void 0 ? void 0 : _window$document$getE3[0]) !== null && _window$document$getE !== void 0 ? _window$document$getE : (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$document = _window2.document) === null || _window2$document === void 0 ? void 0 : _window2$document.body;

  if (rootElement) {
    if (prevMode) {
      rootElement.classList.remove(rootElementClassPrefix + "-" + prevMode);
    }

    rootElement.classList.add(rootElementClassPrefix + "-" + nextMode);
  }
}
function getDefaultColorMode(mode, _ref5) {
  var localStorage = _ref5.localStorage,
      theme = _ref5.theme;

  var _ref6 = theme.modes || {},
      useSystemColorMode = _ref6.useSystemColorMode;

  var defaultMode = mode;

  if (typeof window !== 'undefined') {
    if (useSystemColorMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      defaultMode = 'dark';
    }

    if (localStorage.get('mode')) {
      defaultMode = localStorage.get('mode');
    }
  }

  return defaultMode;
}

exports.addColorModeRootElementClassName = addColorModeRootElementClassName;
exports.getColorFromCSSVariable = getColorFromCSSVariable;
exports.getColorModesCSSVariables = getColorModesCSSVariables;
exports.getDefaultColorMode = getDefaultColorMode;
exports.mapCSSVariables = mapCSSVariables;
