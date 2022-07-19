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

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      id = props.id,
      overrides = props.overrides,
      items = props.items,
      panels = props.panels,
      selectedId = props.selectedId,
      tabId = props.tabId,
      registerPanel = props.registerPanel,
      unregisterPanel = props.unregisterPanel,
      animating = props.animating,
      animated = props.animated,
      stopAnimation = props.stopAnimation,
      unstable_idCountRef = props.unstable_idCountRef,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "id", "overrides", "items", "panels", "selectedId", "tabId", "registerPanel", "unregisterPanel", "animating", "animated", "stopAnimation", "unstable_idCountRef"]);

  var _React$useContext = React.useContext(Tabs_Tabs.TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabsPanelProps = reakit.useTabPanel(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    baseId: baseId,
    id: id,
    items: items,
    panels: panels,
    selectedId: selectedId,
    tabId: tabId,
    registerPanel: registerPanel,
    unregisterPanel: unregisterPanel,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation,
    unstable_idCountRef: unstable_idCountRef
  }, tabs), {}, {
    visible: props.visible || tabs ? tabId === tabs.selectedId : tabId === selectedId
  }), htmlProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), tabsPanelProps));
  var className = utils_useClassName.useClassName({
    style: Tabs_Tabs_styles.TabsPanel,
    styleProps: {
      props: props,
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabOverrides), overrides)
    },
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabs.Panel'
});
var TabsPanel = utils_createComponent.createComponent(function (props) {
  var tabsPanelProps = useProps(props);

  var _React$useContext2 = React.useContext(Tabs_Tabs.TabsContext),
      mountWhenInactive = _React$useContext2.mountWhenInactive;

  if (tabsPanelProps.hidden && !mountWhenInactive) {
    return null;
  }

  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tabsPanelProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs.Panel'
  },
  themeKey: 'Tabs.Panel'
});

exports.TabsPanel = TabsPanel;
