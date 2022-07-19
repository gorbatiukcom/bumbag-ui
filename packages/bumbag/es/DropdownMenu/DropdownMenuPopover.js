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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useMenu } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Menu.styles.js';
import { e as DropdownMenuPopover$1 } from '../DropdownMenu.styles.js';
import '../Modal.styles.js';
import { a as Popover } from '../Popover.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      currentId = props.currentId,
      first = props.first,
      hide = props.hide,
      hideOnClickOutside = props.hideOnClickOutside,
      groups = props.groups,
      last = props.last,
      modal = props.modal,
      move = props.move,
      next = props.next,
      orientation = props.orientation,
      placement = props.placement,
      preventBodyScroll = props.preventBodyScroll,
      previous = props.previous,
      items = props.items,
      setCurrentId = props.setCurrentId,
      wrap = props.wrap,
      unstable_disclosureRef = props.unstable_disclosureRef,
      unstable_initialFocusRef = props.unstable_initialFocusRef,
      unstable_finalFocusRef = props.unstable_finalFocusRef,
      unstable_popoverRef = props.unstable_popoverRef,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_moves = props.unstable_moves,
      unstable_orphan = props.unstable_orphan,
      unstable_autoFocusOnShow = props.unstable_autoFocusOnShow,
      unstable_autoFocusOnHide = props.unstable_autoFocusOnHide,
      animating = props.animating,
      animated = props.animated,
      stopAnimation = props.stopAnimation,
      unstable_virtual = props.unstable_virtual,
      visible = props.visible,
      restProps = _objectWithoutPropertiesLoose(props, ["baseId", "currentId", "first", "hide", "hideOnClickOutside", "groups", "last", "modal", "move", "next", "orientation", "placement", "preventBodyScroll", "previous", "items", "setCurrentId", "wrap", "unstable_disclosureRef", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_popoverRef", "unstable_popoverStyles", "unstable_moves", "unstable_orphan", "unstable_autoFocusOnShow", "unstable_autoFocusOnHide", "animating", "animated", "stopAnimation", "unstable_virtual", "visible"]);

  var dropdownMenuPopoverProps = useMenu({
    baseId: baseId,
    currentId: currentId,
    first: first,
    hide: hide,
    hideOnClickOutside: hideOnClickOutside,
    groups: groups,
    last: last,
    modal: process.env.NODE_ENV === 'test' ? false : modal,
    move: move,
    next: next,
    orientation: orientation,
    placement: placement,
    preventBodyScroll: preventBodyScroll,
    previous: previous,
    items: items,
    setCurrentId: setCurrentId,
    wrap: wrap,
    unstable_disclosureRef: unstable_disclosureRef,
    unstable_initialFocusRef: unstable_initialFocusRef,
    unstable_finalFocusRef: unstable_finalFocusRef,
    unstable_popoverRef: unstable_popoverRef,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_moves: unstable_moves,
    unstable_orphan: unstable_orphan,
    unstable_autoFocusOnShow: unstable_autoFocusOnShow,
    unstable_autoFocusOnHide: unstable_autoFocusOnHide,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation,
    unstable_virtual: unstable_virtual,
    visible: visible
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), dropdownMenuPopoverProps));
  var className = useClassName({
    style: [DropdownMenuPopover$1, Popover],
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    tabIndex: props.isTabbable ? boxProps.tabIndex : undefined
  });
}, {
  defaultProps: {
    altitude: '200',
    isTabbable: true
  },
  themeKey: 'DropdownMenu.Popover'
});
var DropdownMenuPopover = createComponent(function (props) {
  var dropdownMenuPopoverProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: dropdownMenuPopoverProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'DropdownMenu.Popover'
  },
  themeKey: 'DropdownMenu.Popover'
});

export { DropdownMenuPopover };
