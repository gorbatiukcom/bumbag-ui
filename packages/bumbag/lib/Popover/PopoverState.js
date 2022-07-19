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
var utils_isFunction = require('../utils/isFunction.js');
require('../utils/get.js');
require('lodash/uniq');
require('reakit/Id');
require('deepmerge');
require('lodash/set');
require('lodash/get');
require('capsize');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/OutsideClickHandler.js');
var reakit = require('reakit');

var PopoverStateContext = React.createContext({
  popover: {}
});
function usePopoverState(initialState) {
  return reakit.usePopoverState(initialState);
}
function usePopoverContext() {
  return React.useContext(PopoverStateContext);
}
function PopoverState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var popover = usePopoverState(restProps);
  var contextValue = React.useMemo(function () {
    return {
      popover: popover
    };
  }, [popover]);
  return /*#__PURE__*/React.createElement(PopoverStateContext.Provider, {
    value: contextValue
  }, utils_isFunction.isFunction(props.children) ? props.children(popover) : props.children);
}

exports.PopoverState = PopoverState;
exports.PopoverStateContext = PopoverStateContext;
exports.usePopoverContext = usePopoverContext;
exports.usePopoverState = usePopoverState;
