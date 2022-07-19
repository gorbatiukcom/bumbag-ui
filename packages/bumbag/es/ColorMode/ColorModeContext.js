import { createContext, useMemo, useState, useEffect, useCallback, createElement, useContext, useLayoutEffect } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from '../utils/useTheme.js';
import ConditionalWrap from 'conditional-wrap';
import { useLocalStorage } from '../utils/useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import { getDefaultColorMode, addColorModeRootElementClassName } from './utils.js';

var ColorModeContext = createContext({
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

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var localStorage = useLocalStorage();
  var defaultMode = useMemo(function () {
    return getDefaultColorMode(_defaultMode, {
      localStorage: localStorage,
      theme: theme
    });
  }, [_defaultMode]); // eslint-disable-line
  ////////////////////////////////////

  var _React$useState = useState(defaultMode),
      mode = _React$useState[0],
      setMode = _React$useState[1];

  useEffect(function () {
    setMode(defaultMode);
  }, [defaultMode]); ////////////////////////////////////

  useEffect(function () {
    addColorModeRootElementClassName(defaultMode);
    localStorage.set('mode', defaultMode);
  }, [defaultMode]); // eslint-disable-line
  ////////////////////////////////////

  var setColorMode = useCallback(function (colorMode) {
    addColorModeRootElementClassName(colorMode, mode);
    localStorage.set('mode', colorMode);
    setMode(colorMode);
  }, [localStorage, mode]); ////////////////////////////////////

  var value = useMemo(function () {
    return {
      colorMode: mode,
      setColorMode: setColorMode
    };
  }, [mode, setColorMode]); ////////////////////////////////////

  var _React$useState2 = useState(false),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(function () {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []); ////////////////////////////////////

  return /*#__PURE__*/createElement(ConditionalWrap, {
    condition: isSSR,
    wrap: function wrap(children) {
      return /*#__PURE__*/createElement("div", {
        style: !mounted ? {
          visibility: 'hidden'
        } : {}
      }, children);
    }
  }, /*#__PURE__*/createElement(ColorModeContext.Provider, {
    value: value
  }, children));
}
function useColorMode() {
  return useContext(ColorModeContext);
}

export { ColorModeContext, ColorModeProvider, useColorMode };
