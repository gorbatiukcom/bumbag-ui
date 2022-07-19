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
var utils_uniqueId = require('../utils/uniqueId.js');
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
require('../Flex.styles-8d4bcbcd.js');
var Flex_Flex = require('../Flex/Flex.js');
var Card_Card_styles = require('../Card.styles-5078f21b.js');

var CardContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var footer = props.footer,
      headerAddon = props.headerAddon,
      overrides = props.overrides,
      standalone = props.standalone,
      title = props.title,
      variant = props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["footer", "headerAddon", "overrides", "standalone", "title", "variant"]);

  var boxProps = Box_Box.Box.useProps(_rollupPluginBabelHelpers._objectSpread2({
    altitude: variant === 'shadowed' ? '100' : null,
    border: variant === 'bordered' ? 'default' : null
  }, restProps));
  var className = utils_useClassName.useClassName({
    style: Card_Card_styles.Card,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var titleId = utils_uniqueId.useUniqueId();
  var descriptionId = utils_uniqueId.useUniqueId();
  var context = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var children = /*#__PURE__*/React.createElement(CardContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement(CardHeader, {
    overrides: overrides
  }, /*#__PURE__*/React.createElement(CardTitle, {
    overrides: overrides
  }, title), headerAddon && /*#__PURE__*/React.createElement(Box_Box.Box, null, headerAddon)), /*#__PURE__*/React.createElement(CardContent, {
    overrides: overrides
  }, props.children), footer && /*#__PURE__*/React.createElement(CardFooter, {
    overrides: overrides
  }, footer)));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    variant: 'shadowed'
  },
  themeKey: 'Card'
});
var Card = utils_createComponent.createComponent(function (props) {
  var cardProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: cardProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Card'
  },
  themeKey: 'Card'
}); /////////////////////////////////////

function CardContent(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(CardContext);
  var cardContentClassName = utils_useClassName.useClassName({
    style: Card_Card_styles.CardContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Content'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: cardContentClassName,
    id: context.descriptionId
  }, restProps), children);
} /////////////////////////////////////

function CardTitle(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(CardContext);
  var cardTitleClassName = utils_useClassName.useClassName({
    style: Card_Card_styles.CardTitle,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Title'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: cardTitleClassName,
    id: context.titleId
  }, restProps), children);
} /////////////////////////////////////

function CardHeader(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(CardContext);
  var cardHeaderClassName = utils_useClassName.useClassName({
    style: Card_Card_styles.CardHeader,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Header'
  });
  return /*#__PURE__*/React.createElement(Flex_Flex.Flex, _rollupPluginBabelHelpers._extends({
    className: cardHeaderClassName
  }, restProps), children);
} /////////////////////////////////////

function CardFooter(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var context = React.useContext(CardContext);
  var cardFooterClassName = utils_useClassName.useClassName({
    style: Card_Card_styles.CardFooter,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Footer'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: cardFooterClassName
  }, restProps), children);
}

exports.Card = Card;
exports.CardContent = CardContent;
exports.CardContext = CardContext;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
