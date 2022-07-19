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
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Modal.styles-a83df364.js');
var Popover_Popover_styles = require('../Popover.styles-689e5c1d.js');
var Popover_PopoverState = require('./PopoverState.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var popoverContext = React.useContext(Popover_PopoverState.PopoverStateContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), popoverContext.popover);

  var _props = props,
      visible = _props.visible,
      baseId = _props.baseId,
      animating = _props.animating,
      animated = _props.animated,
      stopAnimation = _props.stopAnimation,
      modal = _props.modal,
      usePortal = _props.usePortal,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props, ["visible", "baseId", "animating", "animated", "stopAnimation", "modal", "usePortal"]);

  var popoverBackdropProps = reakit.usePopoverBackdrop({
    visible: visible,
    baseId: baseId,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation,
    modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), popoverBackdropProps));
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverBackdrop,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Backdrop'
});
var PopoverBackdrop = utils_createComponent.createComponent(function (props) {
  var popoverBackdropProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: popoverBackdropProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover.Backdrop'
  },
  themeKey: 'Popover.Backdrop'
});

exports.PopoverBackdrop = PopoverBackdrop;
