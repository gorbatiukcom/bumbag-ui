'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../utils/debounceAnimationFrame.js');
require('../utils/useViewportHeight.js');
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
require('../utils/getMediaQueryList.js');
require('../utils/useBreakpoint.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
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
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
var Disclosure_index = require('../Disclosure/index.js');
require('../Modal.styles-a83df364.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
require('../Drawer.styles-077ca625.js');
require('../Drawer/Drawer.js');
require('../Drawer/DrawerDisclosure.js');
require('../Drawer/DrawerState.js');
var Drawer_index = require('../Drawer/index.js');
var Page_Page_styles = require('../Page.styles-8f264ff8.js');
var Page_PageContext = require('./PageContext.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      collapsedSidebarProps = props.collapsedSidebarProps,
      defaultIsVisible = props.defaultIsVisible,
      expandedSidebarProps = props.expandedSidebarProps,
      overrides = props.overrides,
      sidebar = props.sidebar,
      sidebarPlacement = props.sidebarPlacement,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "collapsedSidebarProps", "defaultIsVisible", "expandedSidebarProps", "overrides", "sidebar", "sidebarPlacement"]);

  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2({}, restProps));

  var _React$useContext = React.useContext(Page_PageContext.PageContext),
      collapseBelow = _React$useContext.collapseBelow,
      isCollapsed = _React$useContext.isCollapsed,
      sidebarState = _React$useContext.sidebar;

  var className = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithSidebar,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var sidebarClassName = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithSidebarSidebar,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow,
      isCollapsed: isCollapsed,
      isSidebarMinimized: sidebarState.isMinimized
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Sidebar'
  });
  var sidebarExpandedWrapperClassName = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithSidebarSidebarExpandedWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SidebarExpandedWrapper'
  });
  var sidebarCollapsedWrapperClassName = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithSidebarSidebarCollapsedWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SidebarCollapsedWrapper'
  });
  var contentClassName = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithSidebarContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow,
      isCollapsed: isCollapsed,
      isSidebarMinimized: sidebarState.isMinimized,
      isSidebarOpen: sidebarState.isOpen
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Content'
  }); //////////////////////////////////////////

  React.useEffect(function () {
    if (!defaultIsVisible) {
      sidebarState.disclosure.hide();
    }
  }, [defaultIsVisible, sidebarState.disclosure]); //////////////////////////////////////////

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box_Box.Box, null, /*#__PURE__*/React.createElement(Drawer_index.Drawer, _rollupPluginBabelHelpers._extends({
      className: sidebarCollapsedWrapperClassName,
      overrides: overrides,
      slide: true,
      fade: true,
      placement: sidebarPlacement
    }, collapsedSidebarProps, sidebarState.drawer, {
      animating: false
    }), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: sidebarClassName,
      overrides: overrides
    }, isCollapsed ? sidebar : null))), /*#__PURE__*/React.createElement(Disclosure_index.Disclosure.Content, _rollupPluginBabelHelpers._extends({
      overrides: overrides
    }, expandedSidebarProps, sidebarState.disclosure), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: sidebarExpandedWrapperClassName,
      overrides: overrides
    }, /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: sidebarClassName,
      overrides: overrides
    }, !isCollapsed ? sidebar : null))), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: contentClassName,
      overrides: overrides
    }, children))
  });
}, {
  defaultProps: {
    collapsedSidebarProps: {},
    expandedSidebarProps: {},
    defaultIsVisible: true,
    minimizedSidebarWidth: '60px',
    sidebarWidth: '250px',
    sidebarPlacement: 'left',
    collapsedSidebarWidth: '320px'
  },
  themeKey: 'PageWithSidebar'
});
var PageWithSidebar = utils_createComponent.createComponent(function (props) {
  var pageWithSidebarProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: pageWithSidebarProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageWithSidebar'
  },
  themeKey: 'PageWithSidebar'
});

exports.PageWithSidebar = PageWithSidebar;
