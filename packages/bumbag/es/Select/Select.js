import { useRef, useState, useCallback, createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import ConditionalWrap from 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
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
import { useUniqueId } from '../utils/uniqueId.js';
import '../utils/palette.js';
import { mergeRefs } from '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import '../utils/fieldAdaptors.js';
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
import '../Input.styles.js';
import 'react-input-mask';
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
import '../Input/Input.js';
import '../Input/index.js';
import { a as SelectWrapper, d as SelectIcon, e as SelectSpinner, L as LabelWrapper, c as LabelWrapperBackground, b as Select$1, f as SelectField$1 } from '../Select.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var containLabel = props.containLabel,
      disabled = props.disabled,
      isLoading = props.isLoading,
      isRequired = props.isRequired,
      label = props.label,
      onChange = props.onChange,
      options = props.options,
      _placeholder = props.placeholder,
      selectProps = props.selectProps,
      selectRef = props.selectRef,
      _props$showLabelOptio = props.showLabelOption,
      showLabelOption = _props$showLabelOptio === void 0 ? true : _props$showLabelOptio,
      _props$showPlaceholde = props.showPlaceholderOption,
      showPlaceholderOption = _props$showPlaceholde === void 0 ? true : _props$showPlaceholde,
      state = props.state,
      restProps = _objectWithoutPropertiesLoose(props, ["containLabel", "disabled", "isLoading", "isRequired", "label", "onChange", "options", "placeholder", "selectProps", "selectRef", "showLabelOption", "showPlaceholderOption", "state"]);

  var ref = useRef();
  var uid = useUniqueId();

  var _useLabelPlaceholder = useLabelPlaceholder(_objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var placeholder = _placeholder;

  if (isLoading && options.length === 0) {
    placeholder = 'Loading...';
  }

  var _React$useState = useState(Boolean(!props.defaultValue && !props.value && (label || placeholder))),
      isPlaceholderSelected = _React$useState[0],
      setIsPlaceholderSelected = _React$useState[1];

  var handleChange = useCallback(function (e) {
    setIsPlaceholderSelected(false);
    onChange && onChange(e);
  }, [onChange]);
  var wrapperClassName = useClassName({
    style: SelectWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper',
    prevClassName: restProps.className
  });
  var iconClassName = useClassName({
    style: SelectIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var spinnerClassName = useClassName({
    style: SelectSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var labelWrapperClassName = useClassName({
    style: LabelWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused || !isPlaceholderSelected
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = useClassName({
    style: LabelWrapperBackground,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused || !isPlaceholderSelected
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  });
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, omitCSSProps(restProps)), {}, {
    id: uid
  }, selectProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: mergeRefs(ref, selectRef, props.elementRef),
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/createElement$1(Box$1, _extends({
        className: wrapperClassName
      }, pickCSSProps(props)), label && /*#__PURE__*/createElement$1(Fragment, null, !containLabel && /*#__PURE__*/createElement$1(Box$1, {
        className: labelWrapperBackgroundClassName
      }, /*#__PURE__*/createElement$1(Text, {
        opacity: "0"
      }, label)), /*#__PURE__*/createElement$1(Box$1, {
        className: labelWrapperClassName
      }, /*#__PURE__*/createElement$1(Text, {
        use: "label",
        htmlFor: (selectProps === null || selectProps === void 0 ? void 0 : selectProps.id) || uid
      }, label))), children, isLoading ? /*#__PURE__*/createElement$1(Spinner, {
        className: spinnerClassName,
        color: "text"
      }) : /*#__PURE__*/createElement$1(Icon, {
        className: iconClassName,
        icon: "chevron-down"
      }));
    }
  }));
  var color = 'text';

  if (isPlaceholderSelected) {
    color = 'gray300';

    if (label) {
      color = 'transparent';
    }
  }

  var className = useClassName({
    style: Select$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      color: color,
      hasIcon: true,
      isPlaceholderSelected: isPlaceholderSelected
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    disabled: disabled,
    onChange: handleChange,
    children: /*#__PURE__*/createElement$1(Fragment, null, (label && showLabelOption || placeholder && showPlaceholderOption) && /*#__PURE__*/createElement$1("option", {
      disabled: typeof restProps.value !== 'undefined' || !isPlaceholderSelected,
      value: ""
    }, label || placeholder), options.map(function (option, i) {
      return /*#__PURE__*/createElement$1("option", {
        key: i // eslint-disable-line
        ,
        disabled: disabled || option.disabled,
        value: option.value
      }, option.label);
    }))
  });
}, {
  defaultProps: {
    variant: 'bordered'
  },
  themeKey: 'Select'
});
var Select = createComponent(function (props) {
  var selectProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: selectProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Select'
  },
  defaultProps: {
    use: 'select'
  },
  themeKey: 'Select'
}); ////////////////////////////////////////////////////////////////

var useSelectFieldProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var addonAfter = props.addonAfter,
      addonBefore = props.addonBefore,
      children = props.children,
      containLabel = props.containLabel,
      autoFocus = props.autoFocus,
      defaultValue = props.defaultValue,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      selectProps = props.selectProps,
      isLoading = props.isLoading,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      orientation = props.orientation,
      label = props.label,
      name = props.name,
      options = props.options,
      size = props.size,
      placeholder = props.placeholder,
      showLabelOption = props.showLabelOption,
      showPlaceholderOption = props.showPlaceholderOption,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      selectRef = props.selectRef,
      validationText = props.validationText,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "children", "containLabel", "autoFocus", "defaultValue", "description", "disabled", "hint", "selectProps", "isLoading", "isOptional", "isRequired", "orientation", "label", "name", "options", "size", "placeholder", "showLabelOption", "showPlaceholderOption", "state", "tooltip", "tooltipTriggerComponent", "value", "onBlur", "onChange", "onFocus", "overrides", "selectRef", "validationText", "variant"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: SelectField$1,
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
      validationText: validationText,
      variant: variant
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/createElement$1(ConditionalWrap, {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/createElement$1(Group, {
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/createElement$1(Fragment, null, addonBefore, /*#__PURE__*/createElement$1(Select, _extends({
        autoFocus: autoFocus,
        containLabel: containLabel,
        defaultValue: defaultValue,
        disabled: disabled,
        isLoading: isLoading,
        isRequired: isRequired,
        name: name,
        size: size,
        options: options,
        placeholder: placeholder,
        selectProps: selectProps,
        selectRef: selectRef,
        showLabelOption: showLabelOption,
        showPlaceholderOption: showPlaceholderOption,
        state: state,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        overrides: overrides,
        variant: variant
      }, elementProps)), addonAfter));
    })
  });
}, {
  themeKey: 'SelectField'
});
var SelectField = createComponent(function (props) {
  var SelectFieldProps = useSelectFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: SelectFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SelectField'
  },
  themeKey: 'SelectField'
});

export { Select, SelectField };
