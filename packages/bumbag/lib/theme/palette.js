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
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('lodash/uniq');
require('reakit/Id');
var utils_palette = require('../utils/palette.js');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');

var defaultPalette = {
  background: 'white',
  black: '#0b0e13',
  text: '#161e2e',
  primary: '#574feb',
  secondary: '#7c3aed',
  info: '#1e67d5',
  success: '#0a7d33',
  danger: '#da1717',
  warning: '#f59e0b',
  blue: '#3b82f6',
  green: '#10b981',
  red: '#ef4444',
  orange: '#f59e0b',
  pink: '#ec4899',
  purple: '#7c3aed',
  indigo: '#574feb',
  gray: '#626f84',
  grayTint: '#edf2f7'
};
var defaultDarkPalette = {
  background: '#1a212d',
  black: '#0b0e13',
  default: '#27303f',
  defaultInverted: 'white',
  text: 'white',
  text100: '#b1bccd',
  text200: '#c1c9d7',
  text300: '#d0d7e1',
  text400: '#e0e4eb',
  primary: '#574feb',
  secondary: '#7c3aed',
  info: '#1e67d5',
  success: '#0a7d33',
  danger: '#da1717',
  warning: '#f59e0b',
  blue: '#3b82f6',
  green: '#10b981',
  red: '#ef4444',
  orange: '#f59e0b',
  pink: '#ec4899',
  purple: '#7c3aed',
  indigo: '#574feb',
  grayTint: '#23262b'
};
var getDefaultPalette = (function (overrides) {
  var _overrides$text;

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_palette.generateTextVariants((_overrides$text = overrides === null || overrides === void 0 ? void 0 : overrides.text) !== null && _overrides$text !== void 0 ? _overrides$text : defaultPalette.text)), {}, {
    background: defaultPalette.background,
    black: defaultPalette.black,
    black500: defaultPalette.black,
    black400: utils_colors.tint(0.05, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black300: utils_colors.tint(0.1, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black200: utils_colors.tint(0.15, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black100: utils_colors.tint(0.2, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    white: 'white',
    white500: 'white',
    white600: '#f7f7fa',
    white700: '#f2f2f5',
    white800: '#e6e6eb',
    white900: '#d9d9e1',
    default: '#fcfcfd',
    defaultInverted: '#212121'
  }, utils_palette.generateColorVariants({
    paletteKey: 'primary',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.primary || defaultPalette.primary
  })), utils_palette.generateColorVariants({
    paletteKey: 'secondary',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.secondary || defaultPalette.secondary
  })), utils_palette.generateColorVariants({
    paletteKey: 'info',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.info || defaultPalette.info
  })), utils_palette.generateColorVariants({
    paletteKey: 'success',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.success || defaultPalette.success
  })), utils_palette.generateColorVariants({
    paletteKey: 'danger',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.danger || defaultPalette.danger
  })), utils_palette.generateColorVariants({
    paletteKey: 'warning',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.warning || defaultPalette.warning,
    paletteOverrides: function paletteOverrides(_ref) {
      var color = _ref.color;
      return {
        warningTintInverted: utils_colors.shade(0.7, color)()
      };
    }
  })), utils_palette.generateColorVariants({
    paletteKey: 'blue',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.blue || defaultPalette.blue
  })), utils_palette.generateColorVariants({
    paletteKey: 'red',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.red || defaultPalette.red
  })), utils_palette.generateColorVariants({
    paletteKey: 'orange',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.orange || defaultPalette.orange
  })), utils_palette.generateColorVariants({
    paletteKey: 'pink',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.pink || defaultPalette.pink
  })), utils_palette.generateColorVariants({
    paletteKey: 'purple',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.purple || defaultPalette.purple
  })), utils_palette.generateColorVariants({
    paletteKey: 'green',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.green || defaultPalette.green
  })), utils_palette.generateColorVariants({
    paletteKey: 'indigo',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.indigo || defaultPalette.indigo
  })), utils_palette.generateColorVariants({
    paletteKey: 'gray',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.gray || defaultPalette.gray,
    paletteOverrides: function paletteOverrides(_ref2) {
      var color = _ref2.color;
      return {
        gray700: utils_colors.shade(0.2, color)(),
        gray800: utils_colors.shade(0.3, color)(),
        gray900: utils_colors.shade(0.4, color)()
      };
    }
  })), utils_palette.generateColorVariants({
    paletteKey: 'grayTint',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.grayTint || defaultPalette.grayTint,
    paletteOverrides: function paletteOverrides(_ref3) {
      var color = _ref3.color;
      return {
        grayTint600: utils_colors.shade(0.05, color)(),
        grayTint700: utils_colors.shade(0.1, color)(),
        grayTint800: utils_colors.shade(0.2, color)(),
        grayTint900: utils_colors.shade(0.3, color)()
      };
    }
  })), {}, {
    modes: {
      dark: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, defaultDarkPalette), utils_palette.generateColorVariants({
        paletteKey: 'primary',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.primary || defaultDarkPalette.primary
      })), utils_palette.generateColorVariants({
        paletteKey: 'secondary',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.secondary || defaultDarkPalette.secondary
      })), utils_palette.generateColorVariants({
        paletteKey: 'info',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.info || defaultDarkPalette.info
      })), utils_palette.generateColorVariants({
        paletteKey: 'success',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.success || defaultDarkPalette.success
      })), utils_palette.generateColorVariants({
        paletteKey: 'danger',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.danger || defaultDarkPalette.danger
      })), utils_palette.generateColorVariants({
        paletteKey: 'warning',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.warning || defaultDarkPalette.warning,
        paletteOverrides: function paletteOverrides(_ref4) {
          var color = _ref4.color;
          return {
            warningTintInverted: utils_colors.shade(0.7, color)()
          };
        }
      })), utils_palette.generateColorVariants({
        paletteKey: 'gray',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.gray || defaultPalette.gray
      })), utils_palette.generateColorVariants({
        paletteKey: 'grayTint',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.grayTint || defaultPalette.grayTint
      })), {}, {
        black: defaultPalette.black,
        black500: defaultPalette.black,
        black400: utils_colors.tint(0.25, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black300: utils_colors.tint(0.5, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black200: utils_colors.tint(0.75, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black100: utils_colors.tint(1, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        })
      })
    }
  }, overrides);
});

exports.default = getDefaultPalette;
