import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/parseIcons.js';
import 'lodash/uniq';
import 'reakit/Id';
import '../utils/palette.js';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';
import spacing from './spacing.js';
import getDefaultPalette from './palette.js';
import modes from './modes.js';
import lineHeights from './lineHeights.js';
import letterSpacings from './letterSpacings.js';
import altitudes from './altitudes.js';
import borders from './borders.js';
import borderRadii from './borderRadii.js';
import breakpoints from './breakpoints.js';
import global from './global.js';
import fonts from './fonts.js';
import fontMetrics from './fontMetrics.js';
import fontWeights from './fontWeights.js';
import fontSizes from './fontSizes.js';
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
import icons from './icons.js';
import Container from './Container.js';
import Heading from './Heading.js';
import Toast from './Toast.js';

var buildTheme = (function (overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  return _objectSpread2(_objectSpread2({
    name: 'default',
    useCSSVariables: true,
    cssVariablesSelector: 'html'
  }, overrides), {}, {
    altitudes: altitudes(overrides.altitudes || {}),
    borders: borders(overrides.borders || {}),
    borderRadii: borderRadii(overrides.borderRadii || {}),
    breakpoints: breakpoints(overrides.breakpoints || {}),
    fonts: fonts(overrides.fonts || {}),
    fontMetrics: fontMetrics(overrides.fontMetrics || {}),
    fontSizes: fontSizes(overrides.fontSizes || {}),
    fontWeights: fontWeights(overrides.fontWeights || {}),
    global: global(overrides.global || {}),
    icons: icons(overrides.icons || {}),
    lineHeights: lineHeights(overrides.lineHeights || {}),
    letterSpacings: letterSpacings(overrides.letterSpacings || {}),
    modes: modes(overrides.modes || {}),
    spacing: spacing(overrides.spacing || {}),
    palette: getDefaultPalette(overrides.palette || {}),
    Container: Container(overrides.Container || {}),
    Heading: Heading(overrides.Heading || {}),
    Toast: Toast(overrides.Toast || {})
  });
});

export default buildTheme;
