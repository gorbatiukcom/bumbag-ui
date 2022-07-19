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
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_bindFns = require('../utils/bindFns.js');
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
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');
require('./DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
require('./DropdownMenuPopover.js');
require('./DropdownMenuState.js');
var DropdownMenu_DropdownMenu = require('./DropdownMenu.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var iconAfter = props.iconAfter,
      iconAfterProps = props.iconAfterProps,
      iconBefore = props.iconBefore,
      iconBeforeProps = props.iconBeforeProps,
      children = props.children,
      baseId = props.baseId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      last = props.last,
      unregisterItem = props.unregisterItem,
      registerItem = props.registerItem,
      currentId = props.currentId,
      hide = props.hide,
      hideOnClick = props.hideOnClick,
      move = props.move,
      next = props.next,
      onClick = props.onClick,
      orientation = props.orientation,
      overrides = props.overrides,
      placement = props.placement,
      previous = props.previous,
      id = props.id,
      setCurrentId = props.setCurrentId,
      items = props.items,
      visible = props.visible,
      up = props.up,
      down = props.down,
      unstable_arrowStyles = props.unstable_arrowStyles,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_hasActiveWidget = props.unstable_hasActiveWidget,
      unstable_idCountRef = props.unstable_idCountRef,
      unstable_moves = props.unstable_moves,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_virtual = props.unstable_virtual,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["iconAfter", "iconAfterProps", "iconBefore", "iconBeforeProps", "children", "baseId", "disabled", "first", "focusable", "last", "unregisterItem", "registerItem", "currentId", "hide", "hideOnClick", "move", "next", "onClick", "orientation", "overrides", "placement", "previous", "id", "setCurrentId", "items", "visible", "up", "down", "unstable_arrowStyles", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_hasActiveWidget", "unstable_idCountRef", "unstable_moves", "unstable_popoverStyles", "unstable_virtual"]);

  var _React$useContext = React.useContext(DropdownMenu_DropdownMenu.DropdownMenuContext),
      dropdownMenuOverrides = _React$useContext.overrides,
      dropdownMenu = _React$useContext.dropdownMenu;

  var dropdownMenuItemProps = reakit.useMenuItem(_rollupPluginBabelHelpers._objectSpread2({
    baseId: baseId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    last: last,
    unregisterItem: unregisterItem,
    registerItem: registerItem,
    currentId: currentId,
    hide: hide,
    move: move,
    next: next,
    orientation: orientation,
    placement: placement,
    previous: previous,
    id: id,
    setCurrentId: setCurrentId,
    items: items,
    visible: visible,
    up: up,
    down: down,
    unstable_arrowStyles: unstable_arrowStyles,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_hasActiveWidget: unstable_hasActiveWidget,
    unstable_idCountRef: unstable_idCountRef,
    unstable_moves: unstable_moves,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_virtual: unstable_virtual
  }, dropdownMenu), restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), dropdownMenuItemProps));
  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuItem,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var iconBeforeClassName = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuItemIcon,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuOverrides), overrides),
      isBefore: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var iconAfterClassName = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuItemIcon,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuOverrides), overrides),
      isAfter: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
      className: iconBeforeClassName,
      icon: iconBefore
    }, iconBeforeProps)), children, iconAfter && /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
      className: iconAfterClassName,
      icon: iconAfter
    }, iconAfterProps))),
    onClick: hideOnClick ? utils_bindFns.bindFns(onClick, hide, dropdownMenu.hide) : onClick,
    tabIndex: props.isTabbable ? boxProps.tabIndex : undefined
  });
}, {
  defaultProps: {
    hideOnClick: true,
    isTabbable: true
  },
  themeKey: 'DropdownMenu.Item'
});
var DropdownMenuItem = utils_createComponent.createComponent(function (props) {
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
    displayName: 'DropdownMenu.Item'
  },
  themeKey: 'DropdownMenu.Item'
});

exports.DropdownMenuItem = DropdownMenuItem;
