import { useState, useEffect, useMemo, createElement, Fragment } from 'react';
import '../utils/debounceAnimationFrame.js';
import '../utils/useViewportHeight.js';
import { BumbagThemeContext } from './ThemeContext.js';
import 'classnames';
import '@emotion/css';
import { ThemeProvider } from '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import { ColorModeProvider } from '../ColorMode/ColorModeContext.js';
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
import '../utils/useClassName.js';
import '../utils/getMediaQueryList.js';
import '../utils/useBreakpoint.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/createComponent.js';
import '../utils/createElement.js';
import '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/spacing.js';
import '../theme/palette.js';
import '../theme/modes.js';
import '../theme/lineHeights.js';
import '../theme/letterSpacings.js';
import '../theme/altitudes.js';
import '../theme/borders.js';
import '../theme/borderRadii.js';
import '../theme/breakpoints.js';
import '../theme/global.js';
import '../theme/fonts.js';
import '../theme/fontMetrics.js';
import '../theme/fontWeights.js';
import '../theme/fontSizes.js';
import '@fortawesome/free-solid-svg-icons/faInfoCircle';
import '@fortawesome/free-solid-svg-icons/faChevronDown';
import '@fortawesome/free-solid-svg-icons/faChevronLeft';
import '@fortawesome/free-solid-svg-icons/faChevronRight';
import '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import '@fortawesome/free-solid-svg-icons/faCheckCircle';
import '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import '@fortawesome/free-solid-svg-icons/faTimes';
import '@fortawesome/free-solid-svg-icons/faSearch';
import '@fortawesome/free-solid-svg-icons/faStar';
import '../theme/icons.js';
import '../theme/Container.js';
import '../theme/Heading.js';
import '../theme/Toast.js';
import buildTheme from '../theme/index.js';
import 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box } from '../Box/Box.js';
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
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
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
import '../Overlay/index.js';
import '../Drawer.styles.js';
import '../Drawer/Drawer.js';
import '../Drawer/DrawerDisclosure.js';
import '../Drawer/DrawerState.js';
import '../Drawer/index.js';
import '../Stack.styles.js';
import '../Stack/Stack.js';
import { PageProvider } from '../Page/PageContext.js';
import { Provider as Provider$1 } from 'reakit/Provider';
import '../Toast.styles.js';
import '../Toast/Toast.js';
import { ToastProvider } from '../Toast/ToastContext.js';
import '../Toast/ToastManager.js';
import '../Toast/index.js';
import { GlobalStyles } from './GlobalStyles.js';

Provider.defaultProps = {
  colorMode: 'default',
  platform: 'web'
};
function Provider(props) {
  var children = props.children,
      colorMode = props.colorMode,
      collapseBelow = props.collapseBelow,
      isSSR = props.isSSR,
      isStandalone = props.isStandalone,
      platform = props.platform,
      _theme = props.theme; ////////////////////////////////////////////////

  var _React$useState = useState(_theme),
      theme = _React$useState[0],
      setTheme = _React$useState[1];

  useEffect(function () {
    setTheme(_theme);
  }, [_theme]); ////////////////////////////////////////////////

  var derivedTheme = useMemo(function () {
    if (theme && isStandalone) {
      return theme;
    }

    return buildTheme(theme);
  }, [isStandalone, theme]); ////////////////////////////////////////////////

  var themeContextValue = useMemo(function () {
    return {
      isSSR: isSSR,
      theme: theme,
      setTheme: setTheme
    };
  }, [isSSR, theme, setTheme]); ////////////////////////////////////////////////

  if (platform === 'web') {
    return /*#__PURE__*/createElement(BumbagThemeContext.Provider, {
      value: themeContextValue
    }, /*#__PURE__*/createElement(ThemeProvider, {
      theme: derivedTheme
    }, /*#__PURE__*/createElement(ColorModeProvider, {
      isSSR: isSSR,
      mode: colorMode
    }, /*#__PURE__*/createElement(Provider$1, {
      unstable_prefix: "bb-id"
    }, /*#__PURE__*/createElement(ToastProvider, null, /*#__PURE__*/createElement(PageProvider, {
      collapseBelow: collapseBelow
    }, /*#__PURE__*/createElement(Fragment, null, process.env.NODE_ENV !== 'test' && /*#__PURE__*/createElement(GlobalStyles, null), process.env.NODE_ENV === 'test' ? children : /*#__PURE__*/createElement(Box, null, typeof children === 'function' ? children({
      theme: derivedTheme
    }) : children))))))));
  }

  return /*#__PURE__*/createElement(BumbagThemeContext.Provider, {
    value: themeContextValue
  }, /*#__PURE__*/createElement(ColorModeProvider, {
    isSSR: isSSR,
    mode: colorMode
  }, typeof children === 'function' ? children({
    theme: derivedTheme
  }) : children));
}

export { Provider };
