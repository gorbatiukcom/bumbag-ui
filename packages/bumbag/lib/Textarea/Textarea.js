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
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
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
require('../Label/Label.js');
var FieldWrapper_FieldWrapper = require('../FieldWrapper/FieldWrapper.js');
var Textarea_Textarea_styles = require('../Textarea.styles-47fee52b.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var ref = React.useRef();

  var containLabel = props.containLabel,
      isRequired = props.isRequired,
      state = props.state,
      textareaProps = props.textareaProps,
      textareaRef = props.textareaRef,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["containLabel", "isRequired", "state", "textareaProps", "textareaRef"]);

  var label = (props === null || props === void 0 ? void 0 : props.label) || (textareaProps === null || textareaProps === void 0 ? void 0 : textareaProps.label);

  var _useLabelPlaceholder = utils_useLabelPlaceholder.useLabelPlaceholder(_rollupPluginBabelHelpers._objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var wrapperClassName = utils_useClassName.useClassName({
    style: Textarea_Textarea_styles.TextareaWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper',
    prevClassName: restProps.className
  });
  var labelWrapperClassName = utils_useClassName.useClassName({
    style: Textarea_Textarea_styles.LabelWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = utils_useClassName.useClassName({
    style: Textarea_Textarea_styles.LabelWrapperBackground,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  });
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_cssProps.omitCSSProps(restProps)), textareaProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: utils_mergeRefs.mergeRefs(ref, textareaRef, props.elementRef),
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
      }, /*#__PURE__*/React.createElement(Text_index.Text, null, label))), children);
    }
  }));
  var className = utils_useClassName.useClassName({
    style: Textarea_Textarea_styles.Textarea,
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
  themeKey: 'Textarea'
});
var Textarea = utils_createComponent.createComponent(function (props) {
  var textareaProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, textareaProps), props.mask ? {
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

var useTextareaFieldProps = utils_createHook.createHook(function (props, _ref2) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "autoComplete", "autoFocus", "containLabel", "defaultValue", "description", "disabled", "hint", "textareaProps", "isOptional", "isRequired", "label", "name", "size", "mask", "maxLength", "minLength", "multiple", "pattern", "placeholder", "readOnly", "spellCheck", "step", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "onBlur", "onChange", "onFocus", "overrides", "textareaRef", "variant", "validationText"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Textarea_Textarea_styles.TextareaField,
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
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/React.createElement(Textarea, _rollupPluginBabelHelpers._extends({
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
var TextareaField = utils_createComponent.createComponent(function (props) {
  var textareaFieldProps = useTextareaFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Textarea = Textarea;
exports.TextareaField = TextareaField;
