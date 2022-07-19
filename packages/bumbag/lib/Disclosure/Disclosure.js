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
var Disclosure_Disclosure_styles = require('../Disclosure.styles-7a8acee6.js');
var Disclosure_DisclosureState = require('./DisclosureState.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var disclosureContext = React.useContext(Disclosure_DisclosureState.DisclosureContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), disclosureContext.disclosure);

  var _props = props,
      disabled = _props.disabled,
      focusable = _props.focusable,
      visible = _props.visible,
      toggle = _props.toggle,
      baseId = _props.baseId,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props, ["disabled", "focusable", "visible", "toggle", "baseId"]);

  var DisclosureProps = reakit.useDisclosure({
    disabled: disabled,
    focusable: focusable,
    visible: visible,
    toggle: toggle,
    baseId: baseId
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), DisclosureProps));
  var className = utils_useClassName.useClassName({
    style: Disclosure_Disclosure_styles.Disclosure,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Disclosure'
});
var Disclosure = utils_createComponent.createComponent(function (props) {
  var DisclosureProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: DisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'Disclosure'
});

exports.Disclosure = Disclosure;
