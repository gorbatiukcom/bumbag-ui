import { createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
import { omit } from '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import { useUniqueId } from '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
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
import '../utils/getHiddenInputStyles.js';
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
import '../Text/index.js';
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
import { Label } from '../Label/Label.js';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper.js';
import { a as Checkbox$1, b as CheckboxIcon, H as HiddenCheckbox, c as CheckboxLabel, d as CheckboxField$1 } from '../Checkbox.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var autoFocus = props.autoFocus,
      checked = props.checked,
      checkboxRef = props.checkboxRef,
      inputProps = props.inputProps,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      state = props.state,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "checkboxRef", "inputProps", "defaultChecked", "disabled", "indeterminate", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "state", "value"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: Checkbox$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var checkboxIconClassName = useClassName({
    style: CheckboxIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var hiddenCheckboxClassName = useClassName({
    style: HiddenCheckbox,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HiddenInput'
  });
  var checkboxLabelClassName = useClassName({
    style: CheckboxLabel,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelId = useUniqueId();
  var checkboxId = useUniqueId();
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-describedby': labelId,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Box$1, _extends({
      ref: checkboxRef,
      use: "input",
      className: hiddenCheckboxClassName // @ts-ignore
      ,
      autoFocus: autoFocus,
      checked: checked,
      defaultChecked: defaultChecked,
      disabled: disabled,
      id: checkboxId // @ts-ignore
      ,
      indeterminate: indeterminate,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      name: name,
      type: "checkbox" // @ts-ignore
      ,
      value: value
    }, inputProps)), /*#__PURE__*/createElement$1(Box$1, {
      className: checkboxIconClassName
    }), label && /*#__PURE__*/createElement$1(Label, {
      use: "span",
      id: labelId,
      className: checkboxLabelClassName,
      htmlFor: checkboxId,
      marginLeft: "minor-2"
    }, label))
  });
}, {
  themeKey: 'Checkbox'
});
var Checkbox = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Checkbox'
  },
  defaultProps: {
    use: 'label'
  },
  themeKey: 'Checkbox'
}); ////////////////////////////////////////////////////////////////

var useCheckboxFieldProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var autoFocus = props.autoFocus,
      checked = props.checked,
      checkboxLabel = props.checkboxLabel,
      checkboxProps = props.checkboxProps,
      checkboxRef = props.checkboxRef,
      description = props.description,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      hint = props.hint,
      indeterminate = props.indeterminate,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      overrides = props.overrides,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      validationText = props.validationText,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "checkboxLabel", "checkboxProps", "checkboxRef", "description", "defaultChecked", "disabled", "hint", "indeterminate", "isOptional", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "overrides", "state", "tooltip", "tooltipTriggerComponent", "validationText", "value"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: CheckboxField$1,
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
      labelType: "legend",
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/createElement$1(Checkbox, _extends({
        autoFocus: autoFocus,
        checked: checked,
        defaultChecked: defaultChecked,
        disabled: disabled,
        checkboxRef: checkboxRef,
        indeterminate: indeterminate,
        isRequired: isRequired,
        label: checkboxLabel,
        name: name,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        overrides: overrides,
        state: state,
        value: value
      }, omit(elementProps, 'id'), checkboxProps, {
        inputProps: _objectSpread2({
          id: elementProps.id
        }, checkboxProps.inputProps)
      }));
    })
  });
}, {
  defaultProps: {
    checkboxProps: {}
  },
  themeKey: 'CheckboxField'
});
var CheckboxField = createComponent(function (props) {
  var checkboxFieldProps = useCheckboxFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: checkboxFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'CheckboxField'
  },
  themeKey: 'CheckboxField'
});

export { Checkbox, CheckboxField };
