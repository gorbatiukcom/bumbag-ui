'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
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
require('../utils/useStyle.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
var ProgressBar_ProgressBar_styles = require('../ProgressBar.styles-a0074f5f.js');

function normalizeValue(value, maxValue) {
  var newValue = value;
  if (newValue > maxValue) newValue = maxValue;else if (newValue < 0) newValue = 0;
  return newValue;
}

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var maxValue = props.maxValue,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["maxValue", "value"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var newValue = value || 0;
  var newMaxValue = maxValue || 100;
  newValue = normalizeValue(newValue, newMaxValue);
  var percent = newValue / newMaxValue * 100;
  var className = utils_useClassName.useClassName({
    style: ProgressBar_ProgressBar_styles.ProgressBar,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var indicatorClassName = utils_useClassName.useClassName({
    style: ProgressBar_ProgressBar_styles.ProgressBarIndicator,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      value: percent
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Indicator',
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    'aria-valuenow': newValue,
    'aria-valuemin': 0,
    'aria-valuemax': newMaxValue,
    className: className,
    role: 'progressbar',
    children: /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: indicatorClassName
    })
  });
}, {
  defaultProps: {
    color: 'primary',
    maxValue: 100,
    size: 'default',
    value: 0
  },
  themeKey: 'ProgressBar'
});
var ProgressBar = utils_createComponent.createComponent(function (props) {
  var textProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'ProgressBar'
  },
  themeKey: 'ProgressBar'
});

exports.ProgressBar = ProgressBar;
