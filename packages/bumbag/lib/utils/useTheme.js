'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Provider_ThemeContext = require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');

function useTheme() {
  var _React$useContext = React.useContext(Provider_ThemeContext.BumbagThemeContext),
      isSSR = _React$useContext.isSSR,
      setTheme = _React$useContext.setTheme;

  var theme = React.useContext(react.ThemeContext);
  return {
    isSSR: isSSR,
    theme: theme,
    setTheme: setTheme
  };
}

exports.useTheme = useTheme;
