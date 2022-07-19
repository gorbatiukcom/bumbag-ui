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
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
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
var Box_Box = require('../Box/Box.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');
require('./DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
require('./DropdownMenuPopover.js');
require('./DropdownMenuState.js');
require('./DropdownMenu.js');
var DropdownMenu_DropdownMenuItem = require('./DropdownMenuItem.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      checked = props.checked,
      onChange = props.onChange,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "checked", "onChange", "value"]); //////////////////////////////////////////////////////


  var menuItemProps = DropdownMenu_DropdownMenuItem.DropdownMenuItem.useProps(restProps); //////////////////////////////////////////////////////

  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuOptionItem,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: menuItemProps.className
  });
  var iconWrapperClassName = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuOptionItemIconWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'IconWrapper'
  }); //////////////////////////////////////////////////////

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, menuItemProps), {}, {
    'aria-checked': checked,
    className: className,
    onClick: function onClick(e) {
      if (onChange) {
        onChange({
          checked: !checked,
          value: value
        });
      }

      if (menuItemProps.onClick) {
        menuItemProps.onClick(e);
      }
    },
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: iconWrapperClassName,
      overrides: props.overrides
    }, checked && /*#__PURE__*/React.createElement(Icon_Icon.Icon, {
      icon: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: ['M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z']
      },
      overrides: props.overrides
    })), children)
  });
}, {
  defaultProps: {
    hideOnClick: false
  },
  themeKey: 'DropdownMenu.OptionItem'
});
var DropdownMenuOptionItem = utils_createComponent.createComponent(function (props) {
  var htmlProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'DropdownMenu.OptionItem'
  },
  themeKey: 'DropdownMenu.OptionItem'
});

exports.DropdownMenuOptionItem = DropdownMenuOptionItem;
