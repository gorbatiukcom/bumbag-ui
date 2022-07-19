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
require('../Box/Box.js');
require('../Navigation.styles-6d90b7f6.js');
var Navigation_Navigation = require('../Navigation/Navigation.js');
var SideNav_SideNav_styles = require('../SideNav.styles-b4771f23.js');

var SideNavContext = React.createContext({
  onChangeSelectedId: function onChangeSelectedId() {},
  selectedId: undefined,
  overrides: {}
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      defaultSelectedId = props.defaultSelectedId,
      onChange = props.onChange,
      overrides = props.overrides,
      _selectedId = props.selectedId,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "defaultSelectedId", "onChange", "overrides", "selectedId"]);

  var navigationProps = Navigation_Navigation.Navigation.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: SideNav_SideNav_styles.SideNav,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: navigationProps.className
  });

  var _React$useState = React.useState(defaultSelectedId),
      selectedId = _React$useState[0],
      setSelectedId = _React$useState[1];

  var handleChangeSelectedId = React.useCallback(function (id) {
    if (onChange) {
      onChange(id);
    } else {
      setSelectedId(id);
    }
  }, [onChange]);
  var contextValue = React.useMemo(function () {
    return {
      onChangeSelectedId: handleChangeSelectedId,
      selectedId: _selectedId || selectedId,
      overrides: overrides
    };
  }, [_selectedId, handleChangeSelectedId, overrides, selectedId]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, navigationProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(SideNavContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  themeKey: 'SideNav'
});
var SideNav = utils_createComponent.createComponent(function (props) {
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
    displayName: 'SideNav'
  },
  themeKey: 'SideNav'
});

exports.SideNav = SideNav;
exports.SideNavContext = SideNavContext;
