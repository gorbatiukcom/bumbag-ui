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
require('capsize');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Card = function Card(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.palette('background', {
    dark: 'gray900'
  })(styleProps), utils_colors.borderRadius('default')(styleProps), utils_colors.space(3, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardContent = function CardContent(styleProps) {
  return css.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardHeader = function CardHeader(styleProps) {
  return css.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n  align-items: center;\n  justify-content: space-between;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(2, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardTitle = function CardTitle(styleProps) {
  return css.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "em;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), utils_colors.fontSize('300')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardFooter = function CardFooter(styleProps) {
  return css.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  margin-top: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), utils_colors.space(3, 'major')(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Card_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Card: Card,
  CardContent: CardContent,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
  CardFooter: CardFooter
});

exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Card_styles = Card_styles;
