'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
var ConditionalWrap = require('conditional-wrap');
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
require('../utils/useOptionsState.js');
require('../utils/useLabelPlaceholder.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('../utils/useDebounce.js');
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
require('../utils/getHiddenScrollbarStyles.js');
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
require('../Button/index.js');
require('../Set.styles-ac954f46.js');
require('../Set/Set.js');
require('react-loads-next');
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
var FieldWrapper_FieldWrapper = require('../FieldWrapper/FieldWrapper.js');
require('../Group.styles-13958db4.js');
var Group_Group = require('../Group/Group.js');
require('../Input/Input.js');
require('../Input/index.js');
require('../Menu.styles-17849743.js');
require('../DropdownMenu.styles-c144c17a.js');
require('../DropdownMenu/DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
require('../DropdownMenu/DropdownMenuPopover.js');
require('../DropdownMenu/DropdownMenuState.js');
require('../DropdownMenu/DropdownMenu.js');
require('../DropdownMenu/DropdownMenuItem.js');
require('../Divider.styles-f86e0306.js');
require('../Divider/Divider.js');
require('../DropdownMenu/DropdownMenuDivider.js');
require('../DropdownMenu/DropdownMenuGroup.js');
require('../DropdownMenu/DropdownMenuOptionGroup.js');
require('../DropdownMenu/DropdownMenuOptionItem.js');
require('../DropdownMenu/index.js');
require('../Rover.styles-6d58106f.js');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('../Rover/index.js');
require('../Menu/Menu.js');
require('../Menu/MenuGroup.js');
require('../Menu/MenuOptionGroup.js');
require('../Menu/MenuItem.js');
require('../Menu/MenuOptionItem.js');
require('../Menu/MenuDivider.js');
require('../Menu/index.js');
require('../Select.styles-ff72e480.js');
var SelectMenu_SelectMenu_styles = require('../SelectMenu.styles-fad0f50a.js');
require('../Tag.styles-e914db50.js');
require('../Tag/Tag.js');
require('./SelectMenuItem.js');
require('./SelectMenuStaticItem.js');
var SelectMenu_SelectMenu = require('./SelectMenu.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConditionalWrap__default = /*#__PURE__*/_interopDefaultLegacy(ConditionalWrap);

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var addonAfter = props.addonAfter,
      addonBefore = props.addonBefore,
      buttonProps = props.buttonProps,
      selectMenuProps = props.selectMenuProps,
      cacheKey = props.cacheKey,
      containLabel = props.containLabel,
      children = props.children,
      defaultValue = props.defaultValue,
      defer = props.defer,
      description = props.description,
      disabled = props.disabled,
      disableClear = props.disableClear,
      errorText = props.errorText,
      emptyText = props.emptyText,
      hasSearch = props.hasSearch,
      hasTags = props.hasTags,
      hint = props.hint,
      isDropdown = props.isDropdown,
      isLoading = props.isLoading,
      isMultiSelect = props.isMultiSelect,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      orientation = props.orientation,
      label = props.label,
      limit = props.limit,
      loadingText = props.loadingText,
      loadingMoreText = props.loadingMoreText,
      loadOptions = props.loadOptions,
      loadVariables = props.loadVariables,
      options = props.options,
      pagination = props.pagination,
      placeholder = props.placeholder,
      renderError = props.renderError,
      renderEmpty = props.renderEmpty,
      renderLoading = props.renderLoading,
      renderLoadingMore = props.renderLoadingMore,
      renderOption = props.renderOption,
      itemProps = props.itemProps,
      popoverProps = props.popoverProps,
      dropdownMenuInitialState = props.dropdownMenuInitialState,
      searchInputProps = props.searchInputProps,
      state = props.state,
      tagProps = props.tagProps,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      onChange = props.onChange,
      overrides = props.overrides,
      validationText = props.validationText,
      variant = props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "buttonProps", "selectMenuProps", "cacheKey", "containLabel", "children", "defaultValue", "defer", "description", "disabled", "disableClear", "errorText", "emptyText", "hasSearch", "hasTags", "hint", "isDropdown", "isLoading", "isMultiSelect", "isOptional", "isRequired", "orientation", "label", "limit", "loadingText", "loadingMoreText", "loadOptions", "loadVariables", "options", "pagination", "placeholder", "renderError", "renderEmpty", "renderLoading", "renderLoadingMore", "renderOption", "itemProps", "popoverProps", "dropdownMenuInitialState", "searchInputProps", "state", "tagProps", "tooltip", "tooltipTriggerComponent", "value", "onChange", "overrides", "validationText", "variant"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var className = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuField,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(FieldWrapper_FieldWrapper.FieldWrapper, {
      description: description,
      hint: hint,
      isOptional: isOptional,
      isRequired: isRequired,
      label: label,
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText,
      variant: variant
    }, function (_ref2) {
      var elementProps = _ref2.elementProps;
      return /*#__PURE__*/React.createElement(ConditionalWrap__default['default'], {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/React.createElement(Group_Group.Group, {
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, addonBefore, /*#__PURE__*/React.createElement(SelectMenu_SelectMenu.SelectMenu, _rollupPluginBabelHelpers._extends({
        flex: addonBefore || addonAfter ? '1' : undefined,
        cacheKey: cacheKey,
        containLabel: containLabel,
        defer: defer,
        disabled: disabled,
        disableClear: disableClear,
        hasTags: hasTags,
        hasSearch: hasSearch,
        isDropdown: isDropdown,
        isLoading: isLoading,
        isMultiSelect: isMultiSelect,
        limit: limit,
        loadOptions: loadOptions,
        loadVariables: loadVariables,
        options: options,
        onChange: onChange,
        pagination: pagination,
        placeholder: placeholder,
        value: value,
        errorText: errorText,
        emptyText: emptyText,
        loadingText: loadingText,
        loadingMoreText: loadingMoreText,
        renderError: renderError,
        renderEmpty: renderEmpty,
        renderLoading: renderLoading,
        renderLoadingMore: renderLoadingMore,
        renderOption: renderOption,
        buttonProps: buttonProps,
        itemProps: itemProps,
        popoverProps: popoverProps,
        searchInputProps: searchInputProps,
        tagProps: tagProps,
        dropdownMenuInitialState: dropdownMenuInitialState,
        state: state,
        overrides: overrides,
        variant: variant
      }, elementProps, selectMenuProps)), addonAfter));
    })
  });
}, {
  themeKey: 'SelectMenuField'
});
var SelectMenuField = utils_createComponent.createComponent(function (props) {
  var SelectMenuFieldProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: SelectMenuFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SelectMenuField'
  },
  themeKey: 'SelectMenuField'
});

exports.SelectMenuField = SelectMenuField;
