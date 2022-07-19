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
var utils_cssProps = require('../utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('../utils/useStyle.js');
var utils_useLabelPlaceholder = require('../utils/useLabelPlaceholder.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/palette.js');
var utils_mergeRefs = require('../utils/mergeRefs.js');
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
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
var Spinner_Spinner = require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
require('../Button/index.js');
var Input_Input_styles = require('../Input.styles-a731033b.js');
var InputMask = require('react-input-mask');
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
require('../Group.styles-13958db4.js');
var Group_Group = require('../Group/Group.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConditionalWrap__default = /*#__PURE__*/_interopDefaultLegacy(ConditionalWrap);
var InputMask__default = /*#__PURE__*/_interopDefaultLegacy(InputMask);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var ref = React.useRef();

  var before = props.before,
      after = props.after,
      containLabel = props.containLabel,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      isLoading = props.isLoading,
      isRequired = props.isRequired,
      state = props.state,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["before", "after", "containLabel", "inputProps", "inputRef", "isLoading", "isRequired", "state"]);

  var label = (props === null || props === void 0 ? void 0 : props.label) || (inputProps === null || inputProps === void 0 ? void 0 : inputProps.label);

  var _useLabelPlaceholder = utils_useLabelPlaceholder.useLabelPlaceholder(_rollupPluginBabelHelpers._objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var wrapperClassName = utils_useClassName.useClassName({
    style: Input_Input_styles.InputWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper',
    prevClassName: restProps.className
  });
  var labelWrapperClassName = utils_useClassName.useClassName({
    style: Input_Input_styles.LabelWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = utils_useClassName.useClassName({
    style: Input_Input_styles.LabelWrapperBackground,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  });
  var spinnerClassName = utils_useClassName.useClassName({
    style: Input_Input_styles.InputSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_cssProps.omitCSSProps(restProps)), inputProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: utils_mergeRefs.mergeRefs(ref, inputRef, props.elementRef),
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
        className: wrapperClassName
      }, utils_cssProps.pickCSSProps(props)), label && /*#__PURE__*/React.createElement(React.Fragment, null, !containLabel && /*#__PURE__*/React.createElement(Box_Box.Box, {
        className: labelWrapperBackgroundClassName
      }, /*#__PURE__*/React.createElement(Text_index.Text, {
        opacity: "0"
      }, label)), /*#__PURE__*/React.createElement(Box_Box.Box, {
        className: labelWrapperClassName,
        onClick: function onClick() {
          var _ref$current;

          return ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
        }
      }, /*#__PURE__*/React.createElement(Text_index.Text, null, label))), before && /*#__PURE__*/React.createElement(Box_Box.Box, {
        display: "inline-flex",
        position: "absolute",
        zIndex: 3,
        height: "100%"
      }, before), after && /*#__PURE__*/React.createElement(Box_Box.Box, {
        display: "inline-flex",
        position: "absolute",
        right: "0px",
        zIndex: 3,
        height: "100%"
      }, after), children, isLoading && /*#__PURE__*/React.createElement(Spinner_Spinner.Spinner, {
        className: spinnerClassName,
        color: "text"
      }));
    }
  }));
  var className = utils_useClassName.useClassName({
    style: Input_Input_styles.Input,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired
  });
}, {
  defaultProps: {
    variant: 'bordered',
    type: 'text'
  },
  themeKey: 'Input'
});
var Input = utils_createComponent.createComponent(function (props) {
  var inputProps = useProps(props);
  var use = props.use;

  if (props.mask) {
    use = InputMask__default['default'];
  }

  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: use,
    htmlProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, inputProps), props.mask ? {
      mask: props.mask
    } : {})
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Input'
  },
  defaultProps: {
    use: 'input'
  },
  themeKey: 'Input'
}); ////////////////////////////////////////////////////////////////

function InputIcon(props) {
  var className = utils_useClassName.useClassName({
    style: Input_Input_styles.InputIcon,
    styleProps: props,
    themeKey: 'Input.Icon',
    prevClassName: props.className
  });
  return /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    color: "gray200"
  }, props, {
    className: className
  }));
} ////////////////////////////////////////////////////////////////

var useInputFieldProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var addonAfter = props.addonAfter,
      addonBefore = props.addonBefore,
      children = props.children,
      after = props.after,
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      before = props.before,
      containLabel = props.containLabel,
      defaultValue = props.defaultValue,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      inputRef = props.inputRef,
      inputProps = props.inputProps,
      isLoading = props.isLoading,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      orientation = props.orientation,
      label = props.label,
      name = props.name,
      size = props.size,
      mask = props.mask,
      max = props.max,
      maxLength = props.maxLength,
      min = props.min,
      minLength = props.minLength,
      multiple = props.multiple,
      pattern = props.pattern,
      palette = props.palette,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      spellCheck = props.spellCheck,
      step = props.step,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      type = props.type,
      value = props.value,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      validationText = props.validationText,
      variant = props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "children", "after", "autoComplete", "autoFocus", "before", "containLabel", "defaultValue", "description", "disabled", "hint", "inputRef", "inputProps", "isLoading", "isOptional", "isRequired", "orientation", "label", "name", "size", "mask", "max", "maxLength", "min", "minLength", "multiple", "pattern", "palette", "placeholder", "readOnly", "spellCheck", "step", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "onBlur", "onChange", "onFocus", "overrides", "validationText", "variant"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Input_Input_styles.InputField,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var groupClassName = utils_useClassName.useClassName({
    style: Input_Input_styles.InputFieldGroup,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Group'
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(FieldWrapper_FieldWrapper.FieldWrapper, {
      description: description,
      hint: hint,
      isOptional: isOptional,
      isRequired: isRequired,
      label: label,
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      variant: variant,
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/React.createElement(ConditionalWrap__default['default'], {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/React.createElement(Group_Group.Group, {
            className: groupClassName,
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, addonBefore, /*#__PURE__*/React.createElement(Input, _rollupPluginBabelHelpers._extends({
        after: after,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        before: before,
        containLabel: containLabel,
        defaultValue: defaultValue,
        disabled: disabled,
        inputProps: inputProps,
        inputRef: inputRef,
        isLoading: isLoading,
        isRequired: isRequired,
        name: name,
        size: size,
        mask: mask,
        max: max,
        maxLength: maxLength,
        min: min,
        minLength: minLength,
        multiple: multiple,
        pattern: pattern,
        palette: palette,
        placeholder: placeholder,
        readOnly: readOnly,
        spellCheck: spellCheck,
        step: step,
        state: state,
        type: type,
        value: value,
        variant: variant,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        overrides: overrides
      }, elementProps)), addonAfter));
    })
  });
}, {
  defaultProps: {
    orientation: 'horizontal'
  },
  themeKey: 'InputField'
});
var InputField = utils_createComponent.createComponent(function (props) {
  var inputFieldProps = useInputFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: inputFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'InputField'
  },
  themeKey: 'InputField'
});

exports.Input = Input;
exports.InputField = InputField;
exports.InputIcon = InputIcon;
