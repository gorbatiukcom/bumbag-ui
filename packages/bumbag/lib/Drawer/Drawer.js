'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../utils/debounceAnimationFrame.js');
var utils_useViewportHeight = require('../utils/useViewportHeight.js');
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
var Modal_ModalState = require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
var Modal_index = require('../Modal/index.js');
var Drawer_Drawer_styles = require('../Drawer.styles-077ca625.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = React.useContext(Modal_ModalState.ModalContext);
  var viewportHeight = utils_useViewportHeight.useViewportHeight({
    enabled: modalContext.modal.visible || props.visible
  });
  var modalProps = Modal_index.Modal.useProps(_rollupPluginBabelHelpers._objectSpread2({}, props), {
    themeKey: 'Drawer'
  });
  var className = utils_useClassName.useClassName({
    style: Drawer_Drawer_styles.Drawer,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      viewportHeight: viewportHeight
    }),
    themeKey: themeKey,
    prevClassName: modalProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, modalProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    duration: '0.2s',
    placement: 'left'
  },
  themeKey: 'Drawer'
});
var Drawer = utils_createComponent.createComponent(function (props) {
  var textProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Drawer'
  },
  themeKey: 'Drawer'
});

exports.Drawer = Drawer;
