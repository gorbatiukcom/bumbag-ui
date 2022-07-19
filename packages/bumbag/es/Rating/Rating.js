import { useState, createElement as createElement$1 } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import { times } from '../utils/times.js';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import { Flex } from '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import { Rover } from '../Rover/index.js';
import { a as Rating$1, b as RatingItem$1 } from '../Rating.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var color = props.color,
      item = props.item,
      items = props.items,
      isSingular = props.isSingular,
      isStatic = props.isStatic,
      onChange = props.onChange,
      overrides = props.overrides,
      maxValue = props.maxValue,
      roverProps = props.roverProps,
      size = props.size,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["color", "item", "items", "isSingular", "isStatic", "onChange", "overrides", "maxValue", "roverProps", "size", "value"]);

  var flexProps = Flex.useProps(restProps);
  var rover = Rover.useState();

  var _React$useState = useState(-1),
      hoveringIndex = _React$useState[0],
      setHoveringIndex = _React$useState[1];

  var className = useClassName({
    style: Rating$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  var disabled = props.disabled || isStatic;
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    className: className,
    onMouseLeave: !disabled ? function () {
      return setHoveringIndex(-1);
    } : undefined,
    overrides: overrides,
    role: 'radiogroup',
    children: times(items ? items.length : maxValue, function (index) {
      return /*#__PURE__*/createElement$1(Rover, _extends({
        key: index
      }, rover, roverProps, {
        disabled: disabled
      }), function (props) {
        return /*#__PURE__*/createElement$1(RatingItem, _extends({}, props, {
          "aria-checked": value === index + 1,
          "aria-posinset": index + 1,
          "aria-setsize": maxValue,
          color: color,
          isActive: hoveringIndex >= 0 ? isSingular ? hoveringIndex === index : hoveringIndex >= index : isSingular ? value === index + 1 : value > index,
          isStatic: isStatic,
          onClick: !disabled ? function () {
            return onChange(index + 1);
          } : undefined,
          onMouseEnter: !disabled ? function () {
            return setHoveringIndex(index);
          } : undefined,
          overrides: overrides,
          size: size
        }), item || (items === null || items === void 0 ? void 0 : items[index]));
      });
    })
  });
}, {
  defaultProps: {
    maxValue: 5,
    value: 0
  },
  themeKey: 'Rating'
});
var Rating = createComponent(function (props) {
  var ratingProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: ratingProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Rating'
  },
  themeKey: 'Rating'
}); ////////////////////////////////////////

var useRatingItemProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var children = props.children,
      color = props.color,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "color"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: RatingItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      color: color
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'radio',
    children: children
  });
}, {
  defaultProps: {
    children: /*#__PURE__*/createElement$1(Icon, {
      icon: "star"
    }),
    color: 'gold'
  },
  themeKey: 'Rating.Item'
});
var RatingItem = createComponent(function (props) {
  var ratingItemProps = useRatingItemProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: ratingItemProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Rating.Item'
  },
  themeKey: 'Rating.Item'
});

export { Rating, RatingItem };
