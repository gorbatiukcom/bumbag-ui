'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var utils_isFunction = require('./isFunction.js');

function createElement(_ref) {
  var children = _ref.children,
      component = _ref.component,
      _ref$enableRenderProp = _ref.enableRenderPropsComposition,
      enableRenderPropsComposition = _ref$enableRenderProp === void 0 ? true : _ref$enableRenderProp,
      htmlProps = _ref.htmlProps,
      use = _ref.use;

  if (enableRenderPropsComposition && utils_isFunction.isFunction(children)) {
    return children(htmlProps);
  }

  return React.createElement(component, _rollupPluginBabelHelpers._objectSpread2({
    as: use
  }, htmlProps), htmlProps.children || children);
}

exports.createElement = createElement;
