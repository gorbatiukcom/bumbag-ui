import { createElement as createElement$1, Fragment, isValidElement, cloneElement } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, d as _extends, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useTooltip, useTooltipReference, useTooltipArrow } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Modal.styles.js';
import { a as TooltipContent$1, b as TooltipReference$1, c as TooltipArrow$1 } from '../Tooltip.styles.js';
import { useTooltipState } from './TooltipState.js';

var useProps = createHook(function (props) {
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
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), {}, {
    content: undefined
  })); // @ts-ignore

  var tooltip = useTooltipState(_objectSpread2({
    placement: placement,
    animated: expand || fade || slide,
    baseId: baseId
  }, tooltipState));
  return {
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(TooltipReference, _extends({
      overrides: overrides
    }, boxProps, tooltip), isValidElement(children) ?
    /*
    // @ts-ignore */
    function (referenceProps) {
      return cloneElement(children, _objectSpread2(_objectSpread2({}, referenceProps), children.props));
    } : children), /*#__PURE__*/createElement$1(TooltipContent, _extends({
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
var Tooltip = createComponent(function (props) {
  var tooltipProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

var useTooltipContentProps = createHook(function (props, _ref) {
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
      restProps = _objectWithoutPropertiesLoose(props, ["arrowProps", "children", "hasArrow", "overrides", "visible", "baseId", "animating", "animated", "unstable_popoverRef", "unstable_popoverStyles", "unstable_portal", "stopAnimation"]);

  var tooltipProps = useTooltip({
    visible: visible,
    baseId: baseId,
    animating: animating,
    animated: animated,
    unstable_popoverRef: unstable_popoverRef,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_portal: unstable_portal,
    stopAnimation: stopAnimation
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), tooltipProps));
  var className = useClassName({
    style: TooltipContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, hasArrow && /*#__PURE__*/createElement$1(TooltipArrow, _extends({
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
var TooltipContent = createComponent(function (props) {
  var tooltipContentProps = useTooltipContentProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

var useTooltipReferenceProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var show = props.show,
      hide = props.hide,
      unstable_referenceRef = props.unstable_referenceRef,
      baseId = props.baseId,
      restProps = _objectWithoutPropertiesLoose(props, ["show", "hide", "unstable_referenceRef", "baseId"]);

  var tooltipReferenceProps = useTooltipReference({
    show: show,
    hide: hide,
    unstable_referenceRef: unstable_referenceRef,
    baseId: baseId
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), tooltipReferenceProps));
  var className = useClassName({
    style: TooltipReference$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tooltip.Reference'
});
var TooltipReference = createComponent(function (props) {
  var tooltipReferenceProps = useTooltipReferenceProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

var useTooltipArrowProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;

  var unstable_arrowRef = props.unstable_arrowRef,
      unstable_arrowStyles = props.unstable_arrowStyles,
      placement = props.placement,
      size = props.size,
      restProps = _objectWithoutPropertiesLoose(props, ["unstable_arrowRef", "unstable_arrowStyles", "placement", "size"]);

  var tooltipArrowProps = useTooltipArrow({
    placement: placement,
    size: size,
    unstable_arrowRef: unstable_arrowRef,
    unstable_arrowStyles: unstable_arrowStyles
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), tooltipArrowProps));
  var className = useClassName({
    style: TooltipArrow$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tooltip.Arrow'
});
var TooltipArrow = createComponent(function (props) {
  var tooltipArrowProps = useTooltipArrowProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

export { Tooltip, TooltipArrow, TooltipContent, TooltipReference };
