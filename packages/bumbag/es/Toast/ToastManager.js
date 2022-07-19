import { useContext, createElement as createElement$1 } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from '../utils/useTheme.js';
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
import '../utils/uniqueId.js';
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
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import '../Button/index.js';
import '../Alert.styles.js';
import '../Alert/Alert.js';
import '../Alert/index.js';
import '../Modal.styles.js';
import '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import '../Modal/index.js';
import '../Overlay.styles.js';
import '../Overlay/Overlay.js';
import '../Overlay/OverlayDisclosure.js';
import '../Overlay/OverlayState.js';
import { Overlay } from '../Overlay/index.js';
import '../Stack.styles.js';
import { Stack } from '../Stack/Stack.js';
import { a as Toast, b as ToastOverlay } from '../Toast.styles.js';
import { Toast as Toast$1 } from './Toast.js';
import { ToastContext } from './ToastContext.js';

var useProps = createHook(function (props, _ref) {
  var _theme$Toast;

  var themeKey = _ref.themeKey;

  var children = props.children,
      isStacked = props.isStacked,
      overlayProps = props.overlayProps,
      spacing = props.spacing,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "isStacked", "overlayProps", "spacing"]);

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var boxProps = Box$1.useProps(restProps);
  var overlay = Overlay.useState({
    visible: true,
    animated: true
  });

  var _React$useContext = useContext(ToastContext),
      toasts = _React$useContext.toasts;

  var placement = theme === null || theme === void 0 ? void 0 : (_theme$Toast = theme.Toast) === null || _theme$Toast === void 0 ? void 0 : _theme$Toast.placement;
  var className = useClassName({
    style: Toast,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var overlayClassName = useClassName({
    style: ToastOverlay,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Overlay'
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Overlay, _extends({}, overlay, overlayProps, {
      className: overlayClassName,
      placement: placement
    }), /*#__PURE__*/createElement$1(Stack, {
      spacing: spacing
    }, toasts.map(function (toast) {
      return /*#__PURE__*/createElement$1(Toast$1, _extends({
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
var ToastManager = createComponent(function (props) {
  var toastManagerProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: toastManagerProps
  });
}, {
  attach: {
    useProps: useProps
  },
  themeKey: 'Toast.Manager'
});

export { ToastManager };
