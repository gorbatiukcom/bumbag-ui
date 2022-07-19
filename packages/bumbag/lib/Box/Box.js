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
var utils_cssProps = require('../utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
var utils_useStyle = require('../utils/useStyle.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
var utils_mergeRefs = require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
var utils_htmlProps = require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
var Box_Box_styles = require('../Box.styles-0ffb7463.js');

var useProps = utils_createHook.createHook(function (_props, _ref) {
  var disableCSSProps = _ref.disableCSSProps,
      themeKey = _ref.themeKey;
  var props = _props;
  var _props2 = props,
      use = _props2.use;

  if (use && typeof use !== 'string' && use.useProps) {
    var newProps = use.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      use: undefined
    }));
    props = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), newProps);
  } // Convert CSS props to an object.
  // Example input:
  // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }


  var style = utils_useStyle.useStyle(props, {
    disableCSSProps: disableCSSProps
  }); // Append the styles from above as a className on the DOM element (with precedence).

  var className = utils_useClassName.useClassName({
    style: Box_Box_styles.style,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      style: style
    }),
    themeKey: themeKey,
    prevClassName: props.className
  }); // Append the Box styles as a className on the DOM element.

  className = utils_useClassName.useClassName({
    style: Box_Box_styles.Box,
    styleProps: props,
    prevClassName: className,
    themeKey: themeKey
  }); // Pick out and invalid HTML props & omit the CSS props.

  var htmlProps = utils_cssProps.omitCSSProps(utils_htmlProps.pickHTMLProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
    className: className
  }))); // const htmlProps = { ...props, className };

  if (props.elementRef) {
    // @ts-ignore
    htmlProps.ref = utils_mergeRefs.mergeRefs(props.elementRef, props.ref);
  }

  if (props.wrapElement) {
    // @ts-ignore
    htmlProps.wrapElement = props.wrapElement;
  }

  return _rollupPluginBabelHelpers._objectSpread2({}, htmlProps);
}, {
  themeKey: 'Box'
});
var Box = utils_createComponent.createComponent(function (props) {
  var boxProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: boxProps
  });
}, {
  attach: {
    displayName: 'Box',
    useProps: useProps
  },
  themeKey: 'Box'
});

exports.Box = Box;
