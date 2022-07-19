'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var reakit = require('reakit');

function useTooltipState(initialState) {
  return reakit.useTooltipState(initialState);
}
function TooltipState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var state = useTooltipState(restProps);
  return props.children(state);
}

exports.TooltipState = TooltipState;
exports.useTooltipState = useTooltipState;
