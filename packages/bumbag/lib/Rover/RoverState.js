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

var RoverContext = React.createContext({
  rover: {}
});
function useRoverState(initialState) {
  return reakit.useRoverState(initialState);
}
function useRoverContext() {
  return React.useContext(RoverContext);
}
function RoverState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var rover = useRoverState(restProps);
  var contextValue = React.useMemo(function () {
    return {
      rover: rover
    };
  }, [rover]);
  return /*#__PURE__*/React.createElement(RoverContext.Provider, {
    value: contextValue
  }, utils_isFunction.isFunction(props.children) ? props.children(rover) : props.children);
}

exports.RoverContext = RoverContext;
exports.RoverState = RoverState;
exports.useRoverContext = useRoverContext;
exports.useRoverState = useRoverState;
