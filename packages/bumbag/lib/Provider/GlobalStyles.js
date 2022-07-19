'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('./ThemeContext.js');
require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('../utils/omit.js');
var ColorMode_utils = require('../ColorMode/utils.js');
var ColorMode_ColorModeContext = require('../ColorMode/ColorModeContext.js');
require('../utils/pick.js');
require('../utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');

var _templateObject;
function GlobalStyles() {
  var _theme = React.useContext(react.ThemeContext);

  var _useColorMode = ColorMode_ColorModeContext.useColorMode(),
      colorMode = _useColorMode.colorMode;

  var styleProps = {
    colorMode: colorMode,
    theme: _theme
  };
  var colorModesCSSVariables = React.useMemo(function () {
    return ColorMode_utils.getColorModesCSSVariables(_theme);
  }, [_theme]);
  return /*#__PURE__*/React.createElement(react.Global, {
    styles: react.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", "\n\n        html,\n        body {\n          background-color: ", ";\n          box-sizing: border-box;\n          font-family: ", ";\n          font-size: ", "px;\n          line-height: ", ";\n          margin: 0;\n          padding: 0;\n          -webkit-font-smoothing: antialiased;\n          text-rendering: optimizeLegibility;\n          color: ", ";\n          fill: ", ";\n        }\n\n        & input:focus {\n          outline: unset;\n        }\n\n        *,\n        *::before,\n        *::after {\n          box-sizing: inherit;\n        }\n\n        ", ";\n\n        ", ";\n      "])), colorModesCSSVariables, utils_colors.palette('background')(styleProps), utils_colors.font('default')(styleProps), utils_colors.theme('global', 'fontSize')(styleProps) * utils_colors.fontSize('200')(styleProps), utils_colors.lineHeight('default')(styleProps), utils_colors.palette('text')(styleProps), utils_colors.palette('text')(styleProps), utils_colors.font('importUrls')(styleProps) && utils_colors.font('importUrls')(styleProps).map(function (url) {
      return "@import url('" + url + "');";
    }).join(''), utils_colors.theme('global.styles.base')(styleProps))
  });
}

exports.GlobalStyles = GlobalStyles;
