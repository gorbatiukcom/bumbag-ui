import * as React from 'react';
import { BoxProps } from '../Box';
import { ButtonProps } from '../Button';
import { DropdownMenuPopoverProps, DropdownMenuItemProps, DropdownMenuInitialState } from '../DropdownMenu';
import { InputProps } from '../Input';
import { TagProps } from '../Tag';
import { Size } from '../types';
declare type Option = {
    key: number | string;
    label: string;
    value: any;
};
declare type Options = Array<Option>;
export declare type LocalSelectMenuProps = {
    /** The key to cache the loadOptions results against. */
    cacheKey?: string;
    /** If the `label` prop is supplied, is it contained inside the select? */
    containLabel?: boolean;
    /** The time in milliseconds for the debounce interval used to handle text input. **/
    debounceInterval?: number;
    /** Whether or not the invocation of loadOptions should be deferred until it the Autosuggest is opened. */
    defer?: boolean;
    /** Indicates if the  Autosuggest is disabled. */
    disabled?: boolean;
    /** Indicates if the clear button should be disabled. */
    disableClear?: boolean;
    /** Indicates if the select menu has a search component. */
    hasSearch?: boolean;
    /** Indicates if the select menu should have tags of the selected options. */
    hasTags?: boolean;
    /** Indicates if the select menu is a dropdown menu. Default: `true` */
    isDropdown?: boolean;
    /** Indicates if the select menu is loading. */
    isLoading?: boolean;
    /** Indicates if multiple options should be selected. */
    isMultiSelect?: boolean;
    label?: string;
    /** Applies a limit to the number of options that appear in the list. */
    limit?: number;
    /** Supply an async function to `loadOptions` to load options from an external data source. */
    loadOptions?: (options: {
        page?: number;
        searchText?: string;
        variables?: any;
    }) => Promise<{
        options: Options;
    }>;
    /** Supply variables (i.e. query parameters) to the `loadOptions` function. */
    loadVariables?: {
        [key: string]: any;
    };
    /** Options to show in the list. If `loadOptions` is supplied, then you don't need to supply this. */
    options?: Options;
    /** Function to invoke when the option has been changed. */
    onChange: (newOptions: Array<Option> | Option | '', option: Option | '') => void;
    /** Indicates if the list should be paginated. If `true`, then pagination will be applied to `loadOptions`. */
    pagination?: boolean;
    /** Sets the height of the popover list. */
    popoverHeight?: string;
    /** Sets the placeholder of the search input. */
    placeholder?: string;
    /** Sets the size of the select menu button */
    size?: Size;
    /** Sets the visual state of the Autosuggest. */
    state?: string;
    /** Sets the value of the Autosuggest. Must be in the shape of an option (i.e. `{ key: 1, label: 'Jake', value: 'legend' }`). */
    value: Partial<Option>;
    errorText?: string;
    emptyText?: string;
    loadingText?: string;
    loadingMoreText?: string;
    renderBottomActions?: any;
    renderDisclosure?: any;
    renderError?: any;
    renderEmpty?: any;
    renderLoading?: any;
    renderLoadingMore?: any;
    renderOption?: any;
    renderTopActions?: any;
    buttonProps?: Partial<ButtonProps>;
    itemProps?: Partial<DropdownMenuItemProps>;
    popoverProps?: Partial<DropdownMenuPopoverProps>;
    searchInputProps?: Partial<InputProps>;
    tagProps?: Partial<TagProps>;
    dropdownMenuInitialState?: Partial<DropdownMenuInitialState>;
};
export declare type SelectMenuProps = BoxProps & LocalSelectMenuProps;
export declare type SelectMenuContextOptions = {
    dropdownMenu?: any;
    overrides?: any;
    themeKey?: string;
};
export declare const SelectMenuContext: React.Context<SelectMenuContextOptions>;
export declare const SelectMenu: React.ForwardRefExoticComponent<Pick<SelectMenuProps, "children" | "label" | "slot" | "style" | "title" | "clipPath" | "filter" | "marker" | "mask" | "use" | "overrides" | "left" | "right" | "top" | "bottom" | "alignContent" | "alignSelf" | "alignItems" | "alignmentBaseline" | "all" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "appearance" | "azimuth" | "backfaceVisibility" | "hidden" | "background" | "backgroundAttachment" | "backgroundBlendMode" | "color" | "backgroundClip" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "contain" | "baselineShift" | "blockSize" | "border" | "inset" | "borderBlock" | "borderBlockEnd" | "borderBlockEndStyle" | "borderBlockEndWidth" | "borderBlockStart" | "borderBlockStartStyle" | "borderBlockStartWidth" | "borderBlockStyle" | "borderBlockWidth" | "borderBottom" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderImage" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderInline" | "borderInlineEnd" | "borderInlineEndStyle" | "borderInlineEndWidth" | "borderInlineStart" | "borderInlineStartStyle" | "borderInlineStartWidth" | "borderInlineStyle" | "borderInlineWidth" | "borderLeft" | "borderLeftStyle" | "borderLeftWidth" | "borderRight" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStyle" | "borderTop" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "boxDecorationBreak" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "clear" | "clip" | "clipRule" | "colorAdjust" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleStyle" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "columns" | "content" | "size" | "counterIncrement" | "counterReset" | "counterSet" | "cursor" | "direction" | "display" | "flex" | "grid" | "dominantBaseline" | "emptyCells" | "fill" | "fillOpacity" | "fillRule" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexShrink" | "flexWrap" | "float" | "floodOpacity" | "fontFeatureSettings" | "fontKerning" | "fontLanguageOverride" | "fontOpticalSizing" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontSynthesis" | "fontVariant" | "fontVariantAlternates" | "fontVariantCaps" | "fontVariantEastAsian" | "fontVariantLigatures" | "fontVariantNumeric" | "fontVariantPosition" | "fontVariationSettings" | "gap" | "glyphOrientationVertical" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridColumnEnd" | "gridColumnStart" | "gridRow" | "gridRowEnd" | "gridRowStart" | "gridTemplate" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "hangingPunctuation" | "hyphens" | "imageOrientation" | "imageResolution" | "initialLetter" | "inlineSize" | "insetBlock" | "insetBlockEnd" | "insetBlockStart" | "insetInline" | "insetInlineEnd" | "insetInlineStart" | "isolation" | "justifyContent" | "justifyItems" | "justifySelf" | "lineBreak" | "lineHeightStep" | "listStyle" | "listStyleImage" | "listStylePosition" | "listStyleType" | "marginBlock" | "marginBlockEnd" | "marginBlockStart" | "marginInline" | "marginInlineEnd" | "marginInlineStart" | "markerEnd" | "markerMid" | "markerStart" | "maskBorder" | "maskBorderMode" | "maskBorderOutset" | "maskBorderRepeat" | "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskComposite" | "maskImage" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "maxBlockSize" | "maxInlineSize" | "maxLines" | "minBlockSize" | "minInlineSize" | "mixBlendMode" | "objectFit" | "objectPosition" | "offset" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetRotate" | "opacity" | "order" | "orphans" | "outline" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowWrap" | "overflowX" | "overflowY" | "paddingBlock" | "paddingBlockEnd" | "paddingBlockStart" | "paddingInline" | "paddingInlineEnd" | "paddingInlineStart" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "perspective" | "perspectiveOrigin" | "placeContent" | "placeItems" | "placeSelf" | "pointerEvents" | "stroke" | "position" | "quotes" | "resize" | "rowGap" | "rubyAlign" | "rubyMerge" | "rubyPosition" | "scrollBehavior" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollSnapAlign" | "scrollSnapMargin" | "scrollSnapMarginBottom" | "scrollSnapMarginLeft" | "scrollSnapMarginRight" | "scrollSnapMarginTop" | "scrollSnapStop" | "scrollSnapType" | "scrollbarGutter" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "tabSize" | "tableLayout" | "textAlign" | "textAlignLast" | "textCombineUpright" | "textDecoration" | "textDecorationLine" | "textDecorationSkip" | "textDecorationStyle" | "textEmphasis" | "textEmphasisPosition" | "textEmphasisStyle" | "textIndent" | "textJustify" | "textOrientation" | "textOverflow" | "textShadow" | "textTransform" | "textUnderlinePosition" | "transform" | "transformBox" | "transformOrigin" | "transformStyle" | "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "unicodeBidi" | "userSelect" | "verticalAlign" | "visibility" | "whiteSpace" | "widows" | "willChange" | "wordBreak" | "wordSpacing" | "wordWrap" | "writingMode" | "zIndex" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderInlineColor" | "borderInlineEndColor" | "borderInlineStartColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor" | "caretColor" | "columnRuleColor" | "fontFamily" | "fontWeight" | "height" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "outlineColor" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "textDecorationColor" | "textEmphasisColor" | "translate" | "width" | "borderColor" | "borderRadius" | "font" | "margin" | "padding" | "gridColumnGap" | "gridGap" | "gridRowGap" | "floodColor" | "lightingColor" | "altitude" | "marginX" | "marginY" | "paddingX" | "paddingY" | "gradientDirection" | "gradientFrom" | "gradientFromAt" | "gradientTo" | "gradientToAt" | "gradientVia" | "gradientViaAt" | "value" | "themeKey" | "unstable_system" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "wrapElement" | "_hover" | "_hoveractive" | "_focus" | "_active" | "_visited" | "_disabled" | "_groupHover" | "_groupActive" | "_groupFocus" | "_groupVisited" | "_groupDisabled" | "borderRightRadius" | "borderLeftRadius" | "fillColor" | "strokeColor" | "alignX" | "alignY" | "variant" | "colorMode" | "disabled" | "elementRef" | "state" | "isLoading" | "containLabel" | "cacheKey" | "debounceInterval" | "defer" | "limit" | "loadOptions" | "loadVariables" | "options" | "pagination" | "popoverHeight" | "errorText" | "emptyText" | "loadingText" | "loadingMoreText" | "renderBottomActions" | "renderError" | "renderEmpty" | "renderLoading" | "renderLoadingMore" | "renderOption" | "renderTopActions" | "itemProps" | "popoverProps" | "dropdownMenuInitialState" | "buttonProps" | "isDropdown" | "disableClear" | "hasSearch" | "hasTags" | "isMultiSelect" | "renderDisclosure" | "searchInputProps" | "tagProps"> & React.RefAttributes<unknown>> & {
    displayName?: string;
    useProps: (props?: Partial<SelectMenuProps>, config?: {
        disableCSSProps?: string[];
        themeKey?: string;
    }) => any;
};
export {};
