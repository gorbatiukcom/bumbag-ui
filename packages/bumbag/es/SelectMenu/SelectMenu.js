import { createContext, useRef, useState, useReducer, useEffect, useCallback, useMemo, createElement as createElement$1, Fragment, useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends, e as _asyncToGenerator } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/useOptionsState.js';
import { useLabelPlaceholder } from '../utils/useLabelPlaceholder.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import { useDebounce } from '../utils/useDebounce.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import '../utils/fieldAdaptors.js';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import { Spinner } from '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import '../Set.styles.js';
import { Set } from '../Set/Set.js';
import { useLoads } from 'react-loads-next';
import '../Input.styles.js';
import 'react-input-mask';
import '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
import '../Label.styles.js';
import '../Label/Label.js';
import '../FieldWrapper/FieldWrapper.js';
import '../Group.styles.js';
import '../Group/Group.js';
import '../Input/Input.js';
import { Input } from '../Input/index.js';
import '../Menu.styles.js';
import '../DropdownMenu.styles.js';
import { DropdownMenuButton } from '../DropdownMenu/DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import { DropdownMenuPopover } from '../DropdownMenu/DropdownMenuPopover.js';
import '../DropdownMenu/DropdownMenuState.js';
import '../DropdownMenu/DropdownMenu.js';
import '../DropdownMenu/DropdownMenuItem.js';
import '../Divider.styles.js';
import '../Divider/Divider.js';
import '../DropdownMenu/DropdownMenuDivider.js';
import '../DropdownMenu/DropdownMenuGroup.js';
import '../DropdownMenu/DropdownMenuOptionGroup.js';
import '../DropdownMenu/DropdownMenuOptionItem.js';
import { DropdownMenu } from '../DropdownMenu/index.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import '../Menu/Menu.js';
import '../Menu/MenuGroup.js';
import '../Menu/MenuOptionGroup.js';
import '../Menu/MenuItem.js';
import '../Menu/MenuOptionItem.js';
import '../Menu/MenuDivider.js';
import { Menu } from '../Menu/index.js';
import '../Select.styles.js';
import { a as SelectMenu$1, b as SelectMenuButtonWrapper, c as SelectMenuPopover, d as SelectMenuItemsWrapper, e as SelectMenuLabelWrapper, f as SelectMenuLabelWrapperBackground, g as SelectMenuButton$1, h as SelectMenuButtonText, i as SelectMenuButtonIconsWrapper, j as SelectMenuButtonIcon, k as SelectMenuSearchInputWrapper, l as SelectMenuSearchInput$1, m as SelectMenuTagsWrapper, n as SelectMenuItemText, o as SelectMenuClearButtonWrapper, p as SelectMenuClearButton } from '../SelectMenu.styles.js';
import '../Tag.styles.js';
import { Tag } from '../Tag/Tag.js';
import { SelectMenuItem } from './SelectMenuItem.js';
import { SelectMenuStaticItem } from './SelectMenuStaticItem.js';

var SelectMenuContext = createContext({});

function reducer(state, event) {
  switch (event.type) {
    case 'VALUE_CHANGE':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          page: 1,
          selectedOptions: event.value ? Array.isArray(event.value) ? event.value : [event.value] : []
        });
      }

    case 'INPUT_CHANGE':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          page: 1,
          searchText: event.searchText
        });
      }

    case 'OPTIONS_SET':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          options: event.options
        });
      }

    case 'OPTIONS_FILTERED':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          filteredOptions: event.filteredOptions
        });
      }

    case 'PAGE_INCREMENT':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          page: state.page + 1
        });
      }

    default:
      {
        return state;
      }
  }
}

var useProps = createHook(function (props, _ref) {
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
      restProps = _objectWithoutPropertiesLoose(props, ["buttonProps", "cacheKey", "containLabel", "debounceInterval", "disabled", "disableClear", "dropdownMenuInitialState", "emptyText", "errorText", "loadingText", "loadingMoreText", "popoverProps", "hasSearch", "hasTags", "itemProps", "isDropdown", "isLoading", "isMultiSelect", "label", "limit", "loadOptions", "loadVariables", "options", "overrides", "pagination", "renderDisclosure", "renderBottomActions", "renderEmpty", "renderError", "renderLoading", "renderLoadingMore", "renderOption", "renderTopActions", "searchInputProps", "placeholder", "state", "size", "tagProps", "value", "variant", "onChange"]); /////////////////////////////////////////////////


  var boxProps = Box$1.useProps(restProps); //////////////////////////////////////////////////

  var buttonRef = useRef(); //////////////////////////////////////////////////

  var dropdownMenu = DropdownMenu.useState(_objectSpread2({
    animated: true,
    loop: true,
    gutter: 4
  }, dropdownMenuInitialState)); //////////////////////////////////////////////////

  var _React$useState = useState(false),
      blockLoad = _React$useState[0],
      setBlockLoad = _React$useState[1];

  var _React$useState2 = useState(props.defer || !loadOptions),
      defer = _React$useState2[0],
      setDefer = _React$useState2[1]; //////////////////////////////////////////////////


  var _useLabelPlaceholder = useLabelPlaceholder(_objectSpread2({
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


  var className = useClassName({
    style: SelectMenu$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var wrapperClassName = useClassName({
    style: SelectMenuButtonWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonWrapper'
  });
  var dropdownMenuPopoverClassName = useClassName({
    style: SelectMenuPopover,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Popover'
  });
  var selectMenuItemsWrapperClassName = useClassName({
    style: SelectMenuItemsWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ItemsWrapper'
  });
  var labelWrapperClassName = useClassName({
    style: SelectMenuLabelWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused || dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapper'
  });
  var labelWrapperBackgroundClassName = useClassName({
    style: SelectMenuLabelWrapperBackground,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isFocused: isFocused || dropdownMenu.visible
    }),
    themeKey: themeKey,
    themeKeySuffix: 'LabelWrapperBackground'
  }); //////////////////////////////////////////////////

  var _React$useReducer = useReducer(reducer, {
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

  useEffect(function () {
    dispatch({
      type: 'OPTIONS_SET',
      options: initialOptions
    });
    dispatch({
      type: 'OPTIONS_FILTERED',
      filteredOptions: initialOptions
    });
  }, [initialOptions]); //////////////////////////////////////////////////

  var debouncedInputValue = useDebounce(searchText, debounceInterval || 500);
  var getOptions = useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
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
  var optionsRecord = useLoads(cacheKey, getOptions, {
    defer: defer,
    variables: [{
      loadVariables: loadVariables,
      page: page,
      searchText: debouncedInputValue
    }]
  }); //////////////////////////////////////////////////

  var visibleOptions = useMemo(function () {
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


  var filterOptions = useCallback(function (_ref5) {
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

  var handleClickItem = useCallback(function (_ref6) {
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
  var handleClickButton = useCallback(function () {
    if (defer) {
      setDefer(false);
      optionsRecord.load();
    }

    onFocus({});
  }, [defer, optionsRecord]); // eslint-disable-line

  var handleChangeInput = useCallback(function (event) {
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
  var handleClearTag = useCallback(function (_ref7) {
    var option = _ref7.option;
    handleClickItem({
      option: option
    })();
  }, [handleClickItem]);
  var handleClearOptions = useCallback(function (e) {
    e.stopPropagation();
    dispatch({
      type: 'VALUE_CHANGE',
      value: ''
    });
    onChange && onChange('', '');
  }, [onChange]);
  var handleScrollPopover = useCallback(function (event) {
    var target = event.currentTarget;

    if (pagination && !isLoadingMore && !blockLoad && target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 200) {
      dispatch({
        type: 'PAGE_INCREMENT'
      });
    }

    return;
  }, [blockLoad, isLoadingMore, pagination]); //////////////////////////////////////////////////

  useEffect(function () {
    dispatch({
      type: 'VALUE_CHANGE',
      value: value
    });
  }, [value]);
  useEffect(function () {
    if (!dropdownMenu.visible) {
      handleChangeInput({
        target: {
          value: ''
        }
      });
      onBlur({});
    }
  }, [dropdownMenu.visible, handleChangeInput]); // eslint-disable-line

  useEffect(function () {
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

  var context = useMemo(function () {
    return {
      dropdownMenu: dropdownMenu,
      overrides: overrides,
      themeKey: themeKey
    };
  }, [dropdownMenu, overrides, themeKey]); //////////////////////////////////////////////////

  var EmptyStaticItem = useCallback(function (props) {
    return /*#__PURE__*/createElement$1(SelectMenuStaticItem, _extends({}, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  );
  var EmptyItem = useCallback(function (props) {
    return /*#__PURE__*/createElement$1(SelectMenuItem, _extends({
      isDropdown: isDropdown
    }, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  ); //////////////////////////////////////////////////

  var ActionsStaticItem = useCallback(function (props) {
    return /*#__PURE__*/createElement$1(SelectMenuStaticItem, _extends({}, dropdownMenu, props, {
      onClick: function onClick(e) {
        props.onClick && props.onClick(e);
        props.hideDropdownOnClick && dropdownMenu.hide();
      }
    }));
  }, [] // eslint-disable-line
  ); //////////////////////////////////////////////////

  var MenuWrapper = isDropdown ? DropdownMenuPopover : Menu; //////////////////////////////////////////////////

  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(SelectMenuContext.Provider, {
      value: context
    }, isDropdown && /*#__PURE__*/createElement$1(Box$1, {
      className: wrapperClassName
    }, label && /*#__PURE__*/createElement$1(Fragment, null, !containLabel && /*#__PURE__*/createElement$1(Box$1, {
      className: labelWrapperBackgroundClassName
    }, /*#__PURE__*/createElement$1(Text, {
      opacity: "0"
    }, label)), /*#__PURE__*/createElement$1(Box$1, {
      className: labelWrapperClassName,
      onClick: function onClick() {
        var _buttonRef$current;

        return (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.focus();
      }
    }, /*#__PURE__*/createElement$1(Text, null, label))), /*#__PURE__*/createElement$1(SelectMenuButton, _extends({
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
    }, buttonProps))), /*#__PURE__*/createElement$1(MenuWrapper, _extends({}, dropdownMenu, {
      className: dropdownMenuPopoverClassName,
      overrides: overrides,
      role: "listbox"
    }, popoverProps), !isDropdown || dropdownMenu.visible ? /*#__PURE__*/createElement$1(Fragment, null, hasSearch && /*#__PURE__*/createElement$1(SelectMenuSearchInput, {
      onChange: handleChangeInput,
      value: searchText,
      autoFocus: isDropdown,
      searchInputProps: searchInputProps
    }), hasTags && selectedOptions.length > 0 && /*#__PURE__*/createElement$1(SelectMenuTags, {
      onClearTag: handleClearTag,
      selectedOptions: selectedOptions,
      tagProps: tagProps
    }), renderTopActions && renderTopActions({
      StaticItem: ActionsStaticItem
    }), /*#__PURE__*/createElement$1(Box$1, {
      use: "ul",
      className: selectMenuItemsWrapperClassName,
      onScroll: handleScrollPopover,
      overrides: overrides
    }, state === 'success' && /*#__PURE__*/createElement$1(Fragment, null, visibleOptions.map(function (option, index) {
      return /*#__PURE__*/createElement$1(SelectMenuItem, _extends({
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
      }, itemProps), /*#__PURE__*/createElement$1(Option, {
        label: option.label,
        searchText: searchText,
        option: option,
        overrides: overrides,
        MatchedLabel: function MatchedLabel(props) {
          return /*#__PURE__*/createElement$1(_MatchedLabel, _extends({
            label: option.label,
            searchText: searchText
          }, props));
        }
      }));
    }), isLoadingMore && /*#__PURE__*/createElement$1(LoadingMore, {
      loadingText: loadingMoreText,
      overrides: overrides
    })), state === 'loading' && /*#__PURE__*/createElement$1(Loading, {
      loadingText: loadingText,
      overrides: overrides
    }), state === 'empty' && /*#__PURE__*/createElement$1(Empty, {
      emptyText: emptyText,
      searchText: searchText,
      overrides: overrides,
      StaticItem: EmptyStaticItem,
      Item: EmptyItem
    }), state === 'error' && /*#__PURE__*/createElement$1(Error, {
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
var SelectMenu = createComponent(function (props) {
  var selectMenuProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
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
      restProps = _objectWithoutPropertiesLoose(props, ["disabled", "disableClear", "elementRef", "isLoading", "onClick", "onClear", "renderDisclosure", "selectedOptions", "placeholder", "variant"]);

  var _React$useContext = useContext(SelectMenuContext),
      dropdownMenu = _React$useContext.dropdownMenu,
      overrides = _React$useContext.overrides,
      themeKey = _React$useContext.themeKey;

  var color = 'text';

  if (!selectedOptions || selectedOptions.length === 0) {
    color = 'gray300';
  }

  var buttonClassName = useClassName({
    style: SelectMenuButton$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides,
      disabled: disabled,
      variant: variant,
      isSelected: selectedOptions.length > 0
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Button'
  });
  var buttonTextClassName = useClassName({
    style: SelectMenuButtonText,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      color: color,
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonText'
  });
  var iconsWrapperClassName = useClassName({
    style: SelectMenuButtonIconsWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonIconsWrapper'
  });
  var iconClassName = useClassName({
    style: SelectMenuButtonIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ButtonIcon'
  });
  var dropdownMenuButtonProps = DropdownMenuButton.useProps(_objectSpread2(_objectSpread2({}, dropdownMenu), {}, {
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
      buttonProps: _objectSpread2(_objectSpread2({}, props), {}, {
        className: buttonClassName,
        disabled: disabled,
        isSelected: selectedOptions.length > 0,
        overrides: overrides,
        variant: variant
      }),
      buttonTextProps: _objectSpread2(_objectSpread2({}, props), {}, {
        className: buttonTextClassName,
        color: color,
        overrides: overrides
      }),
      disclosureProps: dropdownMenuButtonProps,
      disabled: disabled,
      disableClear: disableClear,
      iconProps: _objectSpread2(_objectSpread2({}, props), {}, {
        className: iconClassName,
        overrides: overrides
      }),
      iconsWrapperProps: _objectSpread2(_objectSpread2({}, props), {}, {
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

  return /*#__PURE__*/createElement$1(Box$1, _extends({}, dropdownMenuButtonProps, {
    className: buttonClassName
  }), /*#__PURE__*/createElement$1(Box$1, {
    className: buttonTextClassName
  }, label), /*#__PURE__*/createElement$1(Box$1, {
    className: iconsWrapperClassName
  }, /*#__PURE__*/createElement$1(Set, null, !disableClear && selectedOptions.length > 0 && /*#__PURE__*/createElement$1(ClearButton, {
    onClick: onClear
  }), isLoading ? /*#__PURE__*/createElement$1(Spinner, {
    color: "text",
    size: "small"
  }) : /*#__PURE__*/createElement$1(Icon, {
    className: iconClassName,
    icon: "chevron-down"
  }))));
} //////////////////////////////////////////////////////////////////


function SelectMenuSearchInput(props) {
  var autoFocus = props.autoFocus,
      onChange = props.onChange,
      searchInputProps = props.searchInputProps,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["autoFocus", "onChange", "searchInputProps", "value"]);

  var _React$useContext2 = useContext(SelectMenuContext),
      overrides = _React$useContext2.overrides,
      themeKey = _React$useContext2.themeKey;

  var searchInputWrapperClassName = useClassName({
    style: SelectMenuSearchInputWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SearchInputWrapper'
  });
  var searchInputClassName = useClassName({
    style: SelectMenuSearchInput$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SearchInput'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: searchInputWrapperClassName
  }, restProps), /*#__PURE__*/createElement$1(Input, _extends({
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
      restProps = _objectWithoutPropertiesLoose(props, ["onClearTag", "selectedOptions", "tagProps"]);

  var _React$useContext3 = useContext(SelectMenuContext),
      overrides = _React$useContext3.overrides,
      themeKey = _React$useContext3.themeKey;

  var tagsWrapperClassName = useClassName({
    style: SelectMenuTagsWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'TagsWrapper'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: tagsWrapperClassName
  }, restProps), /*#__PURE__*/createElement$1(Set, {
    spacing: "minor-1",
    overrides: overrides
  }, selectedOptions.map(function (option) {
    return /*#__PURE__*/createElement$1(Tag, _extends({
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
      restProps = _objectWithoutPropertiesLoose(props, ["label", "searchText"]);

  var _React$useContext4 = useContext(SelectMenuContext),
      overrides = _React$useContext4.overrides,
      themeKey = _React$useContext4.themeKey;

  var className = useClassName({
    style: SelectMenuItemText,
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
  return highlightedText ? /*#__PURE__*/createElement$1(Text, _extends({
    className: className,
    overrides: overrides
  }, restProps), preText && /*#__PURE__*/createElement$1(Text, {
    fontWeight: "normal",
    overrides: overrides
  }, preText), highlightedText && /*#__PURE__*/createElement$1(Text, {
    fontWeight: "semibold",
    overrides: overrides
  }, highlightedText), postText && /*#__PURE__*/createElement$1(Text, {
    fontWeight: "normal",
    overrides: overrides
  }, postText)) : /*#__PURE__*/createElement$1(Text, _extends({
    fontWeight: "normal",
    className: className,
    overrides: overrides
  }, restProps), label);
} //////////////////////////////////////////////////////////////////


function Empty(props) {
  var emptyText = props.emptyText,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["emptyText", "overrides"]);

  return /*#__PURE__*/createElement$1(SelectMenuStaticItem, _extends({
    overrides: overrides
  }, restProps), emptyText);
} //////////////////////////////////////////////////////////////////


function Loading(props) {
  var loadingText = props.loadingText,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["loadingText", "overrides"]);

  return /*#__PURE__*/createElement$1(SelectMenuStaticItem, _extends({
    display: "flex",
    alignItems: "center",
    overrides: overrides
  }, restProps), /*#__PURE__*/createElement$1(Spinner, {
    size: "small",
    overrides: overrides
  }), /*#__PURE__*/createElement$1(Text, {
    marginLeft: "major-1",
    overrides: overrides
  }, loadingText));
} //////////////////////////////////////////////////////////////////


function ClearButton(props) {
  var buttonProps = props.buttonProps,
      onClick = props.onClick,
      restProps = _objectWithoutPropertiesLoose(props, ["buttonProps", "onClick"]);

  var _React$useContext5 = useContext(SelectMenuContext),
      overrides = _React$useContext5.overrides,
      themeKey = _React$useContext5.themeKey;

  var wrapperClassName = useClassName({
    style: SelectMenuClearButtonWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButtonWrapper'
  });
  var buttonClassName = useClassName({
    style: SelectMenuClearButton,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButton'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: wrapperClassName,
    overrides: overrides
  }, restProps), /*#__PURE__*/createElement$1(Button.Close, _extends({
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
      restProps = _objectWithoutPropertiesLoose(props, ["errorText", "overrides"]);

  return /*#__PURE__*/createElement$1(SelectMenuStaticItem, _extends({
    overrides: overrides
  }, restProps), errorText);
}

export { SelectMenu, SelectMenuContext };
