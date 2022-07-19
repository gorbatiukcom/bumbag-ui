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
var Box_Box = require('../Box/Box.js');
var Tabbable_Tabbable_styles = require('../Tabbable.styles-7608de56.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var disabled = props.disabled,
      focusable = props.focusable,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["disabled", "focusable"]);

  var tabbableProps = reakit.useTabbable({
    disabled: disabled,
    focusable: focusable
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), tabbableProps));
  var className = utils_useClassName.useClassName({
    style: Tabbable_Tabbable_styles.Tabbable,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabbable'
});
var Tabbable = utils_createComponent.createComponent(function (props) {
  var tabbableProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tabbableProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabbable'
  },
  themeKey: 'Tabbable'
});

exports.Tabbable = Tabbable;
