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
require('../utils/useStyle.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Modal.styles-a83df364.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
var Modal_ModalDisclosure = require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
var Overlay_Overlay_styles = require('../Overlay.styles-78f6977d.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var htmlProps = Modal_ModalDisclosure.ModalDisclosure.useProps(props);
  var className = utils_useClassName.useClassName({
    style: Overlay_Overlay_styles.OverlayDisclosure,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Overlay.Disclosure'
});
var OverlayDisclosure = utils_createComponent.createComponent(function (props) {
  var overlayDisclosureProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: overlayDisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Overlay.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'Overlay.Disclosure'
});

exports.OverlayDisclosure = OverlayDisclosure;
