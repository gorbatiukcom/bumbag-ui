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
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
var Flex_Flex = require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
var Button_index = require('../Button/index.js');
var Tag_Tag_styles = require('../Tag.styles-e914db50.js');

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      onRemove = props.onRemove,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children", "onRemove"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: Tag_Tag_styles.Tag,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var tagContentClassName = utils_useClassName.useClassName({
    style: Tag_Tag_styles.TagContent,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Content'
  });
  var tagCloseClassName = utils_useClassName.useClassName({
    style: Tag_Tag_styles.TagClose,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Close'
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex_Flex.Flex, {
      className: tagContentClassName
    }, children), onRemove && /*#__PURE__*/React.createElement(Button_index.Button.Close, {
      className: tagCloseClassName,
      onClick: onRemove,
      iconProps: {
        fontSize: '200'
      }
    }))
  });
}, {
  themeKey: 'Tag',
  defaultProps: {
    palette: 'text',
    size: 'default'
  }
});
var Tag = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Tag'
  },
  themeKey: 'Tag'
});

exports.Tag = Tag;
