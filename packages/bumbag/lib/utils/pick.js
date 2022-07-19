'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pick = function pick(obj) {
  var object = {};

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  props.forEach(function (prop) {
    if (obj && prop in obj) {
      object[prop] = obj[prop];
    }
  });
  return object;
};

exports.pick = pick;
