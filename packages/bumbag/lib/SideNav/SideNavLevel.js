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
var utils_uniqueId = require('../utils/uniqueId.js');
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
require('../List.styles-26d86b26.js');
require('../List/List.js');
require('../List/ListItem.js');
var List_index = require('../List/index.js');
require('../Navigation.styles-6d90b7f6.js');
require('../Navigation/Navigation.js');
var SideNav_SideNav_styles = require('../SideNav.styles-b4771f23.js');
var SideNav_SideNav = require('./SideNav.js');

var SideNavLevelContext = React.createContext({
  level: 0
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      overrides = props.overrides,
      title = props.title,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "overrides", "title"]);

  var listProps = List_index.List.useProps(restProps);

  var _React$useContext = React.useContext(SideNav_SideNav.SideNavContext),
      sideNavOverrides = _React$useContext.overrides;

  var _React$useContext2 = React.useContext(SideNavLevelContext),
      level = _React$useContext2.level;

  var className = utils_useClassName.useClassName({
    style: SideNav_SideNav_styles.SideNavLevel,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      level: level,
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, sideNavOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: listProps.className
  });
  var titleClassName = utils_useClassName.useClassName({
    style: SideNav_SideNav_styles.SideNavLevelTitle,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      level: level,
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, sideNavOverrides), overrides)
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Title'
  });
  var contextValue = React.useMemo(function () {
    return {
      level: level + 1
    };
  }, [level]);
  var titleId = utils_uniqueId.useUniqueId();
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, listProps), {}, {
    'aria-labelledby': title ? titleId : undefined,
    className: className,
    children: /*#__PURE__*/React.createElement(SideNavLevelContext.Provider, {
      value: contextValue
    }, title && /*#__PURE__*/React.createElement(Box_Box.Box, {
      id: titleId,
      className: titleClassName
    }, title), children)
  });
}, {
  themeKey: 'SideNav.Level'
});
var SideNavLevel = utils_createComponent.createComponent(function (props) {
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
    displayName: 'SideNav.Level'
  },
  defaultProps: {
    use: 'ul'
  },
  themeKey: 'SideNav.Level'
});

exports.SideNavLevel = SideNavLevel;
exports.SideNavLevelContext = SideNavLevelContext;
