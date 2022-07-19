'use strict';

require('react');
require('./Provider/ThemeContext.js');
require('classnames');
var css = require('@emotion/css');
require('@emotion/react');
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
var utils_getCapsizeStyles = require('./utils/getCapsizeStyles.js');
var utils_gradient = require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3;
var Text = function Text(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  abbr& {\n    border-bottom: 1px dotted;\n    cursor: help;\n    text-decoration: none;\n  }\n\n  code& {\n    font-family: monospace;\n  }\n\n  i& {\n    font-style: italic;\n  }\n\n  kbd& {\n    background: #454d5d;\n    border-radius: 0.1rem;\n    color: #fff;\n    fill: #fff;\n    padding: 0.1rem 0.2rem;\n  }\n\n  mark& {\n    background: #ffe9b3;\n    border-radius: 0.1rem;\n    padding: 0.1rem 0.2rem;\n  }\n\n  strong& {\n    font-weight: bold;\n  }\n\n  sub&,\n  sup& {\n    font-size: 0.8em;\n    vertical-align: baseline;\n  }\n\n  ins&,\n  u& {\n    text-decoration-skip: ink edges;\n  }\n\n  i&,\n  cite&,\n  var&,\n  em& {\n    font-style: italic;\n  }\n\n  kbd&,\n  pre&,\n  samp& {\n    font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), utils_gradient.gradient.text(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TextInline = function TextInline(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  line-height: ", ";\n"])), Text(styleProps), utils_colors.lineHeight('none')(styleProps));
};
var TextBlock = function TextBlock(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  display: block;\n  ", ";\n"])), Text(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    lineHeight: 'default'
  })(styleProps));
};

var Text_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Text: Text,
  TextInline: TextInline,
  TextBlock: TextBlock
});

exports.Text = Text;
exports.TextBlock = TextBlock;
exports.TextInline = TextInline;
exports.Text_styles = Text_styles;
