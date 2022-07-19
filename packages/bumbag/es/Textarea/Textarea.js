import { useRef, createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose, d as _extends } from '../_rollupPluginBabelHelpers.js';
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
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import '../Button/index.js';
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
import { a as TextareaWrapper, L as LabelWrapper, b as LabelWrapperBackground, c as Textarea$1, d as TextareaField$1 } from '../Textarea.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var ref = useRef();

  var containLabel = props.containLabel,
      isRequired = props.isRequired,
      state = props.state,
      textareaProps = props.textareaProps,
      textareaRef = props.textareaRef,
      restProps = _objectWithoutPropertiesLoose(props, ["containLabel", "isRequired", "state", "textareaProps", "textareaRef"]);

  var label = (props === null || props === void 0 ? void 0 : props.label) || (textareaProps === null || textareaProps === void 0 ? void 0 : textareaProps.label);

  var _useLabelPlaceholder = useLabelPlaceholder(_objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var wrapperClassName = useClassName({
    style: TextareaWrapper,
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
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, omitCSSProps(restProps)), textareaProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: mergeRefs(ref, textareaRef, props.elementRef),
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
      }, /*#__PURE__*/createElement$1(Text, null, label))), children);
    }
  }));
  var className = useClassName({
    style: Textarea$1,
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
  themeKey: 'Textarea'
});
var Textarea = createComponent(function (props) {
  var textareaProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: _objectSpread2(_objectSpread2({}, textareaProps), props.mask ? {
      mask: props.mask
    } : {})
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Textarea'
  },
  defaultProps: {
    use: 'textarea'
  },
  themeKey: 'Textarea'
}); ////////////////////////////////////////////////////////////////

var useTextareaFieldProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var children = props.children,
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      containLabel = props.containLabel,
      defaultValue = props.defaultValue,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      textareaProps = props.textareaProps,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      size = props.size,
      mask = props.mask,
      maxLength = props.maxLength,
      minLength = props.minLength,
      multiple = props.multiple,
      pattern = props.pattern,
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
      textareaRef = props.textareaRef,
      variant = props.variant,
      validationText = props.validationText,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "autoComplete", "autoFocus", "containLabel", "defaultValue", "description", "disabled", "hint", "textareaProps", "isOptional", "isRequired", "label", "name", "size", "mask", "maxLength", "minLength", "multiple", "pattern", "placeholder", "readOnly", "spellCheck", "step", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "onBlur", "onChange", "onFocus", "overrides", "textareaRef", "variant", "validationText"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: TextareaField$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
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
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/createElement$1(Textarea, _extends({
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        containLabel: containLabel,
        defaultValue: defaultValue,
        disabled: disabled,
        isRequired: isRequired,
        name: name,
        size: size,
        mask: mask,
        maxLength: maxLength,
        minLength: minLength,
        multiple: multiple,
        pattern: pattern,
        placeholder: placeholder,
        readOnly: readOnly,
        spellCheck: spellCheck,
        step: step,
        state: state,
        type: type,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        overrides: overrides,
        variant: variant,
        textareaRef: textareaRef
      }, elementProps, textareaProps));
    })
  });
}, {
  themeKey: 'TextareaField'
});
var TextareaField = createComponent(function (props) {
  var textareaFieldProps = useTextareaFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textareaFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'TextareaField'
  },
  themeKey: 'TextareaField'
});

export { Textarea, TextareaField };
