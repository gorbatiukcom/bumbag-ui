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
var utils_cssProps = require('../utils/cssProps.js');
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
var utils_bindFns = require('../utils/bindFns.js');
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
var Icon_Icon = require('../Icon/Icon.js');
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
var Modal_ModalState = require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
var Modal_index = require('../Modal/index.js');
var Dialog_Dialog_styles = require('../Dialog.styles-d130ccae.js');

var DialogContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["actionButtonsProps", "closeButtonProps", "footer", "iconProps", "onClickClose", "overrides", "palette", "showActionButtons", "showCloseButton", "standalone", "title", "type"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.Dialog,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var dialogCloseClassName = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogClose,
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
  var children = /*#__PURE__*/React.createElement(DialogContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DialogContent, {
    overrides: overrides
  }, type && /*#__PURE__*/React.createElement(DialogIcon, {
    iconProps: iconProps,
    overrides: overrides
  }), /*#__PURE__*/React.createElement(Box_Box.Box, {
    width: "100%"
  }, title && /*#__PURE__*/React.createElement(DialogHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/React.createElement(DialogTitle, {
    overrides: overrides
  }, title) : title, showCloseButton && /*#__PURE__*/React.createElement(Button_index.Button.Close, _rollupPluginBabelHelpers._extends({
    className: dialogCloseClassName,
    onClick: onClickClose,
    size: title ? undefined : 'small'
  }, closeButtonProps))), props.children)), (footer || showActionButtons) && /*#__PURE__*/React.createElement(DialogFooter, {
    overrides: overrides
  }, footer, showActionButtons && /*#__PURE__*/React.createElement(ActionButtons_ActionButtons.ActionButtons, _rollupPluginBabelHelpers._extends({
    palette: palette
  }, actionButtonsProps)))));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Dialog'
});
var Dialog = utils_createComponent.createComponent(function (props) {
  var dialogProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogContentProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var flexProps = Flex_Flex.Flex.useProps(props);
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    id: props.id || contextProps.descriptionId
  }, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Content'
});
var DialogContent = utils_createComponent.createComponent(function (props) {
  var calloutContentProps = useDialogContentProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogHeaderProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogHeader,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Header'
});
var DialogHeader = utils_createComponent.createComponent(function (props) {
  var calloutHeaderProps = useDialogHeaderProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogTitleProps = utils_createHook.createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text_index.Text.useProps(props);
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogTitle,
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
  themeKey: 'Dialog.Title'
});
var DialogTitle = utils_createComponent.createComponent(function (props) {
  var calloutTitleProps = useDialogTitleProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogFooterProps = utils_createHook.createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var flexProps = Flex_Flex.Flex.useProps(props);
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogFooter,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Dialog.Footer'
});
var DialogFooter = utils_createComponent.createComponent(function (props) {
  var calloutFooterProps = useDialogFooterProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogIconProps = utils_createHook.createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;

  var iconProps = props.iconProps,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["iconProps"]);

  var textProps = Text_index.Text.useProps(restProps);
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogIconWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  var icon = /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    "aria-hidden": true,
    color: contextProps.type,
    fontSize: !contextProps.title ? '300' : undefined,
    icon: contextProps.type
  }, iconProps));
  var children = icon;

  if (contextProps.title) {
    children = /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, {
      id: undefined
    }, icon));
  }

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, textProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Dialog.IconWrapper'
});
var DialogIcon = utils_createComponent.createComponent(function (props) {
  var DialogIconProps = useDialogIconProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useDialogModalProps = utils_createHook.createHook(function (props, _ref7) {
  var _restProps$actionButt;

  var themeKey = _ref7.themeKey;

  var _React$useContext = React.useContext(Modal_ModalState.ModalContext),
      modal = _React$useContext.modal;

  var _modal$props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, modal), props),
      wrap = _modal$props.wrap,
      variant = _modal$props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_modal$props, ["wrap", "variant"]);

  var dialogProps = Dialog.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    onClickClose: utils_bindFns.bindFns(restProps.hide, props.onClickClose),
    actionButtonsProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps.actionButtonsProps), {}, {
      onClickCancel: utils_bindFns.bindFns(restProps.hide, (_restProps$actionButt = restProps.actionButtonsProps) === null || _restProps$actionButt === void 0 ? void 0 : _restProps$actionButt.onClickCancel)
    }),
    wrapElement: function wrapElement(children) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.createElement(Modal_index.Modal, _rollupPluginBabelHelpers._extends({
          hideOnEsc: variant !== 'alert',
          hideOnClickOutside: variant !== 'alert',
          role: variant === 'alert' ? 'alertdialog' : 'dialog'
        }, utils_cssProps.omitCSSProps(restProps)), children)
      );
    }
  }));
  var contextProps = React.useContext(DialogContext);
  var className = utils_useClassName.useClassName({
    style: Dialog_Dialog_styles.DialogModal,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: dialogProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dialogProps), {}, {
    className: className,
    children: typeof wrap === 'function' ? wrap(dialogProps.children) : dialogProps.children
  });
}, {
  defaultProps: {
    hasScroll: true
  },
  themeKey: 'Dialog.Modal'
});
var DialogModal = utils_createComponent.createComponent(function (props) {
  var DialogModalProps = useDialogModalProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Dialog = Dialog;
exports.DialogContent = DialogContent;
exports.DialogContext = DialogContext;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogIcon = DialogIcon;
exports.DialogModal = DialogModal;
exports.DialogTitle = DialogTitle;
