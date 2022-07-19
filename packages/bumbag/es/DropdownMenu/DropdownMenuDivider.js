import { useContext } from 'react';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useMenuSeparator } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Menu.styles.js';
import { k as DropdownMenuDivider$1 } from '../DropdownMenu.styles.js';
import './DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import './DropdownMenuPopover.js';
import './DropdownMenuState.js';
import { DropdownMenuContext } from './DropdownMenu.js';
import '../Divider.styles.js';
import { Divider } from '../Divider/Divider.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var orientation = props.orientation,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["orientation", "overrides"]);

  var _React$useContext = useContext(DropdownMenuContext),
      dropdownMenuOverrides = _React$useContext.overrides;

  var dropdownMenuDividerProps = useMenuSeparator({
    orientation: orientation
  }, restProps);
  var dividerProps = Divider.useProps(_objectSpread2(_objectSpread2({}, restProps), dropdownMenuDividerProps));
  var className = useClassName({
    style: DropdownMenuDivider$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, dropdownMenuOverrides), {}, {
        overrides: overrides
      })
    }),
    themeKey: themeKey,
    prevClassName: dividerProps.className
  });
  return _objectSpread2(_objectSpread2({}, dividerProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.Divider'
});
var DropdownMenuDivider = createComponent(function (props) {
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
    displayName: 'DropdownMenu.Divider'
  },
  themeKey: 'DropdownMenu.Divider'
});

export { DropdownMenuDivider };
