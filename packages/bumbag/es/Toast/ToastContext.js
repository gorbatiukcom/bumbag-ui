import { createContext, useState, useCallback, useMemo, createElement, useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import 'reakit/Id';
import { generateId } from '../utils/uniqueId.js';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';

var ToastContext = createContext({
  // @ts-ignore
  add: function add(toast) {},
  // @ts-ignore
  success: function success(toast) {},
  // @ts-ignore
  danger: function danger(toast) {},
  // @ts-ignore
  warning: function warning(toast) {},
  // @ts-ignore
  info: function info(toast) {},
  toasts: []
});
function ToastProvider(props) {
  var _theme$Toast, _theme$Toast2, _theme$Toast3;

  var children = props.children;

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var _React$useState = useState([]),
      toasts = _React$useState[0],
      setToasts = _React$useState[1];

  var placement = theme === null || theme === void 0 ? void 0 : (_theme$Toast = theme.Toast) === null || _theme$Toast === void 0 ? void 0 : _theme$Toast.placement;
  var showCountdown = theme === null || theme === void 0 ? void 0 : (_theme$Toast2 = theme.Toast) === null || _theme$Toast2 === void 0 ? void 0 : _theme$Toast2.showCountdown;
  var timeout = theme === null || theme === void 0 ? void 0 : (_theme$Toast3 = theme.Toast) === null || _theme$Toast3 === void 0 ? void 0 : _theme$Toast3.timeout;
  var remove = useCallback(function (key) {
    setToasts(function (toasts) {
      var newToasts = toasts.filter(function (toast) {
        return toast.key !== key;
      });
      return newToasts;
    });
  }, []);
  var add = useCallback(function (_toast) {
    var key = generateId('toast-');

    var toast = _objectSpread2({
      showCountdown: showCountdown,
      timeout: timeout
    }, _toast);

    setToasts(function (toasts) {
      return [].concat(placement.includes('bottom') ? toasts : [], [_objectSpread2(_objectSpread2({
        key: key
      }, toast), {}, {
        countdown: toast.showCountdown ? toast.timeout : undefined,
        onClickClose: function onClickClose() {
          return remove(key);
        }
      })], !placement.includes('bottom') ? toasts : []);
    });

    if (toast.timeout) {
      setTimeout(function () {
        setToasts(function (toasts) {
          var newToasts = toasts.filter(function (toast) {
            return toast.key !== key;
          });
          return newToasts;
        });
      }, toast.timeout);
    }
  }, [placement, remove, showCountdown, timeout]);
  var success = useCallback(function (toast) {
    return add(_objectSpread2(_objectSpread2({}, toast), {}, {
      type: 'success'
    }));
  }, [add]);
  var info = useCallback(function (toast) {
    return add(_objectSpread2(_objectSpread2({}, toast), {}, {
      type: 'info'
    }));
  }, [add]);
  var warning = useCallback(function (toast) {
    return add(_objectSpread2(_objectSpread2({}, toast), {}, {
      type: 'warning'
    }));
  }, [add]);
  var danger = useCallback(function (toast) {
    return add(_objectSpread2(_objectSpread2({}, toast), {}, {
      type: 'danger'
    }));
  }, [add]);
  var value = useMemo(function () {
    return {
      add: add,
      success: success,
      info: info,
      warning: warning,
      danger: danger,
      toasts: toasts
    };
  }, [add, danger, info, success, toasts, warning]);
  return /*#__PURE__*/createElement(ToastContext.Provider, {
    value: value
  }, children);
}
function useToasts() {
  return useContext(ToastContext);
}

export { ToastContext, ToastProvider, useToasts };
