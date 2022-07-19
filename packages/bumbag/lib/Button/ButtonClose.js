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
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
var reakit = require('reakit');
var Button_Button_styles = require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
var Button_Button = require('./Button.js');
var VisuallyHidden = require('reakit/VisuallyHidden');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var iconProps = props.iconProps,
      label = props.label,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["iconProps", "label"]);

  var buttonProps = Button_Button.Button.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Button_Button_styles.ButtonClose,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: buttonProps.className
  });
  var children = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    fontSize: "300",
    icon: "close"
  }, iconProps)), /*#__PURE__*/React.createElement(VisuallyHidden.VisuallyHidden, null, label));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, buttonProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    label: 'Close',
    variant: 'ghost'
  },
  themeKey: 'Button.Close'
});
var ButtonClose = utils_createComponent.createComponent(function (props) {
  var buttonCloseProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Button,
    use: props.use,
    htmlProps: buttonCloseProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Button.Close'
  },
  themeKey: 'Button.Close'
});

exports.ButtonClose = ButtonClose;
