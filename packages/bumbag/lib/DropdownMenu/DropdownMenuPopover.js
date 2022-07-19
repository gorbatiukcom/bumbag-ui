'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
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
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');
require('../Modal.styles-a83df364.js');
var Popover_Popover_styles = require('../Popover.styles-689e5c1d.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "currentId", "first", "hide", "hideOnClickOutside", "groups", "last", "modal", "move", "next", "orientation", "placement", "preventBodyScroll", "previous", "items", "setCurrentId", "wrap", "unstable_disclosureRef", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_popoverRef", "unstable_popoverStyles", "unstable_moves", "unstable_orphan", "unstable_autoFocusOnShow", "unstable_autoFocusOnHide", "animating", "animated", "stopAnimation", "unstable_virtual", "visible"]);

  var dropdownMenuPopoverProps = reakit.useMenu({
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
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), dropdownMenuPopoverProps));
  var className = utils_useClassName.useClassName({
    style: [DropdownMenu_DropdownMenu_styles.DropdownMenuPopover, Popover_Popover_styles.Popover],
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
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
var DropdownMenuPopover = utils_createComponent.createComponent(function (props) {
  var dropdownMenuPopoverProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.DropdownMenuPopover = DropdownMenuPopover;
