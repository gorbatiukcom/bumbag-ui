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
var utils_uniqueId = require('../utils/uniqueId.js');
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
var utils_OutsideClickHandler = require('../utils/OutsideClickHandler.js');
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
require('../Spinner/Spinner.js');
require('../Button/Button.js');
var VisuallyHidden = require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
var Button_index = require('../Button/index.js');
var FieldWrapper_FieldWrapper_styles = require('../FieldWrapper.styles-1648fae6.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
var Card_index = require('../Card/index.js');
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
var Disclosure_index = require('../Disclosure/index.js');
require('../Label.styles-34e250ed.js');
var Label_Label = require('../Label/Label.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      description = props.description,
      hint = props.hint,
      isOptional = props.isOptional,
      label = props.label,
      labelType = props.labelType,
      isRequired = props.isRequired,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      validationText = props.validationText,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "description", "hint", "isOptional", "label", "labelType", "isRequired", "state", "tooltip", "tooltipTriggerComponent", "validationText"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.FieldWrapper,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var labelClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.Label,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelWrapperClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.LabelWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var descriptionClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.DescriptionText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'DescriptionText'
  });
  var hintClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.HintText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HintText'
  });
  var optionalClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.OptionalText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'OptionalText'
  });
  var requiredClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.RequiredText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'RequiredText'
  });
  var validationClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.ValidationText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ValidationText'
  });
  var tooltipTriggerClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.TooltipTrigger,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'TooltipTrigger'
  });
  var tooltipPopoverClassName = utils_useClassName.useClassName({
    style: FieldWrapper_FieldWrapper_styles.TooltipPopover,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'TooltipPopover'
  });
  var disclosure = Disclosure_index.Disclosure.useState();
  var uid = utils_uniqueId.useUniqueId();
  var elementProps = {
    isRequired: isRequired,
    id: uid,
    state: state
  };
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: labelWrapperClassName
    }, /*#__PURE__*/React.createElement(Box_Box.Box, {
      display: "flex",
      alignItems: "center",
      lineHeight: "none"
    }, typeof label === 'string' ? /*#__PURE__*/React.createElement(React.Fragment, null, labelType === 'legend' ? /*#__PURE__*/React.createElement(Label_Label.Label, {
      use: "legend",
      className: labelClassName
    }, label) :
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(Label_Label.Label, {
      className: labelClassName,
      htmlFor: uid
    }, label)) : label, isOptional && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: optionalClassName
    }, "OPTIONAL"), isRequired && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: requiredClassName
    }, "*"), tooltip && /*#__PURE__*/React.createElement(Box_Box.Box, {
      position: "relative",
      marginLeft: "minor-2"
    }, /*#__PURE__*/React.createElement(utils_OutsideClickHandler.OutsideClickHandler, {
      onOutsideClick: disclosure.hide
    }, tooltipTriggerComponent ? React.cloneElement(tooltipTriggerComponent, {
      onClick: disclosure.toggle
    }) : /*#__PURE__*/React.createElement(Button_index.Button, {
      className: tooltipTriggerClassName,
      onClick: disclosure.toggle
    }, /*#__PURE__*/React.createElement(VisuallyHidden.VisuallyHidden, null, "Toggle tooltip"), /*#__PURE__*/React.createElement(Icon_Icon.Icon, {
      "aria-hidden": true,
      icon: "question-circle",
      verticalAlign: "-0.125rem"
    }))), disclosure.visible && /*#__PURE__*/React.createElement(Card_index.Card, {
      className: tooltipPopoverClassName
    }, typeof tooltip === 'string' ? /*#__PURE__*/React.createElement(Text_index.Text, {
      fontSize: "150"
    }, tooltip) : tooltip))), description && /*#__PURE__*/React.createElement(Box_Box.Box, {
      marginTop: "minor-1"
    }, typeof description === 'string' ? /*#__PURE__*/React.createElement(Text_index.Text.Block, {
      className: descriptionClassName
    }, description) : description)), typeof children === 'function' ?
    /*
    // @ts-ignore */
    children({
      elementProps: elementProps
    }) : React.cloneElement(children, elementProps), hint && /*#__PURE__*/React.createElement(Box_Box.Box, {
      marginTop: "minor-1"
    }, typeof hint === 'string' ? /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: hintClassName
    }, hint) : hint), validationText && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: validationClassName,
      color: state
    }, validationText))
  });
}, {
  themeKey: 'FieldWrapper'
});
var FieldWrapper = utils_createComponent.createComponent(function (props) {
  var textProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    enableRenderPropsComposition: false,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'FieldWrapper'
  },
  themeKey: 'FieldWrapper'
});

exports.FieldWrapper = FieldWrapper;
