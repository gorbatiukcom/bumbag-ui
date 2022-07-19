'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var fontMetrics = {
  SFPro: {
    capHeight: 1450,
    ascent: 1950,
    descent: -420,
    lineGap: 0,
    unitsPerEm: 2048
  },
  Roboto: {
    capHeight: 1456,
    ascent: 1900,
    descent: -500,
    lineGap: 0,
    unitsPerEm: 2048
  },
  SegoeUI: {
    capHeight: 1434,
    ascent: 2210,
    descent: -514,
    lineGap: 0,
    unitsPerEm: 2048
  }
};
var OSFonts = {
  windows: 'SegoeUI',
  apple: 'SFPro',
  android: 'Roboto'
};
function getFontMetricsFromUserAgent() {
  if (typeof window !== 'undefined') {
    var userAgent = window.navigator.userAgent;

    if (/iPhone|iPad|Mac/.test(userAgent)) {
      return fontMetrics[OSFonts.apple];
    } else if (/Windows/.test(userAgent)) {
      return fontMetrics[OSFonts.windows];
    } else if (/Android/.test(userAgent)) {
      return fontMetrics[OSFonts.android];
    }
  }

  return fontMetrics.SFPro;
}
var fontMetrics$1 = (function (overrides) {
  return _rollupPluginBabelHelpers._objectSpread2({
    default: getFontMetricsFromUserAgent(),
    heading: getFontMetricsFromUserAgent()
  }, overrides);
});

exports.OSFonts = OSFonts;
exports.default = fontMetrics$1;
exports.fontMetrics = fontMetrics;
exports.getFontMetricsFromUserAgent = getFontMetricsFromUserAgent;
