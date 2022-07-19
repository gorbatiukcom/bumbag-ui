import { createElement as createElement$1 } from 'react';
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
import { Portal as Portal$1 } from 'reakit';
import '../Box.styles.js';
import { Box } from '../Box/Box.js';
import { a as Portal$2 } from '../Portal.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var boxProps = Box.useProps(props);
  var className = useClassName({
    style: Portal$2,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    children: /*#__PURE__*/createElement$1(Box, props, boxProps.children),
    className: className
  });
}, {
  themeKey: 'Portal'
});
var Portal = createComponent(function (props) {
  var portalProps = useProps(props);
  return createElement({
    children: props.children,
    component: Portal$1,
    use: props.use,
    htmlProps: portalProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Portal'
  },
  themeKey: 'Portal'
});

export { Portal };
