'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('./useTheme.js');
var utils_getMediaQueryList = require('./getMediaQueryList.js');

function useBreakpoint(breakpoint) {
  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var _React$useState = React.useState(undefined),
      doesMatch = _React$useState[0],
      setDoesMatch = _React$useState[1];

  React.useEffect(function () {
    var mounted = true;
    var mediaQueryList = utils_getMediaQueryList.getMediaQueryList(breakpoint, theme);
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

exports.useBreakpoint = useBreakpoint;
