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
require('../_rollupPluginBabelHelpers-c170a0e0.js');
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
require('../utils/useStyle.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/createComponent.js');
require('../utils/createElement.js');
require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('reakit');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Modal.styles-a83df364.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
var Overlay_Overlay_styles = require('../Overlay.styles-78f6977d.js');
var Overlay_Overlay = require('./Overlay.js');
var Overlay_OverlayDisclosure = require('./OverlayDisclosure.js');
var Overlay_OverlayState = require('./OverlayState.js');

var Overlay = Object.assign(Overlay_Overlay.Overlay, {
  Disclosure: Overlay_OverlayDisclosure.OverlayDisclosure,
  useState: Overlay_OverlayState.useOverlayState,
  State: Overlay_OverlayState.OverlayState
});

exports.overlayStyles = Overlay_Overlay_styles.Overlay_styles;
exports.OverlayDisclosure = Overlay_OverlayDisclosure.OverlayDisclosure;
exports.Overlay = Overlay;
