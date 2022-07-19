import { createElement as createElement$1, useRef, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import ConditionalWrap from 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, d as _extends, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import { pickCSSProps, omitCSSProps } from '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import { useLabelPlaceholder } from '../utils/useLabelPlaceholder.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import { mergeRefs } from '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import { Spinner } from '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import '../Button/index.js';
import { a as InputIcon$1, b as InputWrapper, L as LabelWrapper, c as LabelWrapperBackground, d as InputSpinner, e as Input$1, f as InputField$1, g as InputFieldGroup } from '../Input.styles.js';
import InputMask from 'react-input-mask';
import '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
import '../Label.styles.js';
import '../Label/Label.js';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper.js';
import '../Group.styles.js';
import { Group } from '../Group/Group.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var ref = useRef();

  var before = props.before,
      after = props.after,
      containLabel = props.containLabel,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      isLoading = props.isLoading,
      isRequired = props.isRequired,
      state = props.state,
      restProps = _objectWithoutPropertiesLoose(props, ["before", "after", "containLabel", "inputProps", "inputRef", "isLoading", "isRequired", "state"]);

  var label = (props === null || props === void 0 ? void 0 : props.label) || (inputProps === null || inputProps === void 0 ? void 0 : inputProps.label);

  var _useLabelPlaceholder = useLabelPlaceholder(_objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var wrapperClassName = useClassName({
    style: InputWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper',
    prevClassName: restProps.className
  });
  var labelWrapperClassName = useClassName({
    style: LabelWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = useClassName({
    style: LabelWrapperBackground,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  });
  var spinnerClassName = useClassName({
    style: InputSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, omitCSSProps(restProps)), inputProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: mergeRefs(ref, inputRef, props.elementRef),
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/createElement$1(Box$1, _extends({
        className: wrapperClassName
      }, pickCSSProps(props)), label && /*#__PURE__*/createElement$1(Fragment, null, !containLabel && /*#__PURE__*/createElement$1(Box$1, {
        className: labelWrapperBackgroundClassName
      }, /*#__PURE__*/createElement$1(Text, {
        opacity: "0"
      }, label)), /*#__PURE__*/createElement$1(Box$1, {
        className: labelWrapperClassName,
        onClick: function onClick() {
          var _ref$current;

          return ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
        }
      }, /*#__PURE__*/createElement$1(Text, null, label))), before && /*#__PURE__*/createElement$1(Box$1, {
        display: "inline-flex",
        position: "absolute",
        zIndex: 3,
        height: "100%"
      }, before), after && /*#__PURE__*/createElement$1(Box$1, {
        display: "inline-flex",
        position: "absolute",
        right: "0px",
        zIndex: 3,
        height: "100%"
      }, after), children, isLoading && /*#__PURE__*/createElement$1(Spinner, {
        className: spinnerClassName,
        color: "text"
      }));
    }
  }));
  var className = useClassName({
    style: Input$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
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
var Input = createComponent(function (props) {
  var inputProps = useProps(props);
  var use = props.use;

  if (props.mask) {
    use = InputMask;
  }

  return createElement({
    children: props.children,
    component: Box,
    use: use,
    htmlProps: _objectSpread2(_objectSpread2({}, inputProps), props.mask ? {
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
  var className = useClassName({
    style: InputIcon$1,
    styleProps: props,
    themeKey: 'Input.Icon',
    prevClassName: props.className
  });
  return /*#__PURE__*/createElement$1(Icon, _extends({
    color: "gray200"
  }, props, {
    className: className
  }));
} ////////////////////////////////////////////////////////////////

var useInputFieldProps = createHook(function (props, _ref2) {
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
      restProps = _objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "children", "after", "autoComplete", "autoFocus", "before", "containLabel", "defaultValue", "description", "disabled", "hint", "inputRef", "inputProps", "isLoading", "isOptional", "isRequired", "orientation", "label", "name", "size", "mask", "max", "maxLength", "min", "minLength", "multiple", "pattern", "palette", "placeholder", "readOnly", "spellCheck", "step", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "onBlur", "onChange", "onFocus", "overrides", "validationText", "variant"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: InputField$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var groupClassName = useClassName({
    style: InputFieldGroup,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Group'
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(FieldWrapper, {
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
      return /*#__PURE__*/createElement$1(ConditionalWrap, {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/createElement$1(Group, {
            className: groupClassName,
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/createElement$1(Fragment, null, addonBefore, /*#__PURE__*/createElement$1(Input, _extends({
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
var InputField = createComponent(function (props) {
  var inputFieldProps = useInputFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

export { Input, InputField, InputIcon };
