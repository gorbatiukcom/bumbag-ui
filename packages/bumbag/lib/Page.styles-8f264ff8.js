'use strict';

require('react');
require('./Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c170a0e0.js');
require('./ColorMode/ColorModeContext.js');
require('./utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('./getCSSFromStyleObject-fcc96724.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
var utils_getHiddenScrollbarStyles = require('./utils/getHiddenScrollbarStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;
var PageContent = function PageContent(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(4, 'major')(styleProps), utils_colors.space(2, 'major')(styleProps), styleProps.isFluid && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding: ", "rem ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(4, 'major')(styleProps), utils_colors.theme('Container.fluidMargin')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.fluid")(styleProps)), utils_colors.breakpoint('max-tablet', react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding-top: ", "rem;\n      padding-bottom: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), utils_colors.space(2, 'major')(styleProps), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.mobile")(styleProps)))(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageContentWrapper = function PageContentWrapper(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebar = function PageWithSidebar(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  min-height: 100vh;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarContent = function PageWithSidebarContent(styleProps) {
  return css.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.sidebarPlacement === 'left' && react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding-left: ", ";\n\n      ", "\n\n      ", "\n    "])), getWidth(styleProps), utils_colors.breakpoint("max-" + styleProps.collapseBelow, react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          padding-left: 0px;\n        "]))))(styleProps), !styleProps.isSidebarOpen && react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding-left: 0px;\n      "])))), styleProps.sidebarPlacement === 'right' && react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding-right: ", ";\n\n      ", "\n\n      ", "\n    "])), getWidth(styleProps), utils_colors.breakpoint("max-" + styleProps.collapseBelow, react.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          padding-right: 0px;\n        "]))))(styleProps), !styleProps.isSidebarOpen && react.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        padding-right: 0px;\n      "])))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebar = function PageWithSidebarSidebar(styleProps) {
  return css.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  height: 100vh;\n  min-width: ", ";\n  width: ", ";\n  transform: translateX(0px);\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background')(styleProps), getWidth(styleProps), getWidth(styleProps), styleProps.isSidebarMinimized && react.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      overflow: visible;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebarExpandedWrapper = function PageWithSidebarSidebarExpandedWrapper(styleProps) {
  return css.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999999;\n  overflow-y: scroll;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.sidebarPlacement === 'left' && react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-right: 1px solid ", ";\n    "])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps)), styleProps.sidebarPlacement === 'right' && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border-left: 1px solid ", ";\n    "])), utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps)), utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), styleProps.sidebarPlacement === 'right' && react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      right: 0;\n    "]))), utils_colors.breakpoint("max-" + styleProps.collapseBelow, react.css(_templateObject19 || (_templateObject19 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: none;\n    "]))))(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebarCollapsedWrapper = function PageWithSidebarSidebarCollapsedWrapper(styleProps) {
  return css.css(_templateObject20 || (_templateObject20 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    min-width: ", ";\n    overflow-y: scroll;\n\n    ", ";\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.collapsedSidebarWidth, utils_getHiddenScrollbarStyles.getHiddenScrollbarStyles(), utils_colors.breakpoint("max-" + styleProps.collapseBelow, react.css(_templateObject21 || (_templateObject21 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))), {
    else: react.css(_templateObject22 || (_templateObject22 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: none;\n    "])))
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarDisclosure = function PageWithSidebarDisclosure(styleProps) {
  return css.css(_templateObject23 || (_templateObject23 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarMinimize = function PageWithSidebarMinimize(styleProps) {
  return css.css(_templateObject24 || (_templateObject24 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeader = function PageWithHeader(styleProps) {
  return css.css(_templateObject25 || (_templateObject25 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  min-height: 100vh;\n  position: relative;\n\n  & .bb-PageWithSidebarSidebarExpandedWrapper {\n    top: ", ";\n  }\n\n  & .bb-PageWithSidebarSidebar {\n    height: calc(100vh - ", ");\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.headerHeight, styleProps.headerHeight, utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderHeader = function PageWithHeaderHeader(styleProps) {
  return css.css(_templateObject26 || (_templateObject26 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  min-height: ", ";\n  height: ", ";\n  border-bottom: 1px solid ", ";\n  z-index: 999;\n\n  & > * {\n    height: 100%;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background')(styleProps), styleProps.headerHeight, styleProps.headerHeight, utils_colors.palette('white800', {
    dark: 'gray700'
  })(styleProps), styleProps.sticky && react.css(_templateObject27 || (_templateObject27 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      position: fixed;\n      width: 100%;\n    "]))), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderContent = function PageWithHeaderContent(styleProps) {
  return css.css(_templateObject28 || (_templateObject28 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.sticky && react.css(_templateObject29 || (_templateObject29 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      padding-top: ", ";\n    "])), styleProps.isHeaderOpen ? styleProps.headerHeight : 'unset'), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderDisclosure = function PageWithHeaderDisclosure(styleProps) {
  return css.css(_templateObject30 || (_templateObject30 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getWidth(styleProps) {
  if (styleProps.isSidebarMinimized) {
    return styleProps.minimizedSidebarWidth;
  }

  if (styleProps.isCollapsed) {
    return styleProps.collapsedSidebarWidth;
  }

  return styleProps.sidebarWidth;
}

var Page_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  PageContent: PageContent,
  PageContentWrapper: PageContentWrapper,
  PageWithSidebar: PageWithSidebar,
  PageWithSidebarContent: PageWithSidebarContent,
  PageWithSidebarSidebar: PageWithSidebarSidebar,
  PageWithSidebarSidebarExpandedWrapper: PageWithSidebarSidebarExpandedWrapper,
  PageWithSidebarSidebarCollapsedWrapper: PageWithSidebarSidebarCollapsedWrapper,
  PageWithSidebarDisclosure: PageWithSidebarDisclosure,
  PageWithSidebarMinimize: PageWithSidebarMinimize,
  PageWithHeader: PageWithHeader,
  PageWithHeaderHeader: PageWithHeaderHeader,
  PageWithHeaderContent: PageWithHeaderContent,
  PageWithHeaderDisclosure: PageWithHeaderDisclosure
});

exports.PageContent = PageContent;
exports.PageContentWrapper = PageContentWrapper;
exports.PageWithHeader = PageWithHeader;
exports.PageWithHeaderContent = PageWithHeaderContent;
exports.PageWithHeaderDisclosure = PageWithHeaderDisclosure;
exports.PageWithHeaderHeader = PageWithHeaderHeader;
exports.PageWithSidebar = PageWithSidebar;
exports.PageWithSidebarContent = PageWithSidebarContent;
exports.PageWithSidebarDisclosure = PageWithSidebarDisclosure;
exports.PageWithSidebarMinimize = PageWithSidebarMinimize;
exports.PageWithSidebarSidebar = PageWithSidebarSidebar;
exports.PageWithSidebarSidebarCollapsedWrapper = PageWithSidebarSidebarCollapsedWrapper;
exports.PageWithSidebarSidebarExpandedWrapper = PageWithSidebarSidebarExpandedWrapper;
exports.Page_styles = Page_styles;
