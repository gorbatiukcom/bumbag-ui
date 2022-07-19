'use strict';

require('react');
require('./Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c170a0e0.js');
require('./ColorMode/ColorModeContext.js');
require('./utils/cssProps.js');
require('lodash/kebabCase');
require('tinycolor2');
var utils_colors = require('./getCSSFromStyleObject-fcc96724.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
var Table = function Table(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-align: left;\n  width: 100%;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('text200')(styleProps), styleProps.hasDividers && react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & tbody tr:not(:last-child) {\n        border-bottom: 1px solid ", ";\n      }\n    "])), utils_colors.palette('white800', {
    dark: 'gray900'
  })(styleProps)), styleProps.isHoverable && react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & tbody tr:hover {\n        background-color: ", ";\n      }\n    "])), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps)), styleProps.isStriped && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      & tbody tr:nth-child(even) {\n        background-color: ", ";\n      }\n    "])), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps)), styleProps.isResponsive && react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n    "])), utils_colors.breakpoint("max-" + styleProps.responsiveBreakpoint, react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          & thead {\n            display: none;\n          }\n\n          & tbody tr:not(:last-child) {\n            border-bottom: 1px solid ", ";\n          }\n\n          & tbody td {\n            display: block;\n            text-align: left !important;\n            padding: ", "rem ", "rem;\n\n            &::before {\n              display: block;\n              content: attr(data-content);\n              ", ";\n\n              & {\n                ", ";\n              }\n            }\n          }\n\n          & tfoot td {\n            display: block;\n            text-align: left !important;\n          }\n\n          & {\n            ", ";\n          }\n        "])), utils_colors.palette('white800', {
    dark: 'gray900'
  })(styleProps), utils_colors.space(2)(styleProps), utils_colors.space(4)(styleProps), tableHeadCellText(styleProps), utils_colors.theme(styleProps.themeKey, "styles.responsive.headCellText")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.responsive.base")(styleProps)))(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableHead = function TableHead(styleProps) {
  return css.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-bottom: 1px solid ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray900'
  })(styleProps), styleProps.tableVariant !== 'minimal' && react.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableRow = function TableRow(styleProps) {
  return css.css(_templateObject9 || (_templateObject9 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableHeadCell = function TableHeadCell(styleProps) {
  return css.css(_templateObject10 || (_templateObject10 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  vertical-align: middle;\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3)(styleProps), utils_colors.space(4)(styleProps), tableHeadCellText(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableCell = function TableCell(styleProps) {
  return css.css(_templateObject11 || (_templateObject11 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3)(styleProps), utils_colors.space(4)(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableFoot = function TableFoot(styleProps) {
  return css.css(_templateObject12 || (_templateObject12 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-top: 1px solid ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('white800', {
    dark: 'gray900'
  })(styleProps), styleProps.tableVariant !== 'minimal' && react.css(_templateObject13 || (_templateObject13 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), utils_colors.palette('white600', {
    dark: 'black200'
  })(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableBody = function TableBody(styleProps) {
  return css.css(_templateObject14 || (_templateObject14 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableWrapper = function TableWrapper(styleProps) {
  return css.css(_templateObject15 || (_templateObject15 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n\n  & {\n    ", ";\n  }\n"])), utils_colors.borderRadius('default')(styleProps), styleProps.variant === 'default' && react.css(_templateObject16 || (_templateObject16 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), utils_colors.palette('white800', {
    dark: 'gray900'
  })(styleProps)), styleProps.variant === 'shadowed' && react.css(_templateObject17 || (_templateObject17 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n      ", ";\n    "])), utils_colors.altitude('100')(styleProps)), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var tableHeadCellText = function tableHeadCellText(styleProps) {
  return react.css(_templateObject18 || (_templateObject18 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "rem;\n  text-transform: uppercase;\n"])), utils_colors.palette('text100')(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.fontSize('100')(styleProps));
};

var Table_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Table: Table,
  TableHead: TableHead,
  TableRow: TableRow,
  TableHeadCell: TableHeadCell,
  TableCell: TableCell,
  TableFoot: TableFoot,
  TableBody: TableBody,
  TableWrapper: TableWrapper,
  tableHeadCellText: tableHeadCellText
});

exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableFoot = TableFoot;
exports.TableHead = TableHead;
exports.TableHeadCell = TableHeadCell;
exports.TableRow = TableRow;
exports.TableWrapper = TableWrapper;
exports.Table_styles = Table_styles;
exports.tableHeadCellText = tableHeadCellText;
