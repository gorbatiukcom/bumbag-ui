'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../utils/debounceAnimationFrame.js');
require('../utils/useViewportHeight.js');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
require('../_rollupPluginBabelHelpers-c170a0e0.js');
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
require('../utils/useClassName.js');
require('../utils/getMediaQueryList.js');
var utils_useBreakpoint = require('../utils/useBreakpoint.js');
require('reakit/Id');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/createComponent.js');
require('../utils/createElement.js');
require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('reakit');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
var Disclosure_index = require('../Disclosure/index.js');
require('../Modal.styles-a83df364.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
require('../Drawer.styles-077ca625.js');
require('../Drawer/Drawer.js');
require('../Drawer/DrawerDisclosure.js');
require('../Drawer/DrawerState.js');
var Drawer_index = require('../Drawer/index.js');

var PageContext = React.createContext({
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
  var isCollapsed = utils_useBreakpoint.useBreakpoint("max-" + collapseBelow);

  var _React$useState = React.useState(false),
      isSidebarMinimized = _React$useState[0],
      setIsSidebarMinimized = _React$useState[1];

  var sidebarDrawer = Drawer_index.Drawer.useState({
    animated: true
  });
  var sidebarDisclosure = Disclosure_index.Disclosure.useState({
    visible: true
  });
  var sidebarState = isCollapsed ? sidebarDrawer : sidebarDisclosure;
  var headerDisclosure = Disclosure_index.Disclosure.useState({
    visible: true
  });
  var value = React.useMemo(function () {
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
  React.useEffect(function () {
    if (isCollapsed) {
      setIsSidebarMinimized(false);
    }
  }, [isCollapsed]);
  return /*#__PURE__*/React.createElement(PageContext.Provider, {
    value: value
  }, children);
}

exports.PageContext = PageContext;
exports.PageProvider = PageProvider;
