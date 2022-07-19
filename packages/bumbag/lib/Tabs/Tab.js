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
var Tabs_Tabs_styles = require('../Tabs.styles-95e7b1af.js');
require('./TabsState.js');
var Tabs_Tabs = require('./Tabs.js');
var Tabs_TabsList = require('./TabsList.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      currentId = props.currentId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      id = props.id,
      last = props.last,
      manual = props.manual,
      next = props.next,
      orientation = props.orientation,
      overrides = props.overrides,
      panels = props.panels,
      previous = props.previous,
      registerItem = props.registerItem,
      selectedId = props.selectedId,
      select = props.select,
      tabId = props.tabId,
      setCurrentId = props.setCurrentId,
      items = props.items,
      up = props.up,
      down = props.down,
      unregisterItem = props.unregisterItem,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_hasActiveWidget = props.unstable_hasActiveWidget,
      unstable_idCountRef = props.unstable_idCountRef,
      unstable_moves = props.unstable_moves,
      unstable_virtual = props.unstable_virtual,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "currentId", "disabled", "first", "focusable", "id", "last", "manual", "next", "orientation", "overrides", "panels", "previous", "registerItem", "selectedId", "select", "tabId", "setCurrentId", "items", "up", "down", "unregisterItem", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_hasActiveWidget", "unstable_idCountRef", "unstable_moves", "unstable_virtual"]);

  var _React$useContext = React.useContext(Tabs_Tabs.TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabProps = reakit.useTab(_rollupPluginBabelHelpers._objectSpread2({
    baseId: baseId,
    currentId: currentId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    id: tabId,
    last: last,
    manual: manual,
    next: next,
    orientation: orientation,
    panels: panels,
    previous: previous,
    registerItem: registerItem,
    selectedId: selectedId,
    select: select,
    setCurrentId: setCurrentId,
    items: items,
    up: up,
    down: down,
    unregisterItem: unregisterItem,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_hasActiveWidget: unstable_hasActiveWidget,
    unstable_idCountRef: unstable_idCountRef,
    unstable_moves: unstable_moves,
    unstable_virtual: unstable_virtual
  }, tabs), htmlProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), tabProps));
  var tabsListContext = React.useContext(Tabs_TabsList.TabsListContext);
  var className = utils_useClassName.useClassName({
    style: Tabs_Tabs_styles.Tab,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabs), props), tabsListContext), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabOverrides), tabsListContext.overrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabs.Tab'
});
var Tab = utils_createComponent.createComponent(function (props) {
  var tabProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tabProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs.Tab'
  },
  themeKey: 'Tabs.Tab'
});

exports.Tab = Tab;
