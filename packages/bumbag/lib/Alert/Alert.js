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
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
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
var Alert_Alert_styles = require('../Alert.styles-4918d5bb.js');

var AlertContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["accent", "countdown", "closeButtonProps", "closeButtonIconProps", "hasIcon", "iconProps", "isInline", "onClickClose", "overrides", "showCloseButton", "title", "type", "variant"]);

  var flexProps = Flex_Flex.Flex.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Alert_Alert_styles.Alert,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  var alertCloseButtonClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertCloseButton,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'CloseButton'
  });
  var titleId = utils_uniqueId.useUniqueId();
  var descriptionId = utils_uniqueId.useUniqueId();
  var context = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2({
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

  var children = /*#__PURE__*/React.createElement(AlertContext.Provider, {
    value: context
  }, accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AlertAccent, {
    overrides: overrides
  }), countdown ? /*#__PURE__*/React.createElement(AlertAccent, {
    overrides: overrides,
    isBackground: true
  }) : null), /*#__PURE__*/React.createElement(AlertWrapper, {
    overrides: overrides
  }, /*#__PURE__*/React.createElement(Flex_Flex.Flex, {
    alignItems: "center"
  }, hasIcon && /*#__PURE__*/React.createElement(AlertIcon, {
    overrides: overrides
  }), /*#__PURE__*/React.createElement(AlertContent, {
    overrides: overrides
  }, title && /*#__PURE__*/React.createElement(AlertTitle, {
    overrides: overrides
  }, title), /*#__PURE__*/React.createElement(AlertDescription, {
    overrides: overrides
  }, props.children))), showCloseButton && /*#__PURE__*/React.createElement(Flex_Flex.Flex, null, /*#__PURE__*/React.createElement(Button_index.Button.Close, _rollupPluginBabelHelpers._extends({
    className: alertCloseButtonClassName,
    onClick: onClickClose,
    palette: palette,
    iconProps: closeButtonIconProps
  }, closeButtonProps)))));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, flexProps), {}, {
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
var Alert = utils_createComponent.createComponent(function (props) {
  var alertProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["iconProps"]);

  var context = React.useContext(AlertContext);
  var alertIconWrapperClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertIconWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'IconWrapper'
  });
  var fontSize = '400';

  if (!context.title || context.isInline) {
    fontSize = '200';
  }

  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: alertIconWrapperClassName
  }, restProps), /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    "aria-hidden": true,
    color: context.variant === 'fill' ? context.type + "Inverted" : context.type,
    fontSize: fontSize,
    icon: context.type
  }, iconProps)));
} /////////////////////////////////////

function AlertContent(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(AlertContext);
  var alertContentClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Content'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: alertContentClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertWrapper(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(AlertContext);
  var alertWrapperClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Wrapper'
  });
  return /*#__PURE__*/React.createElement(Flex_Flex.Flex, _rollupPluginBabelHelpers._extends({
    className: alertWrapperClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertAccent(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(AlertContext);
  var alertAccentClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertAccent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Accent'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: alertAccentClassName
  }, restProps), children);
} /////////////////////////////////////

function AlertTitle(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(AlertContext);
  var alertTitleClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertTitle,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Title'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: alertTitleClassName
  }, restProps), /*#__PURE__*/React.createElement(Text_index.Text, {
    fontWeight: "semibold",
    id: context.titleId
  }, children));
} /////////////////////////////////////

function AlertDescription(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(AlertContext);
  var alertDescriptionClassName = utils_useClassName.useClassName({
    style: Alert_Alert_styles.AlertDescription,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Description'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: alertDescriptionClassName,
    id: context.descriptionId
  }, restProps), children);
}

exports.Alert = Alert;
exports.AlertAccent = AlertAccent;
exports.AlertContent = AlertContent;
exports.AlertContext = AlertContext;
exports.AlertDescription = AlertDescription;
exports.AlertIcon = AlertIcon;
exports.AlertTitle = AlertTitle;
exports.AlertWrapper = AlertWrapper;
