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
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      currentId = props.currentId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      hide = props.hide,
      last = props.last,
      placement = props.placement,
      show = props.show,
      toggle = props.toggle,
      visible = props.visible,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_disclosureRef = props.unstable_disclosureRef,
      unstable_moves = props.unstable_moves,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_arrowStyles = props.unstable_arrowStyles,
      unstable_referenceRef = props.unstable_referenceRef,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "currentId", "disabled", "first", "focusable", "hide", "last", "placement", "show", "toggle", "visible", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_disclosureRef", "unstable_moves", "unstable_popoverStyles", "unstable_arrowStyles", "unstable_referenceRef"]);

  var dropdownMenuButtonProps = reakit.useMenuButton({
    baseId: baseId,
    currentId: currentId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    hide: hide,
    last: last,
    placement: placement,
    show: show,
    toggle: toggle,
    visible: visible,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_disclosureRef: unstable_disclosureRef,
    unstable_moves: unstable_moves,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_arrowStyles: unstable_arrowStyles,
    unstable_referenceRef: unstable_referenceRef
  }, restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), dropdownMenuButtonProps));
  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuButton,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.Button'
});
var DropdownMenuButton = utils_createComponent.createComponent(function (props) {
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
    displayName: 'DropdownMenu.Button'
  },
  themeKey: 'DropdownMenu.Button'
});

exports.DropdownMenuButton = DropdownMenuButton;
