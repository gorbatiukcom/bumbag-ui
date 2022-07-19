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
var utils_useOptionsState = require('../utils/useOptionsState.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
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
require('../Set.styles-ac954f46.js');
var Set_Set = require('../Set/Set.js');
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
require('../Label/Label.js');
var FieldWrapper_FieldWrapper = require('../FieldWrapper/FieldWrapper.js');
var Checkbox_Checkbox_styles = require('../Checkbox.styles-fa465318.js');
var Checkbox_Checkbox = require('./Checkbox.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var defaultValue = props.defaultValue,
      disabled = props.disabled,
      onBlur = props.onBlur,
      onChange = props.onChange,
      options = props.options,
      orientation = props.orientation,
      overrides = props.overrides,
      name = props.name,
      spacing = props.spacing,
      state = props.state,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["defaultValue", "disabled", "onBlur", "onChange", "options", "orientation", "overrides", "name", "spacing", "state", "value"]); ////////////////////////////////////////////


  var boxProps = Box_Box.Box.useProps(restProps); ////////////////////////////////////////////

  var className = utils_useClassName.useClassName({
    style: Checkbox_Checkbox_styles.CheckboxGroup,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  }); ////////////////////////////////////////////

  var _useOptionsState = utils_useOptionsState.useOptionsState({
    defaultValue: defaultValue,
    onBlur: onBlur,
    onChange: onChange,
    type: 'checkbox',
    value: value,
    isNativeInput: true
  }),
      getOptionItemProps = _useOptionsState.getOptionItemProps; ////////////////////////////////////////////


  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    role: 'group'
  }, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(Set_Set.Set, {
      orientation: orientation,
      spacing: spacing
    }, options.map(function (option, i) {
      return /*#__PURE__*/React.createElement(Checkbox_Checkbox.Checkbox, _rollupPluginBabelHelpers._extends({
        key: i
      }, option, getOptionItemProps({
        value: option.value
      }), {
        name: name,
        overrides: overrides,
        state: state || option.state,
        disabled: disabled || option.disabled
      }));
    }))
  });
}, {
  defaultProps: {
    orientation: 'vertical',
    spacing: 'minor-2'
  },
  themeKey: 'CheckboxGroup'
});
var CheckboxGroup = utils_createComponent.createComponent(function (props) {
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
    displayName: 'CheckboxGroup'
  },
  themeKey: 'CheckboxGroup'
}); ////////////////////////////////////////////////////////////////

var useCheckboxGroupFieldProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var defaultChecked = props.defaultChecked,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      options = props.options,
      orientation = props.orientation,
      onBlur = props.onBlur,
      onChange = props.onChange,
      overrides = props.overrides,
      checkboxGroupProps = props.checkboxGroupProps,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      validationText = props.validationText,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["defaultChecked", "description", "disabled", "hint", "isOptional", "isRequired", "label", "name", "options", "orientation", "onBlur", "onChange", "overrides", "checkboxGroupProps", "state", "tooltip", "tooltipTriggerComponent", "value", "validationText"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Checkbox_Checkbox_styles.CheckboxGroupField,
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
      return /*#__PURE__*/React.createElement(CheckboxGroup, _rollupPluginBabelHelpers._extends({
        defaultChecked: defaultChecked,
        disabled: disabled,
        orientation: orientation,
        name: name,
        options: options,
        onBlur: onBlur,
        onChange: onChange,
        overrides: overrides,
        state: state,
        value: value
      }, elementProps, checkboxGroupProps));
    })
  });
}, {
  themeKey: 'CheckboxGroupField'
});
var CheckboxGroupField = utils_createComponent.createComponent(function (props) {
  var checkboxGroupFieldProps = useCheckboxGroupFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: checkboxGroupFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'CheckboxGroupField'
  },
  defaultProps: {
    use: 'fieldset'
  },
  themeKey: 'CheckboxGroupField'
});

exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroupField = CheckboxGroupField;
