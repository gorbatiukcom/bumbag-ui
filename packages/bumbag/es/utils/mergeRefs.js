import { c as _createForOfIteratorHelperLoose } from '../_rollupPluginBabelHelpers.js';

function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return function (instance) {
    for (var _iterator = _createForOfIteratorHelperLoose(filteredRefs), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;

      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
  };
}

export { mergeRefs };
