import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useMenuButton } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Menu.styles.js';
import { d as DropdownMenuButton$1 } from '../DropdownMenu.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      currentId = props.currentId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      hide = props.hide,
      last = props.last,
      placement = props.placement,
      show = props.show,
      toggle = props.toggle,
      visible = props.visible,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_disclosureRef = props.unstable_disclosureRef,
      unstable_moves = props.unstable_moves,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_arrowStyles = props.unstable_arrowStyles,
      unstable_referenceRef = props.unstable_referenceRef,
      restProps = _objectWithoutPropertiesLoose(props, ["baseId", "currentId", "disabled", "first", "focusable", "hide", "last", "placement", "show", "toggle", "visible", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_disclosureRef", "unstable_moves", "unstable_popoverStyles", "unstable_arrowStyles", "unstable_referenceRef"]);

  var dropdownMenuButtonProps = useMenuButton({
    baseId: baseId,
    currentId: currentId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    hide: hide,
    last: last,
    placement: placement,
    show: show,
    toggle: toggle,
    visible: visible,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_disclosureRef: unstable_disclosureRef,
    unstable_moves: unstable_moves,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_arrowStyles: unstable_arrowStyles,
    unstable_referenceRef: unstable_referenceRef
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), dropdownMenuButtonProps));
  var className = useClassName({
    style: DropdownMenuButton$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.Button'
});
var DropdownMenuButton = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'DropdownMenu.Button'
  },
  themeKey: 'DropdownMenu.Button'
});

export { DropdownMenuButton };
