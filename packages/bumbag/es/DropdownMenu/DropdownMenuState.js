import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import { useMenuState } from 'reakit';

function useDropdownMenuState(initialState) {
  return useMenuState(_objectSpread2({
    gutter: 8
  }, initialState));
}
function DropdownMenuState(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var state = useDropdownMenuState(restProps);
  return props.children(state);
}

export { DropdownMenuState, useDropdownMenuState };
