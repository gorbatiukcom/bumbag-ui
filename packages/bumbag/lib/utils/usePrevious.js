'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = React.useRef(); // Store current value in ref

  React.useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

exports.usePrevious = usePrevious;
