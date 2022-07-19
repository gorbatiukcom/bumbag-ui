'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
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
require('../utils/parseIcons.js');
var utils_useIcon = require('../utils/useIcon.js');
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
var Icon_Icon_styles = require('../Icon.styles-08407dd9.js');

function Tree(_ref) {
  var fill = _ref.fill,
      tree = _ref.tree;

  if (tree.length > 0) {
    return tree.map(function (node, index) {
      var _node$attributes, _node$attributes2, _node$attributes3, _node$attributes4, _node$attributes5, _node$attributes6;

      var Component = node.name;
      var newProps = {};

      if (((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.fill) && ((_node$attributes2 = node.attributes) === null || _node$attributes2 === void 0 ? void 0 : _node$attributes2.fill) !== 'white' && ((_node$attributes3 = node.attributes) === null || _node$attributes3 === void 0 ? void 0 : _node$attributes3.fill) !== 'none') {
        newProps = {
          fill: fill,
          fillRule: 'evenodd'
        };
      }

      if (((_node$attributes4 = node.attributes) === null || _node$attributes4 === void 0 ? void 0 : _node$attributes4.stroke) && ((_node$attributes5 = node.attributes) === null || _node$attributes5 === void 0 ? void 0 : _node$attributes5.stroke) !== 'white' && ((_node$attributes6 = node.attributes) === null || _node$attributes6 === void 0 ? void 0 : _node$attributes6.stroke) !== 'none') {
        newProps = {
          stroke: fill,
          fillRule: 'evenodd'
        };
      }

      return (
        /*#__PURE__*/
        // eslint-disable-next-line
        React.createElement(Component, _rollupPluginBabelHelpers._extends({
          key: node.name + "." + index
        }, node.attributes, newProps), /*#__PURE__*/React.createElement(Tree, {
          fill: fill,
          tree: node.children
        }))
      );
    });
  }

  return null;
}

var useProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var className = utils_useClassName.useClassName({
    style: Icon_Icon_styles.Icon,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });

  var _useIcon = utils_useIcon.useIcon({
    icon: props.icon,
    type: props.type
  }),
      viewBoxWidth = _useIcon.viewBoxWidth,
      viewBoxHeight = _useIcon.viewBoxHeight,
      svgProps = _useIcon.props,
      paths = _useIcon.paths,
      tree = _useIcon.tree;

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, svgProps), {}, {
    role: 'img',
    viewBox: "0 0 " + viewBoxWidth + " " + viewBoxHeight,
    'aria-hidden': !props['aria-label'] && !props.label
  }, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, props.label && /*#__PURE__*/React.createElement("title", null, props.label), paths.map(function (path) {
      return /*#__PURE__*/React.createElement("path", {
        key: path,
        d: path,
        fill: "currentColor",
        fillRule: "evenodd"
      });
    }), /*#__PURE__*/React.createElement(Tree, {
      fill: "currentColor",
      tree: tree
    }))
  });
}, {
  themeKey: 'Icon'
});
var Icon = utils_createComponent.createComponent(function (props) {
  var iconProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: iconProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Icon'
  },
  defaultProps: {
    use: 'svg'
  },
  themeKey: 'Icon'
});

exports.Icon = Icon;
