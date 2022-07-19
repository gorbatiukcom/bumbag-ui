import { createElement as createElement$1 } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Container.styles.js';
import { Container } from '../Container/Container.js';
import { a as PageContent$1 } from '../Page.styles.js';
import { PageContentWrapper } from './PageContentWrapper.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var overrides = props.overrides,
      wrapperProps = props.wrapperProps,
      restProps = _objectWithoutPropertiesLoose(props, ["overrides", "wrapperProps"]);

  var containerProps = Container.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    wrapElement: function wrapElement(element) {
      return /*#__PURE__*/createElement$1(PageContentWrapper, _extends({
        overrides: overrides
      }, wrapperProps), element);
    }
  }));
  var className = useClassName({
    style: PageContent$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: containerProps.className
  });
  return _objectSpread2(_objectSpread2({}, containerProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    breakpoint: 'tablet',
    isLayout: true
  },
  themeKey: 'PageContent'
});
var PageContent = createComponent(function (props) {
  var pageContentProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: pageContentProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageContent'
  },
  themeKey: 'PageContent'
});

export { PageContent };
