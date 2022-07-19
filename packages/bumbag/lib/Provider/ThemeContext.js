'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var BumbagThemeContext = React.createContext({
  isSSR: false,
  setTheme: function setTheme() {},
  theme: {}
});

exports.BumbagThemeContext = BumbagThemeContext;
