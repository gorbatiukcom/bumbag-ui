import { createContext, useContext, useMemo, createElement as createElement$1 } from 'react';
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
import { useUniqueId } from '../utils/uniqueId.js';
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
import '../List.styles.js';
import '../List/List.js';
import '../List/ListItem.js';
import { List } from '../List/index.js';
import '../Navigation.styles.js';
import '../Navigation/Navigation.js';
import { b as SideNavLevel$1, c as SideNavLevelTitle } from '../SideNav.styles.js';
import { SideNavContext } from './SideNav.js';

var SideNavLevelContext = createContext({
  level: 0
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      overrides = props.overrides,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "overrides", "title"]);

  var listProps = List.useProps(restProps);

  var _React$useContext = useContext(SideNavContext),
      sideNavOverrides = _React$useContext.overrides;

  var _React$useContext2 = useContext(SideNavLevelContext),
      level = _React$useContext2.level;

  var className = useClassName({
    style: SideNavLevel$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      level: level,
      overrides: _objectSpread2(_objectSpread2({}, sideNavOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: listProps.className
  });
  var titleClassName = useClassName({
    style: SideNavLevelTitle,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      level: level,
      overrides: _objectSpread2(_objectSpread2({}, sideNavOverrides), overrides)
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Title'
  });
  var contextValue = useMemo(function () {
    return {
      level: level + 1
    };
  }, [level]);
  var titleId = useUniqueId();
  return _objectSpread2(_objectSpread2({}, listProps), {}, {
    'aria-labelledby': title ? titleId : undefined,
    className: className,
    children: /*#__PURE__*/createElement$1(SideNavLevelContext.Provider, {
      value: contextValue
    }, title && /*#__PURE__*/createElement$1(Box$1, {
      id: titleId,
      className: titleClassName
    }, title), children)
  });
}, {
  themeKey: 'SideNav.Level'
});
var SideNavLevel = createComponent(function (props) {
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
    displayName: 'SideNav.Level'
  },
  defaultProps: {
    use: 'ul'
  },
  themeKey: 'SideNav.Level'
});

export { SideNavLevel, SideNavLevelContext };
