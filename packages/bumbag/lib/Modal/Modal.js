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
var utils_omit = require('../utils/omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('../utils/pick.js');
var utils_cssProps = require('../utils/cssProps.js');
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
var Modal_Modal_styles = require('../Modal.styles-a83df364.js');
var Modal_ModalState = require('./ModalState.js');
var Modal_ModalBackdrop = require('./ModalBackdrop.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = React.useContext(Modal_ModalState.ModalContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), modalContext.modal);

  var _props = props,
      children = _props.children,
      hideBackdrop = _props.hideBackdrop,
      hide = _props.hide,
      hideOnEsc = _props.hideOnEsc,
      hideOnClickOutside = _props.hideOnClickOutside,
      modal = _props.modal,
      preventBodyScroll = _props.preventBodyScroll,
      visible = _props.visible,
      animating = _props.animating,
      animated = _props.animated,
      baseId = _props.baseId,
      unstable_initialFocusRef = _props.unstable_initialFocusRef,
      unstable_finalFocusRef = _props.unstable_finalFocusRef,
      unstable_orphan = _props.unstable_orphan,
      unstable_autoFocusOnHide = _props.unstable_autoFocusOnHide,
      unstable_autoFocusOnShow = _props.unstable_autoFocusOnShow,
      stopAnimation = _props.stopAnimation,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props, ["children", "hideBackdrop", "hide", "hideOnEsc", "hideOnClickOutside", "modal", "preventBodyScroll", "visible", "animating", "animated", "baseId", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_orphan", "unstable_autoFocusOnHide", "unstable_autoFocusOnShow", "stopAnimation"]);

  var modalProps = reakit.useDialog({
    hide: hide,
    hideOnEsc: hideOnEsc,
    hideOnClickOutside: hideOnClickOutside,
    modal: process.env.NODE_ENV === 'test' ? false : modal,
    preventBodyScroll: preventBodyScroll,
    visible: visible,
    animating: animating,
    animated: animated,
    baseId: baseId,
    unstable_initialFocusRef: unstable_initialFocusRef,
    unstable_finalFocusRef: unstable_finalFocusRef,
    unstable_orphan: unstable_orphan,
    unstable_autoFocusOnHide: unstable_autoFocusOnHide,
    unstable_autoFocusOnShow: unstable_autoFocusOnShow,
    stopAnimation: stopAnimation
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), modalProps), !modal ? {
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/React.createElement(Box_Box.Box, null, !hideBackdrop && /*#__PURE__*/React.createElement(Modal_ModalBackdrop.ModalBackdrop, null, /*#__PURE__*/React.createElement("div", null)), children);
    }
  } : {}));
  var className = utils_useClassName.useClassName({
    style: Modal_Modal_styles.Modal,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className,
    children: modal ? /*#__PURE__*/React.createElement(React.Fragment, null, !hideBackdrop && /*#__PURE__*/React.createElement(Modal_ModalBackdrop.ModalBackdrop, utils_cssProps.omitCSSProps(utils_omit.omit(props, 'className')), /*#__PURE__*/React.createElement("div", null)), children) : children
  });
}, {
  defaultProps: {
    placement: 'center'
  },
  themeKey: 'Modal'
});
var Modal = utils_createComponent.createComponent(function (props) {
  var modalProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: modalProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Modal'
  },
  themeKey: 'Modal'
});

exports.Modal = Modal;
