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
import { Box as Box$1 } from 'reakit';
import '../Box.styles.js';
import { Box } from '../Box/Box.js';
import { a as Avatar$1 } from '../Avatar.styles.js';
import '../Image.styles.js';
import { Image } from '../Image/Image.js';

var useProps = createHook(function (props, _ref) {
  if (props === void 0) {
    props = {};
  }

  var themeKey = _ref.themeKey;
  var imageProps = Image.useProps(_objectSpread2({}, props), {
    themeKey: 'Avatar'
  });
  var className = useClassName({
    style: Avatar$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: imageProps.className
  });
  var children;

  if (props.initials) {
    children = props.initials.split(' ').length === 2 ? props.initials.match(/\b\w/g) : props.initials.substring(0, 2);
  }

  return _objectSpread2(_objectSpread2({}, imageProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    size: 'default'
  },
  themeKey: 'Avatar'
});
var Avatar = createComponent(function (props) {
  var imageProps = useProps(props);
  var use = props.use;

  if (props.initials) {
    use = Box;
  }

  return createElement({
    component: Box$1,
    use: use,
    htmlProps: imageProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Avatar'
  },
  defaultProps: {
    use: 'img'
  },
  themeKey: 'Avatar'
});

export { Avatar };
