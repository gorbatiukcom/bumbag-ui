import { useContext } from 'react';
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
import { Box, useTabPanel } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { d as TabsPanel$1 } from '../Tabs.styles.js';
import './TabsState.js';
import { TabsContext } from './Tabs.js';

var useProps = createHook(function (props, _ref) {
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
      htmlProps = _objectWithoutPropertiesLoose(props, ["baseId", "id", "overrides", "items", "panels", "selectedId", "tabId", "registerPanel", "unregisterPanel", "animating", "animated", "stopAnimation", "unstable_idCountRef"]);

  var _React$useContext = useContext(TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabsPanelProps = useTabPanel(_objectSpread2(_objectSpread2({
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
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), tabsPanelProps));
  var className = useClassName({
    style: TabsPanel$1,
    styleProps: {
      props: props,
      overrides: _objectSpread2(_objectSpread2({}, tabOverrides), overrides)
    },
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabs.Panel'
});
var TabsPanel = createComponent(function (props) {
  var tabsPanelProps = useProps(props);

  var _React$useContext2 = useContext(TabsContext),
      mountWhenInactive = _React$useContext2.mountWhenInactive;

  if (tabsPanelProps.hidden && !mountWhenInactive) {
    return null;
  }

  return createElement({
    children: props.children,
    component: Box,
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

export { TabsPanel };
