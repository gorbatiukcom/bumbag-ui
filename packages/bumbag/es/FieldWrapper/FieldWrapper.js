import { createElement as createElement$1, Fragment, cloneElement } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import { OutsideClickHandler } from '../utils/OutsideClickHandler.js';
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
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import { VisuallyHidden } from 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import { a as FieldWrapper$1, L as Label, b as LabelWrapper, D as DescriptionText, H as HintText, O as OptionalText, R as RequiredText, V as ValidationText, T as TooltipTrigger, c as TooltipPopover } from '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import { Card } from '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import { Disclosure } from '../Disclosure/index.js';
import '../Label.styles.js';
import { Label as Label$1 } from '../Label/Label.js';

var useProps = createHook(function (props, _ref) {
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
      restProps = _objectWithoutPropertiesLoose(props, ["children", "description", "hint", "isOptional", "label", "labelType", "isRequired", "state", "tooltip", "tooltipTriggerComponent", "validationText"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: FieldWrapper$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var labelClassName = useClassName({
    style: Label,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Label'
  });
  var labelWrapperClassName = useClassName({
    style: LabelWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var descriptionClassName = useClassName({
    style: DescriptionText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'DescriptionText'
  });
  var hintClassName = useClassName({
    style: HintText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'HintText'
  });
  var optionalClassName = useClassName({
    style: OptionalText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'OptionalText'
  });
  var requiredClassName = useClassName({
    style: RequiredText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'RequiredText'
  });
  var validationClassName = useClassName({
    style: ValidationText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ValidationText'
  });
  var tooltipTriggerClassName = useClassName({
    style: TooltipTrigger,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'TooltipTrigger'
  });
  var tooltipPopoverClassName = useClassName({
    style: TooltipPopover,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'TooltipPopover'
  });
  var disclosure = Disclosure.useState();
  var uid = useUniqueId();
  var elementProps = {
    isRequired: isRequired,
    id: uid,
    state: state
  };
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, label && /*#__PURE__*/createElement$1(Box$1, {
      className: labelWrapperClassName
    }, /*#__PURE__*/createElement$1(Box$1, {
      display: "flex",
      alignItems: "center",
      lineHeight: "none"
    }, typeof label === 'string' ? /*#__PURE__*/createElement$1(Fragment, null, labelType === 'legend' ? /*#__PURE__*/createElement$1(Label$1, {
      use: "legend",
      className: labelClassName
    }, label) :
    /*#__PURE__*/
    // @ts-ignore
    createElement$1(Label$1, {
      className: labelClassName,
      htmlFor: uid
    }, label)) : label, isOptional && /*#__PURE__*/createElement$1(Box$1, {
      className: optionalClassName
    }, "OPTIONAL"), isRequired && /*#__PURE__*/createElement$1(Box$1, {
      className: requiredClassName
    }, "*"), tooltip && /*#__PURE__*/createElement$1(Box$1, {
      position: "relative",
      marginLeft: "minor-2"
    }, /*#__PURE__*/createElement$1(OutsideClickHandler, {
      onOutsideClick: disclosure.hide
    }, tooltipTriggerComponent ? cloneElement(tooltipTriggerComponent, {
      onClick: disclosure.toggle
    }) : /*#__PURE__*/createElement$1(Button, {
      className: tooltipTriggerClassName,
      onClick: disclosure.toggle
    }, /*#__PURE__*/createElement$1(VisuallyHidden, null, "Toggle tooltip"), /*#__PURE__*/createElement$1(Icon, {
      "aria-hidden": true,
      icon: "question-circle",
      verticalAlign: "-0.125rem"
    }))), disclosure.visible && /*#__PURE__*/createElement$1(Card, {
      className: tooltipPopoverClassName
    }, typeof tooltip === 'string' ? /*#__PURE__*/createElement$1(Text, {
      fontSize: "150"
    }, tooltip) : tooltip))), description && /*#__PURE__*/createElement$1(Box$1, {
      marginTop: "minor-1"
    }, typeof description === 'string' ? /*#__PURE__*/createElement$1(Text.Block, {
      className: descriptionClassName
    }, description) : description)), typeof children === 'function' ?
    /*
    // @ts-ignore */
    children({
      elementProps: elementProps
    }) : cloneElement(children, elementProps), hint && /*#__PURE__*/createElement$1(Box$1, {
      marginTop: "minor-1"
    }, typeof hint === 'string' ? /*#__PURE__*/createElement$1(Box$1, {
      className: hintClassName
    }, hint) : hint), validationText && /*#__PURE__*/createElement$1(Box$1, {
      className: validationClassName,
      color: state
    }, validationText))
  });
}, {
  themeKey: 'FieldWrapper'
});
var FieldWrapper = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
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

export { FieldWrapper };
