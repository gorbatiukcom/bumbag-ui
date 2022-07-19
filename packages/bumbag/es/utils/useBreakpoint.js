import { useState, useEffect } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';
import { getMediaQueryList } from './getMediaQueryList.js';

function useBreakpoint(breakpoint) {
  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var _React$useState = useState(undefined),
      doesMatch = _React$useState[0],
      setDoesMatch = _React$useState[1];

  useEffect(function () {
    var mounted = true;
    var mediaQueryList = getMediaQueryList(breakpoint, theme);
    setDoesMatch(mediaQueryList.matches);

    var onMediaChange = function onMediaChange(e) {
      if (!mounted) return;
      setDoesMatch(e.matches);
    };

    mediaQueryList.addListener(onMediaChange);
    return function cleanup() {
      mounted = false;
      mediaQueryList.removeListener(onMediaChange);
    };
  }, [breakpoint, theme]);
  return doesMatch;
}

export { useBreakpoint };
