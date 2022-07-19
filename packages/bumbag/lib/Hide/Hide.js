'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
var classNames = require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
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
var utils_colors = require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var _templateObject, _templateObject2;
var aboveBreakpoints = {
  mobile: 'tablet',
  tablet: 'desktop',
  desktop: 'widescreen',
  widescreen: 'fullHD'
};
function Hide(props) {
  var above = props.above,
      below = props.below;
  var breakpoint;

  if (above) {
    breakpoint = "min-" + aboveBreakpoints[above];
  } else if (below) {
    breakpoint = "max-" + below;
  }

  var hideClassName = utils_useClassName.useClassName({
    style: hideStyle,
    styleProps: {
      breakpoint: breakpoint
    }
  });
  var children = transformChildren(props.children, hideClassName, 0);
  return children;
}

function transformChildren(children, className, index) {
  if (typeof children === 'string') {
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: className
    }, children);
  } else if (React.isValidElement(children)) {
    if (children.type.toString() === 'Symbol(react.fragment)') {
      return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, children), {}, {
        props: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, children.props || {}), {}, {
          // @ts-ignore
          children: transformChildren((children.props || {}).children, className, 0)
        })
      });
    }

    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, children), {}, {
      // @ts-ignore
      props: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, children.props || {}), {}, {
        className: classNames__default['default'](children.props.className, className)
      })
    });
  } else if (Array.isArray(children)) {
    return children.map(function (child, index) {
      return transformChildren(child, className, index);
    });
  }

  return null;
}

var hideStyle = function hideStyle(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), utils_colors.breakpoint(styleProps.breakpoint, react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      display: none !important;\n    "]))))(styleProps));
};

exports.Hide = Hide;
exports.hideStyle = hideStyle;
