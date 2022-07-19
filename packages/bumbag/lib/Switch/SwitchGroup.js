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
var Switch_Switch_styles = require('../Switch.styles-89008e15.js');
var Switch_Switch = require('./Switch.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var defaultValue = props.defaultValue,
      disabled = props.disabled,
      orientation = props.orientation,
      onBlur = props.onBlur,
      onChange = props.onChange,
      options = props.options,
      overrides = props.overrides,
      name = props.name,
      spacing = props.spacing,
      state = props.state,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["defaultValue", "disabled", "orientation", "onBlur", "onChange", "options", "overrides", "name", "spacing", "state", "value"]); ////////////////////////////////////////////


  var boxProps = Box_Box.Box.useProps(restProps); ////////////////////////////////////////////

  var className = utils_useClassName.useClassName({
    style: Switch_Switch_styles.SwitchGroup,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  }); ////////////////////////////////////////////

  var _React$useState = React.useState(defaultValue || []),
      controlledValue = _React$useState[0],
      setControlledValue = _React$useState[1];

  var values = typeof value !== 'undefined' ? value : controlledValue; ////////////////////////////////////////////

  var handleChange = React.useCallback(function (e) {
    var newValue = e.target.value;
    var newValues = [];

    if (values.includes(newValue)) {
      newValues = (values || []).filter(function (val) {
        return val !== newValue;
      });
    } else {
      newValues = [].concat(values || [], [newValue]);
    }

    if (typeof value !== 'undefined') {
      onChange && onChange(newValues, newValue);
    } else {
      setControlledValue(newValues);
    }
  }, [onChange, value, values]);
  var handleBlur = React.useCallback(function () {
    onBlur && onBlur(values);
  }, [onBlur, values]); ////////////////////////////////////////////

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    role: 'group'
  }, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(Set_Set.Set, {
      orientation: orientation,
      spacing: spacing
    }, options.map(function (option, i) {
      return /*#__PURE__*/React.createElement(Switch_Switch.Switch, _rollupPluginBabelHelpers._extends({
        key: i
      }, option, {
        // @ts-ignore
        checked: values ? values.includes(option.value) : false,
        onBlur: handleBlur,
        onChange: handleChange,
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
  themeKey: 'SwitchGroup'
});
var SwitchGroup = utils_createComponent.createComponent(function (props) {
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
    displayName: 'SwitchGroup'
  },
  themeKey: 'SwitchGroup'
}); ////////////////////////////////////////////////////////////////

var useSwitchGroupFieldProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var defaultChecked = props.defaultChecked,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      orientation = props.orientation,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      options = props.options,
      onBlur = props.onBlur,
      onChange = props.onChange,
      overrides = props.overrides,
      switchGroupProps = props.switchGroupProps,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      validationText = props.validationText,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["defaultChecked", "description", "disabled", "hint", "orientation", "isOptional", "isRequired", "label", "name", "options", "onBlur", "onChange", "overrides", "switchGroupProps", "state", "tooltip", "tooltipTriggerComponent", "value", "validationText"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Switch_Switch_styles.SwitchGroupField,
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
      return /*#__PURE__*/React.createElement(SwitchGroup, _rollupPluginBabelHelpers._extends({
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
      }, elementProps, switchGroupProps));
    })
  });
}, {
  themeKey: 'SwitchGroupField'
});
var SwitchGroupField = utils_createComponent.createComponent(function (props) {
  var switchGroupFieldProps = useSwitchGroupFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: switchGroupFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SwitchGroupField'
  },
  defaultProps: {
    use: 'fieldset'
  },
  themeKey: 'SwitchGroupField'
});

exports.SwitchGroup = SwitchGroup;
exports.SwitchGroupField = SwitchGroupField;
