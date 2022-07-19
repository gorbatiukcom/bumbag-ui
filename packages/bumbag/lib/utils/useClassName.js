'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
var classNames = require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('./useTheme.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var _uniq = require('lodash/uniq');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var _uniq__default = /*#__PURE__*/_interopDefaultLegacy(_uniq);

function useClassName(_ref) {
  var style = _ref.style,
      prevClassName = _ref.prevClassName,
      styleProps = _ref.styleProps,
      themeKey = _ref.themeKey,
      themeKeySuffix = _ref.themeKeySuffix;

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var newThemeKey = "" + (themeKey || '') + (themeKeySuffix ? "." + themeKeySuffix : '');
  var stringifiedStyleProps = Object.values(styleProps).filter(function (styleProp) {
    return typeof styleProp !== 'function';
  }).join('.');
  var props = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
      theme: theme
    }, styleProps), {}, {
      themeKey: newThemeKey
    });
  }, [stringifiedStyleProps]); // eslint-disable-line

  var className = React.useMemo(function () {
    var className;

    if (Array.isArray(style)) {
      className = style.map(function (style) {
        return style(props);
      });
    } else {
      className = [style(props)];
    }

    return className;
  }, [props, style]);
  var classNames = classNames__default['default'].apply(void 0, className.concat([prevClassName, newThemeKey ? "bb-" + newThemeKey.replace(/\./g, '') : undefined]));

  var uniqueClassNames = _uniq__default['default'](classNames.split(' ')).join(' ');

  return uniqueClassNames;
}

exports.useClassName = useClassName;
