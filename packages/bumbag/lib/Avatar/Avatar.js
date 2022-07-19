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
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
var Avatar_Avatar_styles = require('../Avatar.styles-c2e77341.js');
require('../Image.styles-800bfa0a.js');
var Image_Image = require('../Image/Image.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  if (props === void 0) {
    props = {};
  }

  var themeKey = _ref.themeKey;
  var imageProps = Image_Image.Image.useProps(_rollupPluginBabelHelpers._objectSpread2({}, props), {
    themeKey: 'Avatar'
  });
  var className = utils_useClassName.useClassName({
    style: Avatar_Avatar_styles.Avatar,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: imageProps.className
  });
  var children;

  if (props.initials) {
    children = props.initials.split(' ').length === 2 ? props.initials.match(/\b\w/g) : props.initials.substring(0, 2);
  }

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, imageProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    size: 'default'
  },
  themeKey: 'Avatar'
});
var Avatar = utils_createComponent.createComponent(function (props) {
  var imageProps = useProps(props);
  var use = props.use;

  if (props.initials) {
    use = Box_Box.Box;
  }

  return utils_createElement.createElement({
    component: reakit.Box,
    use: use,
    htmlProps: imageProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Avatar'
  },
  defaultProps: {
    use: 'img'
  },
  themeKey: 'Avatar'
});

exports.Avatar = Avatar;
