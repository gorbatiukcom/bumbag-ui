import { createContext, useMemo, createElement as createElement$1, Fragment, useContext } from 'react';
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
import { useUniqueId } from '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import '../Card.styles.js';
import '../Card/Card.js';
import { Card } from '../Card/index.js';
import '../Modal.styles.js';
import { a as Callout$1, b as CalloutClose, c as CalloutContent$1, d as CalloutHeader$1, e as CalloutTitle$1, f as CalloutFooter$1, g as CalloutIconWrapper, h as CalloutOverlay$1 } from '../Callout.styles.js';
import { ModalContext } from '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import '../Modal/index.js';
import '../Overlay.styles.js';
import '../Overlay/Overlay.js';
import '../Overlay/OverlayDisclosure.js';
import '../Overlay/OverlayState.js';
import { Overlay } from '../Overlay/index.js';

var CalloutContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var _props$closeButtonPro = props.closeButtonProps,
      closeButtonProps = _props$closeButtonPro === void 0 ? {} : _props$closeButtonPro,
      iconProps = props.iconProps,
      onClickClose = props.onClickClose,
      overrides = props.overrides,
      footer = props.footer,
      standalone = props.standalone,
      showCloseButton = props.showCloseButton,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["closeButtonProps", "iconProps", "onClickClose", "overrides", "footer", "standalone", "showCloseButton", "title"]);

  var cardProps = Card.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    standalone: true
  }));
  var className = useClassName({
    style: Callout$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: cardProps.className
  });
  var calloutCloseClassName = useClassName({
    style: CalloutClose,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Close',
    prevClassName: closeButtonProps.className
  });
  var titleId = useUniqueId();
  var descriptionId = useUniqueId();
  var context = useMemo(function () {
    return _objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var children = /*#__PURE__*/createElement$1(CalloutContext.Provider, {
    value: context
  }, /*#__PURE__*/createElement$1(Box$1, {
    display: "flex"
  }, standalone ? props.children : /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(CalloutIcon, {
    iconProps: iconProps,
    overrides: overrides
  }), /*#__PURE__*/createElement$1(Box$1, null, title && /*#__PURE__*/createElement$1(CalloutHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/createElement$1(CalloutTitle, {
    overrides: overrides
  }, title) : title), /*#__PURE__*/createElement$1(CalloutContent, {
    overrides: overrides
  }, props.children), footer && /*#__PURE__*/createElement$1(CalloutFooter, {
    overrides: overrides
  }, footer)))), showCloseButton && /*#__PURE__*/createElement$1(Button.Close, _extends({
    className: calloutCloseClassName,
    onClick: onClickClose,
    size: title ? undefined : 'small'
  }, closeButtonProps)));
  return _objectSpread2(_objectSpread2({}, cardProps), {}, {
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined,
    className: className,
    children: children
  });
}, {
  defaultProps: {
    type: 'info'
  },
  themeKey: 'Callout'
});
var Callout = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Callout'
  },
  themeKey: 'Callout'
}); //////////////////////////////

var useCalloutContentProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({
    id: props.id || contextProps.descriptionId
  }, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Content'
});
var CalloutContent = createComponent(function (props) {
  var calloutContentProps = useCalloutContentProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutContentProps
  });
}, {
  attach: {
    useProps: useCalloutContentProps,
    displayName: 'Callout.Content'
  },
  themeKey: 'Callout.Content'
}); //////////////////////////////

var useCalloutHeaderProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutHeader$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Header'
});
var CalloutHeader = createComponent(function (props) {
  var calloutHeaderProps = useCalloutHeaderProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutHeaderProps
  });
}, {
  attach: {
    useProps: useCalloutHeaderProps,
    displayName: 'Callout.Header'
  },
  themeKey: 'Callout.Header'
}); //////////////////////////////

var useCalloutTitleProps = createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text.useProps(props);
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutTitle$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  return _objectSpread2(_objectSpread2({
    id: contextProps.titleId
  }, textProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Title'
});
var CalloutTitle = createComponent(function (props) {
  var calloutTitleProps = useCalloutTitleProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutTitleProps
  });
}, {
  attach: {
    useProps: useCalloutTitleProps,
    displayName: 'Callout.Title'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Callout.Title'
}); //////////////////////////////

var useCalloutFooterProps = createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutFooter$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Footer'
});
var CalloutFooter = createComponent(function (props) {
  var calloutFooterProps = useCalloutFooterProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutFooterProps
  });
}, {
  attach: {
    useProps: useCalloutFooterProps,
    displayName: 'Callout.Footer'
  },
  themeKey: 'Callout.Footer'
}); //////////////////////////////

var useCalloutIconProps = createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;

  var iconProps = props.iconProps,
      restProps = _objectWithoutPropertiesLoose(props, ["iconProps"]);

  var boxProps = Box$1.useProps(restProps);
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutIconWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var icon = /*#__PURE__*/createElement$1(Icon, _extends({
    "aria-hidden": true,
    color: contextProps.type,
    fontSize: !contextProps.title ? '300' : undefined,
    icon: contextProps.type
  }, iconProps));
  var children = /*#__PURE__*/createElement$1(CalloutContent, {
    id: undefined
  }, icon);

  if (contextProps.title) {
    children = /*#__PURE__*/createElement$1(CalloutHeader, null, /*#__PURE__*/createElement$1(CalloutTitle, {
      id: undefined
    }, icon));
  }

  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Callout.IconWrapper'
});
var CalloutIcon = createComponent(function (props) {
  var calloutIconProps = useCalloutIconProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutIconProps
  });
}, {
  attach: {
    useProps: useCalloutIconProps,
    displayName: 'Callout.IconWrapper'
  },
  themeKey: 'Callout.IconWrapper'
}); //////////////////////////////

var useCalloutOverlayProps = createHook(function (props, _ref7) {
  var themeKey = _ref7.themeKey;

  var variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["variant"]);

  var _React$useContext = useContext(ModalContext),
      modal = _React$useContext.modal;

  var calloutProps = Callout.useProps(_objectSpread2(_objectSpread2({
    onClickClose: restProps.hide || modal.hide
  }, restProps), {}, {
    wrapElement: function wrapElement(children) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        createElement$1(Overlay, _extends({
          placement: "bottom-end"
        }, restProps), children)
      );
    }
  }));
  var contextProps = useContext(CalloutContext);
  var className = useClassName({
    style: CalloutOverlay$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: calloutProps.className
  });
  return _objectSpread2(_objectSpread2({}, calloutProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    showCloseButton: true
  },
  themeKey: 'Callout.Overlay'
});
var CalloutOverlay = createComponent(function (props) {
  var calloutOverlayProps = useCalloutOverlayProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutOverlayProps
  });
}, {
  attach: {
    useProps: useCalloutOverlayProps,
    displayName: 'Callout.Overlay'
  },
  themeKey: 'Callout.Overlay'
});

export { Callout, CalloutContent, CalloutContext, CalloutFooter, CalloutHeader, CalloutIcon, CalloutOverlay, CalloutTitle };
