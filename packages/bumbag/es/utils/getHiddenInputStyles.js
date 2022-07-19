import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { css as css$1 } from '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './pick.js';
import './cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, k as theme } from '../getCSSFromStyleObject.js';
import './isFunction.js';
import './get.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './gradient.js';
import '@emotion/is-prop-valid';
import './OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3;
function getHiddenInputStyles(_ref) {
  var iconClassName = _ref.iconClassName,
      checkedCss = _ref.checkedCss,
      disabledCheckedCss = _ref.disabledCheckedCss,
      disabledCheckedIconCss = _ref.disabledCheckedIconCss,
      disabledUncheckedIconCss = _ref.disabledUncheckedIconCss,
      checkedIconCss = _ref.checkedIconCss,
      uncheckedIconCss = _ref.uncheckedIconCss,
      styleProps = _ref.styleProps,
      themeKey = _ref.themeKey;
  // @ts-ignore
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    height: 1em;\n    width: 1em;\n    overflow: hidden;\n    position: absolute;\n    opacity: 0;\n\n    &:focus {\n      outline: none;\n    }\n\n    & + .", " {\n      ", "\n\n      &::before {\n        ", ";\n\n        & {\n          ", ";\n        }\n      }\n    }\n    &:not(:checked) + .", " {\n      ", "\n    }\n    &[disabled] + .", " {\n      background-color: ", ";\n      box-shadow: unset;\n\n      &::before {\n        ", ";\n        & {\n          ", ";\n        }\n      }\n\n      & {\n        ", ";\n      }\n    }\n    &:focus + .", " {\n      border-color: ", ";\n      box-shadow: ", " 0px 0px 0px 3px !important;\n\n      & {\n        ", ";\n      }\n    }\n    &:not([disabled]):checked + .", " {\n      border-color: ", ";\n      ", ";\n    }\n    &:checked + .", " {\n      ", ";\n\n      &::before {\n        ", ";\n      }\n\n      & {\n        ", ";\n      }\n    }\n    &[disabled]:checked + .", "::before {\n      ", ";\n\n      & {\n        ", ";\n      }\n    }\n\n    & {\n      ", ";\n    }\n  "])), iconClassName, styleProps.state && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          border-color: ", ";\n        "])), palette("" + styleProps.state, {
    dark: styleProps.state + "300"
  })(styleProps)), uncheckedIconCss, theme(themeKey, "unchecked")(styleProps), iconClassName, styleProps.state && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        "])), palette(styleProps.state + "Tint", {
    dark: styleProps.state + "Shade"
  })(styleProps)), iconClassName, palette('white700', {
    dark: 'black200'
  })(styleProps), disabledUncheckedIconCss, theme(themeKey, "uncheckedDisabled")(styleProps), theme(themeKey, "disabled")(styleProps), iconClassName, palette("" + (styleProps.palette || 'primary'), {
    dark: (styleProps.palette || 'primary') + "300"
  })(styleProps), palette((styleProps.palette || 'primary') + "100", {
    dark: (styleProps.palette || 'primary') + "900"
  })(styleProps), theme(themeKey, "focusChecked")(styleProps), iconClassName, palette("" + (styleProps.palette || 'primary'), {
    dark: (styleProps.palette || 'primary') + "300"
  })(styleProps), checkedCss, iconClassName, disabledCheckedCss, checkedIconCss, theme(themeKey, "checked")(styleProps), iconClassName, disabledCheckedIconCss, theme(themeKey, "checkedDisabled")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
}

export { getHiddenInputStyles };
