'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var utils_parseIcons = require('../utils/parseIcons.js');
var faInfoCircle = require('@fortawesome/free-solid-svg-icons/faInfoCircle');
var faChevronDown = require('@fortawesome/free-solid-svg-icons/faChevronDown');
var faChevronLeft = require('@fortawesome/free-solid-svg-icons/faChevronLeft');
var faChevronRight = require('@fortawesome/free-solid-svg-icons/faChevronRight');
var faExclamationTriangle = require('@fortawesome/free-solid-svg-icons/faExclamationTriangle');
var faCheckCircle = require('@fortawesome/free-solid-svg-icons/faCheckCircle');
var faExclamationCircle = require('@fortawesome/free-solid-svg-icons/faExclamationCircle');
var faQuestionCircle = require('@fortawesome/free-solid-svg-icons/faQuestionCircle');
var faTimes = require('@fortawesome/free-solid-svg-icons/faTimes');
var faSearch = require('@fortawesome/free-solid-svg-icons/faSearch');
var faStar = require('@fortawesome/free-solid-svg-icons/faStar');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var faInfoCircle__namespace = /*#__PURE__*/_interopNamespace(faInfoCircle);
var faChevronDown__namespace = /*#__PURE__*/_interopNamespace(faChevronDown);
var faChevronLeft__namespace = /*#__PURE__*/_interopNamespace(faChevronLeft);
var faChevronRight__namespace = /*#__PURE__*/_interopNamespace(faChevronRight);
var faExclamationTriangle__namespace = /*#__PURE__*/_interopNamespace(faExclamationTriangle);
var faCheckCircle__namespace = /*#__PURE__*/_interopNamespace(faCheckCircle);
var faExclamationCircle__namespace = /*#__PURE__*/_interopNamespace(faExclamationCircle);
var faQuestionCircle__namespace = /*#__PURE__*/_interopNamespace(faQuestionCircle);
var faTimes__namespace = /*#__PURE__*/_interopNamespace(faTimes);
var faSearch__namespace = /*#__PURE__*/_interopNamespace(faSearch);
var faStar__namespace = /*#__PURE__*/_interopNamespace(faStar);

var parseOverrideIcons = function parseOverrideIcons(icons) {
  return icons.reduce(function (currentIcons, iconSet) {
    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, currentIcons), utils_parseIcons.parseIcons(iconSet.icons, {
      type: iconSet.type,
      prefix: iconSet.prefix
    }));
  }, {});
};

var Icon = (function (overrides) {
  var _overrides$iconSets, _overrides$icons, _overrides$iconNames;

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrides), {}, {
    icons: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_parseIcons.parseIcons([faChevronDown__namespace, faChevronLeft__namespace, faChevronRight__namespace, faInfoCircle__namespace, faExclamationTriangle__namespace, faCheckCircle__namespace, faExclamationCircle__namespace, faQuestionCircle__namespace, faTimes__namespace, faSearch__namespace, faStar__namespace], {
      type: 'font-awesome-standalone'
    })), parseOverrideIcons((_overrides$iconSets = overrides === null || overrides === void 0 ? void 0 : overrides.iconSets) !== null && _overrides$iconSets !== void 0 ? _overrides$iconSets : [])), {}, {
      close: {
        viewBoxHeight: 512,
        viewBoxWidth: 320,
        paths: ['M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z']
      }
    }, (_overrides$icons = overrides === null || overrides === void 0 ? void 0 : overrides.icons) !== null && _overrides$icons !== void 0 ? _overrides$icons : {}),
    iconNames: _rollupPluginBabelHelpers._objectSpread2({
      info: 'info-circle',
      warning: 'exclamation-triangle',
      success: 'check-circle',
      danger: 'exclamation-circle'
    }, (_overrides$iconNames = overrides === null || overrides === void 0 ? void 0 : overrides.iconNames) !== null && _overrides$iconNames !== void 0 ? _overrides$iconNames : {})
  });
});

exports.default = Icon;
