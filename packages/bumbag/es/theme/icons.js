import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import { parseIcons } from '../utils/parseIcons.js';
import * as faInfoCircle from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import * as faChevronDown from '@fortawesome/free-solid-svg-icons/faChevronDown';
import * as faChevronLeft from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import * as faChevronRight from '@fortawesome/free-solid-svg-icons/faChevronRight';
import * as faExclamationTriangle from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import * as faCheckCircle from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import * as faExclamationCircle from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import * as faQuestionCircle from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import * as faTimes from '@fortawesome/free-solid-svg-icons/faTimes';
import * as faSearch from '@fortawesome/free-solid-svg-icons/faSearch';
import * as faStar from '@fortawesome/free-solid-svg-icons/faStar';

var parseOverrideIcons = function parseOverrideIcons(icons) {
  return icons.reduce(function (currentIcons, iconSet) {
    return _objectSpread2(_objectSpread2({}, currentIcons), parseIcons(iconSet.icons, {
      type: iconSet.type,
      prefix: iconSet.prefix
    }));
  }, {});
};

var icons = (function (overrides) {
  var _overrides$iconSets, _overrides$icons, _overrides$iconNames;

  return _objectSpread2(_objectSpread2({}, overrides), {}, {
    icons: _objectSpread2(_objectSpread2(_objectSpread2({}, parseIcons([faChevronDown, faChevronLeft, faChevronRight, faInfoCircle, faExclamationTriangle, faCheckCircle, faExclamationCircle, faQuestionCircle, faTimes, faSearch, faStar], {
      type: 'font-awesome-standalone'
    })), parseOverrideIcons((_overrides$iconSets = overrides === null || overrides === void 0 ? void 0 : overrides.iconSets) !== null && _overrides$iconSets !== void 0 ? _overrides$iconSets : [])), {}, {
      close: {
        viewBoxHeight: 512,
        viewBoxWidth: 320,
        paths: ['M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z']
      },
      check: {
        viewBoxHeight: 512,
        viewBoxWidth: 512,
        paths: ['M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z']
      },
      circle: {
        viewBoxHeight: 512,
        viewBoxWidth: 512,
        paths: ['M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z']
      }
    }, (_overrides$icons = overrides === null || overrides === void 0 ? void 0 : overrides.icons) !== null && _overrides$icons !== void 0 ? _overrides$icons : {}),
    iconNames: _objectSpread2({
      info: 'info-circle',
      warning: 'exclamation-triangle',
      success: 'check-circle',
      danger: 'exclamation-circle'
    }, (_overrides$iconNames = overrides === null || overrides === void 0 ? void 0 : overrides.iconNames) !== null && _overrides$iconNames !== void 0 ? _overrides$iconNames : {})
  });
});

export default icons;
