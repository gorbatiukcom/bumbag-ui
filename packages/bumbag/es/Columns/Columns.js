import { useMemo, createElement as createElement$1 } from 'react';
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
import { Flex } from '../Flex/Flex.js';
import { b as Columns$1 } from '../Columns.styles.js';
import { ColumnsContext } from './ColumnsContext.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var flexProps = Flex.useProps(props);
  var className = useClassName({
    style: Columns$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  var contextValue = useMemo(function () {
    return {
      isGapless: props.isGapless,
      minBreakpoint: props.minBreakpoint,
      spacing: props.spacing
    };
  }, [props.isGapless, props.minBreakpoint, props.spacing]);
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(ColumnsContext.Provider, {
      value: contextValue
    }, props.children)
  });
}, {
  defaultProps: {
    isGapless: false,
    isOneLine: false,
    minBreakpoint: undefined,
    spacing: 'major-2'
  },
  themeKey: 'Columns'
});
var Columns = createComponent(function (props) {
  var columnsProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: columnsProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Columns'
  },
  themeKey: 'Columns'
});

export { Columns };
