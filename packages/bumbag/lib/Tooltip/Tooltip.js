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
require('../Modal.styles-a83df364.js');
var Tooltip_Tooltip_styles = require('../Tooltip.styles-0c90c422.js');
var Tooltip_TooltipState = require('./TooltipState.js');

var useProps = utils_createHook.createHook(function (props) {
  var arrowProps = props.arrowProps,
      children = props.children,
      content = props.content,
      expand = props.expand,
      fade = props.fade,
      hasArrow = props.hasArrow,
      overrides = props.overrides,
      placement = props.placement,
      slide = props.slide,
      baseId = props.baseId,
      tooltipContentProps = props.tooltipContentProps,
      tooltipState = props.tooltipState;
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
    content: undefined
  })); // @ts-ignore

  var tooltip = Tooltip_TooltipState.useTooltipState(_rollupPluginBabelHelpers._objectSpread2({
    placement: placement,
    animated: expand || fade || slide,
    baseId: baseId
  }, tooltipState));
  return {
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TooltipReference, _rollupPluginBabelHelpers._extends({
      overrides: overrides
    }, boxProps, tooltip), React.isValidElement(children) ?
    /*
    // @ts-ignore */
    function (referenceProps) {
      return React.cloneElement(children, _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, referenceProps), children.props));
    } : children), /*#__PURE__*/React.createElement(TooltipContent, _rollupPluginBabelHelpers._extends({
      arrowProps: arrowProps,
      expand: expand,
      fade: fade,
      hasArrow: hasArrow,
      overrides: overrides,
      slide: slide
    }, tooltipContentProps, tooltip), content))
  };
}, {
  themeKey: 'Tooltip',
  defaultProps: {
    placement: 'top'
  }
});
var Tooltip = utils_createComponent.createComponent(function (props) {
  var tooltipProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tooltipProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tooltip'
  },
  themeKey: 'Tooltip'
}); ////////////////////////////////////////////////////////////

var useTooltipContentProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var arrowProps = props.arrowProps,
      children = props.children,
      hasArrow = props.hasArrow,
      overrides = props.overrides,
      visible = props.visible,
      baseId = props.baseId,
      animating = props.animating,
      animated = props.animated,
      unstable_popoverRef = props.unstable_popoverRef,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_portal = props.unstable_portal,
      stopAnimation = props.stopAnimation,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["arrowProps", "children", "hasArrow", "overrides", "visible", "baseId", "animating", "animated", "unstable_popoverRef", "unstable_popoverStyles", "unstable_portal", "stopAnimation"]);

  var tooltipProps = reakit.useTooltip({
    visible: visible,
    baseId: baseId,
    animating: animating,
    animated: animated,
    unstable_popoverRef: unstable_popoverRef,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_portal: unstable_portal,
    stopAnimation: stopAnimation
  }, restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), tooltipProps));
  var className = utils_useClassName.useClassName({
    style: Tooltip_Tooltip_styles.TooltipContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, hasArrow && /*#__PURE__*/React.createElement(TooltipArrow, _rollupPluginBabelHelpers._extends({
      overrides: overrides // @ts-ignore
      ,
      placement: props.placement // @ts-ignore
      ,
      unstable_arrowRef: props.unstable_arrowRef // @ts-ignore
      ,
      unstable_arrowStyles: props.unstable_arrowStyles
    }, arrowProps)), children)
  });
}, {
  themeKey: 'Tooltip.Content'
});
var TooltipContent = utils_createComponent.createComponent(function (props) {
  var tooltipContentProps = useTooltipContentProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tooltipContentProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tooltip.Content'
  },
  themeKey: 'Tooltip.Content'
}); ////////////////////////////////////////////////////////////

var useTooltipReferenceProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var show = props.show,
      hide = props.hide,
      unstable_referenceRef = props.unstable_referenceRef,
      baseId = props.baseId,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["show", "hide", "unstable_referenceRef", "baseId"]);

  var tooltipReferenceProps = reakit.useTooltipReference({
    show: show,
    hide: hide,
    unstable_referenceRef: unstable_referenceRef,
    baseId: baseId
  }, restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), tooltipReferenceProps));
  var className = utils_useClassName.useClassName({
    style: Tooltip_Tooltip_styles.TooltipReference,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tooltip.Reference'
});
var TooltipReference = utils_createComponent.createComponent(function (props) {
  var tooltipReferenceProps = useTooltipReferenceProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tooltipReferenceProps
  });
}, {
  attach: {
    useProps: useTooltipReferenceProps,
    displayName: 'Tooltip.Reference'
  },
  themeKey: 'Tooltip.Reference'
}); ////////////////////////////////////////////////////////////

var useTooltipArrowProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;

  var unstable_arrowRef = props.unstable_arrowRef,
      unstable_arrowStyles = props.unstable_arrowStyles,
      placement = props.placement,
      size = props.size,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["unstable_arrowRef", "unstable_arrowStyles", "placement", "size"]);

  var tooltipArrowProps = reakit.useTooltipArrow({
    placement: placement,
    size: size,
    unstable_arrowRef: unstable_arrowRef,
    unstable_arrowStyles: unstable_arrowStyles
  }, restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), tooltipArrowProps));
  var className = utils_useClassName.useClassName({
    style: Tooltip_Tooltip_styles.TooltipArrow,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tooltip.Arrow'
});
var TooltipArrow = utils_createComponent.createComponent(function (props) {
  var tooltipArrowProps = useTooltipArrowProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: tooltipArrowProps
  });
}, {
  attach: {
    useProps: useTooltipArrowProps,
    displayName: 'Tooltip.Arrow'
  },
  themeKey: 'Tooltip.Arrow'
});

exports.Tooltip = Tooltip;
exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipReference = TooltipReference;
