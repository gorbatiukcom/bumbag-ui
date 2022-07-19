'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('../utils/omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('../utils/pick.js');
require('../utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('lodash/uniq');
require('reakit/Id');
var utils_uniqueId = require('../utils/uniqueId.js');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');

var ToastContext = React.createContext({
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

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var _React$useState = React.useState([]),
      toasts = _React$useState[0],
      setToasts = _React$useState[1];

  var placement = theme === null || theme === void 0 ? void 0 : (_theme$Toast = theme.Toast) === null || _theme$Toast === void 0 ? void 0 : _theme$Toast.placement;
  var showCountdown = theme === null || theme === void 0 ? void 0 : (_theme$Toast2 = theme.Toast) === null || _theme$Toast2 === void 0 ? void 0 : _theme$Toast2.showCountdown;
  var timeout = theme === null || theme === void 0 ? void 0 : (_theme$Toast3 = theme.Toast) === null || _theme$Toast3 === void 0 ? void 0 : _theme$Toast3.timeout;
  var remove = React.useCallback(function (key) {
    setToasts(function (toasts) {
      var newToasts = toasts.filter(function (toast) {
        return toast.key !== key;
      });
      return newToasts;
    });
  }, []);
  var add = React.useCallback(function (_toast) {
    var key = utils_uniqueId.generateId('toast-');

    var toast = _rollupPluginBabelHelpers._objectSpread2({
      showCountdown: showCountdown,
      timeout: timeout
    }, _toast);

    setToasts(function (toasts) {
      return [].concat(placement.includes('bottom') ? toasts : [], [_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
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
  var success = React.useCallback(function (toast) {
    return add(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, toast), {}, {
      type: 'success'
    }));
  }, [add]);
  var info = React.useCallback(function (toast) {
    return add(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, toast), {}, {
      type: 'info'
    }));
  }, [add]);
  var warning = React.useCallback(function (toast) {
    return add(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, toast), {}, {
      type: 'warning'
    }));
  }, [add]);
  var danger = React.useCallback(function (toast) {
    return add(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, toast), {}, {
      type: 'danger'
    }));
  }, [add]);
  var value = React.useMemo(function () {
    return {
      add: add,
      success: success,
      info: info,
      warning: warning,
      danger: danger,
      toasts: toasts
    };
  }, [add, danger, info, success, toasts, warning]);
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: value
  }, children);
}
function useToasts() {
  return React.useContext(ToastContext);
}

exports.ToastContext = ToastContext;
exports.ToastProvider = ToastProvider;
exports.useToasts = useToasts;
