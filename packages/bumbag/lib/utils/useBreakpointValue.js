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

function useBreakpointValue(breakpointValueMap) {
  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var _React$useState = React.useState([]),
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

    var mediaQueryList = utils_getMediaQueryList.getMediaQueryList(breakpoint, theme);
    return {
      breakpoint: breakpoint,
      value: value,
      mediaQueryList: mediaQueryList,
      onMediaChange: onMediaChange
    };
  }).filter(Boolean);
  React.useEffect(function () {
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
  var value = React.useMemo(function () {
    var _matches$find;

    return ((_matches$find = matches.find(function (item) {
      return item.mediaQueryList.matches;
    })) === null || _matches$find === void 0 ? void 0 : _matches$find.value) || breakpointValueMap['default'];
  }, [breakpointValueMap, matches]);
  return value;
}

exports.useBreakpointValue = useBreakpointValue;
