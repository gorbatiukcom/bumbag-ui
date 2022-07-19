import { useRef, useEffect } from 'react';
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
import { Box as Box$1 } from '../Box/Box.js';
import { a as Badge$1 } from '../Badge.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var ref = useRef();
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref
  }));
  var className = useClassName({
    style: Badge$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  useEffect(function () {
    if (ref && ref.current) {
      // @ts-ignore
      var parentElement = ref.current.parentElement;
      parentElement.setAttribute('style', 'position:relative;');
    }
  }, []);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    palette: 'primary'
  },
  themeKey: 'Badge'
});
var Badge = createComponent(function (props) {
  var badgeProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: badgeProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Badge'
  },
  defaultProps: {},
  themeKey: 'Badge'
});

export { Badge };
