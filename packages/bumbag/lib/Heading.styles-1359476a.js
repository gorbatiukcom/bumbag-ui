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
var utils_getCapsizeStyles = require('./utils/getCapsizeStyles.js');
require('./utils/gradient.js');
require('@emotion/is-prop-valid');
require('./utils/OutsideClickHandler.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Heading = function Heading(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  font-weight: ", ";\n\n  ", ";\n\n  h1& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h2& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h3& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h4& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h5& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h6& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), utils_colors.font('heading')(styleProps) || utils_colors.font('default')(styleProps), utils_colors.fontWeight('bold')(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h1',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h1.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h1',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h1.styles.shrinked")(styleProps)))(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h2',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h2.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h2',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h2.styles.shrinked")(styleProps)))(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h3',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h3.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h3',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h3.styles.shrinked")(styleProps)))(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h4',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h4.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject5 || (_templateObject5 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h4',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h4.styles.shrinked")(styleProps)))(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h5',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h5.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject6 || (_templateObject6 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h5',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h5.styles.shrinked")(styleProps)))(styleProps), utils_getCapsizeStyles.getCapsizeStyles({
    themeKey: 'Heading.h6',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), utils_colors.theme(styleProps.themeKey, "h6.styles.base")(styleProps), styleProps.shrinkBelow && utils_colors.breakpoint("max-" + styleProps.shrinkBelow, react.css(_templateObject7 || (_templateObject7 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          & {\n            ", ";\n          }\n        "])), utils_colors.theme(styleProps.themeKey, "h6.styles.shrinked")(styleProps)))(styleProps), styleProps.isSubHeading && getSubHeadingProperties(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getSubHeadingProperties = function getSubHeadingProperties(styleProps) {
  return css.css(_templateObject8 || (_templateObject8 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), utils_colors.fontWeight('semibold')(styleProps), utils_colors.theme(styleProps.themeKey, "subHeading.styles.base")(styleProps));
};

var Heading_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Heading: Heading,
  getSubHeadingProperties: getSubHeadingProperties
});

exports.Heading = Heading;
exports.Heading_styles = Heading_styles;
exports.getSubHeadingProperties = getSubHeadingProperties;
