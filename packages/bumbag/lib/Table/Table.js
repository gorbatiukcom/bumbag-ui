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
var utils_cssProps = require('../utils/cssProps.js');
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
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
var Table_Table_styles = require('../Table.styles-2c4edd2f.js');

var TableContext = React.createContext({
  overrides: {},
  tableVariant: 'default'
});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var children = props.children,
      overrides = props.overrides,
      variant = props.variant;
  var tableWrapperClassName = utils_useClassName.useClassName({
    style: Table_Table_styles.TableWrapper,
    styleProps: props,
    themeKey: themeKey
  });
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, utils_cssProps.omitCSSProps(props)), {}, {
    wrapElement: function wrapElement(element) {
      return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
        className: tableWrapperClassName
      }, utils_cssProps.pickCSSProps(props)), element);
    }
  }));
  var className = utils_useClassName.useClassName({
    style: Table_Table_styles.Table,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = React.useMemo(function () {
    return {
      overrides: overrides,
      tableVariant: variant
    };
  }, [overrides, variant]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(TableContext.Provider, {
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
var Table = utils_createComponent.createComponent(function (props) {
  var textProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
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

exports.Table = Table;
exports.TableContext = TableContext;
