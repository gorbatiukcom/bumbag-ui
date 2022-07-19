'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('./useTheme.js');
require('conditional-wrap');
require('./useLocalStorage.js');
require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('./omit.js');
require('../ColorMode/utils.js');
var ColorMode_ColorModeContext = require('../ColorMode/ColorModeContext.js');
require('./pick.js');
var utils_cssProps = require('./cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('./isFunction.js');
require('./get.js');

function useStyle(props, _ref) {
  var disableCSSProps = _ref.disableCSSProps;

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var _useColorMode = ColorMode_ColorModeContext.useColorMode(),
      globalColorMode = _useColorMode.colorMode;

  var cssProps = utils_cssProps.pickCSSProps(props);
  var colorMode = props.colorMode || globalColorMode;
  return React.useMemo(function () {
    return utils_colors.getCSSFromStyleObject(cssProps, theme, colorMode, {
      fromProps: true,
      disableCSSProps: disableCSSProps
    });
  }, [cssProps, theme, colorMode, disableCSSProps]);
}

exports.useStyle = useStyle;
