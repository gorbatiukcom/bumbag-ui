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
require('../ActionButtons.styles-1c8a65ac.js');
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
require('../Set.styles-ac954f46.js');
require('../Set/Set.js');
require('../ActionButtons/ActionButtons.js');
require('../Modal.styles-a83df364.js');
var Popover_Popover_styles = require('../Popover.styles-689e5c1d.js');
var Popover_PopoverState = require('./PopoverState.js');
var Popover_Popover = require('./Popover.js');
var Popover_PopoverBackdrop = require('./PopoverBackdrop.js');
var Popover_PopoverDisclosure = require('./PopoverDisclosure.js');

var Popover = Object.assign(Popover_Popover.Popover, {
  Arrow: Popover_Popover.PopoverArrow,
  Backdrop: Popover_PopoverBackdrop.PopoverBackdrop,
  Content: Popover_Popover.PopoverContent,
  Disclosure: Popover_PopoverDisclosure.PopoverDisclosure,
  Footer: Popover_Popover.PopoverFooter,
  Header: Popover_Popover.PopoverHeader,
  Title: Popover_Popover.PopoverTitle,
  useContext: Popover_PopoverState.usePopoverContext,
  useState: Popover_PopoverState.usePopoverState,
  State: Popover_PopoverState.PopoverState
});

exports.popoverStyles = Popover_Popover_styles.Popover_styles;
exports.PopoverState = Popover_PopoverState.PopoverState;
exports.PopoverStateContext = Popover_PopoverState.PopoverStateContext;
exports.usePopoverContext = Popover_PopoverState.usePopoverContext;
exports.usePopoverState = Popover_PopoverState.usePopoverState;
exports.PopoverArrow = Popover_Popover.PopoverArrow;
exports.PopoverContent = Popover_Popover.PopoverContent;
exports.PopoverContext = Popover_Popover.PopoverContext;
exports.PopoverFooter = Popover_Popover.PopoverFooter;
exports.PopoverHeader = Popover_Popover.PopoverHeader;
exports.PopoverTitle = Popover_Popover.PopoverTitle;
exports.PopoverBackdrop = Popover_PopoverBackdrop.PopoverBackdrop;
exports.PopoverDisclosure = Popover_PopoverDisclosure.PopoverDisclosure;
exports.Popover = Popover;
