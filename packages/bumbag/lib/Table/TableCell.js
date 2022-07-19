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
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
var Table_Table_styles = require('../Table.styles-2c4edd2f.js');
var Table_Table = require('./Table.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var tableCellRef = React.useRef();
  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
    elementRef: tableCellRef
  }));
  var tableContext = React.useContext(Table_Table.TableContext);

  var _React$useState = React.useState(''),
      title = _React$useState[0],
      setTitle = _React$useState[1];

  var className = utils_useClassName.useClassName({
    style: Table_Table_styles.TableCell,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tableContext), props), {}, {
      overrides: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, tableContext.overrides), props.overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  React.useEffect(function () {
    if (tableCellRef && tableCellRef.current) {
      var _tableElement$childNo;

      // @ts-ignore
      var cellIndex = tableCellRef.current.cellIndex; // @ts-ignore

      var rowElement = tableCellRef.current.parentNode;
      var bodyElement = rowElement.parentNode;
      var tableElement = bodyElement.parentNode;
      var tableElementChildren = (_tableElement$childNo = tableElement === null || tableElement === void 0 ? void 0 : tableElement.childNodes) !== null && _tableElement$childNo !== void 0 ? _tableElement$childNo : [];

      if (tableElementChildren.length > 0) {
        // @ts-ignore
        NodeList.prototype.find = Array.prototype.find;
        var headElement = tableElementChildren.find(function (child) {
          return child.tagName === 'THEAD';
        });

        if (headElement && headElement.childNodes) {
          var _headRowElement$child;

          var headRowElement = headElement === null || headElement === void 0 ? void 0 : headElement.childNodes[0];
          var headCellElement = headRowElement === null || headRowElement === void 0 ? void 0 : (_headRowElement$child = headRowElement.childNodes) === null || _headRowElement$child === void 0 ? void 0 : _headRowElement$child[cellIndex];
          setTitle(headCellElement === null || headCellElement === void 0 ? void 0 : headCellElement.innerText);
        }
      }
    }
  }, []);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    'data-content': title
  });
}, {
  themeKey: 'Table.Cell'
});
var TableCell = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Table.Cell'
  },
  defaultProps: {
    use: 'td'
  },
  themeKey: 'Table.Cell'
});

exports.TableCell = TableCell;
