'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('../utils/omit.js');
require('../ColorMode/utils.js');
require('../ColorMode/ColorModeContext.js');
require('../utils/pick.js');
require('../utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
require('../getCSSFromStyleObject-fcc96724.js');
require('../utils/isFunction.js');
require('../utils/get.js');
require('../utils/useStyle.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
var Breadcrumb_Breadcrumb_styles = require('../Breadcrumb.styles-07965c12.js');
require('../Link.styles-11ed4b96.js');
require('../Link/Link.js');
require('../Link/LinkBlock.js');
require('../Link/LinkInline.js');
var Link_index = require('../Link/index.js');
require('../List.styles-26d86b26.js');
require('../List/List.js');
require('../List/ListItem.js');
var List_index = require('../List/index.js');
require('../Navigation.styles-6d90b7f6.js');
var Navigation_Navigation = require('../Navigation/Navigation.js');

var BreadcrumbContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var hasSeparator = props.hasSeparator,
      overrides = props.overrides,
      separator = props.separator,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["hasSeparator", "overrides", "separator"]);

  var navigationProps = Navigation_Navigation.Navigation.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = utils_useClassName.useClassName({
    style: Breadcrumb_Breadcrumb_styles.Breadcrumb,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: navigationProps.className
  });
  var context = React.useMemo(function () {
    return {
      overrides: props.overrides
    };
  }, [props.overrides]);
  var children = /*#__PURE__*/React.createElement(BreadcrumbContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(List_index.List, {
    isOrdered: true,
    orientation: "horizontal",
    listStyleType: "none",
    overrides: overrides
  }, React.Children.map(props.children, function (child, index) {
    if (!React.isValidElement(child)) return child;
    var isLastChild = React.Children.count(props.children) - 1 === index;
    return React.cloneElement(child, _rollupPluginBabelHelpers._objectSpread2({
      hasSeparator: typeof hasSeparator !== 'undefined' ? hasSeparator : !isLastChild,
      separator: separator
    }, child.props));
  })));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, navigationProps), {}, {
    'aria-label': 'Breadcrumb',
    className: className,
    children: children
  });
}, {
  themeKey: 'Breadcrumb'
});
var Breadcrumb = utils_createComponent.createComponent(function (props) {
  var breadcrumbProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useBreadcrumbItemProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var hasSeparator = props.hasSeparator,
      isCurrent = props.isCurrent,
      overrides = props.overrides,
      separator = props.separator,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["hasSeparator", "isCurrent", "overrides", "separator"]);

  var boxProps = List_index.List.Item.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var contextProps = React.useContext(BreadcrumbContext);
  var className = utils_useClassName.useClassName({
    style: Breadcrumb_Breadcrumb_styles.BreadcrumbItem,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var children = /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.count(props.children) > 0 ? React.Children.map(props.children, function (child) {
    if (!React.isValidElement(child)) return child;

    if (child.type === BreadcrumbLink) {
      return React.cloneElement(child, _rollupPluginBabelHelpers._objectSpread2({
        isCurrent: isCurrent
      }, child.props));
    }

    return child;
  }) : props.children, hasSeparator && /*#__PURE__*/React.createElement(BreadcrumbSeparator, null, separator));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Breadcrumb.Item'
});
var BreadcrumbItem = utils_createComponent.createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbItemProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

var useBreadcrumbSeparatorProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(BreadcrumbContext);
  var className = utils_useClassName.useClassName({
    style: Breadcrumb_Breadcrumb_styles.BreadcrumbSeparator,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'presentation',
    children: boxProps.children || '/'
  });
}, {
  themeKey: 'Breadcrumb.Separator'
});
var BreadcrumbSeparator = utils_createComponent.createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbSeparatorProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: breadcrumbItemProps
  });
}, {
  attach: {
    useProps: useBreadcrumbSeparatorProps
  },
  themeKey: 'Breadcrumb.Separator'
}); //////////////////////////////

var useBreadcrumbLinkProps = utils_createHook.createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;

  var isCurrent = props.isCurrent,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["isCurrent"]);

  var linkProps = isCurrent ? Text_index.Text.useProps(restProps) : Link_index.Link.useProps(restProps);
  var contextProps = React.useContext(BreadcrumbContext);
  var className = utils_useClassName.useClassName({
    style: Breadcrumb_Breadcrumb_styles.BreadcrumbLink,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: linkProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, linkProps), {}, {
    className: className,
    'aria-current': isCurrent ? 'page' : linkProps['aria-current'],
    href: isCurrent ? undefined : linkProps.href
  });
}, {
  themeKey: 'Breadcrumb.Link'
});
var BreadcrumbLink = utils_createComponent.createComponent(function (props) {
  var breadcrumbItemProps = useBreadcrumbLinkProps(props);
  var use = props.use;

  if (props.isCurrent) {
    use = Text_index.Text;
  }

  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbContext = BreadcrumbContext;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
