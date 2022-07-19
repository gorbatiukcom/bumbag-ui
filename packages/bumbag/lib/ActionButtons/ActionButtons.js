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
var ActionButtons_ActionButtons_styles = require('../ActionButtons.styles-1c8a65ac.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
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
var Button_index = require('../Button/index.js');
require('../Set.styles-ac954f46.js');
var Set_Set = require('../Set/Set.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var addonButtons = props.addonButtons,
      cancelProps = props.cancelProps,
      cancelText = props.cancelText,
      isLoading = props.isLoading,
      onClickCancel = props.onClickCancel,
      onClickSubmit = props.onClickSubmit,
      overrides = props.overrides,
      palette = props.palette,
      size = props.size,
      submitProps = props.submitProps,
      submitText = props.submitText,
      type = props.type,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["addonButtons", "cancelProps", "cancelText", "isLoading", "onClickCancel", "onClickSubmit", "overrides", "palette", "size", "submitProps", "submitText", "type"]);

  var setProps = Set_Set.Set.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }), {
    themeKey: 'ActionButtons'
  });
  var className = utils_useClassName.useClassName({
    style: ActionButtons_ActionButtons_styles.ActionButtons,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: setProps.className
  });
  var children = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button_index.Button, _rollupPluginBabelHelpers._extends({
    onClick: onClickCancel,
    overrides: overrides,
    size: size
  }, cancelProps), cancelText), addonButtons, /*#__PURE__*/React.createElement(Button_index.Button, _rollupPluginBabelHelpers._extends({
    isLoading: isLoading,
    onClick: onClickSubmit,
    overrides: overrides,
    palette: palette,
    size: size,
    type: type
  }, submitProps), submitText));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, setProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    addonButtons: undefined,
    cancelProps: {},
    cancelText: 'Cancel',
    isLoading: false,
    onClickSubmit: undefined,
    onClickCancel: undefined,
    palette: 'primary',
    submitProps: {},
    submitText: 'Submit',
    type: 'submit'
  },
  themeKey: 'ActionButtons'
});
var ActionButtons = utils_createComponent.createComponent(function (props) {
  var actionButtonsProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: actionButtonsProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'ActionButtons'
  },
  themeKey: 'ActionButtons'
});

exports.ActionButtons = ActionButtons;
