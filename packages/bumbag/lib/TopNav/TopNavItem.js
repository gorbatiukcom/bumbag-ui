'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
var classNames = require('classnames');
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
var utils_bindFns = require('../utils/bindFns.js');
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
require('../List.styles-26d86b26.js');
require('../List/List.js');
var List_ListItem = require('../List/ListItem.js');
require('../List/index.js');
require('../Navigation.styles-6d90b7f6.js');
require('../Navigation/Navigation.js');
var TopNav_TopNav_styles = require('../TopNav.styles-a96bf635.js');
var TopNav_TopNav = require('./TopNav.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      href = props.href,
      isActive = props.isActive,
      navId = props.navId,
      onClick = props.onClick,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "href", "isActive", "navId", "onClick", "overrides"]);

  var htmlProps;

  if (navId) {
    htmlProps = reakit.useButton(restProps);
  }

  htmlProps = List_ListItem.ListItem.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), restProps));

  var _React$useContext = React.useContext(TopNav_TopNav.TopNavContext),
      onChangeSelectedId = _React$useContext.onChangeSelectedId,
      selectedId = _React$useContext.selectedId,
      topNavOverrides = _React$useContext.overrides;

  var className = utils_useClassName.useClassName({
    style: TopNav_TopNav_styles.TopNavItem,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isActive: typeof isActive === 'boolean' ? isActive : selectedId === navId,
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, topNavOverrides), overrides)
    }),
    themeKey: themeKey
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    'aria-current': isActive || selectedId === navId ? 'page' : undefined,
    className: classNames__default['default'](htmlProps.className, href || navId && React.isValidElement(children) ? undefined : className),
    onClick: href || navId && React.isValidElement(children) ? undefined : utils_bindFns.bindFns(onClick, function () {
      return onChangeSelectedId(navId);
    }),
    children: href || navId && React.isValidElement(children) ?
    /*
    // @ts-ignore */
    React.cloneElement(href ? /*#__PURE__*/React.createElement("a", {
      href: href
    }, children) : children, {
      className: className,
      onClick: utils_bindFns.bindFns(onClick, function () {
        return onChangeSelectedId(navId);
      })
    }) : children
  });
}, {
  defaultProps: {
    palette: 'primary',
    variant: 'default'
  },
  themeKey: 'TopNav.Item'
});
var TopNavItem = utils_createComponent.createComponent(function (props) {
  var TopNavItemProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: TopNavItemProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'TopNav.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'TopNav.Item'
});

exports.TopNavItem = TopNavItem;
