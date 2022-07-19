'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
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

function createHook(useHook, config) {
  return function (props, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$disableCSSProps = _ref.disableCSSProps,
        disableCSSProps = _ref$disableCSSProps === void 0 ? [] : _ref$disableCSSProps,
        _ref$themeKey = _ref.themeKey,
        themeKeyOverride = _ref$themeKey === void 0 ? undefined : _ref$themeKey;

    // @ts-ignore
    var themeKey = themeKeyOverride || (props === null || props === void 0 ? void 0 : props.themeKey) || (config === null || config === void 0 ? void 0 : config.themeKey);

    var _useDefaultProps = utils_useDefaultProps.useDefaultProps(props, _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, config), {}, {
      themeKey: themeKey
    })),
        newProps = _useDefaultProps.props;

    return useHook(newProps, {
      disableCSSProps: disableCSSProps,
      themeKey: config === null || config === void 0 ? void 0 : config.themeKey
    });
  };
}

exports.createHook = createHook;
