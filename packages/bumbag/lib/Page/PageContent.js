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
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Container.styles-5bbd1cf0.js');
var Container_Container = require('../Container/Container.js');
var Page_Page_styles = require('../Page.styles-8f264ff8.js');
var Page_PageContentWrapper = require('./PageContentWrapper.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var overrides = props.overrides,
      wrapperProps = props.wrapperProps,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["overrides", "wrapperProps"]);

  var containerProps = Container_Container.Container.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    wrapElement: function wrapElement(element) {
      return /*#__PURE__*/React.createElement(Page_PageContentWrapper.PageContentWrapper, _rollupPluginBabelHelpers._extends({
        overrides: overrides
      }, wrapperProps), element);
    }
  }));
  var className = utils_useClassName.useClassName({
    style: Page_Page_styles.PageContent,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: containerProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, containerProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    breakpoint: 'tablet',
    isLayout: true
  },
  themeKey: 'PageContent'
});
var PageContent = utils_createComponent.createComponent(function (props) {
  var pageContentProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: pageContentProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageContent'
  },
  themeKey: 'PageContent'
});

exports.PageContent = PageContent;
