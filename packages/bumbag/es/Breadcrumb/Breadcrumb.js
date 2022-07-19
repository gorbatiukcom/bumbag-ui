import { createContext, useMemo, createElement as createElement$1, Children, isValidElement, cloneElement, useContext, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/getCapsizeStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import { a as Breadcrumb$1, b as BreadcrumbItem$1, c as BreadcrumbSeparator$1, d as BreadcrumbLink$1 } from '../Breadcrumb.styles.js';
import '../Link.styles.js';
import '../Link/Link.js';
import '../Link/LinkBlock.js';
import '../Link/LinkInline.js';
import { Link } from '../Link/index.js';
import '../List.styles.js';
import '../List/List.js';
import '../List/ListItem.js';
import { List } from '../List/index.js';
import '../Navigation.styles.js';
import { Navigation } from '../Navigation/Navigation.js';

var BreadcrumbContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var hasSeparator = props.hasSeparator,
      overrides = props.overrides,
      separator = props.separator,
      restProps = _objectWithoutPropertiesLoose(props, ["hasSeparator", "overrides", "separator"]);

  var navigationProps = Navigation.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = useClassName({
    style: Breadcrumb$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: navigationProps.className
  });
  var context = useMemo(function () {
    return {
      overrides: props.overrides
    };
  }, [props.overrides]);
  var children = /*#__PURE__*/createElement$1(BreadcrumbContext.Provider, {
    value: context
  }, /*#__PURE__*/createElement$1(List, {
    isOrdered: true,
    orientation: "horizontal",
    listStyleType: "none",
    overrides: overrides
  }, Children.map(props.children, function (child, index) {
    if (!isValidElement(child)) return child;
    var isLastChild = Children.count(props.children) - 1 === index;
    return cloneElement(child, _objectSpread2({
      hasSeparator: typeof hasSeparator !== 'undefined' ? hasSeparator : !isLastChild,
      separator: separator
    }, child.props));
  })));
  return _objectSpread2(_objectSpread2({}, navigationProps), {}, {
    'aria-label': 'Breadcrumb',
    className: className,
    children: children
  });
}, {
  themeKey: 'Breadcrumb'
});
var Breadcrumb = createComponent(function (props) {
  var breadcrumbProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: breadcrumbProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Breadcrumb'
  },
  defaultProps: {
    use: 'nav'
  },
  themeKey: 'Breadcrumb'
}); //////////////////////////////

var useBreadcrumbItemProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var hasSeparator = props.hasSeparator,
      isCurrent = props.isCurrent,
      overrides = props.overrides,
      separator = props.separator,
      restProps = _objectWithoutPropertiesLoose(props, ["hasSeparator", "isCurrent", "overrides", "separator"]);

  var boxProps = List.Item.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var contextProps = useContext(BreadcrumbContext);
  var className = useClassName({
    style: BreadcrumbItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var children = /*#__PURE__*/createElement$1(Fragment, null, Children.count(props.children) > 0 ? Children.map(props.children, function (child) {
    if (!isValidElement(child)) return child;

    if (child.type === BreadcrumbLink) {
      return cloneElement(child, _objectSpread2({
        isCurrent: isCurrent
      }, child.props));
    }

    return child;
  }) : props.children, hasSeparator && /*#__PURE__*/createElement$1(BreadcrumbSeparator, null, separator));
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Breadcrumb.Item'
});
var BreadcrumbItem = createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbItemProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: breadcrumbItemProps
  });
}, {
  attach: {
    useProps: useBreadcrumbItemProps
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'Breadcrumb.Item'
}); //////////////////////////////

var useBreadcrumbSeparatorProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(BreadcrumbContext);
  var className = useClassName({
    style: BreadcrumbSeparator$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'presentation',
    children: boxProps.children || '/'
  });
}, {
  themeKey: 'Breadcrumb.Separator'
});
var BreadcrumbSeparator = createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbSeparatorProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: breadcrumbItemProps
  });
}, {
  attach: {
    useProps: useBreadcrumbSeparatorProps
  },
  themeKey: 'Breadcrumb.Separator'
}); //////////////////////////////

var useBreadcrumbLinkProps = createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;

  var isCurrent = props.isCurrent,
      restProps = _objectWithoutPropertiesLoose(props, ["isCurrent"]);

  var linkProps = isCurrent ? Text.useProps(restProps) : Link.useProps(restProps);
  var contextProps = useContext(BreadcrumbContext);
  var className = useClassName({
    style: BreadcrumbLink$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: linkProps.className
  });
  return _objectSpread2(_objectSpread2({}, linkProps), {}, {
    className: className,
    'aria-current': isCurrent ? 'page' : linkProps['aria-current'],
    href: isCurrent ? undefined : linkProps.href
  });
}, {
  themeKey: 'Breadcrumb.Link'
});
var BreadcrumbLink = createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbLinkProps(props);
  var use = props.use;

  if (props.isCurrent) {
    use = Text;
  }

  return createElement({
    children: props.children,
    component: Box,
    use: use,
    htmlProps: breadcrumbItemProps
  });
}, {
  attach: {
    useProps: useBreadcrumbLinkProps
  },
  defaultProps: {
    use: 'a'
  },
  themeKey: 'Breadcrumb.Link'
});

export { Breadcrumb, BreadcrumbContext, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
