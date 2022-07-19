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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as SpinnerWrapper, b as Spinner$1, T as TrackCircle, L as LoaderCircle } from '../Spinner.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var boxProps = Box$1.useProps(props);
  var className = useClassName({
    style: SpinnerWrapper,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var spinnerClassName = useClassName({
    style: Spinner$1,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'vector'
  });
  var trackCircleClassName = useClassName({
    style: TrackCircle,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'trackCircle'
  });
  var loaderCircleClassName = useClassName({
    style: LoaderCircle,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'loaderCircle'
  });
  var children = /*#__PURE__*/createElement$1("svg", {
    viewBox: "22 22 44 44",
    className: spinnerClassName
  }, props.hasTrack && /*#__PURE__*/createElement$1("circle", {
    cx: "44",
    cy: "44",
    r: "20",
    fill: "none",
    strokeWidth: "4",
    className: trackCircleClassName
  }), /*#__PURE__*/createElement$1("circle", {
    cx: "44",
    cy: "44",
    r: "20",
    fill: "none",
    strokeWidth: "4",
    className: loaderCircleClassName
  }));
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    color: 'primary',
    duration: '0.6s',
    perimeter: '40%'
  },
  themeKey: 'Spinner'
});
var Spinner = createComponent(function (props) {
  var spinnerProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: spinnerProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Spinner'
  },
  themeKey: 'Spinner'
});

export { Spinner };
