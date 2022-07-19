'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../utils/debounceAnimationFrame.js');
require('../utils/useViewportHeight.js');
var Provider_ThemeContext = require('./ThemeContext.js');
require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('../utils/omit.js');
require('../ColorMode/utils.js');
var ColorMode_ColorModeContext = require('../ColorMode/ColorModeContext.js');
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
require('../utils/useClassName.js');
require('../utils/getMediaQueryList.js');
require('../utils/useBreakpoint.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/createComponent.js');
require('../utils/createElement.js');
require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/spacing.js');
require('../theme/palette.js');
require('../theme/modes.js');
require('../theme/lineHeights.js');
require('../theme/letterSpacings.js');
require('../theme/altitudes.js');
require('../theme/borders.js');
require('../theme/borderRadii.js');
require('../theme/breakpoints.js');
require('../theme/global.js');
require('../theme/fonts.js');
require('../theme/fontMetrics.js');
require('../theme/fontWeights.js');
require('../theme/fontSizes.js');
require('@fortawesome/free-solid-svg-icons/faInfoCircle');
require('@fortawesome/free-solid-svg-icons/faChevronDown');
require('@fortawesome/free-solid-svg-icons/faChevronLeft');
require('@fortawesome/free-solid-svg-icons/faChevronRight');
require('@fortawesome/free-solid-svg-icons/faExclamationTriangle');
require('@fortawesome/free-solid-svg-icons/faCheckCircle');
require('@fortawesome/free-solid-svg-icons/faExclamationCircle');
require('@fortawesome/free-solid-svg-icons/faQuestionCircle');
require('@fortawesome/free-solid-svg-icons/faTimes');
require('@fortawesome/free-solid-svg-icons/faSearch');
require('@fortawesome/free-solid-svg-icons/faStar');
require('../theme/icons.js');
require('../theme/Container.js');
require('../theme/Heading.js');
require('../theme/Toast.js');
var theme_index = require('../theme/index.js');
require('reakit');
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
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
require('../Disclosure/index.js');
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
require('../Overlay/index.js');
require('../Drawer.styles-077ca625.js');
require('../Drawer/Drawer.js');
require('../Drawer/DrawerDisclosure.js');
require('../Drawer/DrawerState.js');
require('../Drawer/index.js');
require('../Stack.styles-ab6c74fd.js');
require('../Stack/Stack.js');
var Page_PageContext = require('../Page/PageContext.js');
var Provider$1 = require('reakit/Provider');
require('../Toast.styles-143b4a90.js');
require('../Toast/Toast.js');
var Toast_ToastContext = require('../Toast/ToastContext.js');
require('../Toast/ToastManager.js');
require('../Toast/index.js');
var Provider_GlobalStyles = require('./GlobalStyles.js');

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

  var _React$useState = React.useState(_theme),
      theme = _React$useState[0],
      setTheme = _React$useState[1];

  React.useEffect(function () {
    setTheme(_theme);
  }, [_theme]); ////////////////////////////////////////////////

  var derivedTheme = React.useMemo(function () {
    if (theme && isStandalone) {
      return theme;
    }

    return theme_index['default'](theme);
  }, [isStandalone, theme]); ////////////////////////////////////////////////

  var themeContextValue = React.useMemo(function () {
    return {
      isSSR: isSSR,
      theme: theme,
      setTheme: setTheme
    };
  }, [isSSR, theme, setTheme]); ////////////////////////////////////////////////

  if (platform === 'web') {
    return /*#__PURE__*/React.createElement(Provider_ThemeContext.BumbagThemeContext.Provider, {
      value: themeContextValue
    }, /*#__PURE__*/React.createElement(react.ThemeProvider, {
      theme: derivedTheme
    }, /*#__PURE__*/React.createElement(ColorMode_ColorModeContext.ColorModeProvider, {
      isSSR: isSSR,
      mode: colorMode
    }, /*#__PURE__*/React.createElement(Provider$1.Provider, {
      unstable_prefix: "bb-id"
    }, /*#__PURE__*/React.createElement(Toast_ToastContext.ToastProvider, null, /*#__PURE__*/React.createElement(Page_PageContext.PageProvider, {
      collapseBelow: collapseBelow
    }, /*#__PURE__*/React.createElement(React.Fragment, null, process.env.NODE_ENV !== 'test' && /*#__PURE__*/React.createElement(Provider_GlobalStyles.GlobalStyles, null), process.env.NODE_ENV === 'test' ? children : /*#__PURE__*/React.createElement(Box_Box.Box, null, typeof children === 'function' ? children({
      theme: derivedTheme
    }) : children))))))));
  }

  return /*#__PURE__*/React.createElement(Provider_ThemeContext.BumbagThemeContext.Provider, {
    value: themeContextValue
  }, /*#__PURE__*/React.createElement(ColorMode_ColorModeContext.ColorModeProvider, {
    isSSR: isSSR,
    mode: colorMode
  }, typeof children === 'function' ? children({
    theme: derivedTheme
  }) : children));
}

exports.Provider = Provider;
