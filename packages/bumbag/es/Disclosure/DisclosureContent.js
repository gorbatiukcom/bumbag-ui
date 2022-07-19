import React from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useDisclosureContent } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as DisclosureContent$1 } from '../Disclosure.styles.js';
import { DisclosureContext } from './DisclosureState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var disclosureContext = React.useContext(DisclosureContext);
  props = _objectSpread2(_objectSpread2({}, props), disclosureContext.disclosure);

  var _props = props,
      baseId = _props.baseId,
      visible = _props.visible,
      animating = _props.animating,
      animated = _props.animated,
      stopAnimation = _props.stopAnimation,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["baseId", "visible", "animating", "animated", "stopAnimation"]);

  var disclosureContentProps = useDisclosureContent({
    baseId: process.env.NODE_ENV === 'test' ? 'test' : baseId,
    visible: visible,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), disclosureContentProps));
  var className = useClassName({
    style: DisclosureContent$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Disclosure.Content'
});
var DisclosureContent = createComponent(function (props) {
  var disclosureContentProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: disclosureContentProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Disclosure.Content'
  },
  themeKey: 'Disclosure.Content'
});

export { DisclosureContent };
