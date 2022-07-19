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
require('../List.styles-26d86b26.js');
require('../List/List.js');
require('../List/ListItem.js');
var List_index = require('../List/index.js');
require('../Navigation.styles-6d90b7f6.js');
require('../Navigation/Navigation.js');
var TopNav_TopNav_styles = require('../TopNav.styles-a96bf635.js');
var TopNav_TopNav = require('./TopNav.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      overrides = props.overrides,
      title = props.title,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "overrides", "title"]);

  var listProps = List_index.List.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    orientation: 'horizontal'
  }));

  var _React$useContext = React.useContext(TopNav_TopNav.TopNavContext),
      topNavOverrides = _React$useContext.overrides;

  var className = utils_useClassName.useClassName({
    style: TopNav_TopNav_styles.TopNavSection,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, topNavOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: listProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, listProps), {}, {
    className: className
  });
}, {
  themeKey: 'TopNav.Section'
});
var TopNavSection = utils_createComponent.createComponent(function (props) {
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
    displayName: 'TopNav.Section'
  },
  defaultProps: {
    use: 'ul'
  },
  themeKey: 'TopNav.Section'
});

exports.TopNavSection = TopNavSection;
