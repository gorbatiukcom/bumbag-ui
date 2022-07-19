import { useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/useStyle.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, usePopoverBackdrop } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Modal.styles.js';
import { h as PopoverBackdrop$1 } from '../Popover.styles.js';
import { PopoverStateContext } from './PopoverState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var popoverContext = useContext(PopoverStateContext);
  props = _objectSpread2(_objectSpread2({}, props), popoverContext.popover);

  var _props = props,
      visible = _props.visible,
      baseId = _props.baseId,
      animating = _props.animating,
      animated = _props.animated,
      stopAnimation = _props.stopAnimation,
      modal = _props.modal,
      usePortal = _props.usePortal,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["visible", "baseId", "animating", "animated", "stopAnimation", "modal", "usePortal"]);

  var popoverBackdropProps = usePopoverBackdrop({
    visible: visible,
    baseId: baseId,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation,
    modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), popoverBackdropProps));
  var className = useClassName({
    style: PopoverBackdrop$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Backdrop'
});
var PopoverBackdrop = createComponent(function (props) {
  var popoverBackdropProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

export { PopoverBackdrop };
