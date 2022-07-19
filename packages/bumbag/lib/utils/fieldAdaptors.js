'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var utils_bindFns = require('./bindFns.js');
var _get = require('lodash/get');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _get__default = /*#__PURE__*/_interopDefaultLegacy(_get);

function formikField(Component, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$disableBlurEvent = _ref.disableBlurEvent,
      disableBlurEvent = _ref$disableBlurEvent === void 0 ? false : _ref$disableBlurEvent,
      _ref$disableFocusEven = _ref.disableFocusEvent,
      disableFocusEvent = _ref$disableFocusEven === void 0 ? false : _ref$disableFocusEven,
      _ref$hasFieldWrapper = _ref.hasFieldWrapper,
      hasFieldWrapper = _ref$hasFieldWrapper === void 0 ? false : _ref$hasFieldWrapper,
      _ref$isCheckbox = _ref.isCheckbox,
      isCheckbox = _ref$isCheckbox === void 0 ? false : _ref$isCheckbox,
      _ref$isCheckboxGroup = _ref.isCheckboxGroup,
      isCheckboxGroup = _ref$isCheckboxGroup === void 0 ? false : _ref$isCheckboxGroup,
      _ref$isAutosuggest = _ref.isAutosuggest,
      isAutosuggest = _ref$isAutosuggest === void 0 ? false : _ref$isAutosuggest,
      _ref$isSelectMenu = _ref.isSelectMenu,
      isSelectMenu = _ref$isSelectMenu === void 0 ? false : _ref$isSelectMenu,
      _ref$useValue = _ref.useValue,
      useValue = _ref$useValue === void 0 ? false : _ref$useValue;

  return function (_ref2) {
    var _ref2$field = _ref2.field,
        field = _ref2$field === void 0 ? {} : _ref2$field,
        _ref2$form = _ref2.form,
        form = _ref2$form === void 0 ? {} : _ref2$form,
        props = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["field", "form"]);

    var overrideProps = {};

    var isTouched = _get__default['default'](form, "touched." + field.name);

    var error = _get__default['default'](form, "errors." + field.name);

    var value = _get__default['default'](form, "values." + field.name);

    var state = isTouched && error ? 'danger' : undefined;

    if (props.state) {
      state = props.state;
    }

    overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
      state: state
    });

    if (hasFieldWrapper) {
      var validationText = isTouched && error ? error : undefined;

      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
        validationText: validationText
      });
    }

    if (isCheckbox) {
      var checked = false;

      if (value) {
        checked = Boolean(value);
      }

      if (props.checked) {
        checked = props.checked;
      }

      overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
        checked: checked
      });
    }

    var onBlur = field.onBlur;
    var onChange = field.onChange;
    var onFocus = field.onFocus;

    if (isSelectMenu || isAutosuggest) {
      if (isAutosuggest) {
        onBlur = function onBlur() {
          return setTimeout(function () {
            return form.setFieldTouched(field.name);
          }, 0);
        };
      } else {
        onBlur = function onBlur() {
          return form.setFieldTouched(field.name);
        };
      } // @ts-ignore


      onChange = function onChange(newOptions) {
        return form.setFieldValue(field.name, newOptions);
      };
    }

    if (isCheckboxGroup) {
      onChange = function onChange(value) {
        return form.setFieldValue(field.name, value);
      };

      onBlur = function onBlur() {
        return form.setFieldTouched(field.name);
      };
    }

    if (useValue) {
      onChange = function onChange(value) {
        return form.setFieldValue(field.name, value);
      };
    }

    overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
      onBlur: utils_bindFns.bindFns(disableBlurEvent ? function () {} : onBlur, props.onBlur),
      onChange: utils_bindFns.bindFns(onChange, props.onChange),
      onFocus: utils_bindFns.bindFns(disableFocusEvent ? function () {} : onFocus, props.onFocus)
    });
    return /*#__PURE__*/React.createElement(Component, _rollupPluginBabelHelpers._extends({}, props, field, overrideProps));
  };
}
function reduxFormField(Component, _temp2) {
  var _ref3 = _temp2 === void 0 ? {} : _temp2,
      _ref3$disableBlurEven = _ref3.disableBlurEvent,
      disableBlurEvent = _ref3$disableBlurEven === void 0 ? false : _ref3$disableBlurEven,
      _ref3$disableFocusEve = _ref3.disableFocusEvent,
      disableFocusEvent = _ref3$disableFocusEve === void 0 ? false : _ref3$disableFocusEve,
      _ref3$hasFieldWrapper = _ref3.hasFieldWrapper,
      hasFieldWrapper = _ref3$hasFieldWrapper === void 0 ? false : _ref3$hasFieldWrapper,
      _ref3$isCheckbox = _ref3.isCheckbox,
      isCheckbox = _ref3$isCheckbox === void 0 ? false : _ref3$isCheckbox,
      _ref3$isCheckboxGroup = _ref3.isCheckboxGroup,
      isCheckboxGroup = _ref3$isCheckboxGroup === void 0 ? false : _ref3$isCheckboxGroup,
      _ref3$isAutosuggest = _ref3.isAutosuggest,
      isAutosuggest = _ref3$isAutosuggest === void 0 ? false : _ref3$isAutosuggest,
      _ref3$isSelectMenu = _ref3.isSelectMenu,
      isSelectMenu = _ref3$isSelectMenu === void 0 ? false : _ref3$isSelectMenu,
      _ref3$useValue = _ref3.useValue,
      useValue = _ref3$useValue === void 0 ? false : _ref3$useValue;

  return function (_ref4) {
    var _ref4$input = _ref4.input,
        input = _ref4$input === void 0 ? {} : _ref4$input,
        _ref4$meta = _ref4.meta,
        meta = _ref4$meta === void 0 ? {} : _ref4$meta,
        props = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref4, ["input", "meta"]);

    var overrideProps = {};
    var state = meta.touched && meta.error ? 'danger' : undefined;

    if (props.state) {
      state = props.state;
    }

    overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
      state: state
    });

    if (hasFieldWrapper) {
      var validationText = meta.touched && meta.error ? meta.error : undefined;

      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
        validationText: validationText
      });
    }

    if (isCheckbox) {
      var checked = false;
      var value = Boolean(input.value);

      if (value) {
        checked = value;
      }

      if (props.checked) {
        checked = props.checked;
      }

      overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
        checked: checked
      });
    }

    var onBlur = input.onBlur;
    var onChange = input.onChange;
    var onFocus = input.onFocus;

    if (isSelectMenu || isAutosuggest) {
      // @ts-ignore
      onChange = function onChange(newOptions) {
        return input.onChange(newOptions);
      };

      onBlur = function onBlur() {
        return input.onBlur(input.value);
      };
    }

    if (isCheckboxGroup) {
      onChange = function onChange(value) {
        return input.onChange(value);
      };

      onBlur = function onBlur(value) {
        return input.onBlur(value);
      };
    }

    if (useValue) {
      onChange = function onChange(value) {
        return input.onChange(value);
      };
    }

    overrideProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, overrideProps), {}, {
      onBlur: utils_bindFns.bindFns(disableBlurEvent ? function () {} : onBlur, props.onBlur),
      onChange: utils_bindFns.bindFns(onChange, props.onChange),
      onFocus: utils_bindFns.bindFns(disableFocusEvent ? function () {} : onFocus, props.onFocus)
    });
    return /*#__PURE__*/React.createElement(Component, _rollupPluginBabelHelpers._extends({}, props, input, overrideProps));
  };
}

exports.formikField = formikField;
exports.reduxFormField = reduxFormField;
