'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
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
require('../utils/parseIcons.js');
require('lodash/uniq');
require('reakit/Id');
require('../utils/palette.js');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');
var theme_spacing = require('./spacing.js');
var theme_palette = require('./palette.js');
var theme_modes = require('./modes.js');
var theme_lineHeights = require('./lineHeights.js');
var theme_letterSpacings = require('./letterSpacings.js');
var theme_altitudes = require('./altitudes.js');
var theme_borders = require('./borders.js');
var theme_borderRadii = require('./borderRadii.js');
var theme_breakpoints = require('./breakpoints.js');
var theme_global = require('./global.js');
var theme_fonts = require('./fonts.js');
var theme_fontMetrics = require('./fontMetrics.js');
var theme_fontWeights = require('./fontWeights.js');
var theme_fontSizes = require('./fontSizes.js');
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
var theme_icons = require('./icons.js');
var theme_Container = require('./Container.js');
var theme_Heading = require('./Heading.js');
var theme_Toast = require('./Toast.js');

var buildTheme = (function (overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    name: 'default',
    useCSSVariables: true,
    cssVariablesSelector: 'html'
  }, overrides), {}, {
    altitudes: theme_altitudes['default'](overrides.altitudes || {}),
    borders: theme_borders['default'](overrides.borders || {}),
    borderRadii: theme_borderRadii['default'](overrides.borderRadii || {}),
    breakpoints: theme_breakpoints['default'](overrides.breakpoints || {}),
    fonts: theme_fonts['default'](overrides.fonts || {}),
    fontMetrics: theme_fontMetrics['default'](overrides.fontMetrics || {}),
    fontSizes: theme_fontSizes['default'](overrides.fontSizes || {}),
    fontWeights: theme_fontWeights['default'](overrides.fontWeights || {}),
    global: theme_global['default'](overrides.global || {}),
    icons: theme_icons['default'](overrides.icons || {}),
    lineHeights: theme_lineHeights['default'](overrides.lineHeights || {}),
    letterSpacings: theme_letterSpacings['default'](overrides.letterSpacings || {}),
    modes: theme_modes['default'](overrides.modes || {}),
    spacing: theme_spacing['default'](overrides.spacing || {}),
    palette: theme_palette['default'](overrides.palette || {}),
    Container: theme_Container['default'](overrides.Container || {}),
    Heading: theme_Heading['default'](overrides.Heading || {}),
    Toast: theme_Toast['default'](overrides.Toast || {})
  });
});

exports.default = buildTheme;
