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
var utils_omit = require('../utils/omit.js');
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
var utils_uniqueId = require('../utils/uniqueId.js');
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
require('../utils/getHiddenInputStyles.js');
require('../theme/palette.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
require('../Button/index.js');
require('../FieldWrapper.styles-1648fae6.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
require('../Card/index.js');
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
require('../Disclosure/index.js');
require('../Label.styles-34e250ed.js');
var Label_Label = require('../Label/Label.js');
var FieldWrapper_FieldWrapper = require('../FieldWrapper/FieldWrapper.js');
var Switch_Switch_styles = require('../Switch.styles-89008e15.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var autoFocus = props.autoFocus,
      checked = props.checked,
      inputProps = props.inputProps,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      state = props.state,
      switchRef = props.switchRef,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "inputProps", "defaultChecked", "disabled", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "overrides", "state", "switchRef", "value"]);

  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = utils_useClassName.useClassName({
    style: Switch_Switch_styles.Switch,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var switchIconClassName = utils_useClassName.useClassName({
    style: Switch_Switch_styles.SwitchIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var hiddenSwitchClassName = utils_useClassName.useClassName({
    style: Switch_Switch_styles.HiddenSwitch,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HiddenInput'
  });
  var switchLabelClassName = utils_useClassName.useClassName({
    style: Switch_Switch_styles.SwitchLabel,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelId = utils_uniqueId.useUniqueId();
  var switchId = utils_uniqueId.useUniqueId();
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    'aria-describedby': labelId,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
      ref: switchRef,
      use: "input",
      className: hiddenSwitchClassName // @ts-ignore
      ,
      autoFocus: autoFocus,
      checked: checked,
      defaultChecked: defaultChecked,
      disabled: disabled,
      id: switchId,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      overrides: overrides,
      name: name,
      type: "checkbox" // @ts-ignore
      ,
      value: value
    }, inputProps)), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: switchIconClassName,
      overrides: overrides
    }), label && /*#__PURE__*/React.createElement(Label_Label.Label, {
      use: "span",
      id: labelId,
      className: switchLabelClassName,
      htmlFor: switchId,
      overrides: overrides,
      marginLeft: "minor-2"
    }, label))
  });
}, {
  themeKey: 'Switch'
});
var Switch = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Switch'
  },
  defaultProps: {
    use: 'label'
  },
  themeKey: 'Switch'
}); ////////////////////////////////////////////////////////////////

var useSwitchFieldProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var autoFocus = props.autoFocus,
      checked = props.checked,
      switchLabel = props.switchLabel,
      switchProps = props.switchProps,
      description = props.description,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      hint = props.hint,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      state = props.state,
      switchRef = props.switchRef,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      validationText = props.validationText,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "switchLabel", "switchProps", "description", "defaultChecked", "disabled", "hint", "isOptional", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "overrides", "state", "switchRef", "tooltip", "tooltipTriggerComponent", "validationText", "value"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Switch_Switch_styles.SwitchField,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(FieldWrapper_FieldWrapper.FieldWrapper, {
      description: description,
      hint: hint,
      isOptional: isOptional,
      isRequired: isRequired,
      label: label,
      labelType: "legend",
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/React.createElement(Switch, _rollupPluginBabelHelpers._extends({
        autoFocus: autoFocus,
        checked: checked,
        defaultChecked: defaultChecked,
        disabled: disabled,
        isRequired: isRequired,
        label: switchLabel,
        name: name,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        overrides: overrides,
        state: state,
        switchRef: switchRef,
        value: value
      }, utils_omit.omit(elementProps, 'id'), switchProps, {
        inputProps: _rollupPluginBabelHelpers._objectSpread2({
          id: elementProps.id
        }, switchProps.inputProps)
      }));
    })
  });
}, {
  defaultProps: {
    switchProps: {}
  },
  themeKey: 'SwitchField'
});
var SwitchField = utils_createComponent.createComponent(function (props) {
  var switchFieldProps = useSwitchFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: switchFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SwitchField'
  },
  themeKey: 'SwitchField'
});

exports.Switch = Switch;
exports.SwitchField = SwitchField;
