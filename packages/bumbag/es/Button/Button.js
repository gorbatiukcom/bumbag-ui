import { createElement as createElement$1, Fragment } from 'react';
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
import '../theme/palette.js';
import { Button as Button$1, useButton } from 'reakit';
import { a as Button$2, b as ButtonIcon, c as ButtonSpinnerWrapper, d as ButtonSpinner } from '../Button.styles.js';
import '../Box.styles.js';
import { Box } from '../Box/Box.js';
import '../Flex.styles.js';
import { Flex } from '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import { Spinner } from '../Spinner/Spinner.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var disabled = props.disabled,
      focusable = props.focusable,
      iconAfter = props.iconAfter,
      iconAfterProps = props.iconAfterProps,
      iconBefore = props.iconBefore,
      iconBeforeProps = props.iconBeforeProps,
      ignoreGrayOverride = props.ignoreGrayOverride,
      spinnerProps = props.spinnerProps,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      htmlProps = _objectWithoutPropertiesLoose(props, ["disabled", "focusable", "iconAfter", "iconAfterProps", "iconBefore", "iconBeforeProps", "ignoreGrayOverride", "spinnerProps", "unstable_clickOnEnter", "unstable_clickOnSpace"]);

  if (props.palette === 'gray' && props.variant === 'default') {
    props.palette = 'grayTint';
  }

  var buttonProps = useButton({
    disabled: disabled,
    focusable: focusable,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace
  }, htmlProps);
  htmlProps = Box.useProps(_objectSpread2(_objectSpread2({}, htmlProps), buttonProps));
  var className = useClassName({
    style: Button$2,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  var iconBeforeClassName = useClassName({
    style: ButtonIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isBefore: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var iconAfterClassName = useClassName({
    style: ButtonIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isAfter: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var spinnerWrapperClassName = useClassName({
    style: ButtonSpinnerWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'SpinnerWrapper'
  });
  var spinnerClassName = useClassName({
    style: ButtonSpinner,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Spinner'
  });
  var spinnerColor = props.palette;

  if (props.variant === 'default') {
    spinnerColor = props.palette + "Inverted";
  }

  if (props.palette === 'default') {
    spinnerColor = 'defaultInverted';
  }

  var spinnerTrackColor;

  if (props.variant === 'default') {
    spinnerTrackColor = props.palette + "300";
  }

  if (props.palette === 'default') {
    spinnerColor = 'gray100';
  }

  var children = /*#__PURE__*/createElement$1(Fragment, null, props.isLoading && /*#__PURE__*/createElement$1(Flex, {
    className: spinnerWrapperClassName
  }, /*#__PURE__*/createElement$1(Spinner, _extends({
    use: Flex,
    className: spinnerClassName,
    color: spinnerColor,
    trackColor: spinnerTrackColor,
    hasTrack: true
  }, spinnerProps))), /*#__PURE__*/createElement$1(ConditionalWrap, {
    condition: props.isLoading,
    wrap: function wrap(children) {
      return /*#__PURE__*/createElement$1(Text, null, children);
    }
  }, /*#__PURE__*/createElement$1(Fragment, null, iconBefore && /*#__PURE__*/createElement$1(Icon, _extends({
    className: iconBeforeClassName,
    icon: iconBefore
  }, iconBeforeProps)), htmlProps.children, iconAfter && /*#__PURE__*/createElement$1(Icon, _extends({
    className: iconAfterClassName,
    icon: iconAfter
  }, iconAfterProps)))));
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    disabled: false,
    iconAfter: undefined,
    iconBefore: undefined,
    isLoading: false,
    isStatic: false,
    variant: 'default',
    palette: 'default',
    size: 'default',
    type: 'button'
  },
  themeKey: 'Button'
});
var Button = createComponent(function (props) {
  var buttonProps = useProps(props);
  return createElement({
    children: props.children,
    component: Button$1,
    use: props.use,
    htmlProps: buttonProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Button'
  },
  themeKey: 'Button'
});

export { Button };
