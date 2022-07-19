import { createContext, useState, useMemo, useEffect, createElement } from 'react';
import '../utils/debounceAnimationFrame.js';
import '../utils/useViewportHeight.js';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
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
import '../utils/useClassName.js';
import '../utils/getMediaQueryList.js';
import { useBreakpoint } from '../utils/useBreakpoint.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/createComponent.js';
import '../utils/createElement.js';
import '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import { Disclosure } from '../Disclosure/index.js';
import '../Modal.styles.js';
import '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import '../Modal/index.js';
import '../Drawer.styles.js';
import '../Drawer/Drawer.js';
import '../Drawer/DrawerDisclosure.js';
import '../Drawer/DrawerState.js';
import { Drawer } from '../Drawer/index.js';

var PageContext = createContext({
  collapseBelow: 'desktop',
  isCollapsed: false,
  sidebar: {
    isOpen: true,
    open: function open() {
      return undefined;
    },
    close: function close() {
      return undefined;
    },
    toggle: function toggle() {
      return undefined;
    },
    isMinimized: false,
    minimize: function minimize() {
      return undefined;
    },
    maximize: function maximize() {
      return undefined;
    },
    toggleMinimize: function toggleMinimize() {
      return undefined;
    },
    drawer: {},
    disclosure: {}
  },
  header: {
    isOpen: true,
    open: function open() {
      return undefined;
    },
    close: function close() {
      return undefined;
    },
    toggle: function toggle() {
      return undefined;
    },
    disclosure: {}
  }
});
function PageProvider(props) {
  var children = props.children,
      _props$collapseBelow = props.collapseBelow,
      collapseBelow = _props$collapseBelow === void 0 ? 'desktop' : _props$collapseBelow;
  var isCollapsed = useBreakpoint("max-" + collapseBelow);

  var _React$useState = useState(false),
      isSidebarMinimized = _React$useState[0],
      setIsSidebarMinimized = _React$useState[1];

  var sidebarDrawer = Drawer.useState({
    animated: true
  });
  var sidebarDisclosure = Disclosure.useState({
    visible: true
  });
  var sidebarState = isCollapsed ? sidebarDrawer : sidebarDisclosure;
  var headerDisclosure = Disclosure.useState({
    visible: true
  });
  var value = useMemo(function () {
    return {
      collapseBelow: collapseBelow,
      isCollapsed: isCollapsed,
      sidebar: {
        isOpen: sidebarState.visible,
        open: sidebarState.show,
        close: sidebarState.hide,
        toggle: sidebarState.toggle,
        isMinimized: isSidebarMinimized,
        minimize: function minimize() {
          return setIsSidebarMinimized(true);
        },
        maximize: function maximize() {
          return setIsSidebarMinimized(false);
        },
        toggleMinimize: function toggleMinimize() {
          return setIsSidebarMinimized(function (isMinimized) {
            return !isMinimized;
          });
        },
        drawer: sidebarDrawer,
        disclosure: sidebarDisclosure
      },
      header: {
        isOpen: headerDisclosure.visible,
        open: headerDisclosure.show,
        close: headerDisclosure.hide,
        toggle: headerDisclosure.toggle,
        disclosure: headerDisclosure
      }
    };
  }, [collapseBelow, headerDisclosure, isCollapsed, isSidebarMinimized, sidebarDisclosure, sidebarDrawer, sidebarState.hide, sidebarState.show, sidebarState.toggle, sidebarState.visible]);
  useEffect(function () {
    if (isCollapsed) {
      setIsSidebarMinimized(false);
    }
  }, [isCollapsed]);
  return /*#__PURE__*/createElement(PageContext.Provider, {
    value: value
  }, children);
}

export { PageContext, PageProvider };
