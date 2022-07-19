import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './get.js';
import './omitBy.js';
import { useDefaultProps } from './useDefaultProps.js';

function createHook(useHook, config) {
  return function (props, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$disableCSSProps = _ref.disableCSSProps,
        disableCSSProps = _ref$disableCSSProps === void 0 ? [] : _ref$disableCSSProps,
        _ref$themeKey = _ref.themeKey,
        themeKeyOverride = _ref$themeKey === void 0 ? undefined : _ref$themeKey;

    // @ts-ignore
    var themeKey = themeKeyOverride || (props === null || props === void 0 ? void 0 : props.themeKey) || (config === null || config === void 0 ? void 0 : config.themeKey);

    var _useDefaultProps = useDefaultProps(props, _objectSpread2(_objectSpread2({}, config), {}, {
      themeKey: themeKey
    })),
        newProps = _useDefaultProps.props;

    return useHook(newProps, {
      disableCSSProps: disableCSSProps,
      themeKey: config === null || config === void 0 ? void 0 : config.themeKey
    });
  };
}

export { createHook };
