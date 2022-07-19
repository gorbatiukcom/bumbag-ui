import { useState, useEffect, useMemo } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';
import { getMediaQueryList } from './getMediaQueryList.js';

function useBreakpointValue(breakpointValueMap) {
  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var _React$useState = useState([]),
      matchedBreakpoints = _React$useState[0],
      setMatchedBreakpoints = _React$useState[1];

  var initialMatchedBreakpoints = Object.entries(breakpointValueMap).map(function (_ref) {
    var breakpoint = _ref[0],
        value = _ref[1];
    if (breakpoint === 'default') return null;

    var onMediaChange = function onMediaChange(e) {
      if (e.matches) {
        setMatchedBreakpoints(function (matchedBreakpoints) {
          return [].concat(matchedBreakpoints, [{
            breakpoint: breakpoint,
            value: value,
            mediaQueryList: e
          }]);
        });
      } else {
        setMatchedBreakpoints(function (matchedBreakpoints) {
          return matchedBreakpoints.filter(function (matchedBreakpoint) {
            return matchedBreakpoint.breakpoint !== breakpoint;
          });
        });
      }
    };

    var mediaQueryList = getMediaQueryList(breakpoint, theme);
    return {
      breakpoint: breakpoint,
      value: value,
      mediaQueryList: mediaQueryList,
      onMediaChange: onMediaChange
    };
  }).filter(Boolean);
  useEffect(function () {
    initialMatchedBreakpoints.forEach(function (item) {
      item.mediaQueryList.addListener(item.onMediaChange);
    });
    return function cleanup() {
      initialMatchedBreakpoints.forEach(function (item) {
        item.mediaQueryList.removeListener(item.onMediaChange);
      });
    };
  }, [initialMatchedBreakpoints]);
  var matches = matchedBreakpoints.length > 0 ? matchedBreakpoints : initialMatchedBreakpoints;
  var value = useMemo(function () {
    var _matches$find;

    return ((_matches$find = matches.find(function (item) {
      return item.mediaQueryList.matches;
    })) === null || _matches$find === void 0 ? void 0 : _matches$find.value) || breakpointValueMap['default'];
  }, [breakpointValueMap, matches]);
  return value;
}

export { useBreakpointValue };
