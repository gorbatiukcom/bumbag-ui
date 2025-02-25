import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _React$useState = useState(value),
      debouncedValue = _React$useState[0],
      setDebouncedValue = _React$useState[1];

  useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export { useDebounce };
