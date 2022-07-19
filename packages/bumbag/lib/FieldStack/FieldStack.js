'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
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
require('../Flex.styles-8d4bcbcd.js');
var FieldStack_FieldStack_styles = require('../FieldStack.styles-dc1d4b02.js');
require('../Stack.styles-ab6c74fd.js');
var Stack_Stack = require('../Stack/Stack.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var stackProps = Stack_Stack.Stack.useProps(props);
  var className = utils_useClassName.useClassName({
    style: FieldStack_FieldStack_styles.FieldStack,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: stackProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, stackProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    orientation: 'vertical',
    spacing: 'major-2'
  },
  themeKey: 'FieldStack'
});
var FieldStack = utils_createComponent.createComponent(function (props) {
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
    displayName: 'FieldStack'
  },
  themeKey: 'FieldStack'
});

exports.FieldStack = FieldStack;
