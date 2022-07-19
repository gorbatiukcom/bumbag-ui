'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
require('../utils/useTheme.js');
require('conditional-wrap');
require('../utils/useLocalStorage.js');
require('../_rollupPluginBabelHelpers-c170a0e0.js');
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
require('../utils/useClassName.js');
require('reakit/Id');
require('../utils/uniqueId.js');
require('../utils/palette.js');
require('../utils/mergeRefs.js');
require('deepmerge');
require('lodash/set');
require('../utils/createComponent.js');
require('../utils/createElement.js');
require('../utils/createHook.js');
require('lodash/get');
require('capsize');
require('../utils/getCapsizeStyles.js');
require('../utils/getHiddenScrollbarStyles.js');
require('../utils/gradient.js');
require('@emotion/is-prop-valid');
require('../utils/htmlProps.js');
require('../utils/OutsideClickHandler.js');
require('../theme/palette.js');
require('reakit');
require('../Button.styles-2aad952a.js');
require('../Box.styles-0ffb7463.js');
require('../Box/Box.js');
require('../Flex.styles-8d4bcbcd.js');
require('../Flex/Flex.js');
require('../Icon.styles-08407dd9.js');
require('../Icon/Icon.js');
require('../Text.styles-c878de00.js');
require('../Text/Text.js');
require('../Text/TextBlock.js');
require('../Text/TextInline.js');
require('../Text/index.js');
require('../Spinner.styles-e4b8cc9a.js');
require('../Spinner/Spinner.js');
require('../Button/Button.js');
require('reakit/VisuallyHidden');
require('../Button/ButtonClose.js');
require('../Button/index.js');
require('../Card.styles-5078f21b.js');
require('../Card/Card.js');
require('../Card/index.js');
require('../Modal.styles-a83df364.js');
var Callout_Callout_styles = require('../Callout.styles-39c6f902.js');
require('../Modal/ModalState.js');
require('../Modal/ModalBackdrop.js');
require('../Modal/Modal.js');
require('../Modal/ModalDisclosure.js');
require('../Modal/index.js');
require('../Overlay.styles-78f6977d.js');
require('../Overlay/Overlay.js');
require('../Overlay/OverlayDisclosure.js');
require('../Overlay/OverlayState.js');
require('../Overlay/index.js');
var Callout_Callout = require('./Callout.js');

var Callout = Object.assign(Callout_Callout.Callout, {
  Header: Callout_Callout.CalloutHeader,
  Title: Callout_Callout.CalloutTitle,
  Content: Callout_Callout.CalloutContent,
  Footer: Callout_Callout.CalloutFooter,
  Icon: Callout_Callout.CalloutIcon,
  Overlay: Callout_Callout.CalloutOverlay
});

exports.CalloutStyles = Callout_Callout_styles.Callout_styles;
exports.CalloutContent = Callout_Callout.CalloutContent;
exports.CalloutContext = Callout_Callout.CalloutContext;
exports.CalloutFooter = Callout_Callout.CalloutFooter;
exports.CalloutHeader = Callout_Callout.CalloutHeader;
exports.CalloutIcon = Callout_Callout.CalloutIcon;
exports.CalloutOverlay = Callout_Callout.CalloutOverlay;
exports.CalloutTitle = Callout_Callout.CalloutTitle;
exports.Callout = Callout;
