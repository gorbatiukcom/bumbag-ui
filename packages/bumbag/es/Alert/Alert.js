import { createContext, useContext, createElement as createElement$1, useMemo, Fragment } from 'react';
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
import { a as AlertIconWrapper, b as AlertContent$1, c as AlertWrapper$1, d as AlertAccent$1, e as AlertTitle$1, f as AlertDescription$1, g as Alert$1, h as AlertCloseButton } from '../Alert.styles.js';

var AlertContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var accent = props.accent,
      countdown = props.countdown,
      closeButtonProps = props.closeButtonProps,
      closeButtonIconProps = props.closeButtonIconProps,
      hasIcon = props.hasIcon,
      iconProps = props.iconProps,
      isInline = props.isInline,
      onClickClose = props.onClickClose,
      overrides = props.overrides,
      showCloseButton = props.showCloseButton,
      title = props.title,
      type = props.type,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["accent", "countdown", "closeButtonProps", "closeButtonIconProps", "hasIcon", "iconProps", "isInline", "onClickClose", "overrides", "showCloseButton", "title", "type", "variant"]);

  var flexProps = Flex.useProps(restProps);
  var className = useClassName({
    style: Alert$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  var alertCloseButtonClassName = useClassName({
    style: AlertCloseButton,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'CloseButton'
  });
  var titleId = useUniqueId();
  var descriptionId = useUniqueId();
  var context = useMemo(function () {
    return _objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var palette = 'default';

  if (variant === 'fill') {
    palette = type + "Inverted";
  }

  if (variant === 'tint') {
    palette = type;
  }

  var children = /*#__PURE__*/createElement$1(AlertContext.Provider, {
    value: context
  }, accent && /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(AlertAccent, {
    overrides: overrides
  }), countdown ? /*#__PURE__*/createElement$1(AlertAccent, {
    overrides: overrides,
    isBackground: true
  }) : null), /*#__PURE__*/createElement$1(AlertWrapper, {
    overrides: overrides
  }, /*#__PURE__*/createElement$1(Flex, {
    alignItems: "center"
  }, hasIcon && /*#__PURE__*/createElement$1(AlertIcon, {
    overrides: overrides
  }), /*#__PURE__*/createElement$1(AlertContent, {
    overrides: overrides
  }, title && /*#__PURE__*/createElement$1(AlertTitle, {
    overrides: overrides
  }, title), /*#__PURE__*/createElement$1(AlertDescription, {
    overrides: overrides
  }, props.children))), showCloseButton && /*#__PURE__*/createElement$1(Flex, null, /*#__PURE__*/createElement$1(Button.Close, _extends({
    className: alertCloseButtonClassName,
    onClick: onClickClose,
    palette: palette,
    iconProps: closeButtonIconProps
  }, closeButtonProps)))));
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined,
    className: className,
    children: children,
    role: 'alert'
  });
}, {
  defaultProps: {
    accentSize: '4px',
    hasIcon: true,
    type: 'info',
    variant: 'shadowed'
  },
  themeKey: 'Alert'
});
var Alert = createComponent(function (props) {
  var alertProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: alertProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Alert'
  },
  themeKey: 'Alert'
}); /////////////////////////////////////

function AlertIcon(props) {
  var iconProps = props.iconProps,
      restProps = _objectWithoutPropertiesLoose(props, ["iconProps"]);

  var context = useContext(AlertContext);
  var alertIconWrapperClassName = useClassName({
    style: AlertIconWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'IconWrapper'
  });
  var fontSize = '400';

  if (!context.title || context.isInline) {
    fontSize = '200';
  }

  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: alertIconWrapperClassName
  }, restProps), /*#__PURE__*/createElement$1(Icon, _extends({
    "aria-hidden": true,
    color: context.variant === 'fill' ? context.type + "Inverted" : context.type,
    fontSize: fontSize,
    icon: context.type
  }, iconProps)));
} /////////////////////////////////////

function AlertContent(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(AlertContext);
  var alertContentClassName = useClassName({
    style: AlertContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Content'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: alertContentClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertWrapper(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(AlertContext);
  var alertWrapperClassName = useClassName({
    style: AlertWrapper$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Wrapper'
  });
  return /*#__PURE__*/createElement$1(Flex, _extends({
    className: alertWrapperClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertAccent(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(AlertContext);
  var alertAccentClassName = useClassName({
    style: AlertAccent$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Accent'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: alertAccentClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertTitle(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(AlertContext);
  var alertTitleClassName = useClassName({
    style: AlertTitle$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Title'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: alertTitleClassName
  }, restProps), /*#__PURE__*/createElement$1(Text, {
    fontWeight: "semibold",
    id: context.titleId
  }, children));
} /////////////////////////////////////

function AlertDescription(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(AlertContext);
  var alertDescriptionClassName = useClassName({
    style: AlertDescription$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Description'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: alertDescriptionClassName,
    id: context.descriptionId
  }, restProps), children);
}

export { Alert, AlertAccent, AlertContent, AlertContext, AlertDescription, AlertIcon, AlertTitle, AlertWrapper };
