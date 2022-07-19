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
require('../utils/isFunction.js');
require('../utils/get.js');
require('../utils/useStyle.js');
require('../utils/parseIcons.js');
require('../utils/useIcon.js');
require('../utils/omitBy.js');
require('../utils/useDefaultProps.js');
require('lodash/uniq');
var utils_useClassName = require('../utils/useClassName.js');
require('reakit/Id');
var utils_uniqueId = require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
var utils_createComponent = require('../utils/createComponent.js');
var utils_createElement = require('../utils/createElement.js');
var utils_createHook = require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
var reakit = require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
var Box_Box = require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
var Icon_Icon = require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
var Text_index = require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
var Button_index = require('../Button/index.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
var Card_index = require('../Card/index.js');
require('../Modal.styles-a83df364.js');
var Callout_Callout_styles = require('../Callout.styles-39c6f902.js');
var Modal_ModalState = require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
require('../Overlay.styles-78f6977d.js');
require('../Overlay/Overlay.js');
require('../Overlay/OverlayDisclosure.js');
require('../Overlay/OverlayState.js');
var Overlay_index = require('../Overlay/index.js');

var CalloutContext = React.createContext({});
var useProps = utils_createHook.createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var _props$closeButtonPro = props.closeButtonProps,
      closeButtonProps = _props$closeButtonPro === void 0 ? {} : _props$closeButtonPro,
      iconProps = props.iconProps,
      onClickClose = props.onClickClose,
      overrides = props.overrides,
      footer = props.footer,
      standalone = props.standalone,
      showCloseButton = props.showCloseButton,
      title = props.title,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["closeButtonProps", "iconProps", "onClickClose", "overrides", "footer", "standalone", "showCloseButton", "title"]);

  var cardProps = Card_index.Card.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, restProps), {}, {
    standalone: true
  }));
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.Callout,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: cardProps.className
  });
  var calloutCloseClassName = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutClose,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Close',
    prevClassName: closeButtonProps.className
  });
  var titleId = utils_uniqueId.useUniqueId();
  var descriptionId = utils_uniqueId.useUniqueId();
  var context = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var children = /*#__PURE__*/React.createElement(CalloutContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(Box_Box.Box, {
    display: "flex"
  }, standalone ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalloutIcon, {
    iconProps: iconProps,
    overrides: overrides
  }), /*#__PURE__*/React.createElement(Box_Box.Box, null, title && /*#__PURE__*/React.createElement(CalloutHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/React.createElement(CalloutTitle, {
    overrides: overrides
  }, title) : title), /*#__PURE__*/React.createElement(CalloutContent, {
    overrides: overrides
  }, props.children), footer && /*#__PURE__*/React.createElement(CalloutFooter, {
    overrides: overrides
  }, footer)))), showCloseButton && /*#__PURE__*/React.createElement(Button_index.Button.Close, _rollupPluginBabelHelpers._extends({
    className: calloutCloseClassName,
    onClick: onClickClose,
    size: title ? undefined : 'small'
  }, closeButtonProps)));
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, cardProps), {}, {
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined,
    className: className,
    children: children
  });
}, {
  defaultProps: {
    type: 'info'
  },
  themeKey: 'Callout'
});
var Callout = utils_createComponent.createComponent(function (props) {
  var textProps = useProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Callout'
  },
  themeKey: 'Callout'
}); //////////////////////////////

var useCalloutContentProps = utils_createHook.createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutContent,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    id: props.id || contextProps.descriptionId
  }, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Content'
});
var CalloutContent = utils_createComponent.createComponent(function (props) {
  var calloutContentProps = useCalloutContentProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutContentProps
  });
}, {
  attach: {
    useProps: useCalloutContentProps,
    displayName: 'Callout.Content'
  },
  themeKey: 'Callout.Content'
}); //////////////////////////////

var useCalloutHeaderProps = utils_createHook.createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutHeader,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Header'
});
var CalloutHeader = utils_createComponent.createComponent(function (props) {
  var calloutHeaderProps = useCalloutHeaderProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutHeaderProps
  });
}, {
  attach: {
    useProps: useCalloutHeaderProps,
    displayName: 'Callout.Header'
  },
  themeKey: 'Callout.Header'
}); //////////////////////////////

var useCalloutTitleProps = utils_createHook.createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text_index.Text.useProps(props);
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutTitle,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    id: contextProps.titleId
  }, textProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Title'
});
var CalloutTitle = utils_createComponent.createComponent(function (props) {
  var calloutTitleProps = useCalloutTitleProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutTitleProps
  });
}, {
  attach: {
    useProps: useCalloutTitleProps,
    displayName: 'Callout.Title'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Callout.Title'
}); //////////////////////////////

var useCalloutFooterProps = utils_createHook.createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var boxProps = Box_Box.Box.useProps(props);
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutFooter,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Callout.Footer'
});
var CalloutFooter = utils_createComponent.createComponent(function (props) {
  var calloutFooterProps = useCalloutFooterProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutFooterProps
  });
}, {
  attach: {
    useProps: useCalloutFooterProps,
    displayName: 'Callout.Footer'
  },
  themeKey: 'Callout.Footer'
}); //////////////////////////////

var useCalloutIconProps = utils_createHook.createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;

  var iconProps = props.iconProps,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["iconProps"]);

  var boxProps = Box_Box.Box.useProps(restProps);
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutIconWrapper,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var icon = /*#__PURE__*/React.createElement(Icon_Icon.Icon, _rollupPluginBabelHelpers._extends({
    "aria-hidden": true,
    color: contextProps.type,
    fontSize: !contextProps.title ? '300' : undefined,
    icon: contextProps.type
  }, iconProps));
  var children = /*#__PURE__*/React.createElement(CalloutContent, {
    id: undefined
  }, icon);

  if (contextProps.title) {
    children = /*#__PURE__*/React.createElement(CalloutHeader, null, /*#__PURE__*/React.createElement(CalloutTitle, {
      id: undefined
    }, icon));
  }

  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  themeKey: 'Callout.IconWrapper'
});
var CalloutIcon = utils_createComponent.createComponent(function (props) {
  var calloutIconProps = useCalloutIconProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutIconProps
  });
}, {
  attach: {
    useProps: useCalloutIconProps,
    displayName: 'Callout.IconWrapper'
  },
  themeKey: 'Callout.IconWrapper'
}); //////////////////////////////

var useCalloutOverlayProps = utils_createHook.createHook(function (props, _ref7) {
  var themeKey = _ref7.themeKey;

  var variant = props.variant,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["variant"]);

  var _React$useContext = React.useContext(Modal_ModalState.ModalContext),
      modal = _React$useContext.modal;

  var calloutProps = Callout.useProps(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
    onClickClose: restProps.hide || modal.hide
  }, restProps), {}, {
    wrapElement: function wrapElement(children) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.createElement(Overlay_index.Overlay, _rollupPluginBabelHelpers._extends({
          placement: "bottom-end"
        }, restProps), children)
      );
    }
  }));
  var contextProps = React.useContext(CalloutContext);
  var className = utils_useClassName.useClassName({
    style: Callout_Callout_styles.CalloutOverlay,
    styleProps: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: calloutProps.className
  });
  return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, calloutProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    showCloseButton: true
  },
  themeKey: 'Callout.Overlay'
});
var CalloutOverlay = utils_createComponent.createComponent(function (props) {
  var calloutOverlayProps = useCalloutOverlayProps(props);
  return utils_createElement.createElement({
    children: props.children,
    component: reakit.Box,
    use: props.use,
    htmlProps: calloutOverlayProps
  });
}, {
  attach: {
    useProps: useCalloutOverlayProps,
    displayName: 'Callout.Overlay'
  },
  themeKey: 'Callout.Overlay'
});

exports.Callout = Callout;
exports.CalloutContent = CalloutContent;
exports.CalloutContext = CalloutContext;
exports.CalloutFooter = CalloutFooter;
exports.CalloutHeader = CalloutHeader;
exports.CalloutIcon = CalloutIcon;
exports.CalloutOverlay = CalloutOverlay;
exports.CalloutTitle = CalloutTitle;
