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
require('../utils/useOptionsState.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/bindFns.js');
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
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
var Autosuggest_Autosuggest_styles = require('../Autosuggest.styles-09e92a6c.js');
require('../Menu.styles-17849743.js');
require('../DropdownMenu.styles-c144c17a.js');
require('../DropdownMenu/DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
require('../DropdownMenu/DropdownMenuPopover.js');
require('../DropdownMenu/DropdownMenuState.js');
require('../DropdownMenu/DropdownMenu.js');
var DropdownMenu_DropdownMenuItem = require('../DropdownMenu/DropdownMenuItem.js');
require('../Divider.styles-f86e0306.js');
require('../Divider/Divider.js');
require('../DropdownMenu/DropdownMenuDivider.js');
require('../DropdownMenu/DropdownMenuGroup.js');
require('../DropdownMenu/DropdownMenuOptionGroup.js');
require('../DropdownMenu/DropdownMenuOptionItem.js');
require('../DropdownMenu/index.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var dropdownMenuItemProps = DropdownMenu_DropdownMenuItem.DropdownMenuItem.useProps(props);
  var className = utils_useClassName.useClassName({
    style: Autosuggest_Autosuggest_styles.AutosuggestItem,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: dropdownMenuItemProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuItemProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    isTabbable: false,
    role: 'option'
  },
  themeKey: 'Autosuggest.Item'
});
var AutosuggestItem = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Autosuggest.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'Autosuggest.Item'
});

exports.AutosuggestItem = AutosuggestItem;
