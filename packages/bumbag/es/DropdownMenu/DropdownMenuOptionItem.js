import { createElement as createElement$1, Fragment } from 'react';
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
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/bindFns.js';
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
import { Box as Box$1 } from '../Box/Box.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Menu.styles.js';
import { i as DropdownMenuOptionItem$1, j as DropdownMenuOptionItemIconWrapper } from '../DropdownMenu.styles.js';
import './DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import './DropdownMenuPopover.js';
import './DropdownMenuState.js';
import './DropdownMenu.js';
import { DropdownMenuItem } from './DropdownMenuItem.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      checked = props.checked,
      onChange = props.onChange,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "checked", "onChange", "value"]); //////////////////////////////////////////////////////


  var menuItemProps = DropdownMenuItem.useProps(restProps); //////////////////////////////////////////////////////

  var className = useClassName({
    style: DropdownMenuOptionItem$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: menuItemProps.className
  });
  var iconWrapperClassName = useClassName({
    style: DropdownMenuOptionItemIconWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'IconWrapper'
  }); //////////////////////////////////////////////////////

  return _objectSpread2(_objectSpread2({}, menuItemProps), {}, {
    'aria-checked': checked,
    className: className,
    onClick: function onClick(e) {
      if (onChange) {
        onChange({
          checked: !checked,
          value: value
        });
      }

      if (menuItemProps.onClick) {
        menuItemProps.onClick(e);
      }
    },
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Box$1, {
      className: iconWrapperClassName,
      overrides: props.overrides
    }, checked && /*#__PURE__*/createElement$1(Icon, {
      icon: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: ['M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z']
      },
      overrides: props.overrides
    })), children)
  });
}, {
  defaultProps: {
    hideOnClick: false
  },
  themeKey: 'DropdownMenu.OptionItem'
});
var DropdownMenuOptionItem = createComponent(function (props) {
  var htmlProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'DropdownMenu.OptionItem'
  },
  themeKey: 'DropdownMenu.OptionItem'
});

export { DropdownMenuOptionItem };
