import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Flex.styles.js';
import { a as FieldStack$1 } from '../FieldStack.styles.js';
import '../Stack.styles.js';
import { Stack } from '../Stack/Stack.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var stackProps = Stack.useProps(props);
  var className = useClassName({
    style: FieldStack$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: stackProps.className
  });
  return _objectSpread2(_objectSpread2({}, stackProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    orientation: 'vertical',
    spacing: 'major-2'
  },
  themeKey: 'FieldStack'
});
var FieldStack = createComponent(function (props) {
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
    displayName: 'FieldStack'
  },
  themeKey: 'FieldStack'
});

export { FieldStack };
