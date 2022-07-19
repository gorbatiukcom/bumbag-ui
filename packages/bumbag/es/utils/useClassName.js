import { useMemo } from 'react';
import '../Provider/ThemeContext.js';
import classNames from 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import _uniq from 'lodash/uniq';

function useClassName(_ref) {
  var style = _ref.style,
      prevClassName = _ref.prevClassName,
      styleProps = _ref.styleProps,
      themeKey = _ref.themeKey,
      themeKeySuffix = _ref.themeKeySuffix;

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var newThemeKey = "" + (themeKey || '') + (themeKeySuffix ? "." + themeKeySuffix : '');
  var stringifiedStyleProps = Object.values(styleProps).filter(function (styleProp) {
    return typeof styleProp !== 'function';
  }).join('.');
  var props = useMemo(function () {
    return _objectSpread2(_objectSpread2({
      theme: theme
    }, styleProps), {}, {
      themeKey: newThemeKey
    });
  }, [stringifiedStyleProps]); // eslint-disable-line

  var className = useMemo(function () {
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
  var classNames$1 = classNames.apply(void 0, className.concat([prevClassName, newThemeKey ? "bb-" + newThemeKey.replace(/\./g, '') : undefined]));

  var uniqueClassNames = _uniq(classNames$1.split(' ')).join(' ');

  return uniqueClassNames;
}

export { useClassName };
