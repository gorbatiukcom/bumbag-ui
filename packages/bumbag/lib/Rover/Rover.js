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
var Rover_Rover_styles = require('../Rover.styles-6d58106f.js');
var Rover_RoverState = require('./RoverState.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var roverContext = React__default['default'].useContext(Rover_RoverState.RoverContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), roverContext.rover);

  var _props = props,
      baseId = _props.baseId,
      disabled = _props.disabled,
      focusable = _props.focusable,
      orientation = _props.orientation,
      stops = _props.stops,
      id = _props.id,
      currentId = _props.currentId,
      register = _props.register,
      unregister = _props.unregister,
      move = _props.move,
      next = _props.next,
      previous = _props.previous,
      first = _props.first,
      last = _props.last,
      stopId = _props.stopId,
      unstable_clickOnEnter = _props.unstable_clickOnEnter,
      unstable_clickOnSpace = _props.unstable_clickOnSpace,
      unstable_idCountRef = _props.unstable_idCountRef,
      unstable_moves = _props.unstable_moves,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props, ["baseId", "disabled", "focusable", "orientation", "stops", "id", "currentId", "register", "unregister", "move", "next", "previous", "first", "last", "stopId", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_idCountRef", "unstable_moves"]);

  var roverProps = reakit.useRover({
    baseId: baseId,
    disabled: disabled,
    focusable: focusable,
    orientation: orientation,
    stops: stops,
    id: id,
    currentId: currentId,
    register: register,
    unregister: unregister,
    move: move,
    next: next,
    previous: previous,
    first: first,
    last: last,
    stopId: process.env.NODE_ENV === 'test' ? 'test' : stopId,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_idCountRef: unstable_idCountRef,
    unstable_moves: unstable_moves
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), roverProps));
  var className = utils_useClassName.useClassName({
    style: Rover_Rover_styles.Rover,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Rover'
});
var Rover = utils_createComponent.createComponent(function (props) {
  var roverProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: roverProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Rover'
  },
  themeKey: 'Rover'
});

exports.Rover = Rover;
