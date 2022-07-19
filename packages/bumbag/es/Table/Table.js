import { createContext, createElement as createElement$1, useMemo } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import { omitCSSProps, pickCSSProps } from '../utils/cssProps.js';
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
import { a as TableWrapper, b as Table$1 } from '../Table.styles.js';

var TableContext = createContext({
  overrides: {},
  tableVariant: 'default'
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var children = props.children,
      overrides = props.overrides,
      variant = props.variant;
  var tableWrapperClassName = useClassName({
    style: TableWrapper,
    styleProps: props,
    themeKey: themeKey
  });
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, omitCSSProps(props)), {}, {
    wrapElement: function wrapElement(element) {
      return /*#__PURE__*/createElement$1(Box$1, _extends({
        className: tableWrapperClassName
      }, pickCSSProps(props)), element);
    }
  }));
  var className = useClassName({
    style: Table$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = useMemo(function () {
    return {
      overrides: overrides,
      tableVariant: variant
    };
  }, [overrides, variant]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(TableContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  defaultProps: {
    responsiveBreakpoint: 'mobile',
    variant: 'default'
  },
  themeKey: 'Table'
});
var Table = createComponent(function (props) {
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
    displayName: 'Table'
  },
  defaultProps: {
    use: 'table'
  },
  themeKey: 'Table'
});

export { Table, TableContext };
