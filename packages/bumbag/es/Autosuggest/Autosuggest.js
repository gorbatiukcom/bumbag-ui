import { createContext, useRef, useState, useEffect, useReducer, useCallback, useMemo, createElement as createElement$1, Fragment, useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends, e as _asyncToGenerator } from '../_rollupPluginBabelHelpers.js';
import { omit } from '../utils/omit.js';
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
import '../utils/useLabelPlaceholder.js';
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
import { Flex } from '../Flex/Flex.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
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
import { a as Autosuggest$1, b as AutosuggestPopover, I as ItemsWrapper, c as AutosuggestInput, d as AutosuggestClearButtonWrapper, e as AutosuggestClearButton, f as AutosuggestItemText } from '../Autosuggest.styles.js';
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
import { AutosuggestItem } from './AutosuggestItem.js';
import { AutosuggestStaticItem } from './AutosuggestStaticItem.js';

var AutosuggestContext = createContext({});
var KEY_ENTER = 13;
var KEY_ESC = 27;
var KEY_UP = 38;
var KEY_DOWN = 40;

function reducer(state, event) {
  switch (event.type) {
    case 'INPUT_CHANGE':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          page: 1,
          highlightedIndex: event.automaticSelection ? getNewHighlightedIndex({
            compare: function compare(_ref) {
              var index = _ref.index,
                  optionsLength = _ref.optionsLength;
              return index < optionsLength ? index + 1 : 0;
            },
            highlightedIndex: -1,
            filteredOptions: state.filteredOptions
          }) : -1,
          inputValue: event.inputValue,
          selectedOption: undefined
        });
      }

    case 'INPUT_BLUR':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: -1,
          page: 1,
          inputValue: event.restrictToOptions && state.highlightedIndex === -1 && !state.selectedOption ? '' : state.inputValue
        });
      }

    case 'KEY_UP':
      {
        var newHighlightedIndex = getNewHighlightedIndex({
          compare: function compare(_ref2) {
            var index = _ref2.index,
                optionsLength = _ref2.optionsLength;
            return index > 0 ? index - 1 : optionsLength;
          },
          highlightedIndex: state.highlightedIndex,
          filteredOptions: state.filteredOptions
        });
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: newHighlightedIndex
        });
      }

    case 'KEY_DOWN':
      {
        var _newHighlightedIndex = getNewHighlightedIndex({
          compare: function compare(_ref3) {
            var index = _ref3.index,
                optionsLength = _ref3.optionsLength;
            return index < optionsLength ? index + 1 : 0;
          },
          highlightedIndex: state.highlightedIndex,
          filteredOptions: state.filteredOptions
        });

        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: _newHighlightedIndex
        });
      }

    case 'KEY_ESC':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: -1,
          inputValue: ''
        });
      }

    case 'KEY_ENTER':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: -1,
          inputValue: event.restrictToOptions && state.highlightedIndex === -1 ? '' : state.inputValue
        });
      }

    case 'MOUSE_CLICK_ITEM':
      {
        if (event.option && event.option.disabled) return state;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: -1,
          inputValue: state.filteredOptions[event.index].label
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

    case 'OPTION_SELECTED':
      {
        var _event$option$label, _event$option;

        return _objectSpread2(_objectSpread2({}, state), {}, {
          filteredOptions: [event.option],
          inputValue: (_event$option$label = event === null || event === void 0 ? void 0 : (_event$option = event.option) === null || _event$option === void 0 ? void 0 : _event$option.label) !== null && _event$option$label !== void 0 ? _event$option$label : '',
          selectedOption: event.option,
          value: event.option
        });
      }

    case 'OPTION_CLEARED':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          filteredOptions: state.options,
          inputValue: '',
          selectedOption: undefined,
          value: undefined
        });
      }

    case 'MOUSE_ENTER_POPOVER':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isMouseInsidePopover: true
        });
      }

    case 'MOUSE_LEAVE_POPOVER':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          highlightedIndex: state.inputValue && event.automaticSelection ? 0 : -1,
          isMouseInsidePopover: false
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

var useProps = createHook(function (props, _ref4) {
  var _dropdownMenu$items, _dropdownMenu$items$h;

  var themeKey = _ref4.themeKey;

  var automaticSelection = props.automaticSelection,
      cacheKey = props.cacheKey,
      containLabel = props.containLabel,
      clearButtonProps = props.clearButtonProps,
      debounceInterval = props.debounceInterval,
      disabled = props.disabled,
      dropdownMenuInitialState = props.dropdownMenuInitialState,
      emptyText = props.emptyText,
      errorText = props.errorText,
      loadingText = props.loadingText,
      loadingMoreText = props.loadingMoreText,
      popoverProps = props.popoverProps,
      itemProps = props.itemProps,
      inputProps = props.inputProps,
      isInputLoading = props.isLoading,
      label = props.label,
      limit = props.limit,
      loadOptions = props.loadOptions,
      loadVariables = props.loadVariables,
      onChange = props.onChange,
      initialOptions = props.options,
      overrides = props.overrides,
      pagination = props.pagination,
      renderBottomActions = props.renderBottomActions,
      ClearButton = props.renderClearButton,
      Empty = props.renderEmpty,
      Error = props.renderError,
      Loading = props.renderLoading,
      LoadingMore = props.renderLoadingMore,
      Option = props.renderOption,
      renderTopActions = props.renderTopActions,
      placeholder = props.placeholder,
      restrictToOptions = props.restrictToOptions,
      state = props.state,
      value = props.value,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["automaticSelection", "cacheKey", "containLabel", "clearButtonProps", "debounceInterval", "disabled", "dropdownMenuInitialState", "emptyText", "errorText", "loadingText", "loadingMoreText", "popoverProps", "itemProps", "inputProps", "isLoading", "label", "limit", "loadOptions", "loadVariables", "onChange", "options", "overrides", "pagination", "renderBottomActions", "renderClearButton", "renderEmpty", "renderError", "renderLoading", "renderLoadingMore", "renderOption", "renderTopActions", "placeholder", "restrictToOptions", "state", "value", "variant"]); //////////////////////////////////////////////////


  var boxProps = Box$1.useProps(restProps); //////////////////////////////////////////////////

  var inputRef = useRef();
  var mousePositionRef = useRef();
  var popoverRef = useRef();

  var _React$useState = useState(props.defer || !loadOptions),
      defer = _React$useState[0],
      setDefer = _React$useState[1];

  var _React$useState2 = useState(false),
      blockLoad = _React$useState2[0],
      setBlockLoad = _React$useState2[1]; //////////////////////////////////////////////////


  var dropdownMenu = DropdownMenu.useState(_objectSpread2({
    loop: true,
    gutter: 4
  }, dropdownMenuInitialState));
  var dropdownMenuButtonProps = DropdownMenuButton.useProps(_objectSpread2(_objectSpread2({}, dropdownMenu), {}, {
    ref: inputRef
  })); //////////////////////////////////////////////////

  useEffect(function () {
    function handleMouseMove(e) {
      mousePositionRef.current = e;
    }

    if (typeof window !== 'undefined') {
      window.document.addEventListener('mousemove', handleMouseMove);
    }

    return function cleanup() {
      window.document.removeEventListener('mousemove', handleMouseMove);
    };
  }); //////////////////////////////////////////////////

  var className = useClassName({
    style: Autosuggest$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var dropdownMenuPopoverClassName = useClassName({
    style: AutosuggestPopover,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Popover'
  });
  var itemsWrapperClassName = useClassName({
    style: ItemsWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ItemsWrapper'
  });
  var inputClassName = useClassName({
    style: AutosuggestInput,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Input'
  }); //////////////////////////////////////////////////

  var _React$useReducer = useReducer(reducer, {
    highlightedIndex: -1,
    inputValue: value === null || value === void 0 ? void 0 : value.label,
    isMouseInsidePopover: false,
    filteredOptions: initialOptions,
    options: initialOptions,
    page: 1,
    value: ''
  }),
      _React$useReducer$ = _React$useReducer[0],
      highlightedIndex = _React$useReducer$.highlightedIndex,
      inputValue = _React$useReducer$.inputValue,
      filteredOptions = _React$useReducer$.filteredOptions,
      options = _React$useReducer$.options,
      page = _React$useReducer$.page,
      selectedOption = _React$useReducer$.selectedOption,
      dispatch = _React$useReducer[1]; //////////////////////////////////////////////////


  var debouncedInputValue = useDebounce(inputValue, debounceInterval || 500);
  var getOptions = useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref5) {
      var loadVariables, page, _ref5$searchText, searchText;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loadVariables = _ref5.loadVariables, page = _ref5.page, _ref5$searchText = _ref5.searchText, searchText = _ref5$searchText === void 0 ? '' : _ref5$searchText;

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
              }).then(function (_ref7) {
                var fetchedOptions = _ref7.options;
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
      return _ref6.apply(this, arguments);
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

  useEffect(function () {
    dispatch({
      type: 'OPTIONS_SET',
      options: initialOptions
    });
  }, [initialOptions]);
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

  var isLoading = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page === 1;
  var isLoadingMore = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page > 1;
  var isError = loadOptions && optionsRecord.isRejected;
  var isSuccess = filteredOptions.length > 0;

  if (loadOptions) {
    isSuccess = optionsRecord.isResolved && filteredOptions.length > 0 || isLoadingMore;
  } //////////////////////////////////////////////////


  var setOption = useCallback(function (option) {
    dispatch({
      type: 'OPTION_SELECTED',
      option: option
    });
    onChange && onChange(option);
    return option;
  }, [onChange]);
  var filterOptions = useCallback(function (_ref8) {
    var controlsVisibility = _ref8.controlsVisibility,
        _ref8$hideIfNoOptions = _ref8.hideIfNoOptions,
        hideIfNoOptions = _ref8$hideIfNoOptions === void 0 ? true : _ref8$hideIfNoOptions,
        searchText = _ref8.searchText;
    if (loadOptions) return;
    var filteredOptions = options.filter(function (option) {
      return option.label.toLowerCase().includes(searchText.trim().toLowerCase());
    });

    if (controlsVisibility) {
      if (filteredOptions.length === 0 && hideIfNoOptions) {
        dropdownMenu.hide();
      } else {
        dropdownMenu.show();
      }
    }

    dispatch({
      type: 'OPTIONS_FILTERED',
      filteredOptions: filteredOptions,
      controlsVisibility: controlsVisibility
    });
    return filteredOptions;
  }, [dropdownMenu, loadOptions, options]);
  var selectOption = useCallback(function (_ref9) {
    var index = _ref9.index;

    if (filteredOptions.length === 0) {
      return undefined;
    }

    var option = filteredOptions[index];
    option = setOption(option);
    return option;
  }, [filteredOptions, setOption]); //////////////////////////////////////////////////

  var handleBlurInput = useCallback(function (event) {
    var value = event.target.value;
    dispatch({
      type: 'INPUT_BLUR',
      restrictToOptions: restrictToOptions,
      value: value
    });

    if (inputValue && automaticSelection || highlightedIndex >= 0) {
      selectOption({
        index: highlightedIndex >= 0 ? highlightedIndex : 0
      });
    }

    if (restrictToOptions && !selectedOption && highlightedIndex === -1) {
      onChange && onChange('');
    }

    filterOptions({
      searchText: value
    });

    if (isMouseOutsidePopover({
      inputRef: inputRef,
      mousePositionRef: mousePositionRef,
      popoverRef: popoverRef
    })) {
      dropdownMenu.hide();
    }

    if (!selectedOption) {
      onChange && onChange(value === '' ? '' : {
        label: value
      });
    }
  }, [automaticSelection, dropdownMenu, filterOptions, highlightedIndex, inputValue, onChange, restrictToOptions, selectOption, selectedOption]);
  var handleChangeInput = useCallback(function (event) {
    var inputValue = event.target.value || '';
    setBlockLoad(false);
    dispatch({
      type: 'INPUT_CHANGE',
      automaticSelection: automaticSelection,
      inputValue: inputValue
    });
    filterOptions({
      controlsVisibility: true,
      hideIfNoOptions: !restrictToOptions,
      searchText: inputValue
    });
  }, [automaticSelection, filterOptions, restrictToOptions]);
  var handleClickInput = useCallback(function (event) {
    var value = event.target.value;

    if (document.activeElement !== event.target) {
      event.target.focus();
    }

    filterOptions({
      controlsVisibility: true,
      searchText: value
    });

    if (loadOptions) {
      if (defer) {
        setDefer(false);
        optionsRecord.load();
      }

      dropdownMenu.show();
    }
  }, [defer, dropdownMenu, filterOptions, loadOptions, optionsRecord]);
  var handleFocusInput = useCallback(function (event) {
    var value = event.target.value;
    filterOptions({
      controlsVisibility: true,
      searchText: value
    });
  }, [filterOptions]);
  var handleKeyDownInput = useCallback(function (event) {
    if (event.keyCode === KEY_ESC) {
      event.preventDefault();
      dropdownMenu.hide();
      dispatch({
        type: 'KEY_ESC'
      });
    }

    if (event.keyCode === KEY_DOWN) {
      event.preventDefault();
      dropdownMenu.show();
      dispatch({
        type: 'KEY_DOWN'
      });
    }

    if (event.keyCode === KEY_UP) {
      event.preventDefault();
      dropdownMenu.show();
      dispatch({
        type: 'KEY_UP'
      });
    }

    if (event.keyCode === KEY_ENTER) {
      event.preventDefault();
      dispatch({
        type: 'KEY_ENTER',
        restrictToOptions: restrictToOptions
      });
      dropdownMenu.hide();

      if (highlightedIndex >= 0 || automaticSelection && inputValue) {
        selectOption({
          index: highlightedIndex
        });
      }
    }
  }, [automaticSelection, dropdownMenu, highlightedIndex, inputValue, restrictToOptions, selectOption]);
  var handleClickItem = useCallback(function (index, option) {
    return function () {
      dispatch({
        type: 'MOUSE_CLICK_ITEM',
        index: index,
        option: option
      });
      dropdownMenu.hide();
      selectOption({
        index: index
      });
    };
  }, [dispatch, dropdownMenu, selectOption]);
  var handleClear = useCallback(function () {
    dispatch({
      type: 'OPTION_CLEARED'
    });
    onChange && onChange('');
  }, [onChange]);
  var handleMouseEnterPopover = useCallback(function () {
    dispatch({
      type: 'MOUSE_ENTER_POPOVER',
      automaticSelection: automaticSelection
    });
  }, [automaticSelection]);
  var handleMouseLeavePopover = useCallback(function () {
    dispatch({
      type: 'MOUSE_LEAVE_POPOVER',
      automaticSelection: automaticSelection
    });
  }, [automaticSelection]);
  var handleScrollPopover = useCallback(function (event) {
    var target = event.currentTarget;

    if (pagination && !isLoadingMore && !blockLoad && target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 200) {
      dispatch({
        type: 'PAGE_INCREMENT'
      });
    }

    return;
  }, [blockLoad, isLoadingMore, pagination]);
  var handleCreate = useCallback(function (option) {
    setOption(option);
    dropdownMenu.hide();
  }, [dropdownMenu, setOption]); //////////////////////////////////////////////////

  useEffect(function () {
    if (value) {
      dispatch({
        type: 'OPTION_SELECTED',
        option: value
      });
    }
  }, [automaticSelection, value]); //////////////////////////////////////////////////

  var context = useMemo(function () {
    return {
      overrides: overrides,
      themeKey: themeKey
    };
  }, [overrides, themeKey]); //////////////////////////////////////////////////

  var showClearButton = inputValue && !disabled; //////////////////////////////////////////////////

  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-expanded': dropdownMenuButtonProps['aria-expanded'],
    'aria-haspopup': 'listbox',
    'aria-owns': dropdownMenu.baseId,
    role: 'combobox',
    className: className,
    children: /*#__PURE__*/createElement$1(AutosuggestContext.Provider, {
      value: context
    }, /*#__PURE__*/createElement$1(Input, _extends({}, omit(dropdownMenuButtonProps, 'type', 'className', 'role'), {
      after: showClearButton && /*#__PURE__*/createElement$1(ClearButton, {
        onClick: handleClear,
        buttonProps: clearButtonProps
      }),
      "aria-autocomplete": "list",
      "aria-activedescendant": dropdownMenu === null || dropdownMenu === void 0 ? void 0 : (_dropdownMenu$items = dropdownMenu.items) === null || _dropdownMenu$items === void 0 ? void 0 : (_dropdownMenu$items$h = _dropdownMenu$items[highlightedIndex]) === null || _dropdownMenu$items$h === void 0 ? void 0 : _dropdownMenu$items$h.id,
      className: inputClassName,
      containLabel: containLabel,
      disabled: disabled,
      inputProps: inputProps,
      isLoading: isInputLoading,
      label: label,
      onBlur: handleBlurInput,
      onClick: handleClickInput,
      onChange: handleChangeInput,
      onKeyDown: handleKeyDownInput,
      onFocus: handleFocusInput,
      overrides: overrides,
      placeholder: placeholder,
      role: "textbox",
      state: state,
      variant: variant,
      value: inputValue
    })), /*#__PURE__*/createElement$1(DropdownMenuPopover, _extends({
      display: "flex",
      flexDirection: "column"
    }, dropdownMenu, {
      ref: popoverRef,
      className: dropdownMenuPopoverClassName,
      isTabbable: false,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      onMouseEnter: handleMouseEnterPopover,
      onMouseLeave: handleMouseLeavePopover,
      overrides: overrides,
      role: "listbox",
      hideOnClickOutside: false,
      unstable_autoFocusOnHide: false
    }, popoverProps), dropdownMenu.visible && /*#__PURE__*/createElement$1(Fragment, null, renderTopActions && renderTopActions({
      StaticItem: AutosuggestStaticItem
    }), /*#__PURE__*/createElement$1(Box$1, {
      use: "ul",
      onScroll: handleScrollPopover,
      className: itemsWrapperClassName,
      overrides: overrides
    }, isSuccess ? /*#__PURE__*/createElement$1(Fragment, null, filteredOptions.slice(0, limit).filter(Boolean).map(function (option, index) {
      return /*#__PURE__*/createElement$1(AutosuggestItem, _extends({
        key: option.key || index
      }, dropdownMenu, {
        "aria-selected": highlightedIndex === index,
        "aria-disabled": option.disabled,
        disabled: option.disabled,
        iconAfter: option.iconAfter,
        iconAfterProps: option.iconAfterProps,
        iconBefore: option.iconBefore,
        iconBeforeProps: option.iconBeforeProps,
        onClick: handleClickItem(index, option),
        overrides: overrides
      }, itemProps), /*#__PURE__*/createElement$1(Option, {
        label: option.label,
        inputValue: inputValue,
        option: option,
        overrides: overrides,
        MatchedLabel: function MatchedLabel(props) {
          return /*#__PURE__*/createElement$1(_MatchedLabel, _extends({
            label: option.label,
            inputValue: inputValue
          }, props));
        }
      }));
    }), isLoadingMore && /*#__PURE__*/createElement$1(LoadingMore, {
      loadingText: loadingMoreText,
      overrides: overrides
    })) : isLoading ? /*#__PURE__*/createElement$1(Loading, {
      loadingText: loadingText,
      overrides: overrides
    }) : isError ? /*#__PURE__*/createElement$1(Error, {
      errorText: errorText,
      overrides: overrides
    }) : /*#__PURE__*/createElement$1(Empty, {
      emptyText: emptyText,
      inputValue: inputValue,
      create: handleCreate,
      itemProps: {
        'aria-selected': highlightedIndex === 0
      },
      overrides: overrides
    })), renderBottomActions && renderBottomActions({
      StaticItem: AutosuggestStaticItem
    }))))
  });
}, {
  defaultProps: {
    cacheKey: 'bb-options',
    disabled: false,
    emptyText: 'No results found',
    errorText: 'An error occurred',
    loadingText: 'Loading...',
    loadingMoreText: 'Loading...',
    popoverHeight: '300px',
    options: [],
    renderBottomActions: function renderBottomActions() {},
    renderClearButton: ClearButton,
    renderEmpty: Empty,
    renderError: Error,
    renderLoading: Loading,
    renderLoadingMore: Loading,
    renderOption: _MatchedLabel,
    renderTopActions: function renderTopActions() {}
  },
  themeKey: 'Autosuggest'
});
var Autosuggest = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Autosuggest'
  },
  themeKey: 'Autosuggest'
}); //////////////////////////////////////////////////////////////////

function ClearButton(props) {
  var buttonProps = props.buttonProps,
      onClick = props.onClick,
      restProps = _objectWithoutPropertiesLoose(props, ["buttonProps", "onClick"]);

  var _React$useContext = useContext(AutosuggestContext),
      overrides = _React$useContext.overrides,
      themeKey = _React$useContext.themeKey;

  var wrapperClassName = useClassName({
    style: AutosuggestClearButtonWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButtonWrapper'
  });
  var buttonClassName = useClassName({
    style: AutosuggestClearButton,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: overrides
    }),
    themeKey: themeKey,
    themeKeySuffix: 'ClearButton'
  });
  return /*#__PURE__*/createElement$1(Flex, _extends({
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
}

function _MatchedLabel(props) {
  var label = props.label,
      inputValue = props.inputValue,
      restProps = _objectWithoutPropertiesLoose(props, ["label", "inputValue"]);

  var _React$useContext2 = useContext(AutosuggestContext),
      overrides = _React$useContext2.overrides,
      themeKey = _React$useContext2.themeKey;

  var className = useClassName({
    style: AutosuggestItemText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'ItemText'
  });

  var escapeStringRegexp = function escapeStringRegexp(string) {
    return (string || '').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  };

  var match = label.match(new RegExp(escapeStringRegexp(inputValue), 'i')) || [];
  var preText = label.slice(0, match.index);
  var highlightedText = match[0];
  var postText = label.slice(match.index + (match[0] || '').length);
  return highlightedText ? /*#__PURE__*/createElement$1(Text, _extends({
    className: className,
    overrides: overrides
  }, restProps), preText && /*#__PURE__*/createElement$1(Text, {
    overrides: overrides
  }, preText), highlightedText && /*#__PURE__*/createElement$1(Text, {
    fontWeight: "semibold",
    overrides: overrides
  }, highlightedText), postText && /*#__PURE__*/createElement$1(Text, {
    overrides: overrides
  }, postText)) : /*#__PURE__*/createElement$1(Text, _extends({
    className: className,
    overrides: overrides
  }, restProps), label);
}

function Empty(props) {
  var emptyText = props.emptyText,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["emptyText", "overrides"]);

  return /*#__PURE__*/createElement$1(AutosuggestStaticItem, _extends({
    overrides: overrides
  }, restProps), emptyText);
}

function Error(props) {
  var errorText = props.errorText,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["errorText", "overrides"]);

  return /*#__PURE__*/createElement$1(AutosuggestStaticItem, _extends({
    overrides: overrides
  }, restProps), errorText);
}

function Loading(props) {
  var loadingText = props.loadingText,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["loadingText", "overrides"]);

  return /*#__PURE__*/createElement$1(AutosuggestStaticItem, _extends({
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


function isMouseOutsidePopover(_ref10) {
  var inputRef = _ref10.inputRef,
      mousePositionRef = _ref10.mousePositionRef,
      popoverRef = _ref10.popoverRef;

  var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
      top = _inputRef$current$get.top;

  var _popoverRef$current$g = popoverRef.current.getBoundingClientRect(),
      left = _popoverRef$current$g.left,
      right = _popoverRef$current$g.right,
      bottom = _popoverRef$current$g.bottom;

  var _mousePositionRef$cur = mousePositionRef.current,
      clientX = _mousePositionRef$cur.clientX,
      clientY = _mousePositionRef$cur.clientY;
  return left > clientX || right < clientX || top > clientY || bottom < clientY;
}

function getNewHighlightedIndex(_ref11) {
  var _filteredOptions$newH;

  var compare = _ref11.compare,
      _ref11$highlightedInd = _ref11.highlightedIndex,
      highlightedIndex = _ref11$highlightedInd === void 0 ? -1 : _ref11$highlightedInd,
      filteredOptions = _ref11.filteredOptions,
      _ref11$count = _ref11.count,
      count = _ref11$count === void 0 ? 0 : _ref11$count;
  var newHighlightedIndex = compare({
    index: highlightedIndex,
    optionsLength: filteredOptions.length - 1
  });

  if ((filteredOptions === null || filteredOptions === void 0 ? void 0 : (_filteredOptions$newH = filteredOptions[newHighlightedIndex]) === null || _filteredOptions$newH === void 0 ? void 0 : _filteredOptions$newH.disabled) && count < filteredOptions.length) {
    return getNewHighlightedIndex({
      compare: compare,
      highlightedIndex: newHighlightedIndex,
      filteredOptions: filteredOptions,
      count: count + 1
    });
  } else {
    if (count === filteredOptions.length) {
      return -1;
    }

    return newHighlightedIndex;
  }
}

export { Autosuggest, AutosuggestContext };
