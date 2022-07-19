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
import { s as shade, t as tint } from '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import 'reakit/Id';
import { generateColorVariants, generateTextVariants } from '../utils/palette.js';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';

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

  return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, generateTextVariants((_overrides$text = overrides === null || overrides === void 0 ? void 0 : overrides.text) !== null && _overrides$text !== void 0 ? _overrides$text : defaultPalette.text)), {}, {
    background: defaultPalette.background,
    black: defaultPalette.black,
    black500: defaultPalette.black,
    black400: tint(0.05, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black300: tint(0.1, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black200: tint(0.15, defaultPalette.black)({
      referenceColor: overrides.background || defaultPalette.background
    }),
    black100: tint(0.2, defaultPalette.black)({
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
  }, generateColorVariants({
    paletteKey: 'primary',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.primary || defaultPalette.primary
  })), generateColorVariants({
    paletteKey: 'secondary',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.secondary || defaultPalette.secondary
  })), generateColorVariants({
    paletteKey: 'info',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.info || defaultPalette.info
  })), generateColorVariants({
    paletteKey: 'success',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.success || defaultPalette.success
  })), generateColorVariants({
    paletteKey: 'danger',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.danger || defaultPalette.danger
  })), generateColorVariants({
    paletteKey: 'warning',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.warning || defaultPalette.warning,
    paletteOverrides: function paletteOverrides(_ref) {
      var color = _ref.color;
      return {
        warningTintInverted: shade(0.7, color)()
      };
    }
  })), generateColorVariants({
    paletteKey: 'blue',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.blue || defaultPalette.blue
  })), generateColorVariants({
    paletteKey: 'red',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.red || defaultPalette.red
  })), generateColorVariants({
    paletteKey: 'orange',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.orange || defaultPalette.orange
  })), generateColorVariants({
    paletteKey: 'pink',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.pink || defaultPalette.pink
  })), generateColorVariants({
    paletteKey: 'purple',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.purple || defaultPalette.purple
  })), generateColorVariants({
    paletteKey: 'green',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.green || defaultPalette.green
  })), generateColorVariants({
    paletteKey: 'indigo',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.indigo || defaultPalette.indigo
  })), generateColorVariants({
    paletteKey: 'gray',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.gray || defaultPalette.gray,
    paletteOverrides: function paletteOverrides(_ref2) {
      var color = _ref2.color;
      return {
        gray700: shade(0.2, color)(),
        gray800: shade(0.3, color)(),
        gray900: shade(0.4, color)()
      };
    }
  })), generateColorVariants({
    paletteKey: 'grayTint',
    tintColorReference: overrides.background || defaultPalette.background,
    color: overrides.grayTint || defaultPalette.grayTint,
    paletteOverrides: function paletteOverrides(_ref3) {
      var color = _ref3.color;
      return {
        grayTint600: shade(0.05, color)(),
        grayTint700: shade(0.1, color)(),
        grayTint800: shade(0.2, color)(),
        grayTint900: shade(0.3, color)()
      };
    }
  })), {}, {
    modes: {
      dark: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultDarkPalette), generateColorVariants({
        paletteKey: 'primary',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.primary || defaultDarkPalette.primary
      })), generateColorVariants({
        paletteKey: 'secondary',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.secondary || defaultDarkPalette.secondary
      })), generateColorVariants({
        paletteKey: 'info',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.info || defaultDarkPalette.info
      })), generateColorVariants({
        paletteKey: 'success',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.success || defaultDarkPalette.success
      })), generateColorVariants({
        paletteKey: 'danger',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.danger || defaultDarkPalette.danger
      })), generateColorVariants({
        paletteKey: 'warning',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.warning || defaultDarkPalette.warning,
        paletteOverrides: function paletteOverrides(_ref4) {
          var color = _ref4.color;
          return {
            warningTintInverted: shade(0.7, color)()
          };
        }
      })), generateColorVariants({
        paletteKey: 'gray',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.gray || defaultPalette.gray
      })), generateColorVariants({
        paletteKey: 'grayTint',
        colorMode: 'dark',
        shadeColorReference: overrides.background || defaultDarkPalette.background,
        color: overrides.grayTint || defaultPalette.grayTint
      })), {}, {
        black: defaultPalette.black,
        black500: defaultPalette.black,
        black400: tint(0.25, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black300: tint(0.5, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black200: tint(0.75, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        }),
        black100: tint(1, defaultPalette.black)({
          referenceColor: overrides.background || defaultDarkPalette.background
        })
      })
    }
  }, overrides);
});

export default getDefaultPalette;
