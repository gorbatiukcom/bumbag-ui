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
var utils_times = require('../utils/times.js');
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
require('../Flex.styles-8d4bcbcd.js');
var Flex_Flex = require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Rover.styles-6d58106f.js');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
var Rover_index = require('../Rover/index.js');
var Rating_Rating_styles = require('../Rating.styles-e31dcfdc.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["color", "item", "items", "isSingular", "isStatic", "onChange", "overrides", "maxValue", "roverProps", "size", "value"]);

  var flexProps = Flex_Flex.Flex.useProps(restProps);
  var rover = Rover_index.Rover.useState();

  var _React$useState = React.useState(-1),
      hoveringIndex = _React$useState[0],
      setHoveringIndex = _React$useState[1];

  var className = utils_useClassName.useClassName({
    style: Rating_Rating_styles.Rating,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  var disabled = props.disabled || isStatic;
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, flexProps), {}, {
    className: className,
    onMouseLeave: !disabled ? function () {
      return setHoveringIndex(-1);
    } : undefined,
    overrides: overrides,
    role: 'radiogroup',
    children: utils_times.times(items ? items.length : maxValue, function (index) {
      return /*#__PURE__*/React.createElement(Rover_index.Rover, _rollupPluginBabelHelpers._extends({
        key: index
      }, rover, roverProps, {
        disabled: disabled
      }), function (props) {
        return /*#__PURE__*/React.createElement(RatingItem, _rollupPluginBabelHelpers._extends({}, props, {
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
var Rating = utils_createComponent.createComponent(function (props) {
  var ratingProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useRatingItemProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var children = props.children,
      color = props.color,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "color"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Rating_Rating_styles.RatingItem,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      color: color
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'radio',
    children: children
  });
}, {
  defaultProps: {
    children: /*#__PURE__*/React.createElement(Icon_Icon.Icon, {
      icon: "star"
    }),
    color: 'gold'
  },
  themeKey: 'Rating.Item'
});
var RatingItem = utils_createComponent.createComponent(function (props) {
  var ratingItemProps = useRatingItemProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Rating = Rating;
exports.RatingItem = RatingItem;
