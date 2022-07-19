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
require('../Rover.styles-6d58106f.js');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
var Rover_index = require('../Rover/index.js');
var OptionButtons_OptionButtons_styles = require('../OptionButtons.styles-e038a916.js');
var OptionButtons_OptionButton = require('./OptionButton.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var borderRadius = props.borderRadius,
      children = props.children,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      isFullWidth = props.isFullWidth,
      readOnly = props.readOnly,
      onBlur = props.onBlur,
      onChange = props.onChange,
      options = props.options,
      orientation = props.orientation,
      overrides = props.overrides,
      palette = props.palette,
      size = props.size,
      type = props.type,
      value = props.value,
      verticalBelow = props.verticalBelow,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["borderRadius", "children", "defaultValue", "disabled", "isFullWidth", "readOnly", "onBlur", "onChange", "options", "orientation", "overrides", "palette", "size", "type", "value", "verticalBelow"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: OptionButtons_OptionButtons_styles.OptionButtons,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var wrapperClassName = utils_useClassName.useClassName({
    style: OptionButtons_OptionButtons_styles.OptionButtonsWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper'
  });

  var _useOptionsState = utils_useOptionsState.useOptionsState({
    defaultValue: defaultValue,
    onBlur: onBlur,
    onChange: onChange,
    type: type,
    value: value
  }),
      getOptionItemProps = _useOptionsState.getOptionItemProps;

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    'aria-disabled': disabled,
    className: className,
    children: /*#__PURE__*/React.createElement(Rover_index.Rover.State, null, /*#__PURE__*/React.createElement(Group_Group.Group, {
      className: wrapperClassName,
      borderRadius: borderRadius,
      orientation: orientation,
      verticalBelow: verticalBelow
    }, options.map(function (_ref2, index) {
      var label = _ref2.label,
          option = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["label"]);

      return /*#__PURE__*/React.createElement(Rover_index.Rover, {
        key: index
      }, function (roverProps) {
        return /*#__PURE__*/React.createElement(OptionButtons_OptionButton.OptionButton, _rollupPluginBabelHelpers._extends({}, roverProps, getOptionItemProps({
          readOnly: readOnly,
          value: option.value
        }), {
          disabled: disabled // @ts-ignore
          ,
          isFullWidth: isFullWidth,
          overrides: overrides,
          palette: palette,
          readOnly: readOnly,
          size: size
        }, option), label);
      });
    })))
  });
}, {
  themeKey: 'OptionButtons'
});
var OptionButtons = utils_createComponent.createComponent(function (props) {
  var htmlProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'OptionButtons'
  },
  themeKey: 'OptionButtons'
}); //////////////////////////////////////////////////////////////////

var useOptionButtonsFieldProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;

  var borderRadius = props.borderRadius,
      defaultValue = props.defaultValue,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      isFullWidth = props.isFullWidth,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      options = props.options,
      orientation = props.orientation,
      onBlur = props.onBlur,
      onChange = props.onChange,
      overrides = props.overrides,
      palette = props.palette,
      optionButtonsProps = props.optionButtonsProps,
      readOnly = props.readOnly,
      size = props.size,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      type = props.type,
      value = props.value,
      validationText = props.validationText,
      verticalBelow = props.verticalBelow,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["borderRadius", "defaultValue", "description", "disabled", "hint", "isFullWidth", "isOptional", "isRequired", "label", "options", "orientation", "onBlur", "onChange", "overrides", "palette", "optionButtonsProps", "readOnly", "size", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "validationText", "verticalBelow"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: OptionButtons_OptionButtons_styles.OptionButtonsField,
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
    }, function (_ref4) {
      var elementProps = _ref4.elementProps;
      return /*#__PURE__*/React.createElement(OptionButtons, _rollupPluginBabelHelpers._extends({
        borderRadius: borderRadius,
        defaultValue: defaultValue,
        disabled: disabled,
        isFullWidth: isFullWidth,
        onBlur: onBlur,
        onChange: onChange,
        options: options,
        orientation: orientation,
        palette: palette,
        readOnly: readOnly,
        size: size,
        state: state,
        type: type,
        value: value,
        verticalBelow: verticalBelow,
        overrides: overrides
      }, elementProps, optionButtonsProps));
    })
  });
}, {
  themeKey: 'OptionButtonsField'
});
var OptionButtonsField = utils_createComponent.createComponent(function (props) {
  var htmlProps = useOptionButtonsFieldProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'OptionButtonsField'
  },
  defaultProps: {
    use: 'fieldset'
  },
  themeKey: 'OptionButtonsField'
});

exports.OptionButtons = OptionButtons;
exports.OptionButtonsField = OptionButtonsField;
