import { createContext, useMemo, createElement as createElement$1 } from 'react';
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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as Menu$1 } from '../Menu.styles.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import { Rover } from '../Rover/index.js';

var MenuContext = createContext({
  rover: {},
  overrides: {}
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["baseId", "children", "overrides"]);

  var boxProps = Box$1.useProps(restProps);
  var rover = Rover.useState({
    baseId: baseId
  });
  var className = useClassName({
    style: Menu$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = useMemo(function () {
    return {
      rover: rover,
      overrides: overrides
    };
  }, [rover, overrides]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    role: 'menu',
    children: /*#__PURE__*/createElement$1(MenuContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  themeKey: 'Menu'
});
var Menu = createComponent(function (props) {
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
    displayName: 'Menu'
  },
  themeKey: 'Menu'
});

export { Menu, MenuContext };
