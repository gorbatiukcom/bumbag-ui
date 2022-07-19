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
var Spinner_Spinner_styles = require('../Spinner.styles-e4b8cc9a.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var className = utils_useClassName.useClassName({
    style: Spinner_Spinner_styles.SpinnerWrapper,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var spinnerClassName = utils_useClassName.useClassName({
    style: Spinner_Spinner_styles.Spinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'vector'
  });
  var trackCircleClassName = utils_useClassName.useClassName({
    style: Spinner_Spinner_styles.TrackCircle,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'trackCircle'
  });
  var loaderCircleClassName = utils_useClassName.useClassName({
    style: Spinner_Spinner_styles.LoaderCircle,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'loaderCircle'
  });
  var children = /*#__PURE__*/React.createElement("svg", {
    viewBox: "22 22 44 44",
    className: spinnerClassName
  }, props.hasTrack && /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20",
    fill: "none",
    strokeWidth: "4",
    className: trackCircleClassName
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20",
    fill: "none",
    strokeWidth: "4",
    className: loaderCircleClassName
  }));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    color: 'primary',
    duration: '0.6s',
    perimeter: '40%'
  },
  themeKey: 'Spinner'
});
var Spinner = utils_createComponent.createComponent(function (props) {
  var spinnerProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: spinnerProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Spinner'
  },
  themeKey: 'Spinner'
});

exports.Spinner = Spinner;
