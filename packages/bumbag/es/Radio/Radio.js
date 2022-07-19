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
import '../utils/omit.js';
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
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import { useUniqueId } from '../utils/uniqueId.js';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Label.styles.js';
import { Label } from '../Label/Label.js';
import { a as Radio$1, b as RadioIcon, H as HiddenRadio, c as RadioLabel } from '../Radio.styles.js';

var useProps = createHook(function (props, _ref) {
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
      restProps = _objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "defaultChecked", "disabled", "isRequired", "label", "name", "onBlur", "onChange", "onFocus", "overrides", "radioProps", "radioRef", "state", "value"]);

  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = useClassName({
    style: Radio$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var radioIconClassName = useClassName({
    style: RadioIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var hiddenRadioClassName = useClassName({
    style: HiddenRadio,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HiddenInput'
  });
  var radioLabelClassName = useClassName({
    style: RadioLabel,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelId = useUniqueId();
  var radioId = useUniqueId();
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-describedby': labelId,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Box$1, _extends({
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
    }, radioProps)), /*#__PURE__*/createElement$1(Box$1, {
      className: radioIconClassName,
      overrides: overrides
    }), label && /*#__PURE__*/createElement$1(Label, {
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
var Radio = createComponent(function (props) {
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
    displayName: 'Radio'
  },
  defaultProps: {
    use: 'label'
  },
  themeKey: 'Radio'
});

export { Radio };
