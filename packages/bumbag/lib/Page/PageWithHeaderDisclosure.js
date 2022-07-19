'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
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
require('../Box/Box.js');
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
require('../Drawer/index.js');
var Page_Page_styles = require('../Page.styles-8f264ff8.js');
require('./PageContext.js');
var Page_usePage = require('./usePage.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var page = Page_usePage.usePage();
  var htmlProps = Disclosure_index.Disclosure.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), page.header.disclosure));
  var className = utils_useClassName.useClassName({
    style: Page_Page_styles.PageWithHeaderDisclosure,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'PageWithHeader.Disclosure'
});
var PageWithHeaderDisclosure = utils_createComponent.createComponent(function (props) {
  var PageWithHeaderDisclosureProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: PageWithHeaderDisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageWithHeader.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'PageWithHeader.Disclosure'
});

exports.PageWithHeaderDisclosure = PageWithHeaderDisclosure;
