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

var ModalContext = React.createContext({
  modal: {}
});
function useModalState(initialState) {
  return reakit.useDialogState(initialState);
}
function useModalContext() {
  return React.useContext(ModalContext);
}
function ModalState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var modal = useModalState(restProps);
  var contextValue = React.useMemo(function () {
    return {
      modal: modal
    };
  }, [modal]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: contextValue
  }, utils_isFunction.isFunction(props.children) ? props.children(modal) : props.children);
}

exports.ModalContext = ModalContext;
exports.ModalState = ModalState;
exports.useModalContext = useModalContext;
exports.useModalState = useModalState;
