import { forwardRef, createElement } from 'react';
import { d as _extends, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import _set from 'lodash/set';

function applyTheme(Comp, theme) {
  var Component = forwardRef(function (props, ref) {
    // @ts-ignore
    var newOverrides = _set(props.overrides || {}, Comp.displayName.replace('native.', ''), theme); // @ts-ignore


    return /*#__PURE__*/createElement(Comp, _extends({}, props, {
      ref: ref,
      overrides: newOverrides
    }));
  });
  return Object.assign(_objectSpread2({}, Comp), Component);
}

export { applyTheme };
