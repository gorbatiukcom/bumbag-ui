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
var Columns_Columns_styles = require('../Columns.styles-59c3d76c.js');
var Columns_ColumnsContext = require('./ColumnsContext.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var columnsContext = React.useContext(Columns_ColumnsContext.ColumnsContext);
  var className = utils_useClassName.useClassName({
    style: Columns_Columns_styles.Column,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), columnsContext),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    spread: undefined,
    spreadMobile: undefined,
    spreadTablet: undefined,
    spreadDesktop: undefined,
    spreadWidescreen: undefined,
    spreadFullHD: undefined,
    spreadOffset: undefined,
    spreadMobileOffset: undefined,
    spreadTabletOffset: undefined,
    spreadDesktopOffset: undefined,
    spreadWidescreenOffset: undefined,
    spreadFullHDOffset: undefined
  },
  themeKey: 'Columns.Column'
});
var Column = utils_createComponent.createComponent(function (props) {
  var columnProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: columnProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Columns.Column'
  },
  themeKey: 'Columns.Column'
});

exports.Column = Column;
