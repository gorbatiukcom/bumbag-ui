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
var Modal_Modal_styles = require('../Modal.styles-a83df364.js');
var Modal_ModalState = require('./ModalState.js');
var Modal_ModalBackdrop = require('./ModalBackdrop.js');
var Modal_Modal = require('./Modal.js');
var Modal_ModalDisclosure = require('./ModalDisclosure.js');

var Modal = Object.assign(Modal_Modal.Modal, {
  Backdrop: Modal_ModalBackdrop.ModalBackdrop,
  Disclosure: Modal_ModalDisclosure.ModalDisclosure,
  useContext: Modal_ModalState.useModalContext,
  useState: Modal_ModalState.useModalState,
  State: Modal_ModalState.ModalState
});

exports.modalStyles = Modal_Modal_styles.Modal_styles;
exports.ModalContext = Modal_ModalState.ModalContext;
exports.ModalState = Modal_ModalState.ModalState;
exports.useModalContext = Modal_ModalState.useModalContext;
exports.useModalState = Modal_ModalState.useModalState;
exports.ModalBackdrop = Modal_ModalBackdrop.ModalBackdrop;
exports.ModalDisclosure = Modal_ModalDisclosure.ModalDisclosure;
exports.Modal = Modal;
