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
require('../utils/useLabelPlaceholder.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/bindFns.js');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('../utils/fieldAdaptors.js');
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
require('../Flex/Flex.js');
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
require('../Set.styles-ac954f46.js');
var Set_Set = require('../Set/Set.js');
require('../Input.styles-a731033b.js');
require('react-input-mask');
require('../FieldWrapper.styles-1648fae6.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
require('../Card/index.js');
require('../Disclosure.styles-7a8acee6.js');
require('../Disclosure/DisclosureState.js');
require('../Disclosure/Disclosure.js');
require('../Disclosure/DisclosureContent.js');
require('../Disclosure/index.js');
require('../Label.styles-34e250ed.js');
require('../Label/Label.js');
require('../FieldWrapper/FieldWrapper.js');
require('../Group.styles-13958db4.js');
require('../Group/Group.js');
require('../Input/Input.js');
require('../Input/index.js');
var Pagination_Pagination_styles = require('../Pagination.styles-0777fca2.js');
var _times = require('lodash/times');
require('../Select.styles-ff72e480.js');
require('../Select/Select.js');
var Select_index = require('../Select/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _times__default = /*#__PURE__*/_interopDefaultLegacy(_times);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var _currentPage = props.currentPage,
      nextButtonProps = props.nextButtonProps,
      nextText = props.nextText,
      numberOfPages = props.numberOfPages,
      onChangePage = props.onChangePage,
      overrides = props.overrides,
      prepositionText = props.prepositionText,
      previousButtonProps = props.previousButtonProps,
      previousText = props.previousText,
      selectProps = props.selectProps,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["currentPage", "nextButtonProps", "nextText", "numberOfPages", "onChangePage", "overrides", "prepositionText", "previousButtonProps", "previousText", "selectProps"]);

  var setProps = Set_Set.Set.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));

  var _React$useState = React.useState(1),
      currentPage = _React$useState[0],
      setCurrentPage = _React$useState[1];

  React.useEffect(function () {
    setCurrentPage(_currentPage || 1);
  }, [_currentPage]);
  var className = utils_useClassName.useClassName({
    style: Pagination_Pagination_styles.Pagination,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: setProps.className
  });
  var buttonClassName = utils_useClassName.useClassName({
    style: Pagination_Pagination_styles.PaginationButton,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Button'
  });
  var selectClassName = utils_useClassName.useClassName({
    style: Pagination_Pagination_styles.PaginationSelect,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Select'
  });
  var prepositionClassName = utils_useClassName.useClassName({
    style: Pagination_Pagination_styles.PaginationPrepositionText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'PrepositionText'
  });
  var handleChangePage = React.useCallback(function (page) {
    if (onChangePage) {
      onChangePage(page);
    } else {
      setCurrentPage(page);
    }
  }, [onChangePage]);
  var handleChangePageDropdown = React.useCallback(function (e) {
    var index = parseInt(e.target.value, 10);
    handleChangePage(index + 1);
  }, [handleChangePage]);
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, setProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button_index.Button, _rollupPluginBabelHelpers._extends({
      className: buttonClassName,
      disabled: currentPage === 1,
      onClick: function onClick() {
        return handleChangePage(currentPage - 1);
      },
      iconBefore: "chevron-left",
      variant: "ghost",
      themeKey: themeKey + ".Button",
      overrides: overrides
    }, previousButtonProps), previousText), /*#__PURE__*/React.createElement(Select_index.Select, _rollupPluginBabelHelpers._extends({
      className: selectClassName,
      onChange: handleChangePageDropdown,
      options: _times__default['default'](numberOfPages).map(function (_, index) {
        return {
          label: "" + (index + 1),
          value: index
        };
      }),
      value: currentPage - 1,
      themeKey: themeKey + ".Select",
      overrides: overrides
    }, selectProps)), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: prepositionClassName
    }, prepositionText, " ", numberOfPages), /*#__PURE__*/React.createElement(Button_index.Button, _rollupPluginBabelHelpers._extends({
      className: buttonClassName,
      disabled: currentPage === numberOfPages,
      onClick: function onClick() {
        return handleChangePage(currentPage + 1);
      },
      iconAfter: "chevron-right",
      variant: "ghost",
      themeKey: themeKey + ".Button",
      overrides: overrides
    }, nextButtonProps), nextText))
  });
}, {
  defaultProps: {
    prepositionText: 'of',
    previousText: 'Previous',
    nextText: 'Next'
  },
  themeKey: 'Pagination'
});
var Pagination = utils_createComponent.createComponent(function (props) {
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
    displayName: 'Pagination'
  },
  themeKey: 'Pagination'
});

exports.Pagination = Pagination;
