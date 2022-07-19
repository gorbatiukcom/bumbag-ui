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
import { omitCSSProps } from '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import { useStyle } from '../utils/useStyle.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import { mergeRefs } from '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import { pickHTMLProps } from '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box as Box$1 } from 'reakit';
import { s as style, a as Box$2 } from '../Box.styles.js';

var useProps = createHook(function (_props, _ref) {
  var disableCSSProps = _ref.disableCSSProps,
      themeKey = _ref.themeKey;
  var props = _props;
  var _props2 = props,
      use = _props2.use;

  if (use && typeof use !== 'string' && use.useProps) {
    var newProps = use.useProps(_objectSpread2(_objectSpread2({}, props), {}, {
      use: undefined
    }));
    props = _objectSpread2(_objectSpread2({}, props), newProps);
  } // Convert CSS props to an object.
  // Example input:
  // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }


  var style$1 = useStyle(props, {
    disableCSSProps: disableCSSProps
  }); // Append the styles from above as a className on the DOM element (with precedence).

  var className = useClassName({
    style: style,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      style: style$1
    }),
    themeKey: themeKey,
    prevClassName: props.className
  }); // Append the Box styles as a className on the DOM element.

  className = useClassName({
    style: Box$2,
    styleProps: props,
    prevClassName: className,
    themeKey: themeKey
  }); // Pick out and invalid HTML props & omit the CSS props.

  var htmlProps = omitCSSProps(pickHTMLProps(_objectSpread2(_objectSpread2({}, props), {}, {
    className: className
  }))); // const htmlProps = { ...props, className };

  if (props.elementRef) {
    // @ts-ignore
    htmlProps.ref = mergeRefs(props.elementRef, props.ref);
  }

  if (props.wrapElement) {
    // @ts-ignore
    htmlProps.wrapElement = props.wrapElement;
  }

  return _objectSpread2({}, htmlProps);
}, {
  themeKey: 'Box'
});
var Box = createComponent(function (props) {
  var boxProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box$1,
    use: props.use,
    htmlProps: boxProps
  });
}, {
  attach: {
    displayName: 'Box',
    useProps: useProps
  },
  themeKey: 'Box'
});

export { Box };
