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
var Tabs_TabsState = require('./TabsState.js');

var TabsContext = React.createContext({
  mountWhenInactive: true,
  tabs: {},
  overrides: {}
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      defaultSelectedId = props.defaultSelectedId,
      loop = props.loop,
      manual = props.manual,
      mountWhenInactive = props.mountWhenInactive,
      orientation = props.orientation,
      overrides = props.overrides,
      selectedId = props.selectedId,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "children", "defaultSelectedId", "loop", "manual", "mountWhenInactive", "orientation", "overrides", "selectedId"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var tabs = Tabs_TabsState.useTabState({
    baseId: baseId,
    loop: loop,
    manual: manual,
    orientation: orientation,
    selectedId: defaultSelectedId
  });
  tabs = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabs), selectedId ? {
    currentId: selectedId,
    selectedId: selectedId
  } : {});
  var className = utils_useClassName.useClassName({
    style: Tabs_Tabs_styles.Tabs,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = React.useMemo(function () {
    return {
      tabs: tabs,
      mountWhenInactive: mountWhenInactive,
      overrides: overrides
    };
  }, [mountWhenInactive, overrides, tabs]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(TabsContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  defaultProps: {
    mountWhenInactive: true
  },
  themeKey: 'Tabs'
});
var Tabs = utils_createComponent.createComponent(function (props) {
  var tabsProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tabsProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs'
  },
  themeKey: 'Tabs'
});

exports.Tabs = Tabs;
exports.TabsContext = TabsContext;
