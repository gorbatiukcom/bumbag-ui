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
import { omitCSSProps } from '../utils/cssProps.js';
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
import { bindFns } from '../utils/bindFns.js';
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
import '../ActionButtons.styles.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import { Flex } from '../Flex/Flex.js';
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
import '../Set.styles.js';
import '../Set/Set.js';
import { ActionButtons } from '../ActionButtons/ActionButtons.js';
import '../Modal.styles.js';
import { ModalContext } from '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import { Modal } from '../Modal/index.js';
import { a as Dialog$1, b as DialogClose, c as DialogContent$1, d as DialogHeader$1, e as DialogTitle$1, f as DialogFooter$1, g as DialogIconWrapper, h as DialogModal$1 } from '../Dialog.styles.js';

var DialogContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var _props$actionButtonsP = props.actionButtonsProps,
      actionButtonsProps = _props$actionButtonsP === void 0 ? {} : _props$actionButtonsP,
      _props$closeButtonPro = props.closeButtonProps,
      closeButtonProps = _props$closeButtonPro === void 0 ? {} : _props$closeButtonPro,
      footer = props.footer,
      _props$iconProps = props.iconProps,
      iconProps = _props$iconProps === void 0 ? {} : _props$iconProps,
      onClickClose = props.onClickClose,
      overrides = props.overrides,
      palette = props.palette,
      showActionButtons = props.showActionButtons,
      showCloseButton = props.showCloseButton,
      standalone = props.standalone,
      title = props.title,
      type = props.type,
      restProps = _objectWithoutPropertiesLoose(props, ["actionButtonsProps", "closeButtonProps", "footer", "iconProps", "onClickClose", "overrides", "palette", "showActionButtons", "showCloseButton", "standalone", "title", "type"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: Dialog$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var dialogCloseClassName = useClassName({
    style: DialogClose,
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
  var children = /*#__PURE__*/createElement$1(DialogContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(DialogContent, {
    overrides: overrides
  }, type && /*#__PURE__*/createElement$1(DialogIcon, {
    iconProps: iconProps,
    overrides: overrides
  }), /*#__PURE__*/createElement$1(Box$1, {
    width: "100%"
  }, title && /*#__PURE__*/createElement$1(DialogHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/createElement$1(DialogTitle, {
    overrides: overrides
  }, title) : title, showCloseButton && /*#__PURE__*/createElement$1(Button.Close, _extends({
    className: dialogCloseClassName,
    onClick: onClickClose,
    size: title ? undefined : 'small'
  }, closeButtonProps))), props.children)), (footer || showActionButtons) && /*#__PURE__*/createElement$1(DialogFooter, {
    overrides: overrides
  }, footer, showActionButtons && /*#__PURE__*/createElement$1(ActionButtons, _extends({
    palette: palette
  }, actionButtonsProps)))));
  return _objectSpread2(_objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Dialog'
});
var Dialog = createComponent(function (props) {
  var dialogProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: dialogProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Dialog'
  },
  themeKey: 'Dialog'
}); //////////////////////////////

var useDialogContentProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var flexProps = Flex.useProps(props);
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _objectSpread2(_objectSpread2({
    id: props.id || contextProps.descriptionId
  }, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Content'
});
var DialogContent = createComponent(function (props) {
  var calloutContentProps = useDialogContentProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutContentProps
  });
}, {
  attach: {
    useProps: useDialogContentProps,
    displayName: 'Dialog.Content'
  },
  themeKey: 'Dialog.Content'
}); //////////////////////////////

var useDialogHeaderProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogHeader$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Header'
});
var DialogHeader = createComponent(function (props) {
  var calloutHeaderProps = useDialogHeaderProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutHeaderProps
  });
}, {
  attach: {
    useProps: useDialogHeaderProps,
    displayName: 'Dialog.Header'
  },
  themeKey: 'Dialog.Header'
}); //////////////////////////////

var useDialogTitleProps = createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text.useProps(props);
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogTitle$1,
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
  themeKey: 'Dialog.Title'
});
var DialogTitle = createComponent(function (props) {
  var calloutTitleProps = useDialogTitleProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutTitleProps
  });
}, {
  attach: {
    useProps: useDialogTitleProps,
    displayName: 'Dialog.Title'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Dialog.Title'
}); //////////////////////////////

var useDialogFooterProps = createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var flexProps = Flex.useProps(props);
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogFooter$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Footer'
});
var DialogFooter = createComponent(function (props) {
  var calloutFooterProps = useDialogFooterProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutFooterProps
  });
}, {
  attach: {
    useProps: useDialogFooterProps,
    displayName: 'Dialog.Footer'
  },
  themeKey: 'Dialog.Footer'
}); //////////////////////////////

var useDialogIconProps = createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;

  var iconProps = props.iconProps,
      restProps = _objectWithoutPropertiesLoose(props, ["iconProps"]);

  var textProps = Text.useProps(restProps);
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogIconWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  var icon = /*#__PURE__*/createElement$1(Icon, _extends({
    "aria-hidden": true,
    color: contextProps.type,
    fontSize: !contextProps.title ? '300' : undefined,
    icon: contextProps.type
  }, iconProps));
  var children = icon;

  if (contextProps.title) {
    children = /*#__PURE__*/createElement$1(DialogHeader, null, /*#__PURE__*/createElement$1(DialogTitle, {
      id: undefined
    }, icon));
  }

  return _objectSpread2(_objectSpread2({}, textProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Dialog.IconWrapper'
});
var DialogIcon = createComponent(function (props) {
  var DialogIconProps = useDialogIconProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: DialogIconProps
  });
}, {
  attach: {
    useProps: useDialogIconProps,
    displayName: 'Dialog.IconWrapper'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Dialog.IconWrapper'
}); //////////////////////////////

var useDialogModalProps = createHook(function (props, _ref7) {
  var _restProps$actionButt;

  var themeKey = _ref7.themeKey;

  var _React$useContext = useContext(ModalContext),
      modal = _React$useContext.modal;

  var _modal$props = _objectSpread2(_objectSpread2({}, modal), props),
      wrap = _modal$props.wrap,
      variant = _modal$props.variant,
      restProps = _objectWithoutPropertiesLoose(_modal$props, ["wrap", "variant"]);

  var dialogProps = Dialog.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    onClickClose: bindFns(restProps.hide, props.onClickClose),
    actionButtonsProps: _objectSpread2(_objectSpread2({}, restProps.actionButtonsProps), {}, {
      onClickCancel: bindFns(restProps.hide, (_restProps$actionButt = restProps.actionButtonsProps) === null || _restProps$actionButt === void 0 ? void 0 : _restProps$actionButt.onClickCancel)
    }),
    wrapElement: function wrapElement(children) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        createElement$1(Modal, _extends({
          hideOnEsc: variant !== 'alert',
          hideOnClickOutside: variant !== 'alert',
          role: variant === 'alert' ? 'alertdialog' : 'dialog'
        }, omitCSSProps(restProps)), children)
      );
    }
  }));
  var contextProps = useContext(DialogContext);
  var className = useClassName({
    style: DialogModal$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: dialogProps.className
  });
  return _objectSpread2(_objectSpread2({}, dialogProps), {}, {
    className: className,
    children: typeof wrap === 'function' ? wrap(dialogProps.children) : dialogProps.children
  });
}, {
  defaultProps: {
    hasScroll: true
  },
  themeKey: 'Dialog.Modal'
});
var DialogModal = createComponent(function (props) {
  var DialogModalProps = useDialogModalProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: DialogModalProps
  });
}, {
  attach: {
    useProps: useDialogModalProps,
    displayName: 'Dialog.Modal'
  },
  themeKey: 'Dialog.Modal'
});

export { Dialog, DialogContent, DialogContext, DialogFooter, DialogHeader, DialogIcon, DialogModal, DialogTitle };
