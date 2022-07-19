'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('../utils/useTheme.js');
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
require('../utils/uniqueId.js');
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
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
require('../Button/index.js');
require('../Alert.styles-4918d5bb.js');
require('../Alert/Alert.js');
require('../Alert/index.js');
require('../Modal.styles-a83df364.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
require('../Overlay.styles-78f6977d.js');
require('../Overlay/Overlay.js');
require('../Overlay/OverlayDisclosure.js');
require('../Overlay/OverlayState.js');
var Overlay_index = require('../Overlay/index.js');
require('../Stack.styles-ab6c74fd.js');
var Stack_Stack = require('../Stack/Stack.js');
var Toast_Toast_styles = require('../Toast.styles-143b4a90.js');
var Toast_Toast = require('./Toast.js');
var Toast_ToastContext = require('./ToastContext.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var _theme$Toast;

  var themeKey = _ref.themeKey;

  var children = props.children,
      isStacked = props.isStacked,
      overlayProps = props.overlayProps,
      spacing = props.spacing,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "isStacked", "overlayProps", "spacing"]);

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var boxProps = Box_Box.Box.useProps(restProps);
  var overlay = Overlay_index.Overlay.useState({
    visible: true,
    animated: true
  });

  var _React$useContext = React.useContext(Toast_ToastContext.ToastContext),
      toasts = _React$useContext.toasts;

  var placement = theme === null || theme === void 0 ? void 0 : (_theme$Toast = theme.Toast) === null || _theme$Toast === void 0 ? void 0 : _theme$Toast.placement;
  var className = utils_useClassName.useClassName({
    style: Toast_Toast_styles.Toast,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var overlayClassName = utils_useClassName.useClassName({
    style: Toast_Toast_styles.ToastOverlay,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      placement: placement
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Overlay'
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(Overlay_index.Overlay, _rollupPluginBabelHelpers._extends({}, overlay, overlayProps, {
      className: overlayClassName,
      placement: placement
    }), /*#__PURE__*/React.createElement(Stack_Stack.Stack, {
      spacing: spacing
    }, toasts.map(function (toast) {
      return /*#__PURE__*/React.createElement(Toast_Toast.Toast, _rollupPluginBabelHelpers._extends({
        key: toast.key
      }, toast), toast.message);
    })))
  });
}, {
  defaultProps: {
    fade: true,
    slide: true,
    spacing: 'major-2'
  },
  themeKey: 'Toast.Manager'
});
var ToastManager = utils_createComponent.createComponent(function (props) {
  var toastManagerProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: toastManagerProps
  });
}, {
  attach: {
    useProps: useProps
  },
  themeKey: 'Toast.Manager'
});

exports.ToastManager = ToastManager;
