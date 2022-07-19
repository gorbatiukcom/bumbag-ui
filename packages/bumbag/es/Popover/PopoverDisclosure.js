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
import { Box, usePopoverDisclosure } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Modal.styles.js';
import { i as PopoverDisclosure$1 } from '../Popover.styles.js';
import { PopoverStateContext } from './PopoverState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var popoverContext = useContext(PopoverStateContext);
  props = _objectSpread2(_objectSpread2({}, props), popoverContext.popover);

  var _props = props,
      disabled = _props.disabled,
      focusable = _props.focusable,
      visible = _props.visible,
      toggle = _props.toggle,
      baseId = _props.baseId,
      unstable_referenceRef = _props.unstable_referenceRef,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["disabled", "focusable", "visible", "toggle", "baseId", "unstable_referenceRef"]);

  var popoverDisclosureProps = usePopoverDisclosure({
    disabled: disabled,
    focusable: focusable,
    visible: visible,
    toggle: toggle,
    baseId: baseId,
    unstable_referenceRef: unstable_referenceRef
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), popoverDisclosureProps));
  var className = useClassName({
    style: PopoverDisclosure$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Disclosure'
});
var PopoverDisclosure = createComponent(function (props) {
  var popoverDisclosureProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: popoverDisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'Popover.Disclosure'
});

export { PopoverDisclosure };
