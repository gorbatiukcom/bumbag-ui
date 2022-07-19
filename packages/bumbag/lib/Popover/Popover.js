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
var utils_uniqueId = require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
require('../ActionButtons.styles-1c8a65ac.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
var Flex_Flex = require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
var Button_index = require('../Button/index.js');
require('../Set.styles-ac954f46.js');
require('../Set/Set.js');
var ActionButtons_ActionButtons = require('../ActionButtons/ActionButtons.js');
require('../Modal.styles-a83df364.js');
var Popover_Popover_styles = require('../Popover.styles-689e5c1d.js');
var Popover_PopoverState = require('./PopoverState.js');

var PopoverContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var popoverContext = React.useContext(Popover_PopoverState.PopoverStateContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), popoverContext.popover);

  var _props = props,
      _props$actionButtonsP = _props.actionButtonsProps,
      actionButtonsProps = _props$actionButtonsP === void 0 ? {} : _props$actionButtonsP,
      _props$arrowProps = _props.arrowProps,
      arrowProps = _props$arrowProps === void 0 ? {} : _props$arrowProps,
      _props$closeButtonPro = _props.closeButtonProps,
      closeButtonProps = _props$closeButtonPro === void 0 ? {} : _props$closeButtonPro,
      footer = _props.footer,
      hasArrow = _props.hasArrow,
      hide = _props.hide,
      hideOnEsc = _props.hideOnEsc,
      hideOnClickOutside = _props.hideOnClickOutside,
      modal = _props.modal,
      onClickClose = _props.onClickClose,
      overrides = _props.overrides,
      preventBodyScroll = _props.preventBodyScroll,
      showActionButtons = _props.showActionButtons,
      showCloseButton = _props.showCloseButton,
      standalone = _props.standalone,
      title = _props.title,
      usePortal = _props.usePortal,
      visible = _props.visible,
      animating = _props.animating,
      animated = _props.animated,
      baseId = _props.baseId,
      unstable_initialFocusRef = _props.unstable_initialFocusRef,
      unstable_finalFocusRef = _props.unstable_finalFocusRef,
      unstable_orphan = _props.unstable_orphan,
      unstable_autoFocusOnHide = _props.unstable_autoFocusOnHide,
      unstable_autoFocusOnShow = _props.unstable_autoFocusOnShow,
      unstable_popoverRef = _props.unstable_popoverRef,
      unstable_popoverStyles = _props.unstable_popoverStyles,
      stopAnimation = _props.stopAnimation,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props, ["actionButtonsProps", "arrowProps", "closeButtonProps", "footer", "hasArrow", "hide", "hideOnEsc", "hideOnClickOutside", "modal", "onClickClose", "overrides", "preventBodyScroll", "showActionButtons", "showCloseButton", "standalone", "title", "usePortal", "visible", "animating", "animated", "baseId", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_orphan", "unstable_autoFocusOnHide", "unstable_autoFocusOnShow", "unstable_popoverRef", "unstable_popoverStyles", "stopAnimation"]);

  var popoverProps = reakit.usePopover({
    hide: hide,
    hideOnEsc: hideOnEsc,
    hideOnClickOutside: hideOnClickOutside,
    modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal,
    preventBodyScroll: preventBodyScroll,
    visible: visible,
    animating: animating,
    animated: animated,
    baseId: baseId,
    unstable_initialFocusRef: unstable_initialFocusRef,
    unstable_finalFocusRef: unstable_finalFocusRef,
    unstable_orphan: unstable_orphan,
    unstable_autoFocusOnHide: unstable_autoFocusOnHide,
    unstable_autoFocusOnShow: unstable_autoFocusOnShow,
    unstable_popoverRef: unstable_popoverRef,
    unstable_popoverStyles: unstable_popoverStyles,
    stopAnimation: stopAnimation
  }, restProps);
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), popoverProps));
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.Popover,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var popoverCloseClassName = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverClose,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Close',
    prevClassName: closeButtonProps.className
  });
  var titleId = utils_uniqueId.useUniqueId();
  var descriptionId = utils_uniqueId.useUniqueId();
  var context = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var handleClickClose = React.useCallback(function (e) {
    onClickClose && onClickClose(e);
    hide && hide();
  }, [hide, onClickClose]);
  var children = /*#__PURE__*/React.createElement(PopoverContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, hasArrow && /*#__PURE__*/React.createElement(PopoverArrow, _rollupPluginBabelHelpers._extends({
    overrides: overrides // @ts-ignore
    ,
    placement: props.placement // @ts-ignore
    ,
    unstable_arrowRef: props.unstable_arrowRef // @ts-ignore
    ,
    unstable_arrowStyles: props.unstable_arrowStyles
  }, arrowProps)), title && /*#__PURE__*/React.createElement(PopoverHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/React.createElement(PopoverTitle, {
    overrides: overrides
  }, title) : title, showCloseButton && /*#__PURE__*/React.createElement(Button_index.Button.Close, _rollupPluginBabelHelpers._extends({
    className: popoverCloseClassName,
    onClick: handleClickClose,
    size: "small"
  }, closeButtonProps))), /*#__PURE__*/React.createElement(PopoverContent, {
    overrides: overrides
  }, props.children), (footer || showActionButtons) && /*#__PURE__*/React.createElement(PopoverFooter, {
    overrides: overrides
  }, footer && /*#__PURE__*/React.createElement(Box_Box.Box, null, footer), showActionButtons && /*#__PURE__*/React.createElement(Box_Box.Box, null, /*#__PURE__*/React.createElement(ActionButtons_ActionButtons.ActionButtons, _rollupPluginBabelHelpers._extends({}, actionButtonsProps, {
    onClickCancel: actionButtonsProps.onClickCancel || hide,
    size: "small"
  }))))));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    children: children,
    className: className
  });
}, {
  defaultProps: {
    duration: '150ms'
  },
  themeKey: 'Popover'
});
var Popover = utils_createComponent.createComponent(function (props) {
  var popoverProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: popoverProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover'
  },
  themeKey: 'Popover'
}); //////////////////////////////

var usePopoverContentProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(PopoverContext);
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    id: props.id || contextProps.descriptionId
  }, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Content'
});
var PopoverContent = utils_createComponent.createComponent(function (props) {
  var calloutContentProps = usePopoverContentProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutContentProps
  });
}, {
  attach: {
    useProps: usePopoverContentProps,
    displayName: 'Popover.Content'
  },
  themeKey: 'Popover.Content'
}); //////////////////////////////

var usePopoverHeaderProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var flexProps = Flex_Flex.Flex.useProps(props);
  var contextProps = React.useContext(PopoverContext);
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverHeader,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Header'
});
var PopoverHeader = utils_createComponent.createComponent(function (props) {
  var calloutHeaderProps = usePopoverHeaderProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutHeaderProps
  });
}, {
  attach: {
    useProps: usePopoverHeaderProps,
    displayName: 'Popover.Header'
  },
  themeKey: 'Popover.Header'
}); //////////////////////////////

var usePopoverTitleProps = utils_createHook.createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text_index.Text.useProps(props);
  var contextProps = React.useContext(PopoverContext);
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverTitle,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    id: contextProps.titleId
  }, textProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Title'
});
var PopoverTitle = utils_createComponent.createComponent(function (props) {
  var calloutTitleProps = usePopoverTitleProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutTitleProps
  });
}, {
  attach: {
    useProps: usePopoverTitleProps,
    displayName: 'Popover.Title'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Popover.Title'
}); //////////////////////////////

var usePopoverFooterProps = utils_createHook.createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var flexProps = Flex_Flex.Flex.useProps(props);
  var contextProps = React.useContext(PopoverContext);
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverFooter,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Footer'
});
var PopoverFooter = utils_createComponent.createComponent(function (props) {
  var calloutFooterProps = usePopoverFooterProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutFooterProps
  });
}, {
  attach: {
    useProps: usePopoverFooterProps,
    displayName: 'Popover.Footer'
  },
  themeKey: 'Popover.Footer'
}); //////////////////////////////

var usePopoverArrowProps = utils_createHook.createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;
  var popoverContext = React.useContext(Popover_PopoverState.PopoverStateContext);
  props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), popoverContext.popover);

  var _props2 = props,
      placement = _props2.placement,
      size = _props2.size,
      unstable_arrowRef = _props2.unstable_arrowRef,
      unstable_arrowStyles = _props2.unstable_arrowStyles,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_props2, ["placement", "size", "unstable_arrowRef", "unstable_arrowStyles"]);

  var contextProps = React.useContext(PopoverContext);
  var popoverArrowProps = reakit.usePopoverArrow({
    // @ts-ignore
    placement: placement || contextProps.placement,
    size: size,
    // @ts-ignore
    unstable_arrowRef: unstable_arrowRef || contextProps.unstable_arrowRef,
    // @ts-ignore
    unstable_arrowStyles: unstable_arrowStyles || contextProps.unstable_arrowRef
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), popoverArrowProps));
  var className = utils_useClassName.useClassName({
    style: Popover_Popover_styles.PopoverArrow,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Arrow'
});
var PopoverArrow = utils_createComponent.createComponent(function (props) {
  var popoverArrowProps = usePopoverArrowProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: popoverArrowProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover.Arrow'
  },
  themeKey: 'Popover.Arrow'
});

exports.Popover = Popover;
exports.PopoverArrow = PopoverArrow;
exports.PopoverContent = PopoverContent;
exports.PopoverContext = PopoverContext;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverTitle = PopoverTitle;
