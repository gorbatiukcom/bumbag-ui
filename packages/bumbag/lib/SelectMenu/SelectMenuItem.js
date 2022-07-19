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
require('../utils/useLabelPlaceholder.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/bindFns.js');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('../utils/fieldAdaptors.js');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
require('../Button/index.js');
require('../Input.styles-a731033b.js');
require('react-input-mask');
require('../FieldWrapper.styles-1648fae6.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
require('../Card/index.js');
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
require('../Disclosure/index.js');
require('../Label.styles-34e250ed.js');
require('../Label/Label.js');
require('../FieldWrapper/FieldWrapper.js');
require('../Group.styles-13958db4.js');
require('../Group/Group.js');
require('../Input/Input.js');
require('../Input/index.js');
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
require('../Rover.styles-6d58106f.js');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('../Rover/index.js');
require('../Menu/Menu.js');
require('../Menu/MenuGroup.js');
require('../Menu/MenuOptionGroup.js');
var Menu_MenuItem = require('../Menu/MenuItem.js');
require('../Menu/MenuOptionItem.js');
require('../Menu/MenuDivider.js');
require('../Menu/index.js');
require('../Select.styles-ff72e480.js');
var SelectMenu_SelectMenu_styles = require('../SelectMenu.styles-fad0f50a.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var isDropdown = props.isDropdown,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["isDropdown"]);

  var MenuItem = isDropdown ? DropdownMenu_DropdownMenuItem.DropdownMenuItem : Menu_MenuItem.MenuItem;
  var dropdownMenuItemProps = MenuItem.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuItem,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuItemProps), props),
    themeKey: themeKey,
    prevClassName: dropdownMenuItemProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuItemProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    isDropdown: true,
    role: 'option'
  },
  themeKey: 'SelectMenu.Item'
});
var SelectMenuItem = utils_createComponent.createComponent(function (props) {
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
    displayName: 'SelectMenu.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'SelectMenu.Item'
});

exports.SelectMenuItem = SelectMenuItem;
