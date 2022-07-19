import React from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useRover } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as Rover$1 } from '../Rover.styles.js';
import { RoverContext } from './RoverState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var roverContext = React.useContext(RoverContext);
  props = _objectSpread2(_objectSpread2({}, props), roverContext.rover);

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
      htmlProps = _objectWithoutPropertiesLoose(_props, ["baseId", "disabled", "focusable", "orientation", "stops", "id", "currentId", "register", "unregister", "move", "next", "previous", "first", "last", "stopId", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_idCountRef", "unstable_moves"]);

  var roverProps = useRover({
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
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), roverProps));
  var className = useClassName({
    style: Rover$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Rover'
});
var Rover = createComponent(function (props) {
  var roverProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

export { Rover };
