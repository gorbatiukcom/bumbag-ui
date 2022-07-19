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
var Box_Box = require('../Box/Box.js');
require('../Menu.styles-17849743.js');
var DropdownMenu_DropdownMenu_styles = require('../DropdownMenu.styles-c144c17a.js');
var DropdownMenu_DropdownMenuButton = require('./DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
var DropdownMenu_DropdownMenuPopover = require('./DropdownMenuPopover.js');
var DropdownMenu_DropdownMenuState = require('./DropdownMenuState.js');

var DropdownMenuContext = React.createContext({
  dropdownMenu: {},
  overrides: {}
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      dropdownMenuState = props.dropdownMenuState,
      menu = props.menu,
      overrides = props.overrides,
      visible = props.visible,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "children", "dropdownMenuState", "menu", "overrides", "visible"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var dropdownMenu = DropdownMenu_DropdownMenuState.useDropdownMenuState(_rollupPluginBabelHelpers._objectSpread2({
    baseId: baseId,
    visible: visible
  }, dropdownMenuState));
  var dropdownMenuButtonProps = DropdownMenu_DropdownMenuButton.DropdownMenuButton.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenu), {}, {
    overrides: overrides
  }));
  var className = utils_useClassName.useClassName({
    style: DropdownMenu_DropdownMenu_styles.DropdownMenu,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = React.useMemo(function () {
    return {
      dropdownMenu: dropdownMenu,
      overrides: overrides
    };
  }, [dropdownMenu, overrides]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(DropdownMenuContext.Provider, {
      value: contextValue
    }, React.cloneElement(children, _rollupPluginBabelHelpers._objectSpread2({}, dropdownMenuButtonProps)), dropdownMenu.visible && /*#__PURE__*/React.createElement(DropdownMenu_DropdownMenuPopover.DropdownMenuPopover, _rollupPluginBabelHelpers._extends({}, dropdownMenu, {
      overrides: overrides
    }), menu))
  });
}, {
  themeKey: 'DropdownMenu'
});
var DropdownMenu = utils_createComponent.createComponent(function (props) {
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
    displayName: 'DropdownMenu'
  },
  themeKey: 'DropdownMenu'
});

exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuContext = DropdownMenuContext;
