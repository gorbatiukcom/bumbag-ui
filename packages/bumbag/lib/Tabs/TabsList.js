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

var TabsListContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var align = props.align,
      baseId = props.baseId,
      children = props.children,
      id = props.id,
      variant = props.variant,
      overrides = props.overrides,
      palette = props.palette,
      disabled = props.disabled,
      focusable = props.focusable,
      first = props.first,
      last = props.last,
      move = props.move,
      currentId = props.currentId,
      wrap = props.wrap,
      groups = props.groups,
      items = props.items,
      setCurrentId = props.setCurrentId,
      orientation = props.orientation,
      unstable_virtual = props.unstable_virtual,
      unstable_moves = props.unstable_moves,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["align", "baseId", "children", "id", "variant", "overrides", "palette", "disabled", "focusable", "first", "last", "move", "currentId", "wrap", "groups", "items", "setCurrentId", "orientation", "unstable_virtual", "unstable_moves"]);

  var _React$useContext = React.useContext(Tabs_Tabs.TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabsListProps = reakit.useTabList(_rollupPluginBabelHelpers._objectSpread2({
    baseId: baseId,
    disabled: disabled,
    focusable: focusable,
    first: first,
    last: last,
    move: move,
    currentId: currentId,
    orientation: orientation,
    wrap: wrap,
    groups: groups,
    items: items,
    setCurrentId: setCurrentId,
    unstable_virtual: unstable_virtual,
    unstable_moves: unstable_moves
  }, tabs), htmlProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), tabsListProps));
  var className = utils_useClassName.useClassName({
    style: Tabs_Tabs_styles.TabsList,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabs), props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tabOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = React.useMemo(function () {
    return {
      align: align,
      variant: variant,
      overrides: overrides,
      palette: palette
    };
  }, [align, variant, overrides, palette]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(TabsListContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  defaultProps: {
    align: 'left',
    variant: 'default',
    palette: 'primary'
  },
  themeKey: 'Tabs.List'
});
var TabsList = utils_createComponent.createComponent(function (props) {
  var tabsListProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tabsListProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs.List'
  },
  themeKey: 'Tabs.List'
});

exports.TabsList = TabsList;
exports.TabsListContext = TabsListContext;
