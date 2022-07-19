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
var utils_useOptionsState = require('../utils/useOptionsState.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
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
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');
require('./DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
require('./DropdownMenuPopover.js');
require('./DropdownMenuState.js');
require('./DropdownMenu.js');
var DropdownMenu_DropdownMenuGroup = require('./DropdownMenuGroup.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      defaultValue = props.defaultValue,
      onBlur = props.onBlur,
      onChange = props.onChange,
      type = props.type,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "defaultValue", "onBlur", "onChange", "type", "value"]);

  var _useOptionsState = utils_useOptionsState.useOptionsState({
    defaultValue: defaultValue,
    onBlur: onBlur,
    onChange: onChange,
    type: type,
    value: value
  }),
      getOptionItemProps = _useOptionsState.getOptionItemProps;

  var dropdownMenuGroupProps = DropdownMenu_DropdownMenuGroup.DropdownMenuGroup.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    children: React.Children.map(children, function (child) {
      var _child$props;

      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, child.props), getOptionItemProps({
        value: (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.value
      })));
    })
  }));
  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuOptionGroup,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: dropdownMenuGroupProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuGroupProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.OptionGroup'
});
var DropdownMenuOptionGroup = utils_createComponent.createComponent(function (props) {
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
    displayName: 'DropdownMenu.OptionGroup'
  },
  themeKey: 'DropdownMenu.OptionGroup'
});

exports.DropdownMenuOptionGroup = DropdownMenuOptionGroup;
