'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
var ConditionalWrap = require('conditional-wrap');
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
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
var Flex_Flex = require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
var Spinner_Spinner = require('../Spinner/Spinner.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConditionalWrap__default = /*#__PURE__*/_interopDefaultLegacy(ConditionalWrap);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var disabled = props.disabled,
      focusable = props.focusable,
      iconAfter = props.iconAfter,
      iconAfterProps = props.iconAfterProps,
      iconBefore = props.iconBefore,
      iconBeforeProps = props.iconBeforeProps,
      ignoreGrayOverride = props.ignoreGrayOverride,
      spinnerProps = props.spinnerProps,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["disabled", "focusable", "iconAfter", "iconAfterProps", "iconBefore", "iconBeforeProps", "ignoreGrayOverride", "spinnerProps", "unstable_clickOnEnter", "unstable_clickOnSpace"]);

  if (props.palette === 'gray' && props.variant === 'default') {
    props.palette = 'grayTint';
  }

  var buttonProps = reakit.useButton({
    disabled: disabled,
    focusable: focusable,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace
  }, htmlProps);
  htmlProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), buttonProps));
  var className = utils_useClassName.useClassName({
    style: Button_Button_styles.Button,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  var iconBeforeClassName = utils_useClassName.useClassName({
    style: Button_Button_styles.ButtonIcon,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isBefore: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var iconAfterClassName = utils_useClassName.useClassName({
    style: Button_Button_styles.ButtonIcon,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isAfter: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var spinnerWrapperClassName = utils_useClassName.useClassName({
    style: Button_Button_styles.ButtonSpinnerWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'SpinnerWrapper'
  });
  var spinnerClassName = utils_useClassName.useClassName({
    style: Button_Button_styles.ButtonSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var spinnerColor = props.palette;

  if (props.variant === 'default') {
    spinnerColor = props.palette + "Inverted";
  }

  if (props.palette === 'default') {
    spinnerColor = 'defaultInverted';
  }

  var spinnerTrackColor;

  if (props.variant === 'default') {
    spinnerTrackColor = props.palette + "300";
  }

  if (props.palette === 'default') {
    spinnerColor = 'gray100';
  }

  var children = /*#__PURE__*/React.createElement(React.Fragment, null, props.isLoading && /*#__PURE__*/React.createElement(Flex_Flex.Flex, {
    className: spinnerWrapperClassName
  }, /*#__PURE__*/React.createElement(Spinner_Spinner.Spinner, _rollupPluginBabelHelpers._extends({
    use: Flex_Flex.Flex,
    className: spinnerClassName,
    color: spinnerColor,
    trackColor: spinnerTrackColor,
    hasTrack: true
  }, spinnerProps))), /*#__PURE__*/React.createElement(ConditionalWrap__default['default'], {
    condition: props.isLoading,
    wrap: function wrap(children) {
      return /*#__PURE__*/React.createElement(Text_index.Text, null, children);
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    className: iconBeforeClassName,
    icon: iconBefore
  }, iconBeforeProps)), htmlProps.children, iconAfter && /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    className: iconAfterClassName,
    icon: iconAfter
  }, iconAfterProps)))));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, htmlProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    disabled: false,
    iconAfter: undefined,
    iconBefore: undefined,
    isLoading: false,
    isStatic: false,
    variant: 'default',
    palette: 'default',
    size: 'default',
    type: 'button'
  },
  themeKey: 'Button'
});
var Button = utils_createComponent.createComponent(function (props) {
  var buttonProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Button,
    use: props.use,
    htmlProps: buttonProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Button'
  },
  themeKey: 'Button'
});

exports.Button = Button;
