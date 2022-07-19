'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('./useTheme.js');
require('conditional-wrap');
require('./useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('./omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('./get.js');
require('./omitBy.js');
var utils_useDefaultProps = require('./useDefaultProps.js');

function createComponent(Component, config) {
  var Comp = function Comp(props, ref) {
    var _useDefaultProps = utils_useDefaultProps.useDefaultProps(props, config),
        newProps = _useDefaultProps.props; // @ts-ignore


    return React.createElement(Component, _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, newProps), {}, {
      elementRef: ref
    }), props === null || props === void 0 ? void 0 : props.children);
  };

  var ForwardedComponent = React.forwardRef(Comp);

  if (config.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }

  return Object.assign(ForwardedComponent, config.attach);
}

exports.createComponent = createComponent;
