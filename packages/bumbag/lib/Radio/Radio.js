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
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
var utils_uniqueId = require('../utils/uniqueId.js');
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
require('../utils/getHiddenInputStyles.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Label.styles-34e250ed.js');
var Label_Label = require('../Label/Label.js');
var Radio_Radio_styles = require('../Radio.styles-de011e43.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var autoFocus = props.autoFocus,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      radioProps = props.radioProps,
      radioRef = props.radioRef,
      state = props.state,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "defaultChecked", "disabled", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "overrides", "radioProps", "radioRef", "state", "value"]);

  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = utils_useClassName.useClassName({
    style: Radio_Radio_styles.Radio,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var radioIconClassName = utils_useClassName.useClassName({
    style: Radio_Radio_styles.RadioIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var hiddenRadioClassName = utils_useClassName.useClassName({
    style: Radio_Radio_styles.HiddenRadio,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HiddenInput'
  });
  var radioLabelClassName = utils_useClassName.useClassName({
    style: Radio_Radio_styles.RadioLabel,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelId = utils_uniqueId.useUniqueId();
  var radioId = utils_uniqueId.useUniqueId();
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    'aria-describedby': labelId,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
      ref: radioRef,
      use: "input",
      className: hiddenRadioClassName // @ts-ignore
      ,
      autoFocus: autoFocus,
      checked: checked,
      defaultChecked: defaultChecked,
      disabled: disabled,
      id: radioId,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      name: name,
      type: "radio" // @ts-ignore
      ,
      value: value,
      overrides: overrides
    }, radioProps)), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: radioIconClassName,
      overrides: overrides
    }), label && /*#__PURE__*/React.createElement(Label_Label.Label, {
      use: "span",
      id: labelId,
      className: radioLabelClassName,
      htmlFor: radioId,
      overrides: overrides,
      marginLeft: "minor-2"
    }, label))
  });
}, {
  themeKey: 'Radio'
});
var Radio = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Radio'
  },
  defaultProps: {
    use: 'label'
  },
  themeKey: 'Radio'
});

exports.Radio = Radio;
