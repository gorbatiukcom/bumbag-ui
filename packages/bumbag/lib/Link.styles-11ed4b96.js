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
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3;
var Link = function Link(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  color: ", ";\n  fill: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    & {\n      ", ";\n    }\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('primary', {
    dark: 'primary300'
  })(styleProps), utils_colors.palette('primary', {
    dark: 'primary300'
  })(styleProps), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.hover")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.focus")(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LinkBlock = function LinkBlock(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n\n  display: block;\n\n  ", ";\n"])), Link(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    lineHeight: 'default'
  })(styleProps));
};
var LinkInline = function LinkInline(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  ", ";\n"])), Link(styleProps));
};

var Link_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Link: Link,
  LinkBlock: LinkBlock,
  LinkInline: LinkInline
});

exports.Link = Link;
exports.LinkBlock = LinkBlock;
exports.LinkInline = LinkInline;
exports.Link_styles = Link_styles;
