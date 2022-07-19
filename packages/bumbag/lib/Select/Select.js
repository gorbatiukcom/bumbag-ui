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
var utils_uniqueId = require('../utils/uniqueId.js');
require('../utils/palette.js');
var utils_mergeRefs = require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/bindFns.js');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('../utils/fieldAdaptors.js');
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
require('../Input.styles-a731033b.js');
require('react-input-mask');
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
require('../Input/Input.js');
require('../Input/index.js');
var Select_Select_styles = require('../Select.styles-ff72e480.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConditionalWrap__default = /*#__PURE__*/_interopDefaultLegacy(ConditionalWrap);

var useProps = utils_createHook.createHook(function (props, _ref) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["containLabel", "disabled", "isLoading", "isRequired", "label", "onChange", "options", "placeholder", "selectProps", "selectRef", "showLabelOption", "showPlaceholderOption", "state"]);

  var ref = React.useRef();
  var uid = utils_uniqueId.useUniqueId();

  var _useLabelPlaceholder = utils_useLabelPlaceholder.useLabelPlaceholder(_rollupPluginBabelHelpers._objectSpread2({
    enabled: Boolean(label)
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      labelPlaceholderInputProps = _useLabelPlaceholder.inputProps;

  var placeholder = _placeholder;

  if (isLoading && options.length === 0) {
    placeholder = 'Loading...';
  }

  var _React$useState = React.useState(Boolean(!props.defaultValue && !props.value && (label || placeholder))),
      isPlaceholderSelected = _React$useState[0],
      setIsPlaceholderSelected = _React$useState[1];

  var handleChange = React.useCallback(function (e) {
    setIsPlaceholderSelected(false);
    onChange && onChange(e);
  }, [onChange]);
  var wrapperClassName = utils_useClassName.useClassName({
    style: Select_Select_styles.SelectWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper',
    prevClassName: restProps.className
  });
  var iconClassName = utils_useClassName.useClassName({
    style: Select_Select_styles.SelectIcon,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var spinnerClassName = utils_useClassName.useClassName({
    style: Select_Select_styles.SelectSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var labelWrapperClassName = utils_useClassName.useClassName({
    style: Select_Select_styles.LabelWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused || !isPlaceholderSelected
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = utils_useClassName.useClassName({
    style: Select_Select_styles.LabelWrapperBackground,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused || !isPlaceholderSelected
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  });
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_cssProps.omitCSSProps(restProps)), {}, {
    id: uid
  }, selectProps), labelPlaceholderInputProps), {}, {
    className: undefined,
    elementRef: utils_mergeRefs.mergeRefs(ref, selectRef, props.elementRef),
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
        className: wrapperClassName
      }, utils_cssProps.pickCSSProps(props)), label && /*#__PURE__*/React.createElement(React.Fragment, null, !containLabel && /*#__PURE__*/React.createElement(Box_Box.Box, {
        className: labelWrapperBackgroundClassName
      }, /*#__PURE__*/React.createElement(Text_index.Text, {
        opacity: "0"
      }, label)), /*#__PURE__*/React.createElement(Box_Box.Box, {
        className: labelWrapperClassName
      }, /*#__PURE__*/React.createElement(Text_index.Text, {
        use: "label",
        htmlFor: (selectProps === null || selectProps === void 0 ? void 0 : selectProps.id) || uid
      }, label))), children, isLoading ? /*#__PURE__*/React.createElement(Spinner_Spinner.Spinner, {
        className: spinnerClassName,
        color: "text"
      }) : /*#__PURE__*/React.createElement(Icon_Icon.Icon, {
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

  var className = utils_useClassName.useClassName({
    style: Select_Select_styles.Select,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      color: color,
      hasIcon: true,
      isPlaceholderSelected: isPlaceholderSelected
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    'aria-invalid': state === 'danger',
    'aria-required': isRequired,
    disabled: disabled,
    onChange: handleChange,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, (label && showLabelOption || placeholder && showPlaceholderOption) && /*#__PURE__*/React.createElement("option", {
      disabled: typeof restProps.value !== 'undefined' || !isPlaceholderSelected,
      value: ""
    }, label || placeholder), options.map(function (option, i) {
      return /*#__PURE__*/React.createElement("option", {
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
var Select = utils_createComponent.createComponent(function (props) {
  var selectProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useSelectFieldProps = utils_createHook.createHook(function (props, _ref2) {
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
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "children", "containLabel", "autoFocus", "defaultValue", "description", "disabled", "hint", "selectProps", "isLoading", "isOptional", "isRequired", "orientation", "label", "name", "options", "size", "placeholder", "showLabelOption", "showPlaceholderOption", "state", "tooltip", "tooltipTriggerComponent", "value", "onBlur", "onChange", "onFocus", "overrides", "selectRef", "validationText", "variant"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Select_Select_styles.SelectField,
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
      validationText: validationText,
      variant: variant
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/React.createElement(ConditionalWrap__default['default'], {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/React.createElement(Group_Group.Group, {
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, addonBefore, /*#__PURE__*/React.createElement(Select, _rollupPluginBabelHelpers._extends({
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
var SelectField = utils_createComponent.createComponent(function (props) {
  var SelectFieldProps = useSelectFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Select = Select;
exports.SelectField = SelectField;
