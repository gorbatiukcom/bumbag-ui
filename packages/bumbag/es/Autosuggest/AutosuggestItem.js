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
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/useOptionsState.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
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
import '../Box/Box.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
import { h as AutosuggestItem$1 } from '../Autosuggest.styles.js';
import '../Menu.styles.js';
import '../DropdownMenu.styles.js';
import '../DropdownMenu/DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import '../DropdownMenu/DropdownMenuPopover.js';
import '../DropdownMenu/DropdownMenuState.js';
import '../DropdownMenu/DropdownMenu.js';
import { DropdownMenuItem } from '../DropdownMenu/DropdownMenuItem.js';
import '../Divider.styles.js';
import '../Divider/Divider.js';
import '../DropdownMenu/DropdownMenuDivider.js';
import '../DropdownMenu/DropdownMenuGroup.js';
import '../DropdownMenu/DropdownMenuOptionGroup.js';
import '../DropdownMenu/DropdownMenuOptionItem.js';
import '../DropdownMenu/index.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var dropdownMenuItemProps = DropdownMenuItem.useProps(props);
  var className = useClassName({
    style: AutosuggestItem$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: dropdownMenuItemProps.className
  });
  return _objectSpread2(_objectSpread2({}, dropdownMenuItemProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    isTabbable: false,
    role: 'option'
  },
  themeKey: 'Autosuggest.Item'
});
var AutosuggestItem = createComponent(function (props) {
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
    displayName: 'Autosuggest.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'Autosuggest.Item'
});

export { AutosuggestItem };
