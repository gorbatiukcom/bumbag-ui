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
var DropdownMenu_DropdownMenu = require('./DropdownMenu.js');
require('../Divider.styles-f86e0306.js');
var Divider_Divider = require('../Divider/Divider.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var orientation = props.orientation,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["orientation", "overrides"]);

  var _React$useContext = React.useContext(DropdownMenu_DropdownMenu.DropdownMenuContext),
      dropdownMenuOverrides = _React$useContext.overrides;

  var dropdownMenuDividerProps = reakit.useMenuSeparator({
    orientation: orientation
  }, restProps);
  var dividerProps = Divider_Divider.Divider.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), dropdownMenuDividerProps));
  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenuDivider,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuOverrides), {}, {
        overrides: overrides
      })
    }),
    themeKey: themeKey,
    prevClassName: dividerProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dividerProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.Divider'
});
var DropdownMenuDivider = utils_createComponent.createComponent(function (props) {
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
    displayName: 'DropdownMenu.Divider'
  },
  themeKey: 'DropdownMenu.Divider'
});

exports.DropdownMenuDivider = DropdownMenuDivider;
