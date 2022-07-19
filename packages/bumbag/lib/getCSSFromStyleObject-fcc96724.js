'use strict';

require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('./utils/useTheme.js');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c170a0e0.js');
var ColorMode_utils = require('./ColorMode/utils.js');
var ColorMode_ColorModeContext = require('./ColorMode/ColorModeContext.js');
var utils_cssProps = require('./utils/cssProps.js');
var _kebabCase = require('lodash/kebabCase');
var tinycolor = require('tinycolor2');
var utils_isFunction = require('./utils/isFunction.js');
var utils_get = require('./utils/get.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _kebabCase__default = /*#__PURE__*/_interopDefaultLegacy(_kebabCase);
var tinycolor__default = /*#__PURE__*/_interopDefaultLegacy(tinycolor);

var BLACK = '#000000';
var WHITE = '#ffffff';
function darken(scale, color) {
  return function (_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        theme = _ref.theme;

    var themeColor = palette(color, null, {
      useCSSVariables: false
    })({
      theme: theme
    });
    return tinycolor__default['default'](themeColor).darken(scale * 100).toHexString();
  };
}
function lighten(scale, color) {
  return function (_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        theme = _ref2.theme;

    var themeColor = palette(color, null, {
      useCSSVariables: false
    })({
      theme: theme
    });
    return tinycolor__default['default'](themeColor).lighten(scale * 100).toHexString();
  };
}
function shade(scale, color) {
  return function (_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$referenceColor = _ref3.referenceColor,
        referenceColor = _ref3$referenceColor === void 0 ? BLACK : _ref3$referenceColor,
        theme = _ref3.theme;

    var themeColor = palette(color, null, {
      useCSSVariables: false
    })({
      theme: theme
    });
    if (themeColor === 'transparent') return themeColor;
    return tinycolor__default['default'].mix(themeColor, referenceColor, scale * 100).toHexString();
  };
}
function tint(scale, color) {
  return function (_temp4) {
    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$referenceColor = _ref4.referenceColor,
        referenceColor = _ref4$referenceColor === void 0 ? WHITE : _ref4$referenceColor,
        theme = _ref4.theme;

    var themeColor = palette(color, null, {
      useCSSVariables: false
    })({
      theme: theme
    });
    if (themeColor === 'transparent') return themeColor;
    return tinycolor__default['default'].mix(themeColor, referenceColor, scale * 100).toHexString();
  };
}
function readableColor(color) {
  return function (_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        theme = _ref5.theme;

    var themeColor = palette(color, null, {
      useCSSVariables: false
    })({
      theme: theme
    });
    var isReadable = tinycolor__default['default'].isReadable(BLACK, themeColor);

    if (!isReadable) {
      return WHITE;
    }

    return BLACK;
  };
}
function isColor(color) {
  var s = new Option().style;
  s.color = color;
  return s.color === color;
}
function isRGB(string) {
  return /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(string);
}
function isRGBA(string) {
  return /^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/.test(string);
}
function isHex(string) {
  return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi.test(string);
}
function isHSL(string) {
  return /^hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)$/.test(string);
}
function isHSLA(string) {
  return /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/.test(string);
}
function isRGBOrHSLOrHex(string) {
  return isRGB(string) || isRGBA(string) || isHSL(string) || isHSLA(string) || isHex(string);
}

var parseInt16 = function parseInt16(value) {
  return parseInt(value, 16);
};

var hexToRgb = function hexToRgb(h) {
  var hexNoHash = h.charAt(0) === '#' ? h.substring(1, 7) : h;
  var _r$g$b = {
    r: parseInt16(hexNoHash.substring(0, 2)),
    g: parseInt16(hexNoHash.substring(2, 4)),
    b: parseInt16(hexNoHash.substring(4, 6))
  },
      r = _r$g$b.r,
      g = _r$g$b.g,
      b = _r$g$b.b;
  return "rgb(" + r + "," + g + "," + b + ")";
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function theme(themeKey, path, defaultValue) {
  return function (props) {
    var colorMode = props.colorMode,
        variant = props.variant;
    var selector = "" + themeKey + (path ? "." + path : '');
    var variantSelector = themeKey + ".variants." + variant + "." + path;
    var colorModeSelector = themeKey + ".modes." + colorMode + "." + path;
    var defaultTheme = utils_get.get(props, "theme." + selector) || defaultValue;
    var variantTheme = utils_get.get(props, "theme." + variantSelector);
    var colorModeTheme = utils_get.get(props, "theme." + colorModeSelector);
    var defaultThemeOverrides;
    var variantThemeOverrides;
    var colorModeThemeOverrides;

    if (props.overrides) {
      defaultThemeOverrides = utils_get.get(props, "overrides." + selector);
      variantThemeOverrides = utils_get.get(props, "overrides." + variantSelector);
      colorModeThemeOverrides = utils_get.get(props, "overrides." + colorModeSelector);
    }

    if (path && path.includes && path.includes('styles')) {
      var defaultThemeValue = utils_isFunction.isFunction(defaultTheme) ? defaultTheme(props) : defaultTheme;
      var defaultThemeOverridesValue = utils_isFunction.isFunction(defaultThemeOverrides) ? defaultThemeOverrides(props) : defaultThemeOverrides;
      var variantThemeValue = utils_isFunction.isFunction(variantTheme) ? variantTheme(props) : variantTheme;
      var variantThemeOverridesValue = utils_isFunction.isFunction(variantThemeOverrides) ? variantThemeOverrides(props) : variantThemeOverrides;
      var colorModeThemeValue = utils_isFunction.isFunction(colorModeTheme) ? colorModeTheme(props) : colorModeTheme;
      var colorModeThemeOverridesValue = utils_isFunction.isFunction(colorModeThemeOverrides) ? colorModeThemeOverrides(props) : colorModeThemeOverrides;

      var styles = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, defaultThemeValue), defaultThemeOverridesValue), variantThemeValue), variantThemeOverridesValue), colorModeThemeValue), colorModeThemeOverridesValue);

      if (!styles.styles) {
        styles = getCSSFromStyleObject(styles, props.theme, colorMode);
      }

      return styles;
    }

    var theme = colorModeThemeOverrides || colorModeTheme || variantThemeOverrides || variantTheme || defaultThemeOverrides || defaultTheme;
    return utils_isFunction.isFunction(theme) ? theme(props) : theme;
  };
} /////////////////////////////////////////////////////////////////////////////////

function altitude(selector, defaultValue) {
  return function (props) {
    var altitude = theme('altitudes', selector || props.altitude, defaultValue)(props);
    return altitude;
  };
}
function useAltitude(selector, defaultValue) {
  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  return altitude(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function border(selector, defaultValue) {
  return function (props) {
    var border = theme('borders', selector || props.border, defaultValue)(props);
    return border;
  };
}
function useBorder(selector, defaultValue) {
  var _useTheme2 = utils_useTheme.useTheme(),
      theme = _useTheme2.theme;

  return border(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function borderRadius(selector, defaultValue) {
  return function (props) {
    var borderRadius = theme('borderRadii', selector || props.borderRadius, defaultValue)(props);
    return borderRadius;
  };
}
function useBorderRadius(selector, defaultValue) {
  var _useTheme3 = utils_useTheme.useTheme(),
      theme = _useTheme3.theme;

  return borderRadius(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function font(selector, defaultValue) {
  return function (props) {
    var color = theme('fonts', selector || props.font, defaultValue)(props);
    return color;
  };
}
function useFont(selector, defaultValue) {
  var _useTheme4 = utils_useTheme.useTheme(),
      theme = _useTheme4.theme;

  return font(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function fontMetric(selector) {
  return function (props) {
    var fontMetrics = theme('fontMetrics', selector || props.fontMetrics)(props);
    return fontMetrics;
  };
}
function useFontMetric(selector) {
  var _useTheme5 = utils_useTheme.useTheme(),
      theme = _useTheme5.theme;

  return fontMetric(selector)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function fontSize(selector, defaultValue) {
  return function (props) {
    var color = theme('fontSizes', selector || props.fontSize, defaultValue)(props);
    return color;
  };
}
function useFontSize(selector, defaultValue) {
  var _useTheme6 = utils_useTheme.useTheme(),
      theme = _useTheme6.theme;

  return fontSize(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function fontWeight(selector, defaultValue) {
  return function (props) {
    var color = theme('fontWeights', selector || props.fontWeight, defaultValue)(props);
    return color;
  };
}
function useFontWeight(selector, defaultValue) {
  var _useTheme7 = utils_useTheme.useTheme(),
      theme = _useTheme7.theme;

  return fontWeight(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function lineHeight(selector, defaultValue) {
  return function (props) {
    var lineHeights = theme('lineHeights', selector || props.lineHeight, defaultValue)(props);
    return lineHeights;
  };
}
function useLineHeight(selector, defaultValue) {
  var _useTheme8 = utils_useTheme.useTheme(),
      theme = _useTheme8.theme;

  return lineHeight(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function letterSpacing(selector, defaultValue) {
  return function (props) {
    var letterSpacing = theme('letterSpacings', selector || props.letterSpacing, defaultValue)(props);
    return letterSpacing;
  };
}
function useLetterSpacing(selector, defaultValue) {
  var _useTheme9 = utils_useTheme.useTheme(),
      theme = _useTheme9.theme;

  return letterSpacing(selector, defaultValue)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function palette(_selector, modes, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$useCSSVariables = _ref.useCSSVariables,
      useCSSVariables = _ref$useCSSVariables === void 0 ? true : _ref$useCSSVariables;

  return function (props) {
    var _props$theme;

    var selector = modes && modes[props.colorMode] ? modes[props.colorMode] : _selector;
    var fallback = tinycolor__default['default'](selector).toHexString();

    if (selector === 'transparent') {
      fallback = 'transparent';
    }

    if (isRGBOrHSLOrHex(selector)) {
      return selector;
    }

    if (((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.useCSSVariables) && useCSSVariables) {
      return ColorMode_utils.getColorFromCSSVariable(selector, fallback);
    }

    var color = theme('palette', selector || props.palette)(props);
    if (!color) return fallback;
    return color;
  };
}
function usePalette(selector, modes) {
  var _useTheme10 = utils_useTheme.useTheme(),
      theme = _useTheme10.theme;

  var _useColorMode = ColorMode_ColorModeContext.useColorMode(),
      colorMode = _useColorMode.colorMode;

  return palette(selector, modes)({
    colorMode: colorMode,
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function space(_scalar, _scaleType) {
  if (_scaleType === void 0) {
    _scaleType = 'minor';
  }

  return function (props) {
    var scalar = _scalar;
    var scaleType = _scaleType;
    if (!scalar) return 0;

    if (typeof scalar === 'string') {
      var isNegative = false;

      if (scalar[0] === '-') {
        scalar = scalar.replace('-', '');
        isNegative = true;
      }

      if (scalar.includes('minor') || scalar.includes('major')) {
        // @ts-ignore
        var _scalar$split = scalar.split('-');

        scaleType = _scalar$split[0];
        scalar = _scalar$split[1];
        scalar = parseFloat(scalar);
        scalar = isNegative ? -scalar : scalar;
        if (isNaN(scalar)) return 0;
      } else {
        var value = theme('spacing', scalar)(props);
        return isNegative ? -value : value;
      }
    }

    if (typeof scalar === 'number') {
      var _props$theme2, _props$theme2$spacing, _props$theme3, _props$theme3$global;

      var unitSize = props === null || props === void 0 ? void 0 : (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$spacing = _props$theme2.spacing) === null || _props$theme2$spacing === void 0 ? void 0 : _props$theme2$spacing[scaleType + "Unit"];

      var _fontSize = props === null || props === void 0 ? void 0 : (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : (_props$theme3$global = _props$theme3.global) === null || _props$theme3$global === void 0 ? void 0 : _props$theme3$global.fontSize;

      var _value = scalar * (unitSize / _fontSize);

      return _value;
    }
  };
}
function useSpace(scalar, scaleType) {
  var _useTheme11 = utils_useTheme.useTheme(),
      theme = _useTheme11.theme;

  return space(scalar, scaleType)({
    theme: theme
  });
} /////////////////////////////////////////////////////////////////////////////////

function breakpoint(breakpoint, cssStyle, config) {
  var _ref2 = config || {},
      _ref2$else = _ref2.else,
      elseStyle = _ref2$else === void 0 ? '' : _ref2$else,
      _ref2$show = _ref2.show,
      show = _ref2$show === void 0 ? false : _ref2$show;

  return function (props) {
    var _props$theme4, _props$theme4$breakpo, _props$theme5, _props$theme5$breakpo, _props$theme6, _props$theme6$breakpo, _props$theme7, _props$theme7$breakpo, _props$theme8, _props$theme8$breakpo;

    if (!breakpoint) return react.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", ";\n      "])), elseStyle);
    var key;
    var elseKey;

    if (!show && breakpoint.includes('max')) {
      key = 'max-width';
      elseKey = 'min-width';
    } else if (!show && breakpoint.includes('min')) {
      key = 'min-width';
      elseKey = 'max-width';
    } else if (show && breakpoint.includes('max')) {
      key = 'min-width';
      elseKey = 'max-width';
    } else if (show && breakpoint.includes('min')) {
      key = 'max-width';
      elseKey = 'min-width';
    }

    var strippedBreakpoint = breakpoint;
    strippedBreakpoint = strippedBreakpoint.replace('max-', '');
    strippedBreakpoint = strippedBreakpoint.replace('min-', '');
    var minBreakpointValues = {
      mobile: 0,
      tablet: props === null || props === void 0 ? void 0 : (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : (_props$theme4$breakpo = _props$theme4.breakpoints) === null || _props$theme4$breakpo === void 0 ? void 0 : _props$theme4$breakpo.mobile,
      desktop: props === null || props === void 0 ? void 0 : (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : (_props$theme5$breakpo = _props$theme5.breakpoints) === null || _props$theme5$breakpo === void 0 ? void 0 : _props$theme5$breakpo.tablet,
      widescreen: props === null || props === void 0 ? void 0 : (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : (_props$theme6$breakpo = _props$theme6.breakpoints) === null || _props$theme6$breakpo === void 0 ? void 0 : _props$theme6$breakpo.desktop,
      fullHD: props === null || props === void 0 ? void 0 : (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : (_props$theme7$breakpo = _props$theme7.breakpoints) === null || _props$theme7$breakpo === void 0 ? void 0 : _props$theme7$breakpo.widescreen
    };
    var breakpointValue = props === null || props === void 0 ? void 0 : (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : (_props$theme8$breakpo = _props$theme8.breakpoints) === null || _props$theme8$breakpo === void 0 ? void 0 : _props$theme8$breakpo[strippedBreakpoint];

    if (!show && breakpoint.includes('max')) {
      breakpointValue = breakpointValue - 1;
    }

    if (!show && breakpoint.includes('min')) {
      breakpointValue = minBreakpointValues[strippedBreakpoint];
    }

    if (show && breakpoint.includes('min')) {
      breakpointValue = minBreakpointValues[strippedBreakpoint] - 1;
    }

    if (!breakpoint.includes('min-') && !breakpoint.includes('max-')) {
      if (show) {
        return react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          @media screen and (max-width: ", "px) {\n            ", ";\n          }\n          @media screen and (min-width: ", "px) {\n            ", ";\n          }\n\n          @media screen and (min-width: ", "px) and (max-width: ", "px) {\n            ", ";\n          }\n        "])), minBreakpointValues[breakpoint], cssStyle, breakpointValue + 1, cssStyle, minBreakpointValues[breakpoint] + 1, breakpointValue, elseStyle);
      }

      return react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        @media screen and (min-width: ", "px) and (max-width: ", "px) {\n          ", ";\n        }\n\n        @media screen and (max-width: ", "px) {\n          ", ";\n        }\n        @media screen and (min-width: ", "px) {\n          ", ";\n        }\n      "])), minBreakpointValues[breakpoint], breakpointValue - 1, cssStyle, minBreakpointValues[breakpoint] - 1, elseStyle, breakpointValue, elseStyle);
    }

    return react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      @media screen and (", ": ", "px) {\n        ", ";\n      }\n      @media screen and (", ": ", "px) {\n        ", ";\n      }\n    "])), key, breakpointValue, cssStyle, elseKey, breakpointValue + (elseKey.includes('max') ? -1 : 1), elseStyle);
  };
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var altitudeAttributes = ['altitude'];
var alignAttributes = ['alignX', 'alignY'];
var borderAttributes = ['border', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom'];
var borderRadiusAttributes = ['borderRadius', 'borderLeftRadius', 'borderRightRadius', 'borderTopRadius', 'borderBottomRadius', 'borderTopLeftRadius', 'borderBottomLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius'];
var colorAttributes = ['color', 'backgroundColor', 'borderBlockEndColor', 'borderBlockStartColor', 'borderBottomColor', 'borderColor', 'borderInlineEndColor', 'borderInlineStartColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderBottomColor', 'caretColor', 'columnRuleColor', 'outlineColor', 'textDecorationColor', 'textEmphasisColor'];
var spaceAttributes = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'marginX', 'marginY', 'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'paddingX', 'paddingY', 'top', 'left', 'bottom', 'right', 'grid-gap', 'grid-column-gap', 'grid-row-gap', 'height', 'width', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight'];
var fontAttributes = ['font', 'fontFamily'];
var fontSizeAttributes = ['fontSize'];
var fontWeightAttributes = ['fontWeight'];
var lineHeightAttributes = ['lineHeight'];
var letterSpacingAttributes = ['letterSpacing'];
var attributeMaps = {
  font: ['fontFamily'],
  marginY: ['marginTop', 'marginBottom'],
  paddingY: ['paddingTop', 'paddingBottom'],
  marginX: ['marginLeft', 'marginRight'],
  paddingX: ['paddingLeft', 'paddingRight'],
  borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
  borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius']
};

function getAltitudeStyles(_ref) {
  var theme = _ref.theme,
      value = _ref.value;
  var altitudeStyle = altitude(value)({
    theme: theme
  });

  if (altitudeStyle) {
    return altitudeStyle;
  }

  return value;
}

function getBorderValue(_ref2) {
  var theme = _ref2.theme,
      value = _ref2.value;
  var borderValue = border(value)({
    theme: theme
  });

  if (borderValue) {
    var borderColor = palette(borderValue.color)({
      theme: theme
    });

    if (borderValue) {
      return borderValue.width + " " + borderValue.style + " " + borderColor;
    }
  }

  return value;
}

function getBorderRadiusValue(_ref3) {
  var theme = _ref3.theme,
      value = _ref3.value;
  var borderRadiusValue = borderRadius(value)({
    theme: theme
  });

  if (borderRadiusValue) {
    return borderRadiusValue;
  }

  return value;
}

function getColorValue(_ref4) {
  var colorMode = _ref4.colorMode,
      theme = _ref4.theme,
      value = _ref4.value;
  var color = palette(value)({
    colorMode: colorMode,
    theme: theme
  });

  if (color) {
    return color;
  }

  return value;
}

function getSpaceValue(_ref5) {
  var theme = _ref5.theme,
      value = _ref5.value;
  var spacing = space(value)({
    theme: theme
  });

  if (spacing) {
    return spacing + "rem";
  }

  return value;
}

function getFontValue(_ref6) {
  var theme = _ref6.theme,
      value = _ref6.value;
  var fontValue = font(value)({
    theme: theme
  });

  if (fontValue) {
    return fontValue;
  }

  return value;
}

function getFontSizeValue(_ref7) {
  var theme = _ref7.theme,
      value = _ref7.value;
  var size = fontSize(value)({
    theme: theme
  });

  if (size) {
    return size + "rem";
  }

  return value;
}

function getFontWeightValue(_ref8) {
  var theme = _ref8.theme,
      value = _ref8.value;
  var weight = fontWeight(value)({
    theme: theme
  });

  if (weight) {
    return weight;
  }

  return value;
}

function getLineHeightValue(_ref9) {
  var theme = _ref9.theme,
      value = _ref9.value;
  var height = lineHeight(value)({
    theme: theme
  });

  if (height) {
    return height;
  }

  return value;
}

function getLetterSpacingValue(_ref10) {
  var theme = _ref10.theme,
      value = _ref10.value;
  var spacing = letterSpacing(value)({
    theme: theme
  });

  if (spacing) {
    return spacing;
  }

  return value;
}

function getCSSFromStyleObject(props, theme, colorMode, _temp) {
  var _ref11 = _temp === void 0 ? {} : _temp,
      _ref11$fromProps = _ref11.fromProps,
      fromProps = _ref11$fromProps === void 0 ? false : _ref11$fromProps,
      _ref11$disableCSSProp = _ref11.disableCSSProps,
      disableCSSProps = _ref11$disableCSSProp === void 0 ? [] : _ref11$disableCSSProp;

  var style = _rollupPluginBabelHelpers._objectSpread2({}, props);

  if (style) {
    var styleEntries = Object.entries(style);
    styleEntries = styleEntries.reduce(function (prevStyle, _ref12) {
      var attribute = _ref12[0],
          value = _ref12[1];
      var entries = [[attribute, value]];

      if (attributeMaps[attribute]) {
        entries = attributeMaps[attribute].map(function (attribute) {
          return [attribute, value];
        });
      }

      return [].concat(prevStyle, entries);
    }, []);
    style = styleEntries.reduce(function (prevStyle, _ref13) {
      var attribute = _ref13[0],
          value = _ref13[1];
      var newValue = value;

      if (attribute.includes(':')) {
        return react.css(_templateObject$1 || (_templateObject$1 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          ", " {\n            ", ";\n          }\n        "])), prevStyle, attribute, getCSSFromStyleObject(value, theme, colorMode, {
          fromProps: fromProps
        }));
      }

      if (typeof newValue === 'string' || typeof newValue === 'number') {
        newValue = {
          default: value
        };
      }

      if (attribute.includes('_')) {
        var pseudoSelector = utils_cssProps.cssProps[attribute];
        return react.css(_templateObject2$1 || (_templateObject2$1 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          ", " {\n            ", ";\n          }\n        "])), prevStyle, pseudoSelector, getCSSFromStyleObject(value, theme, colorMode, {
          fromProps: fromProps
        }));
      }

      var newStyle = Object.entries(newValue || {}).reduce(function (prevStyle, _ref14) {
        var bp = _ref14[0],
            value = _ref14[1];
        var newStyle;
        var newValue = value;

        if (alignAttributes.includes(attribute)) {
          newValue = null;
        }

        if (altitudeAttributes.includes(attribute)) {
          newStyle = getAltitudeStyles({
            theme: theme,
            value: value
          });
          newValue = undefined;
        }

        if (borderAttributes.includes(attribute)) {
          newValue = getBorderValue({
            theme: theme,
            value: value
          });
        }

        if (borderRadiusAttributes.includes(attribute)) {
          newValue = getBorderRadiusValue({
            theme: theme,
            value: value
          });
        }

        if (colorAttributes.includes(attribute)) {
          newValue = getColorValue({
            colorMode: colorMode,
            theme: theme,
            value: value
          });
        }

        if (spaceAttributes.includes(attribute)) {
          newValue = getSpaceValue({
            theme: theme,
            value: value
          });
        }

        if (fontAttributes.includes(attribute)) {
          newValue = getFontValue({
            theme: theme,
            value: value
          });
        }

        if (fontSizeAttributes.includes(attribute)) {
          if (disableCSSProps.includes('fontSize')) {
            return {};
          }

          newValue = getFontSizeValue({
            theme: theme,
            value: value
          });
        }

        if (fontWeightAttributes.includes(attribute)) {
          newValue = getFontWeightValue({
            theme: theme,
            value: value
          });
        }

        if (lineHeightAttributes.includes(attribute)) {
          newValue = getLineHeightValue({
            theme: theme,
            value: value
          });
        }

        if (letterSpacingAttributes.includes(attribute)) {
          newValue = getLetterSpacingValue({
            theme: theme,
            value: value
          });
        }

        if (bp === 'default') {
          // @ts-ignore
          return react.css(_templateObject3$1 || (_templateObject3$1 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            ", "\n            ", ";\n            ", "\n          "])), prevStyle, newStyle, newValue ? react.css(_templateObject4$1 || (_templateObject4$1 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                  ", ": ", " ", ";\n                "])), _kebabCase__default['default'](attribute), newValue, fromProps ? '!important' : '') : '');
        }

        return react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n          ", ";\n          ", ";\n        "])), prevStyle, newStyle, breakpoint(bp, // @ts-ignore
        react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n              ", "\n            "])), newValue ? react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n                    ", ": ", " ", ";\n                  "])), _kebabCase__default['default'](attribute), newValue, fromProps ? '!important' : '') : ''))({
          theme: theme
        }));
      }, react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))));
      return react.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        ", " ", ";\n      "])), prevStyle, newStyle);
    }, react.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose([""]))));
  }

  return style;
}

exports.altitude = altitude;
exports.border = border;
exports.borderRadius = borderRadius;
exports.breakpoint = breakpoint;
exports.darken = darken;
exports.font = font;
exports.fontMetric = fontMetric;
exports.fontSize = fontSize;
exports.fontWeight = fontWeight;
exports.getCSSFromStyleObject = getCSSFromStyleObject;
exports.hexToRgb = hexToRgb;
exports.isColor = isColor;
exports.isHSL = isHSL;
exports.isHSLA = isHSLA;
exports.isHex = isHex;
exports.isRGB = isRGB;
exports.isRGBA = isRGBA;
exports.isRGBOrHSLOrHex = isRGBOrHSLOrHex;
exports.letterSpacing = letterSpacing;
exports.lighten = lighten;
exports.lineHeight = lineHeight;
exports.palette = palette;
exports.readableColor = readableColor;
exports.shade = shade;
exports.space = space;
exports.theme = theme;
exports.tint = tint;
exports.useAltitude = useAltitude;
exports.useBorder = useBorder;
exports.useBorderRadius = useBorderRadius;
exports.useFont = useFont;
exports.useFontMetric = useFontMetric;
exports.useFontSize = useFontSize;
exports.useFontWeight = useFontWeight;
exports.useLetterSpacing = useLetterSpacing;
exports.useLineHeight = useLineHeight;
exports.usePalette = usePalette;
exports.useSpace = useSpace;
