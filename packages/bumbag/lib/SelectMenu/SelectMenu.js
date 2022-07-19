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
require('../utils/useOptionsState.js');
var utils_useLabelPlaceholder = require('../utils/useLabelPlaceholder.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
var utils_useDebounce = require('../utils/useDebounce.js');
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
var Icon_Icon = require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
var Spinner_Spinner = require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
var Button_index = require('../Button/index.js');
require('../Set.styles-ac954f46.js');
var Set_Set = require('../Set/Set.js');
var Loads = require('react-loads-next');
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
var Input_index = require('../Input/index.js');
require('../Menu.styles-17849743.js');
require('../DropdownMenu.styles-c144c17a.js');
var DropdownMenu_DropdownMenuButton = require('../DropdownMenu/DropdownMenuButton.js');
require('../Modal.styles-a83df364.js');
require('../Popover.styles-689e5c1d.js');
var DropdownMenu_DropdownMenuPopover = require('../DropdownMenu/DropdownMenuPopover.js');
require('../DropdownMenu/DropdownMenuState.js');
require('../DropdownMenu/DropdownMenu.js');
require('../DropdownMenu/DropdownMenuItem.js');
require('../Divider.styles-f86e0306.js');
require('../Divider/Divider.js');
require('../DropdownMenu/DropdownMenuDivider.js');
require('../DropdownMenu/DropdownMenuGroup.js');
require('../DropdownMenu/DropdownMenuOptionGroup.js');
require('../DropdownMenu/DropdownMenuOptionItem.js');
var DropdownMenu_index = require('../DropdownMenu/index.js');
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
var Menu_index = require('../Menu/index.js');
require('../Select.styles-ff72e480.js');
var SelectMenu_SelectMenu_styles = require('../SelectMenu.styles-fad0f50a.js');
require('../Tag.styles-e914db50.js');
var Tag_Tag = require('../Tag/Tag.js');
var SelectMenu_SelectMenuItem = require('./SelectMenuItem.js');
var SelectMenu_SelectMenuStaticItem = require('./SelectMenuStaticItem.js');

var SelectMenuContext = React.createContext({});

function reducer(state, event) {
  switch (event.type) {
    case 'VALUE_CHANGE':
      {
        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, state), {}, {
          page: 1,
          selectedOptions: event.value ? Array.isArray(event.value) ? event.value : [event.value] : []
        });
      }

    case 'INPUT_CHANGE':
      {
        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, state), {}, {
          page: 1,
          searchText: event.searchText
        });
      }

    case 'OPTIONS_SET':
      {
        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, state), {}, {
          options: event.options
        });
      }

    case 'OPTIONS_FILTERED':
      {
        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, state), {}, {
          filteredOptions: event.filteredOptions
        });
      }

    case 'PAGE_INCREMENT':
      {
        return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, state), {}, {
          page: state.page + 1
        });
      }

    default:
      {
        return state;
      }
  }
}

var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var buttonProps = props.buttonProps,
      cacheKey = props.cacheKey,
      containLabel = props.containLabel,
      debounceInterval = props.debounceInterval,
      disabled = props.disabled,
      disableClear = props.disableClear,
      dropdownMenuInitialState = props.dropdownMenuInitialState,
      emptyText = props.emptyText,
      errorText = props.errorText,
      loadingText = props.loadingText,
      loadingMoreText = props.loadingMoreText,
      popoverProps = props.popoverProps,
      hasSearch = props.hasSearch,
      hasTags = props.hasTags,
      itemProps = props.itemProps,
      isDropdown = props.isDropdown,
      isLoading = props.isLoading,
      isMultiSelect = props.isMultiSelect,
      label = props.label,
      limit = props.limit,
      loadOptions = props.loadOptions,
      loadVariables = props.loadVariables,
      initialOptions = props.options,
      overrides = props.overrides,
      pagination = props.pagination,
      renderDisclosure = props.renderDisclosure,
      renderBottomActions = props.renderBottomActions,
      Empty = props.renderEmpty,
      Error = props.renderError,
      Loading = props.renderLoading,
      LoadingMore = props.renderLoadingMore,
      Option = props.renderOption,
      renderTopActions = props.renderTopActions,
      searchInputProps = props.searchInputProps,
      placeholder = props.placeholder,
      fieldState = props.state,
      size = props.size,
      tagProps = props.tagProps,
      value = props.value,
      variant = props.variant,
      _onChange = props.onChange,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["buttonProps", "cacheKey", "containLabel", "debounceInterval", "disabled", "disableClear", "dropdownMenuInitialState", "emptyText", "errorText", "loadingText", "loadingMoreText", "popoverProps", "hasSearch", "hasTags", "itemProps", "isDropdown", "isLoading", "isMultiSelect", "label", "limit", "loadOptions", "loadVariables", "options", "overrides", "pagination", "renderDisclosure", "renderBottomActions", "renderEmpty", "renderError", "renderLoading", "renderLoadingMore", "renderOption", "renderTopActions", "searchInputProps", "placeholder", "state", "size", "tagProps", "value", "variant", "onChange"]); /////////////////////////////////////////////////


  var boxProps = Box_Box.Box.useProps(restProps); //////////////////////////////////////////////////

  var buttonRef = React.useRef(); //////////////////////////////////////////////////

  var dropdownMenu = DropdownMenu_index.DropdownMenu.useState(_rollupPluginBabelHelpers._objectSpread2({
    animated: true,
    loop: true,
    gutter: 4
  }, dropdownMenuInitialState)); //////////////////////////////////////////////////

  var _React$useState = React.useState(false),
      blockLoad = _React$useState[0],
      setBlockLoad = _React$useState[1];

  var _React$useState2 = React.useState(props.defer || !loadOptions),
      defer = _React$useState2[0],
      setDefer = _React$useState2[1]; //////////////////////////////////////////////////


  var _useLabelPlaceholder = utils_useLabelPlaceholder.useLabelPlaceholder(_rollupPluginBabelHelpers._objectSpread2({
    enabled: Boolean(label),
    useValue: true,
    onBlur: null,
    onFocus: null,
    onChange: _onChange
  }, props)),
      isFocused = _useLabelPlaceholder.isFocused,
      _useLabelPlaceholder$ = _useLabelPlaceholder.inputProps,
      onBlur = _useLabelPlaceholder$.onBlur,
      onChange = _useLabelPlaceholder$.onChange,
      onFocus = _useLabelPlaceholder$.onFocus; //////////////////////////////////////////////////


  var className = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenu,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var wrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuButtonWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonWrapper'
  });
  var dropdownMenuPopoverClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuPopover,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Popover'
  });
  var selectMenuItemsWrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuItemsWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ItemsWrapper'
  });
  var labelWrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuLabelWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused || dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuLabelWrapperBackground,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      isFocused: isFocused || dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  }); //////////////////////////////////////////////////

  var _React$useReducer = React.useReducer(reducer, {
    searchText: '',
    filteredOptions: initialOptions,
    options: initialOptions,
    page: 1,
    selectedOptions: []
  }),
      _React$useReducer$ = _React$useReducer[0],
      searchText = _React$useReducer$.searchText,
      filteredOptions = _React$useReducer$.filteredOptions,
      options = _React$useReducer$.options,
      page = _React$useReducer$.page,
      selectedOptions = _React$useReducer$.selectedOptions,
      selectedIndexes = _React$useReducer$.selectedIndexes,
      dispatch = _React$useReducer[1];

  React.useEffect(function () {
    dispatch({
      type: 'OPTIONS_SET',
      options: initialOptions
    });
    dispatch({
      type: 'OPTIONS_FILTERED',
      filteredOptions: initialOptions
    });
  }, [initialOptions]); //////////////////////////////////////////////////

  var debouncedInputValue = utils_useDebounce.useDebounce(searchText, debounceInterval || 500);
  var getOptions = React.useCallback( /*#__PURE__*/function () {
    var _ref3 = _rollupPluginBabelHelpers._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var loadVariables, page, _ref2$searchText, searchText;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loadVariables = _ref2.loadVariables, page = _ref2.page, _ref2$searchText = _ref2.searchText, searchText = _ref2$searchText === void 0 ? '' : _ref2$searchText;

              if (!(typeof loadOptions === 'function')) {
                _context.next = 5;
                break;
              }

              if (!blockLoad) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", new Promise(function (res) {
                return res({
                  options: options
                });
              }));

            case 4:
              return _context.abrupt("return", loadOptions({
                page: page,
                searchText: searchText,
                variables: loadVariables
              }).then(function (_ref4) {
                var fetchedOptions = _ref4.options;
                var newOptions = [].concat(options, fetchedOptions);

                if (page === 1) {
                  newOptions = fetchedOptions;
                }

                if (page > 1 && fetchedOptions.length === 0) {
                  setBlockLoad(true);
                }

                return {
                  options: newOptions
                };
              }));

            case 5:
              return _context.abrupt("return", new Promise(function (res) {
                return res(undefined);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [blockLoad, loadOptions, options]);
  var optionsRecord = Loads.useLoads(cacheKey, getOptions, {
    defer: defer,
    variables: [{
      loadVariables: loadVariables,
      page: page,
      searchText: debouncedInputValue
    }]
  }); //////////////////////////////////////////////////

  var visibleOptions = React.useMemo(function () {
    return filteredOptions.slice(0, limit).filter(function (option) {
      if (!option) return false;

      if (hasTags) {
        return !selectedOptions.includes(option);
      }

      return true;
    });
  }, [filteredOptions, hasTags, limit, selectedOptions]); //////////////////////////////////////////////////

  var isLoadingMore = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page > 1;
  var state = 'empty';

  if (visibleOptions.length > 0 || loadOptions && (optionsRecord.isResolved && visibleOptions.length > 0 || isLoadingMore)) {
    state = 'success';
  } else if (isLoading || loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page === 1) {
    state = 'loading';
  } else if (loadOptions && optionsRecord.isRejected) {
    state = 'error';
  } //////////////////////////////////////////////////


  var filterOptions = React.useCallback(function (_ref5) {
    var searchText = _ref5.searchText;
    if (loadOptions) return;
    var filteredOptions = options.filter(function (option) {
      return option.label.toLowerCase().includes(searchText.trim().toLowerCase());
    });
    dispatch({
      type: 'OPTIONS_FILTERED',
      filteredOptions: filteredOptions
    });
    return filteredOptions;
  }, [loadOptions, options]); //////////////////////////////////////////////////

  var handleClickItem = React.useCallback(function (_ref6) {
    var option = _ref6.option;
    return function () {
      if (isMultiSelect) {
        var _newOptions = [];

        if (selectedOptions.some(function (selectedOption) {
          return selectedOption.key === option.key;
        })) {
          _newOptions = selectedOptions.filter(function (selectedOption) {
            return option.key !== selectedOption.key;
          });
        } else {
          _newOptions = [].concat(selectedOptions, [option]);
        }

        onChange && onChange(_newOptions, option);
      } else {
        var _newOptions2 = selectedOptions;

        if (!selectedOptions.includes(option)) {
          _newOptions2 = option;
        } else if (!disableClear) {
          _newOptions2 = '';
        }

        onChange && onChange(_newOptions2, _newOptions2);
      }
    };
  }, [disableClear, isMultiSelect, onChange, selectedOptions]);
  var handleClickButton = React.useCallback(function () {
    if (defer) {
      setDefer(false);
      optionsRecord.load();
    }

    onFocus({});
  }, [defer, optionsRecord]); // eslint-disable-line

  var handleChangeInput = React.useCallback(function (event) {
    var searchText = event.target.value || '';
    setBlockLoad(false);
    dispatch({
      type: 'INPUT_CHANGE',
      searchText: searchText
    });
    filterOptions({
      searchText: searchText
    });
  }, [filterOptions]);
  var handleClearTag = React.useCallback(function (_ref7) {
    var option = _ref7.option;
    handleClickItem({
      option: option
    })();
  }, [handleClickItem]);
  var handleClearOptions = React.useCallback(function (e) {
    e.stopPropagation();
    dispatch({
      type: 'VALUE_CHANGE',
      value: ''
    });
    onChange && onChange('', '');
  }, [onChange]);
  var handleScrollPopover = React.useCallback(function (event) {
    var target = event.currentTarget;

    if (pagination && !isLoadingMore && !blockLoad && target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 200) {
      dispatch({
        type: 'PAGE_INCREMENT'
      });
    }

    return;
  }, [blockLoad, isLoadingMore, pagination]); //////////////////////////////////////////////////

  React.useEffect(function () {
    dispatch({
      type: 'VALUE_CHANGE',
      value: value
    });
  }, [value]);
  React.useEffect(function () {
    if (!dropdownMenu.visible) {
      handleChangeInput({
        target: {
          value: ''
        }
      });
      onBlur({});
    }
  }, [dropdownMenu.visible, handleChangeInput]); // eslint-disable-line

  React.useEffect(function () {
    if (loadOptions && optionsRecord.isResolved) {
      var _optionsRecord$respon, _optionsRecord$respon2;

      var _options = (_optionsRecord$respon = (_optionsRecord$respon2 = optionsRecord.response) === null || _optionsRecord$respon2 === void 0 ? void 0 : _optionsRecord$respon2.options) !== null && _optionsRecord$respon !== void 0 ? _optionsRecord$respon : [];

      dispatch({
        type: 'OPTIONS_SET',
        options: _options
      });
      dispatch({
        type: 'OPTIONS_FILTERED',
        filteredOptions: _options
      });
    }
  }, [loadOptions, optionsRecord.isResolved, optionsRecord.response]); //////////////////////////////////////////////////

  var context = React.useMemo(function () {
    return {
      dropdownMenu: dropdownMenu,
      overrides: overrides,
      themeKey: themeKey
    };
  }, [dropdownMenu, overrides, themeKey]); //////////////////////////////////////////////////

  var EmptyStaticItem = React.useCallback(function (props) {
    return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuStaticItem.SelectMenuStaticItem, _rollupPluginBabelHelpers._extends({}, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  );
  var EmptyItem = React.useCallback(function (props) {
    return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuItem.SelectMenuItem, _rollupPluginBabelHelpers._extends({
      isDropdown: isDropdown
    }, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  ); //////////////////////////////////////////////////

  var ActionsStaticItem = React.useCallback(function (props) {
    return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuStaticItem.SelectMenuStaticItem, _rollupPluginBabelHelpers._extends({}, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        props.hideDropdownOnClick && dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  ); //////////////////////////////////////////////////

  var MenuWrapper = isDropdown ? DropdownMenu_DropdownMenuPopover.DropdownMenuPopover : Menu_index.Menu; //////////////////////////////////////////////////

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/React.createElement(SelectMenuContext.Provider, {
      value: context
    }, isDropdown && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: wrapperClassName
    }, label && /*#__PURE__*/React.createElement(React.Fragment, null, !containLabel && /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: labelWrapperBackgroundClassName
    }, /*#__PURE__*/React.createElement(Text_index.Text, {
      opacity: "0"
    }, label)), /*#__PURE__*/React.createElement(Box_Box.Box, {
      className: labelWrapperClassName,
      onClick: function onClick() {
        var _buttonRef$current;

        return (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.focus();
      }
    }, /*#__PURE__*/React.createElement(Text_index.Text, null, label))), /*#__PURE__*/React.createElement(SelectMenuButton, _rollupPluginBabelHelpers._extends({
      elementRef: buttonRef,
      containLabel: containLabel,
      disabled: disabled,
      disableClear: disableClear,
      isLoading: isLoading,
      onClick: handleClickButton,
      onClear: handleClearOptions,
      placeholder: placeholder,
      renderDisclosure: renderDisclosure,
      selectedOptions: selectedOptions,
      size: size,
      state: fieldState,
      variant: variant,
      value: value
    }, buttonProps))), /*#__PURE__*/React.createElement(MenuWrapper, _rollupPluginBabelHelpers._extends({}, dropdownMenu, {
      className: dropdownMenuPopoverClassName,
      overrides: overrides,
      role: "listbox"
    }, popoverProps), !isDropdown || dropdownMenu.visible ? /*#__PURE__*/React.createElement(React.Fragment, null, hasSearch && /*#__PURE__*/React.createElement(SelectMenuSearchInput, {
      onChange: handleChangeInput,
      value: searchText,
      autoFocus: isDropdown,
      searchInputProps: searchInputProps
    }), hasTags && selectedOptions.length > 0 && /*#__PURE__*/React.createElement(SelectMenuTags, {
      onClearTag: handleClearTag,
      selectedOptions: selectedOptions,
      tagProps: tagProps
    }), renderTopActions && renderTopActions({
      StaticItem: ActionsStaticItem
    }), /*#__PURE__*/React.createElement(Box_Box.Box, {
      use: "ul",
      className: selectMenuItemsWrapperClassName,
      onScroll: handleScrollPopover,
      overrides: overrides
    }, state === 'success' && /*#__PURE__*/React.createElement(React.Fragment, null, visibleOptions.map(function (option, index) {
      return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuItem.SelectMenuItem, _rollupPluginBabelHelpers._extends({
        key: option.key || index
      }, dropdownMenu, {
        "aria-selected": selectedOptions.some(function (selectedOption) {
          return selectedOption.key === option.key;
        }),
        "aria-disabled": option.disabled,
        disabled: option.disabled,
        iconAfter: option.iconAfter,
        iconAfterProps: option.iconAfterProps,
        iconBefore: option.iconBefore,
        iconBeforeProps: option.iconBeforeProps,
        isDropdown: isDropdown,
        hideOnClick: !isMultiSelect,
        onClick: handleClickItem({
          index: index,
          option: option
        }),
        overrides: overrides
      }, itemProps), /*#__PURE__*/React.createElement(Option, {
        label: option.label,
        searchText: searchText,
        option: option,
        overrides: overrides,
        MatchedLabel: function MatchedLabel(props) {
          return /*#__PURE__*/React.createElement(_MatchedLabel, _rollupPluginBabelHelpers._extends({
            label: option.label,
            searchText: searchText
          }, props));
        }
      }));
    }), isLoadingMore && /*#__PURE__*/React.createElement(LoadingMore, {
      loadingText: loadingMoreText,
      overrides: overrides
    })), state === 'loading' && /*#__PURE__*/React.createElement(Loading, {
      loadingText: loadingText,
      overrides: overrides
    }), state === 'empty' && /*#__PURE__*/React.createElement(Empty, {
      emptyText: emptyText,
      searchText: searchText,
      overrides: overrides,
      StaticItem: EmptyStaticItem,
      Item: EmptyItem
    }), state === 'error' && /*#__PURE__*/React.createElement(Error, {
      errorText: errorText,
      overrides: overrides
    })), renderBottomActions && renderBottomActions({
      StaticItem: ActionsStaticItem
    })) : null))
  });
}, {
  defaultProps: {
    cacheKey: 'bb-options',
    disabled: false,
    emptyText: 'No results found',
    errorText: 'An error occurred',
    isDropdown: true,
    loadingText: 'Loading...',
    loadingMoreText: 'Loading...',
    options: [],
    popoverHeight: '300px',
    renderBottomActions: function renderBottomActions() {},
    renderEmpty: Empty,
    renderError: Error,
    renderLoading: Loading,
    renderLoadingMore: Loading,
    renderOption: _MatchedLabel,
    renderTopActions: function renderTopActions() {},
    variant: 'bordered'
  },
  themeKey: 'SelectMenu'
});
var SelectMenu = utils_createComponent.createComponent(function (props) {
  var selectMenuProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: selectMenuProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SelectMenu'
  },
  themeKey: 'SelectMenu'
}); //////////////////////////////////////////////////////////////////

function SelectMenuButton(props) {
  var disabled = props.disabled,
      disableClear = props.disableClear,
      elementRef = props.elementRef,
      isLoading = props.isLoading,
      onClick = props.onClick,
      onClear = props.onClear,
      renderDisclosure = props.renderDisclosure,
      selectedOptions = props.selectedOptions,
      placeholder = props.placeholder,
      variant = props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["disabled", "disableClear", "elementRef", "isLoading", "onClick", "onClear", "renderDisclosure", "selectedOptions", "placeholder", "variant"]);

  var _React$useContext = React.useContext(SelectMenuContext),
      dropdownMenu = _React$useContext.dropdownMenu,
      overrides = _React$useContext.overrides,
      themeKey = _React$useContext.themeKey;

  var color = 'text';

  if (!selectedOptions || selectedOptions.length === 0) {
    color = 'gray300';
  }

  var buttonClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuButton,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides,
      disabled: disabled,
      variant: variant,
      isSelected: selectedOptions.length > 0
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Button'
  });
  var buttonTextClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuButtonText,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      color: color,
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonText'
  });
  var iconsWrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuButtonIconsWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonIconsWrapper'
  });
  var iconClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuButtonIcon,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonIcon'
  });
  var dropdownMenuButtonProps = DropdownMenu_DropdownMenuButton.DropdownMenuButton.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, dropdownMenu), {}, {
    'aria-haspopup': 'listbox',
    elementRef: elementRef,
    disabled: disabled,
    onClick: onClick,
    overrides: overrides
  }, restProps));
  var label = placeholder;

  if (selectedOptions.length === 1) {
    var _selectedOptions$;

    label = selectedOptions === null || selectedOptions === void 0 ? void 0 : (_selectedOptions$ = selectedOptions[0]) === null || _selectedOptions$ === void 0 ? void 0 : _selectedOptions$.label;
  }

  if (selectedOptions.length > 1) {
    var _selectedOptions$2;

    label = (selectedOptions === null || selectedOptions === void 0 ? void 0 : (_selectedOptions$2 = selectedOptions[0]) === null || _selectedOptions$2 === void 0 ? void 0 : _selectedOptions$2.label) + " + " + (selectedOptions.length - 1) + " other" + (selectedOptions.length - 1 > 1 ? 's' : '');
  }

  if (renderDisclosure) {
    return renderDisclosure({
      buttonProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
        className: buttonClassName,
        disabled: disabled,
        isSelected: selectedOptions.length > 0,
        overrides: overrides,
        variant: variant
      }),
      buttonTextProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
        className: buttonTextClassName,
        color: color,
        overrides: overrides
      }),
      disclosureProps: dropdownMenuButtonProps,
      disabled: disabled,
      disableClear: disableClear,
      iconProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
        className: iconClassName,
        overrides: overrides
      }),
      iconsWrapperProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
        className: iconsWrapperClassName,
        overrides: overrides
      }),
      isLoading: isLoading,
      label: label,
      selectedOptions: selectedOptions,
      onClear: onClear,
      placeholder: placeholder
    });
  }

  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({}, dropdownMenuButtonProps, {
    className: buttonClassName
  }), /*#__PURE__*/React.createElement(Box_Box.Box, {
    className: buttonTextClassName
  }, label), /*#__PURE__*/React.createElement(Box_Box.Box, {
    className: iconsWrapperClassName
  }, /*#__PURE__*/React.createElement(Set_Set.Set, null, !disableClear && selectedOptions.length > 0 && /*#__PURE__*/React.createElement(ClearButton, {
    onClick: onClear
  }), isLoading ? /*#__PURE__*/React.createElement(Spinner_Spinner.Spinner, {
    color: "text",
    size: "small"
  }) : /*#__PURE__*/React.createElement(Icon_Icon.Icon, {
    className: iconClassName,
    icon: "chevron-down"
  }))));
} //////////////////////////////////////////////////////////////////


function SelectMenuSearchInput(props) {
  var autoFocus = props.autoFocus,
      onChange = props.onChange,
      searchInputProps = props.searchInputProps,
      value = props.value,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["autoFocus", "onChange", "searchInputProps", "value"]);

  var _React$useContext2 = React.useContext(SelectMenuContext),
      overrides = _React$useContext2.overrides,
      themeKey = _React$useContext2.themeKey;

  var searchInputWrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuSearchInputWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SearchInputWrapper'
  });
  var searchInputClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuSearchInput,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SearchInput'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: searchInputWrapperClassName
  }, restProps), /*#__PURE__*/React.createElement(Input_index.Input, _rollupPluginBabelHelpers._extends({
    className: searchInputClassName,
    onChange: onChange,
    overrides: overrides,
    placeholder: "Type to search...",
    value: value,
    autoFocus: autoFocus
  }, searchInputProps)));
} //////////////////////////////////////////////////////////////////


function SelectMenuTags(props) {
  var onClearTag = props.onClearTag,
      selectedOptions = props.selectedOptions,
      tagProps = props.tagProps,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["onClearTag", "selectedOptions", "tagProps"]);

  var _React$useContext3 = React.useContext(SelectMenuContext),
      overrides = _React$useContext3.overrides,
      themeKey = _React$useContext3.themeKey;

  var tagsWrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuTagsWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'TagsWrapper'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: tagsWrapperClassName
  }, restProps), /*#__PURE__*/React.createElement(Set_Set.Set, {
    spacing: "minor-1",
    overrides: overrides
  }, selectedOptions.map(function (option) {
    return /*#__PURE__*/React.createElement(Tag_Tag.Tag, _rollupPluginBabelHelpers._extends({
      key: option.key,
      palette: "primaryTint",
      onRemove: function onRemove() {
        return onClearTag({
          option: option
        });
      },
      overrides: overrides
    }, tagProps), option.label);
  })));
} //////////////////////////////////////////////////////////////////


function _MatchedLabel(props) {
  var label = props.label,
      searchText = props.searchText,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["label", "searchText"]);

  var _React$useContext4 = React.useContext(SelectMenuContext),
      overrides = _React$useContext4.overrides,
      themeKey = _React$useContext4.themeKey;

  var className = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuItemText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ItemText'
  });

  var escapeStringRegexp = function escapeStringRegexp(string) {
    return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  };

  var match = label.match(new RegExp(escapeStringRegexp(searchText), 'i')) || [];
  var preText = label.slice(0, match.index);
  var highlightedText = match[0];
  var postText = label.slice(match.index + (match[0] || '').length);
  return highlightedText ? /*#__PURE__*/React.createElement(Text_index.Text, _rollupPluginBabelHelpers._extends({
    className: className,
    overrides: overrides
  }, restProps), preText && /*#__PURE__*/React.createElement(Text_index.Text, {
    fontWeight: "normal",
    overrides: overrides
  }, preText), highlightedText && /*#__PURE__*/React.createElement(Text_index.Text, {
    fontWeight: "semibold",
    overrides: overrides
  }, highlightedText), postText && /*#__PURE__*/React.createElement(Text_index.Text, {
    fontWeight: "normal",
    overrides: overrides
  }, postText)) : /*#__PURE__*/React.createElement(Text_index.Text, _rollupPluginBabelHelpers._extends({
    fontWeight: "normal",
    className: className,
    overrides: overrides
  }, restProps), label);
} //////////////////////////////////////////////////////////////////


function Empty(props) {
  var emptyText = props.emptyText,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["emptyText", "overrides"]);

  return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuStaticItem.SelectMenuStaticItem, _rollupPluginBabelHelpers._extends({
    overrides: overrides
  }, restProps), emptyText);
} //////////////////////////////////////////////////////////////////


function Loading(props) {
  var loadingText = props.loadingText,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["loadingText", "overrides"]);

  return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuStaticItem.SelectMenuStaticItem, _rollupPluginBabelHelpers._extends({
    display: "flex",
    alignItems: "center",
    overrides: overrides
  }, restProps), /*#__PURE__*/React.createElement(Spinner_Spinner.Spinner, {
    size: "small",
    overrides: overrides
  }), /*#__PURE__*/React.createElement(Text_index.Text, {
    marginLeft: "major-1",
    overrides: overrides
  }, loadingText));
} //////////////////////////////////////////////////////////////////


function ClearButton(props) {
  var buttonProps = props.buttonProps,
      onClick = props.onClick,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["buttonProps", "onClick"]);

  var _React$useContext5 = React.useContext(SelectMenuContext),
      overrides = _React$useContext5.overrides,
      themeKey = _React$useContext5.themeKey;

  var wrapperClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuClearButtonWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButtonWrapper'
  });
  var buttonClassName = utils_useClassName.useClassName({
    style: SelectMenu_SelectMenu_styles.SelectMenuClearButton,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButton'
  });
  return /*#__PURE__*/React.createElement(Box_Box.Box, _rollupPluginBabelHelpers._extends({
    className: wrapperClassName,
    overrides: overrides
  }, restProps), /*#__PURE__*/React.createElement(Button_index.Button.Close, _rollupPluginBabelHelpers._extends({
    className: buttonClassName,
    onClick: onClick,
    iconProps: {
      fontSize: '200'
    },
    size: "small",
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    },
    overrides: overrides
  }, buttonProps)));
} //////////////////////////////////////////////////////////////////


function Error(props) {
  var errorText = props.errorText,
      overrides = props.overrides,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["errorText", "overrides"]);

  return /*#__PURE__*/React.createElement(SelectMenu_SelectMenuStaticItem.SelectMenuStaticItem, _rollupPluginBabelHelpers._extends({
    overrides: overrides
  }, restProps), errorText);
}

exports.SelectMenu = SelectMenu;
exports.SelectMenuContext = SelectMenuContext;
