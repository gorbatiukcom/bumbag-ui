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
var Menu_Menu_styles = require('../Menu.styles-17849743.js');
require('../Rover.styles-6d58106f.js');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
var Rover_index = require('../Rover/index.js');

var MenuContext = React.createContext({
  rover: {},
  overrides: {}
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["baseId", "children", "overrides"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var rover = Rover_index.Rover.useState({
    baseId: baseId
  });
  var className = utils_useClassName.useClassName({
    style: Menu_Menu_styles.Menu,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = React.useMemo(function () {
    return {
      rover: rover,
      overrides: overrides
    };
  }, [rover, overrides]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'menu',
    children: /*#__PURE__*/React.createElement(MenuContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  themeKey: 'Menu'
});
var Menu = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Menu'
  },
  themeKey: 'Menu'
});

exports.Menu = Menu;
exports.MenuContext = MenuContext;
