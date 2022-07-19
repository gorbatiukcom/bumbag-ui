'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('../utils/useTheme.js');
var ConditionalWrap = require('conditional-wrap');
var utils_useLocalStorage = require('../utils/useLocalStorage.js');
require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('../utils/omit.js');
var ColorMode_utils = require('./utils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConditionalWrap__default = /*#__PURE__*/_interopDefaultLegacy(ConditionalWrap);

var ColorModeContext = React.createContext({
  setColorMode: function setColorMode() {},
  colorMode: 'default'
});
ColorModeProvider.defaultProps = {
  isSSR: false
};
function ColorModeProvider(props) {
  var children = props.children,
      _defaultMode = props.mode,
      isSSR = props.isSSR; ////////////////////////////////////

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var localStorage = utils_useLocalStorage.useLocalStorage();
  var defaultMode = React.useMemo(function () {
    return ColorMode_utils.getDefaultColorMode(_defaultMode, {
      localStorage: localStorage,
      theme: theme
    });
  }, [_defaultMode]); // eslint-disable-line
  ////////////////////////////////////

  var _React$useState = React.useState(defaultMode),
      mode = _React$useState[0],
      setMode = _React$useState[1];

  React.useEffect(function () {
    setMode(defaultMode);
  }, [defaultMode]); ////////////////////////////////////

  React.useEffect(function () {
    ColorMode_utils.addColorModeRootElementClassName(defaultMode);
    localStorage.set('mode', defaultMode);
  }, [defaultMode]); // eslint-disable-line
  ////////////////////////////////////

  var setColorMode = React.useCallback(function (colorMode) {
    ColorMode_utils.addColorModeRootElementClassName(colorMode, mode);
    localStorage.set('mode', colorMode);
    setMode(colorMode);
  }, [localStorage, mode]); ////////////////////////////////////

  var value = React.useMemo(function () {
    return {
      colorMode: mode,
      setColorMode: setColorMode
    };
  }, [mode, setColorMode]); ////////////////////////////////////

  var _React$useState2 = React.useState(false),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  useIsomorphicLayoutEffect(function () {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []); ////////////////////////////////////

  return /*#__PURE__*/React.createElement(ConditionalWrap__default['default'], {
    condition: isSSR,
    wrap: function wrap(children) {
      return /*#__PURE__*/React.createElement("div", {
        style: !mounted ? {
          visibility: 'hidden'
        } : {}
      }, children);
    }
  }, /*#__PURE__*/React.createElement(ColorModeContext.Provider, {
    value: value
  }, children));
}
function useColorMode() {
  return React.useContext(ColorModeContext);
}

exports.ColorModeContext = ColorModeContext;
exports.ColorModeProvider = ColorModeProvider;
exports.useColorMode = useColorMode;
