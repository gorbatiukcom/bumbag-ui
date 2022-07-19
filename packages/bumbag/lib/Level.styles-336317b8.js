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
var Box_Box_styles = require('./Box.styles-0ffb7463.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Level = function Level(styleProps) {
  return css.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n  &&& {\n    ", ";\n  }\n\n\n  & {\n    ", ";\n  }\n"])), utils_colors.breakpoint(styleProps.orientation === 'horizontal' && styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, react.css(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n        flex-direction: column;\n\n        & > *:not(:last-child) {\n          margin-bottom: ", "rem;\n        }\n\n        ", "\n      "])), utils_colors.space(styleProps.spacing)(styleProps), Box_Box_styles.getAlignmentAttributes(styleProps)), {
    else: react.css(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n          justify-content: space-between;\n\n          ", "\n        "])), styleProps.orientation === 'vertical' && react.css(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n            flex-direction: column;\n          "]))))
  })(styleProps), utils_colors.theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Level_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Level: Level
});

exports.Level = Level;
exports.Level_styles = Level_styles;
