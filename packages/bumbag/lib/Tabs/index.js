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
require('../_rollupPluginBabelHelpers-c170a0e0.js');
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
require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/createComponent.js');
require('../utils/createElement.js');
require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('reakit');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
var Tabs_Tabs_styles = require('../Tabs.styles-95e7b1af.js');
var Tabs_TabsState = require('./TabsState.js');
var Tabs_Tabs = require('./Tabs.js');
var Tabs_TabsList = require('./TabsList.js');
var Tabs_Tab = require('./Tab.js');
var Tabs_TabsPanel = require('./TabsPanel.js');

var Tabs = Object.assign(Tabs_Tabs.Tabs, {
  Tab: Tabs_Tab.Tab,
  List: Tabs_TabsList.TabsList,
  Panel: Tabs_TabsPanel.TabsPanel,
  useState: Tabs_TabsState.useTabState,
  State: Tabs_TabsState.TabState
});

exports.tabsStyles = Tabs_Tabs_styles.Tabs_styles;
exports.TabsContext = Tabs_Tabs.TabsContext;
exports.TabsList = Tabs_TabsList.TabsList;
exports.TabsListContext = Tabs_TabsList.TabsListContext;
exports.Tab = Tabs_Tab.Tab;
exports.TabsPanel = Tabs_TabsPanel.TabsPanel;
exports.Tabs = Tabs;
