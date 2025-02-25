import { Altitude, BorderRadii, FontFamily, FontSize, FontWeight, GradientDirection, LetterSpacing, LineHeight, Palette } from './props';
import { Flexible } from './utils';
import React from 'react';
declare type Unit = 'px' | 'em' | 'rem' | '%' | 'ch' | 'vw' | 'vh';
declare type UnitWithValue = `${number}${Unit}`;
declare type PreDefinedSpacing = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
export declare type SpacingUnit = UnitWithValue | `major-${number}` | `minor-${number}` | `-major-${number}` | `-minor-${number}` | 'inherit' | 'initial' | 'revert' | 'unset' | PreDefinedSpacing;
export declare type CSSProperties = {
    _hover?: CSSProperties | boolean;
    _hoveractive?: CSSProperties | boolean;
    _focus?: CSSProperties | boolean;
    _active?: CSSProperties | boolean;
    _visited?: CSSProperties | boolean;
    _disabled?: CSSProperties;
    _groupHover?: CSSProperties;
    _groupActive?: CSSProperties;
    _groupFocus?: CSSProperties;
    _groupVisited?: CSSProperties;
    _groupDisabled?: CSSProperties;
    alignContent?: Flexible<React.CSSProperties['alignContent'], {
        [key: string]: React.CSSProperties['alignContent'];
    }>;
    alignSelf?: Flexible<React.CSSProperties['alignSelf'], {
        [key: string]: React.CSSProperties['alignSelf'];
    }>;
    alignItems?: Flexible<React.CSSProperties['alignItems'], {
        [key: string]: React.CSSProperties['alignItems'];
    }>;
    alignmentBaseline?: Flexible<React.CSSProperties['alignmentBaseline'], {
        [key: string]: React.CSSProperties['alignmentBaseline'];
    }>;
    all?: Flexible<React.CSSProperties['all'], {
        [key: string]: React.CSSProperties['all'];
    }>;
    altitude?: Flexible<Altitude, string> | {
        [key: string]: Flexible<Altitude, string>;
    };
    animation?: Flexible<React.CSSProperties['animation'], {
        [key: string]: React.CSSProperties['animation'];
    }>;
    animationDelay?: Flexible<React.CSSProperties['animationDelay'], {
        [key: string]: React.CSSProperties['animationDelay'];
    }>;
    animationDirection?: Flexible<React.CSSProperties['animationDirection'], {
        [key: string]: React.CSSProperties['animationDirection'];
    }>;
    animationDuration?: Flexible<React.CSSProperties['animationDuration'], {
        [key: string]: React.CSSProperties['animationDuration'];
    }>;
    animationFillMode?: Flexible<React.CSSProperties['animationFillMode'], {
        [key: string]: React.CSSProperties['animationFillMode'];
    }>;
    animationIterationCount?: Flexible<React.CSSProperties['animationIterationCount'], {
        [key: string]: React.CSSProperties['animationIterationCount'];
    }>;
    animationName?: Flexible<React.CSSProperties['animationName'], {
        [key: string]: React.CSSProperties['animationName'];
    }>;
    animationPlayState?: Flexible<React.CSSProperties['animationPlayState'], {
        [key: string]: React.CSSProperties['animationPlayState'];
    }>;
    animationTimingFunction?: Flexible<React.CSSProperties['animationTimingFunction'], {
        [key: string]: React.CSSProperties['animationTimingFunction'];
    }>;
    appearance?: Flexible<React.CSSProperties['appearance'], {
        [key: string]: React.CSSProperties['appearance'];
    }>;
    azimuth?: Flexible<React.CSSProperties['azimuth'], {
        [key: string]: React.CSSProperties['azimuth'];
    }>;
    backfaceVisibility?: Flexible<React.CSSProperties['backfaceVisibility'], {
        [key: string]: React.CSSProperties['backfaceVisibility'];
    }>;
    background?: Flexible<React.CSSProperties['background'], {
        [key: string]: React.CSSProperties['background'];
    }>;
    backgroundAttachment?: Flexible<React.CSSProperties['backgroundAttachment'], {
        [key: string]: React.CSSProperties['backgroundAttachment'];
    }>;
    backgroundBlendMode?: Flexible<React.CSSProperties['backgroundBlendMode'], {
        [key: string]: React.CSSProperties['backgroundBlendMode'];
    }>;
    backgroundClip?: Flexible<React.CSSProperties['backgroundClip'], {
        [key: string]: React.CSSProperties['backgroundClip'];
    }>;
    backgroundColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    backgroundImage?: Flexible<React.CSSProperties['backgroundImage'], {
        [key: string]: React.CSSProperties['backgroundImage'];
    }>;
    backgroundOrigin?: Flexible<React.CSSProperties['backgroundOrigin'], {
        [key: string]: React.CSSProperties['backgroundOrigin'];
    }>;
    backgroundPosition?: Flexible<React.CSSProperties['backgroundPosition'], {
        [key: string]: React.CSSProperties['backgroundPosition'];
    }>;
    backgroundRepeat?: Flexible<React.CSSProperties['backgroundRepeat'], {
        [key: string]: React.CSSProperties['backgroundRepeat'];
    }>;
    backgroundSize?: Flexible<React.CSSProperties['backgroundSize'], {
        [key: string]: React.CSSProperties['backgroundSize'];
    }>;
    baselineShift?: Flexible<React.CSSProperties['baselineShift'], {
        [key: string]: React.CSSProperties['baselineShift'];
    }>;
    blockSize?: Flexible<React.CSSProperties['blockSize'], {
        [key: string]: React.CSSProperties['blockSize'];
    }>;
    border?: Flexible<React.CSSProperties['border'], {
        [key: string]: React.CSSProperties['border'];
    }>;
    borderBlock?: Flexible<React.CSSProperties['borderBlock'], {
        [key: string]: React.CSSProperties['borderBlock'];
    }>;
    borderBlockColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderBlockEnd?: Flexible<React.CSSProperties['borderBlockEnd'], {
        [key: string]: React.CSSProperties['borderBlockEnd'];
    }>;
    borderBlockEndColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderBlockEndStyle?: Flexible<React.CSSProperties['borderBlockEndStyle'], {
        [key: string]: React.CSSProperties['borderBlockEndStyle'];
    }>;
    borderBlockEndWidth?: Flexible<React.CSSProperties['borderBlockEndWidth'], {
        [key: string]: React.CSSProperties['borderBlockEndWidth'];
    }>;
    borderBlockStart?: Flexible<React.CSSProperties['borderBlockStart'], {
        [key: string]: React.CSSProperties['borderBlockStart'];
    }>;
    borderBlockStartColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderBlockStartStyle?: Flexible<React.CSSProperties['borderBlockStartStyle'], {
        [key: string]: React.CSSProperties['borderBlockStartStyle'];
    }>;
    borderBlockStartWidth?: Flexible<React.CSSProperties['borderBlockStartWidth'], {
        [key: string]: React.CSSProperties['borderBlockStartWidth'];
    }>;
    borderBlockStyle?: Flexible<React.CSSProperties['borderBlockStyle'], {
        [key: string]: React.CSSProperties['borderBlockStyle'];
    }>;
    borderBlockWidth?: Flexible<React.CSSProperties['borderBlockWidth'], {
        [key: string]: React.CSSProperties['borderBlockWidth'];
    }>;
    borderBottom?: Flexible<React.CSSProperties['borderBottom'], {
        [key: string]: React.CSSProperties['borderBottom'];
    }>;
    borderBottomColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderBottomLeftRadius?: Flexible<React.CSSProperties['borderBottomLeftRadius'], {
        [key: string]: React.CSSProperties['borderBottomLeftRadius'];
    }>;
    borderBottomRightRadius?: Flexible<React.CSSProperties['borderBottomRightRadius'], {
        [key: string]: React.CSSProperties['borderBottomRightRadius'];
    }>;
    borderBottomStyle?: Flexible<React.CSSProperties['borderBottomStyle'], {
        [key: string]: React.CSSProperties['borderBottomStyle'];
    }>;
    borderBottomWidth?: Flexible<React.CSSProperties['borderBottomWidth'], {
        [key: string]: React.CSSProperties['borderBottomWidth'];
    }>;
    borderCollapse?: Flexible<React.CSSProperties['borderCollapse'], {
        [key: string]: React.CSSProperties['borderCollapse'];
    }>;
    borderColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderImage?: Flexible<React.CSSProperties['borderImage'], {
        [key: string]: React.CSSProperties['borderImage'];
    }>;
    borderImageOutset?: Flexible<React.CSSProperties['borderImageOutset'], {
        [key: string]: React.CSSProperties['borderImageOutset'];
    }>;
    borderImageRepeat?: Flexible<React.CSSProperties['borderImageRepeat'], {
        [key: string]: React.CSSProperties['borderImageRepeat'];
    }>;
    borderImageSlice?: Flexible<React.CSSProperties['borderImageSlice'], {
        [key: string]: React.CSSProperties['borderImageSlice'];
    }>;
    borderImageSource?: Flexible<React.CSSProperties['borderImageSource'], {
        [key: string]: React.CSSProperties['borderImageSource'];
    }>;
    borderImageWidth?: Flexible<React.CSSProperties['borderImageWidth'], {
        [key: string]: React.CSSProperties['borderImageWidth'];
    }>;
    borderInline?: Flexible<React.CSSProperties['borderInline'], {
        [key: string]: React.CSSProperties['borderInline'];
    }>;
    borderInlineColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderInlineEnd?: Flexible<React.CSSProperties['borderInlineEnd'], {
        [key: string]: React.CSSProperties['borderInlineEnd'];
    }>;
    borderInlineEndColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderInlineEndStyle?: Flexible<React.CSSProperties['borderInlineEndStyle'], {
        [key: string]: React.CSSProperties['borderInlineEndStyle'];
    }>;
    borderInlineEndWidth?: Flexible<React.CSSProperties['borderInlineEndWidth'], {
        [key: string]: React.CSSProperties['borderInlineEndWidth'];
    }>;
    borderInlineStart?: Flexible<React.CSSProperties['borderInlineStart'], {
        [key: string]: React.CSSProperties['borderInlineStart'];
    }>;
    borderInlineStartColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderInlineStartStyle?: Flexible<React.CSSProperties['borderInlineStartStyle'], {
        [key: string]: React.CSSProperties['borderInlineStartStyle'];
    }>;
    borderInlineStartWidth?: Flexible<React.CSSProperties['borderInlineStartWidth'], {
        [key: string]: React.CSSProperties['borderInlineStartWidth'];
    }>;
    borderInlineStyle?: Flexible<React.CSSProperties['borderInlineStyle'], {
        [key: string]: React.CSSProperties['borderInlineStyle'];
    }>;
    borderInlineWidth?: Flexible<React.CSSProperties['borderInlineWidth'], {
        [key: string]: React.CSSProperties['borderInlineWidth'];
    }>;
    borderLeft?: Flexible<React.CSSProperties['borderLeft'], {
        [key: string]: React.CSSProperties['borderLeft'];
    }>;
    borderLeftColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderLeftStyle?: Flexible<React.CSSProperties['borderLeftStyle'], {
        [key: string]: React.CSSProperties['borderLeftStyle'];
    }>;
    borderLeftWidth?: Flexible<React.CSSProperties['borderLeftWidth'], {
        [key: string]: React.CSSProperties['borderLeftWidth'];
    }>;
    borderRadius?: Flexible<BorderRadii, string | number | {
        [key: string]: BorderRadii;
    }>;
    borderRightRadius?: Flexible<BorderRadii, string | number | {
        [key: string]: BorderRadii;
    }>;
    borderLeftRadius?: Flexible<BorderRadii, string | number | {
        [key: string]: BorderRadii;
    }>;
    borderRight?: Flexible<React.CSSProperties['borderRight'], {
        [key: string]: React.CSSProperties['borderRight'];
    }>;
    borderRightColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderRightStyle?: Flexible<React.CSSProperties['borderRightStyle'], {
        [key: string]: React.CSSProperties['borderRightStyle'];
    }>;
    borderRightWidth?: Flexible<React.CSSProperties['borderRightWidth'], {
        [key: string]: React.CSSProperties['borderRightWidth'];
    }>;
    borderSpacing?: Flexible<React.CSSProperties['borderSpacing'], {
        [key: string]: React.CSSProperties['borderSpacing'];
    }>;
    borderStyle?: Flexible<React.CSSProperties['borderStyle'], {
        [key: string]: React.CSSProperties['borderStyle'];
    }>;
    borderTop?: Flexible<React.CSSProperties['borderTop'], {
        [key: string]: React.CSSProperties['borderTop'];
    }>;
    borderTopColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    borderTopLeftRadius?: Flexible<React.CSSProperties['borderTopLeftRadius'], {
        [key: string]: React.CSSProperties['borderTopLeftRadius'];
    }>;
    borderTopRightRadius?: Flexible<React.CSSProperties['borderTopRightRadius'], {
        [key: string]: React.CSSProperties['borderTopRightRadius'];
    }>;
    borderTopStyle?: Flexible<React.CSSProperties['borderTopStyle'], {
        [key: string]: React.CSSProperties['borderTopStyle'];
    }>;
    borderTopWidth?: Flexible<React.CSSProperties['borderTopWidth'], {
        [key: string]: React.CSSProperties['borderTopWidth'];
    }>;
    borderWidth?: Flexible<React.CSSProperties['borderWidth'], {
        [key: string]: React.CSSProperties['borderWidth'];
    }>;
    bottom?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    boxDecorationBreak?: Flexible<React.CSSProperties['boxDecorationBreak'], {
        [key: string]: React.CSSProperties['boxDecorationBreak'];
    }>;
    boxShadow?: Flexible<React.CSSProperties['boxShadow'], {
        [key: string]: React.CSSProperties['boxShadow'];
    }>;
    boxSizing?: Flexible<React.CSSProperties['boxSizing'], {
        [key: string]: React.CSSProperties['boxSizing'];
    }>;
    breakAfter?: Flexible<React.CSSProperties['breakAfter'], {
        [key: string]: React.CSSProperties['breakAfter'];
    }>;
    breakBefore?: Flexible<React.CSSProperties['breakBefore'], {
        [key: string]: React.CSSProperties['breakBefore'];
    }>;
    breakInside?: Flexible<React.CSSProperties['breakInside'], {
        [key: string]: React.CSSProperties['breakInside'];
    }>;
    captionSide?: Flexible<React.CSSProperties['captionSide'], {
        [key: string]: React.CSSProperties['captionSide'];
    }>;
    caretColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    clear?: Flexible<React.CSSProperties['clear'], {
        [key: string]: React.CSSProperties['clear'];
    }>;
    clip?: Flexible<React.CSSProperties['clip'], {
        [key: string]: React.CSSProperties['clip'];
    }>;
    clipPath?: Flexible<React.CSSProperties['clipPath'], {
        [key: string]: React.CSSProperties['clipPath'];
    }>;
    clipRule?: Flexible<React.CSSProperties['clipRule'], {
        [key: string]: React.CSSProperties['clipRule'];
    }>;
    color?: any;
    colorAdjust?: Flexible<React.CSSProperties['colorAdjust'], {
        [key: string]: React.CSSProperties['colorAdjust'];
    }>;
    columnCount?: Flexible<React.CSSProperties['columnCount'], {
        [key: string]: React.CSSProperties['columnCount'];
    }>;
    columnFill?: Flexible<React.CSSProperties['columnFill'], {
        [key: string]: React.CSSProperties['columnFill'];
    }>;
    columnGap?: Flexible<React.CSSProperties['columnGap'], {
        [key: string]: React.CSSProperties['columnGap'];
    }>;
    columnRule?: Flexible<React.CSSProperties['columnRule'], {
        [key: string]: React.CSSProperties['columnRule'];
    }>;
    columnRuleColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    columnRuleStyle?: Flexible<React.CSSProperties['columnRuleStyle'], {
        [key: string]: React.CSSProperties['columnRuleStyle'];
    }>;
    columnRuleWidth?: Flexible<React.CSSProperties['columnRuleWidth'], {
        [key: string]: React.CSSProperties['columnRuleWidth'];
    }>;
    columnSpan?: Flexible<React.CSSProperties['columnSpan'], {
        [key: string]: React.CSSProperties['columnSpan'];
    }>;
    columnWidth?: Flexible<React.CSSProperties['columnWidth'], {
        [key: string]: React.CSSProperties['columnWidth'];
    }>;
    columns?: Flexible<React.CSSProperties['columns'], {
        [key: string]: React.CSSProperties['columns'];
    }>;
    contain?: Flexible<React.CSSProperties['contain'], {
        [key: string]: React.CSSProperties['contain'];
    }>;
    content?: Flexible<React.CSSProperties['content'], {
        [key: string]: React.CSSProperties['content'];
    }>;
    counterIncrement?: Flexible<React.CSSProperties['counterIncrement'], {
        [key: string]: React.CSSProperties['counterIncrement'];
    }>;
    counterReset?: Flexible<React.CSSProperties['counterReset'], {
        [key: string]: React.CSSProperties['counterReset'];
    }>;
    counterSet?: Flexible<React.CSSProperties['counterSet'], {
        [key: string]: React.CSSProperties['counterSet'];
    }>;
    cursor?: Flexible<React.CSSProperties['cursor'], {
        [key: string]: React.CSSProperties['cursor'];
    }>;
    direction?: Flexible<React.CSSProperties['direction'], {
        [key: string]: React.CSSProperties['direction'];
    }>;
    display?: Flexible<React.CSSProperties['display'], {
        [key: string]: React.CSSProperties['display'];
    }>;
    dominantBaseline?: Flexible<React.CSSProperties['dominantBaseline'], {
        [key: string]: React.CSSProperties['dominantBaseline'];
    }>;
    emptyCells?: Flexible<React.CSSProperties['emptyCells'], {
        [key: string]: React.CSSProperties['emptyCells'];
    }>;
    fill?: Flexible<React.CSSProperties['fill'], {
        [key: string]: React.CSSProperties['fill'];
    }>;
    fillColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    fillOpacity?: Flexible<React.CSSProperties['fillOpacity'], {
        [key: string]: React.CSSProperties['fillOpacity'];
    }>;
    fillRule?: Flexible<React.CSSProperties['fillRule'], {
        [key: string]: React.CSSProperties['fillRule'];
    }>;
    filter?: Flexible<React.CSSProperties['filter'], {
        [key: string]: React.CSSProperties['filter'];
    }>;
    flex?: Flexible<React.CSSProperties['flex'], {
        [key: string]: React.CSSProperties['flex'];
    }>;
    flexBasis?: Flexible<React.CSSProperties['flexBasis'], {
        [key: string]: React.CSSProperties['flexBasis'];
    }>;
    flexDirection?: Flexible<React.CSSProperties['flexDirection'], {
        [key: string]: React.CSSProperties['flexDirection'];
    }>;
    flexFlow?: Flexible<React.CSSProperties['flexFlow'], {
        [key: string]: React.CSSProperties['flexFlow'];
    }>;
    flexGrow?: Flexible<React.CSSProperties['flexGrow'], {
        [key: string]: React.CSSProperties['flexGrow'];
    }>;
    flexShrink?: Flexible<React.CSSProperties['flexShrink'], {
        [key: string]: React.CSSProperties['flexShrink'];
    }>;
    flexWrap?: Flexible<React.CSSProperties['flexWrap'], {
        [key: string]: React.CSSProperties['flexWrap'];
    }>;
    float?: Flexible<React.CSSProperties['float'], {
        [key: string]: React.CSSProperties['float'];
    }>;
    floodColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    floodOpacity?: Flexible<React.CSSProperties['floodOpacity'], {
        [key: string]: React.CSSProperties['floodOpacity'];
    }>;
    font?: Flexible<FontFamily, string | number | {
        [key: string]: FontFamily;
    }>;
    fontFamily?: Flexible<FontFamily, string | number | {
        [key: string]: FontFamily;
    }>;
    fontFeatureSettings?: Flexible<React.CSSProperties['fontFeatureSettings'], {
        [key: string]: React.CSSProperties['fontFeatureSettings'];
    }>;
    fontKerning?: Flexible<React.CSSProperties['fontKerning'], {
        [key: string]: React.CSSProperties['fontKerning'];
    }>;
    fontLanguageOverride?: Flexible<React.CSSProperties['fontLanguageOverride'], {
        [key: string]: React.CSSProperties['fontLanguageOverride'];
    }>;
    fontOpticalSizing?: Flexible<React.CSSProperties['fontOpticalSizing'], {
        [key: string]: React.CSSProperties['fontOpticalSizing'];
    }>;
    fontSize?: Flexible<FontSize | React.CSSProperties['fontSize'], {
        [key: string]: FontSize | React.CSSProperties['fontSize'];
    }>;
    fontSizeAdjust?: Flexible<React.CSSProperties['fontSizeAdjust'], {
        [key: string]: React.CSSProperties['fontSizeAdjust'];
    }>;
    fontStretch?: Flexible<React.CSSProperties['fontStretch'], {
        [key: string]: React.CSSProperties['fontStretch'];
    }>;
    fontStyle?: Flexible<React.CSSProperties['fontStyle'], {
        [key: string]: React.CSSProperties['fontStyle'];
    }>;
    fontSynthesis?: Flexible<React.CSSProperties['fontSynthesis'], {
        [key: string]: React.CSSProperties['fontSynthesis'];
    }>;
    fontVariant?: Flexible<React.CSSProperties['fontVariant'], {
        [key: string]: React.CSSProperties['fontVariant'];
    }>;
    fontVariantAlternates?: Flexible<React.CSSProperties['fontVariantAlternates'], {
        [key: string]: React.CSSProperties['fontVariantAlternates'];
    }>;
    fontVariantCaps?: Flexible<React.CSSProperties['fontVariantCaps'], {
        [key: string]: React.CSSProperties['fontVariantCaps'];
    }>;
    fontVariantEastAsian?: Flexible<React.CSSProperties['fontVariantEastAsian'], {
        [key: string]: React.CSSProperties['fontVariantEastAsian'];
    }>;
    fontVariantLigatures?: Flexible<React.CSSProperties['fontVariantLigatures'], {
        [key: string]: React.CSSProperties['fontVariantLigatures'];
    }>;
    fontVariantNumeric?: Flexible<React.CSSProperties['fontVariantNumeric'], {
        [key: string]: React.CSSProperties['fontVariantNumeric'];
    }>;
    fontVariantPosition?: Flexible<React.CSSProperties['fontVariantPosition'], {
        [key: string]: React.CSSProperties['fontVariantPosition'];
    }>;
    fontVariationSettings?: Flexible<React.CSSProperties['fontVariationSettings'], {
        [key: string]: React.CSSProperties['fontVariationSettings'];
    }>;
    fontWeight?: Flexible<FontWeight, string | number | {
        [key: string]: FontWeight;
    }>;
    gap?: Flexible<React.CSSProperties['gap'], {
        [key: string]: React.CSSProperties['gap'];
    }>;
    glyphOrientationVertical?: Flexible<React.CSSProperties['glyphOrientationVertical'], {
        [key: string]: React.CSSProperties['glyphOrientationVertical'];
    }>;
    gradientDirection?: GradientDirection | {
        [key: string]: GradientDirection;
    };
    gradientFrom?: Flexible<Palette, string | {
        [key: string]: Flexible<Palette, string>;
    }>;
    gradientFromAt?: string;
    gradientVia?: Flexible<Palette, string | {
        [key: string]: Flexible<Palette, string>;
    }>;
    gradientViaAt?: string;
    gradientTo?: Flexible<Palette, string | {
        [key: string]: Flexible<Palette, string>;
    }>;
    gradientToAt?: string;
    grid?: Flexible<React.CSSProperties['grid'], {
        [key: string]: React.CSSProperties['grid'];
    }>;
    gridArea?: Flexible<React.CSSProperties['gridArea'], {
        [key: string]: React.CSSProperties['gridArea'];
    }>;
    gridAutoColumns?: Flexible<React.CSSProperties['gridAutoColumns'], {
        [key: string]: React.CSSProperties['gridAutoColumns'];
    }>;
    gridAutoFlow?: Flexible<React.CSSProperties['gridAutoFlow'], {
        [key: string]: React.CSSProperties['gridAutoFlow'];
    }>;
    gridAutoRows?: Flexible<React.CSSProperties['gridAutoRows'], {
        [key: string]: React.CSSProperties['gridAutoRows'];
    }>;
    gridColumn?: Flexible<React.CSSProperties['gridColumn'], {
        [key: string]: React.CSSProperties['gridColumn'];
    }>;
    gridColumnEnd?: Flexible<React.CSSProperties['gridColumnEnd'], {
        [key: string]: React.CSSProperties['gridColumnEnd'];
    }>;
    gridColumnGap?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    gridColumnStart?: Flexible<React.CSSProperties['gridColumnStart'], {
        [key: string]: React.CSSProperties['gridColumnStart'];
    }>;
    gridGap?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    gridRow?: Flexible<React.CSSProperties['gridRow'], {
        [key: string]: React.CSSProperties['gridRow'];
    }>;
    gridRowEnd?: Flexible<React.CSSProperties['gridRowEnd'], {
        [key: string]: React.CSSProperties['gridRowEnd'];
    }>;
    gridRowGap?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    gridRowStart?: Flexible<React.CSSProperties['gridRowStart'], {
        [key: string]: React.CSSProperties['gridRowStart'];
    }>;
    gridTemplate?: Flexible<React.CSSProperties['gridTemplate'], {
        [key: string]: React.CSSProperties['gridTemplate'];
    }>;
    gridTemplateAreas?: Flexible<React.CSSProperties['gridTemplateAreas'], {
        [key: string]: React.CSSProperties['gridTemplateAreas'];
    }>;
    gridTemplateColumns?: Flexible<React.CSSProperties['gridTemplateColumns'], {
        [key: string]: React.CSSProperties['gridTemplateColumns'];
    }>;
    gridTemplateRows?: Flexible<React.CSSProperties['gridTemplateRows'], {
        [key: string]: React.CSSProperties['gridTemplateRows'];
    }>;
    hangingPunctuation?: Flexible<React.CSSProperties['hangingPunctuation'], {
        [key: string]: React.CSSProperties['hangingPunctuation'];
    }>;
    height?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    hyphens?: Flexible<React.CSSProperties['hyphens'], {
        [key: string]: React.CSSProperties['hyphens'];
    }>;
    imageOrientation?: Flexible<React.CSSProperties['imageOrientation'], {
        [key: string]: React.CSSProperties['imageOrientation'];
    }>;
    imageResolution?: Flexible<React.CSSProperties['imageResolution'], {
        [key: string]: React.CSSProperties['imageResolution'];
    }>;
    initialLetter?: Flexible<React.CSSProperties['initialLetter'], {
        [key: string]: React.CSSProperties['initialLetter'];
    }>;
    inlineSize?: Flexible<React.CSSProperties['inlineSize'], {
        [key: string]: React.CSSProperties['inlineSize'];
    }>;
    inset?: Flexible<React.CSSProperties['inset'], {
        [key: string]: React.CSSProperties['inset'];
    }>;
    insetBlock?: Flexible<React.CSSProperties['insetBlock'], {
        [key: string]: React.CSSProperties['insetBlock'];
    }>;
    insetBlockEnd?: Flexible<React.CSSProperties['insetBlockEnd'], {
        [key: string]: React.CSSProperties['insetBlockEnd'];
    }>;
    insetBlockStart?: Flexible<React.CSSProperties['insetBlockStart'], {
        [key: string]: React.CSSProperties['insetBlockStart'];
    }>;
    insetInline?: Flexible<React.CSSProperties['insetInline'], {
        [key: string]: React.CSSProperties['insetInline'];
    }>;
    insetInlineEnd?: Flexible<React.CSSProperties['insetInlineEnd'], {
        [key: string]: React.CSSProperties['insetInlineEnd'];
    }>;
    insetInlineStart?: Flexible<React.CSSProperties['insetInlineStart'], {
        [key: string]: React.CSSProperties['insetInlineStart'];
    }>;
    isolation?: Flexible<React.CSSProperties['isolation'], {
        [key: string]: React.CSSProperties['isolation'];
    }>;
    justifyContent?: Flexible<React.CSSProperties['justifyContent'], {
        [key: string]: React.CSSProperties['justifyContent'];
    }>;
    justifyItems?: Flexible<React.CSSProperties['justifyItems'], {
        [key: string]: React.CSSProperties['justifyItems'];
    }>;
    justifySelf?: Flexible<React.CSSProperties['justifySelf'], {
        [key: string]: React.CSSProperties['justifySelf'];
    }>;
    left?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    letterSpacing?: Flexible<LetterSpacing, string | number | {
        [key: string]: LetterSpacing;
    }>;
    lightingColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    lineBreak?: Flexible<React.CSSProperties['lineBreak'], {
        [key: string]: React.CSSProperties['lineBreak'];
    }>;
    lineHeight?: Flexible<LineHeight, string | number | {
        [key: string]: LineHeight;
    }>;
    lineHeightStep?: Flexible<React.CSSProperties['lineHeightStep'], {
        [key: string]: React.CSSProperties['lineHeightStep'];
    }>;
    listStyle?: Flexible<React.CSSProperties['listStyle'], {
        [key: string]: React.CSSProperties['listStyle'];
    }>;
    listStyleImage?: Flexible<React.CSSProperties['listStyleImage'], {
        [key: string]: React.CSSProperties['listStyleImage'];
    }>;
    listStylePosition?: Flexible<React.CSSProperties['listStylePosition'], {
        [key: string]: React.CSSProperties['listStylePosition'];
    }>;
    listStyleType?: Flexible<React.CSSProperties['listStyleType'], {
        [key: string]: React.CSSProperties['listStyleType'];
    }>;
    margin?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginBlock?: Flexible<React.CSSProperties['marginBlock'], {
        [key: string]: React.CSSProperties['marginBlock'];
    }>;
    marginBlockEnd?: Flexible<React.CSSProperties['marginBlockEnd'], {
        [key: string]: React.CSSProperties['marginBlockEnd'];
    }>;
    marginBlockStart?: Flexible<React.CSSProperties['marginBlockStart'], {
        [key: string]: React.CSSProperties['marginBlockStart'];
    }>;
    marginBottom?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginInline?: Flexible<React.CSSProperties['marginInline'], {
        [key: string]: React.CSSProperties['marginInline'];
    }>;
    marginInlineEnd?: Flexible<React.CSSProperties['marginInlineEnd'], {
        [key: string]: React.CSSProperties['marginInlineEnd'];
    }>;
    marginInlineStart?: Flexible<React.CSSProperties['marginInlineStart'], {
        [key: string]: React.CSSProperties['marginInlineStart'];
    }>;
    marginLeft?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginRight?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginTop?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginX?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marginY?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    marker?: Flexible<React.CSSProperties['marker'], {
        [key: string]: React.CSSProperties['marker'];
    }>;
    markerEnd?: Flexible<React.CSSProperties['markerEnd'], {
        [key: string]: React.CSSProperties['markerEnd'];
    }>;
    markerMid?: Flexible<React.CSSProperties['markerMid'], {
        [key: string]: React.CSSProperties['markerMid'];
    }>;
    markerStart?: Flexible<React.CSSProperties['markerStart'], {
        [key: string]: React.CSSProperties['markerStart'];
    }>;
    mask?: Flexible<React.CSSProperties['mask'], {
        [key: string]: React.CSSProperties['mask'];
    }>;
    maskBorder?: Flexible<React.CSSProperties['maskBorder'], {
        [key: string]: React.CSSProperties['maskBorder'];
    }>;
    maskBorderMode?: Flexible<React.CSSProperties['maskBorderMode'], {
        [key: string]: React.CSSProperties['maskBorderMode'];
    }>;
    maskBorderOutset?: Flexible<React.CSSProperties['maskBorderOutset'], {
        [key: string]: React.CSSProperties['maskBorderOutset'];
    }>;
    maskBorderRepeat?: Flexible<React.CSSProperties['maskBorderRepeat'], {
        [key: string]: React.CSSProperties['maskBorderRepeat'];
    }>;
    maskBorderSlice?: Flexible<React.CSSProperties['maskBorderSlice'], {
        [key: string]: React.CSSProperties['maskBorderSlice'];
    }>;
    maskBorderSource?: Flexible<React.CSSProperties['maskBorderSource'], {
        [key: string]: React.CSSProperties['maskBorderSource'];
    }>;
    maskBorderWidth?: Flexible<React.CSSProperties['maskBorderWidth'], {
        [key: string]: React.CSSProperties['maskBorderWidth'];
    }>;
    maskClip?: Flexible<React.CSSProperties['maskClip'], {
        [key: string]: React.CSSProperties['maskClip'];
    }>;
    maskComposite?: Flexible<React.CSSProperties['maskComposite'], {
        [key: string]: React.CSSProperties['maskComposite'];
    }>;
    maskImage?: Flexible<React.CSSProperties['maskImage'], {
        [key: string]: React.CSSProperties['maskImage'];
    }>;
    maskMode?: Flexible<React.CSSProperties['maskMode'], {
        [key: string]: React.CSSProperties['maskMode'];
    }>;
    maskOrigin?: Flexible<React.CSSProperties['maskOrigin'], {
        [key: string]: React.CSSProperties['maskOrigin'];
    }>;
    maskPosition?: Flexible<React.CSSProperties['maskPosition'], {
        [key: string]: React.CSSProperties['maskPosition'];
    }>;
    maskRepeat?: Flexible<React.CSSProperties['maskRepeat'], {
        [key: string]: React.CSSProperties['maskRepeat'];
    }>;
    maskSize?: Flexible<React.CSSProperties['maskSize'], {
        [key: string]: React.CSSProperties['maskSize'];
    }>;
    maskType?: Flexible<React.CSSProperties['maskType'], {
        [key: string]: React.CSSProperties['maskType'];
    }>;
    maxBlockSize?: Flexible<React.CSSProperties['maxBlockSize'], {
        [key: string]: React.CSSProperties['maxBlockSize'];
    }>;
    maxHeight?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    maxInlineSize?: Flexible<React.CSSProperties['maxInlineSize'], {
        [key: string]: React.CSSProperties['maxInlineSize'];
    }>;
    maxLines?: Flexible<React.CSSProperties['maxLines'], {
        [key: string]: React.CSSProperties['maxLines'];
    }>;
    maxWidth?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    minBlockSize?: Flexible<React.CSSProperties['minBlockSize'], {
        [key: string]: React.CSSProperties['minBlockSize'];
    }>;
    minHeight?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    minInlineSize?: Flexible<React.CSSProperties['minInlineSize'], {
        [key: string]: React.CSSProperties['minInlineSize'];
    }>;
    minWidth?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    mixBlendMode?: Flexible<React.CSSProperties['mixBlendMode'], {
        [key: string]: React.CSSProperties['mixBlendMode'];
    }>;
    objectFit?: Flexible<React.CSSProperties['objectFit'], {
        [key: string]: React.CSSProperties['objectFit'];
    }>;
    objectPosition?: Flexible<React.CSSProperties['objectPosition'], {
        [key: string]: React.CSSProperties['objectPosition'];
    }>;
    offset?: Flexible<React.CSSProperties['offset'], {
        [key: string]: React.CSSProperties['offset'];
    }>;
    offsetAnchor?: Flexible<React.CSSProperties['offsetAnchor'], {
        [key: string]: React.CSSProperties['offsetAnchor'];
    }>;
    offsetDistance?: Flexible<React.CSSProperties['offsetDistance'], {
        [key: string]: React.CSSProperties['offsetDistance'];
    }>;
    offsetPath?: Flexible<React.CSSProperties['offsetPath'], {
        [key: string]: React.CSSProperties['offsetPath'];
    }>;
    offsetRotate?: Flexible<React.CSSProperties['offsetRotate'], {
        [key: string]: React.CSSProperties['offsetRotate'];
    }>;
    opacity?: Flexible<React.CSSProperties['opacity'], {
        [key: string]: React.CSSProperties['opacity'];
    }>;
    order?: Flexible<React.CSSProperties['order'], {
        [key: string]: React.CSSProperties['order'];
    }>;
    orphans?: Flexible<React.CSSProperties['orphans'], {
        [key: string]: React.CSSProperties['orphans'];
    }>;
    outline?: Flexible<React.CSSProperties['outline'], {
        [key: string]: React.CSSProperties['outline'];
    }>;
    outlineColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    outlineOffset?: Flexible<React.CSSProperties['outlineOffset'], {
        [key: string]: React.CSSProperties['outlineOffset'];
    }>;
    outlineStyle?: Flexible<React.CSSProperties['outlineStyle'], {
        [key: string]: React.CSSProperties['outlineStyle'];
    }>;
    outlineWidth?: Flexible<React.CSSProperties['outlineWidth'], {
        [key: string]: React.CSSProperties['outlineWidth'];
    }>;
    overflow?: Flexible<React.CSSProperties['overflow'], {
        [key: string]: React.CSSProperties['overflow'];
    }>;
    overflowWrap?: Flexible<React.CSSProperties['overflowWrap'], {
        [key: string]: React.CSSProperties['overflowWrap'];
    }>;
    overflowX?: Flexible<React.CSSProperties['overflowX'], {
        [key: string]: React.CSSProperties['overflowX'];
    }>;
    overflowY?: Flexible<React.CSSProperties['overflowY'], {
        [key: string]: React.CSSProperties['overflowY'];
    }>;
    padding?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingBlock?: Flexible<React.CSSProperties['paddingBlock'], {
        [key: string]: React.CSSProperties['paddingBlock'];
    }>;
    paddingBlockEnd?: Flexible<React.CSSProperties['paddingBlockEnd'], {
        [key: string]: React.CSSProperties['paddingBlockEnd'];
    }>;
    paddingBlockStart?: Flexible<React.CSSProperties['paddingBlockStart'], {
        [key: string]: React.CSSProperties['paddingBlockStart'];
    }>;
    paddingBottom?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingInline?: Flexible<React.CSSProperties['paddingInline'], {
        [key: string]: React.CSSProperties['paddingInline'];
    }>;
    paddingInlineEnd?: Flexible<React.CSSProperties['paddingInlineEnd'], {
        [key: string]: React.CSSProperties['paddingInlineEnd'];
    }>;
    paddingInlineStart?: Flexible<React.CSSProperties['paddingInlineStart'], {
        [key: string]: React.CSSProperties['paddingInlineStart'];
    }>;
    paddingLeft?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingRight?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingTop?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingX?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    paddingY?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    pageBreakAfter?: Flexible<React.CSSProperties['pageBreakAfter'], {
        [key: string]: React.CSSProperties['pageBreakAfter'];
    }>;
    pageBreakBefore?: Flexible<React.CSSProperties['pageBreakBefore'], {
        [key: string]: React.CSSProperties['pageBreakBefore'];
    }>;
    pageBreakInside?: Flexible<React.CSSProperties['pageBreakInside'], {
        [key: string]: React.CSSProperties['pageBreakInside'];
    }>;
    perspective?: Flexible<React.CSSProperties['perspective'], {
        [key: string]: React.CSSProperties['perspective'];
    }>;
    perspectiveOrigin?: Flexible<React.CSSProperties['perspectiveOrigin'], {
        [key: string]: React.CSSProperties['perspectiveOrigin'];
    }>;
    placeContent?: Flexible<React.CSSProperties['placeContent'], {
        [key: string]: React.CSSProperties['placeContent'];
    }>;
    placeItems?: Flexible<React.CSSProperties['placeItems'], {
        [key: string]: React.CSSProperties['placeItems'];
    }>;
    placeSelf?: Flexible<React.CSSProperties['placeSelf'], {
        [key: string]: React.CSSProperties['placeSelf'];
    }>;
    pointerEvents?: React.CSSProperties['pointerEvents'] | {
        [key: string]: React.CSSProperties['pointerEvents'];
    };
    position?: Flexible<React.CSSProperties['position'], {
        [key: string]: React.CSSProperties['position'];
    }>;
    quotes?: Flexible<React.CSSProperties['quotes'], {
        [key: string]: React.CSSProperties['quotes'];
    }>;
    resize?: Flexible<React.CSSProperties['resize'], {
        [key: string]: React.CSSProperties['resize'];
    }>;
    right?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    rowGap?: Flexible<React.CSSProperties['rowGap'], {
        [key: string]: React.CSSProperties['rowGap'];
    }>;
    rubyAlign?: Flexible<React.CSSProperties['rubyAlign'], {
        [key: string]: React.CSSProperties['rubyAlign'];
    }>;
    rubyMerge?: Flexible<React.CSSProperties['rubyMerge'], {
        [key: string]: React.CSSProperties['rubyMerge'];
    }>;
    rubyPosition?: Flexible<React.CSSProperties['rubyPosition'], {
        [key: string]: React.CSSProperties['rubyPosition'];
    }>;
    scrollBehavior?: Flexible<React.CSSProperties['scrollBehavior'], {
        [key: string]: React.CSSProperties['scrollBehavior'];
    }>;
    scrollPadding?: Flexible<React.CSSProperties['scrollPadding'], {
        [key: string]: React.CSSProperties['scrollPadding'];
    }>;
    scrollPaddingBlock?: Flexible<React.CSSProperties['scrollPaddingBlock'], {
        [key: string]: React.CSSProperties['scrollPaddingBlock'];
    }>;
    scrollPaddingBlockEnd?: Flexible<React.CSSProperties['scrollPaddingBlockEnd'], {
        [key: string]: React.CSSProperties['scrollPaddingBlockEnd'];
    }>;
    scrollPaddingBlockStart?: Flexible<React.CSSProperties['scrollPaddingBlockStart'], {
        [key: string]: React.CSSProperties['scrollPaddingBlockStart'];
    }>;
    scrollPaddingBottom?: Flexible<React.CSSProperties['scrollPaddingBottom'], {
        [key: string]: React.CSSProperties['scrollPaddingBottom'];
    }>;
    scrollPaddingInline?: Flexible<React.CSSProperties['scrollPaddingInline'], {
        [key: string]: React.CSSProperties['scrollPaddingInline'];
    }>;
    scrollPaddingInlineEnd?: Flexible<React.CSSProperties['scrollPaddingInlineEnd'], {
        [key: string]: React.CSSProperties['scrollPaddingInlineEnd'];
    }>;
    scrollPaddingInlineStart?: Flexible<React.CSSProperties['scrollPaddingInlineStart'], {
        [key: string]: React.CSSProperties['scrollPaddingInlineStart'];
    }>;
    scrollPaddingLeft?: Flexible<React.CSSProperties['scrollPaddingLeft'], {
        [key: string]: React.CSSProperties['scrollPaddingLeft'];
    }>;
    scrollPaddingRight?: Flexible<React.CSSProperties['scrollPaddingRight'], {
        [key: string]: React.CSSProperties['scrollPaddingRight'];
    }>;
    scrollPaddingTop?: Flexible<React.CSSProperties['scrollPaddingTop'], {
        [key: string]: React.CSSProperties['scrollPaddingTop'];
    }>;
    scrollSnapAlign?: Flexible<React.CSSProperties['scrollSnapAlign'], {
        [key: string]: React.CSSProperties['scrollSnapAlign'];
    }>;
    scrollSnapMargin?: Flexible<React.CSSProperties['scrollSnapMargin'], {
        [key: string]: React.CSSProperties['scrollSnapMargin'];
    }>;
    scrollSnapMarginBottom?: Flexible<React.CSSProperties['scrollSnapMarginBottom'], {
        [key: string]: React.CSSProperties['scrollSnapMarginBottom'];
    }>;
    scrollSnapMarginLeft?: Flexible<React.CSSProperties['scrollSnapMarginLeft'], {
        [key: string]: React.CSSProperties['scrollSnapMarginLeft'];
    }>;
    scrollSnapMarginRight?: Flexible<React.CSSProperties['scrollSnapMarginRight'], {
        [key: string]: React.CSSProperties['scrollSnapMarginRight'];
    }>;
    scrollSnapMarginTop?: Flexible<React.CSSProperties['scrollSnapMarginTop'], {
        [key: string]: React.CSSProperties['scrollSnapMarginTop'];
    }>;
    scrollSnapStop?: Flexible<React.CSSProperties['scrollSnapStop'], {
        [key: string]: React.CSSProperties['scrollSnapStop'];
    }>;
    scrollSnapType?: Flexible<React.CSSProperties['scrollSnapType'], {
        [key: string]: React.CSSProperties['scrollSnapType'];
    }>;
    scrollbarGutter?: Flexible<React.CSSProperties['scrollbarGutter'], {
        [key: string]: React.CSSProperties['scrollbarGutter'];
    }>;
    shapeImageThreshold?: Flexible<React.CSSProperties['shapeImageThreshold'], {
        [key: string]: React.CSSProperties['shapeImageThreshold'];
    }>;
    shapeMargin?: Flexible<React.CSSProperties['shapeMargin'], {
        [key: string]: React.CSSProperties['shapeMargin'];
    }>;
    shapeOutside?: Flexible<React.CSSProperties['shapeOutside'], {
        [key: string]: React.CSSProperties['shapeOutside'];
    }>;
    stroke?: Flexible<React.CSSProperties['stroke'], {
        [key: string]: React.CSSProperties['stroke'];
    }>;
    strokeColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    strokeDasharray?: Flexible<React.CSSProperties['strokeDasharray'], {
        [key: string]: React.CSSProperties['strokeDasharray'];
    }>;
    strokeDashoffset?: Flexible<React.CSSProperties['strokeDashoffset'], {
        [key: string]: React.CSSProperties['strokeDashoffset'];
    }>;
    strokeLinecap?: Flexible<React.CSSProperties['strokeLinecap'], {
        [key: string]: React.CSSProperties['strokeLinecap'];
    }>;
    strokeLinejoin?: Flexible<React.CSSProperties['strokeLinejoin'], {
        [key: string]: React.CSSProperties['strokeLinejoin'];
    }>;
    strokeMiterlimit?: Flexible<React.CSSProperties['strokeMiterlimit'], {
        [key: string]: React.CSSProperties['strokeMiterlimit'];
    }>;
    strokeOpacity?: Flexible<React.CSSProperties['strokeOpacity'], {
        [key: string]: React.CSSProperties['strokeOpacity'];
    }>;
    strokeWidth?: Flexible<React.CSSProperties['strokeWidth'], {
        [key: string]: React.CSSProperties['strokeWidth'];
    }>;
    tabSize?: Flexible<React.CSSProperties['tabSize'], {
        [key: string]: React.CSSProperties['tabSize'];
    }>;
    tableLayout?: Flexible<React.CSSProperties['tableLayout'], {
        [key: string]: React.CSSProperties['tableLayout'];
    }>;
    textAlign?: Flexible<React.CSSProperties['textAlign'], {
        [key: string]: React.CSSProperties['textAlign'];
    }>;
    textAlignLast?: Flexible<React.CSSProperties['textAlignLast'], {
        [key: string]: React.CSSProperties['textAlignLast'];
    }>;
    textCombineUpright?: Flexible<React.CSSProperties['textCombineUpright'], {
        [key: string]: React.CSSProperties['textCombineUpright'];
    }>;
    textDecoration?: Flexible<React.CSSProperties['textDecoration'], {
        [key: string]: React.CSSProperties['textDecoration'];
    }>;
    textDecorationColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    textDecorationLine?: Flexible<React.CSSProperties['textDecorationLine'], {
        [key: string]: React.CSSProperties['textDecorationLine'];
    }>;
    textDecorationSkip?: Flexible<React.CSSProperties['textDecorationSkip'], {
        [key: string]: React.CSSProperties['textDecorationSkip'];
    }>;
    textDecorationStyle?: Flexible<React.CSSProperties['textDecorationStyle'], {
        [key: string]: React.CSSProperties['textDecorationStyle'];
    }>;
    textEmphasis?: Flexible<React.CSSProperties['textEmphasis'], {
        [key: string]: React.CSSProperties['textEmphasis'];
    }>;
    textEmphasisColor?: Flexible<Palette, string | number | {
        [key: string]: Flexible<Palette, string>;
    }>;
    textEmphasisPosition?: Flexible<React.CSSProperties['textEmphasisPosition'], {
        [key: string]: React.CSSProperties['textEmphasisPosition'];
    }>;
    textEmphasisStyle?: Flexible<React.CSSProperties['textEmphasisStyle'], {
        [key: string]: React.CSSProperties['textEmphasisStyle'];
    }>;
    textIndent?: Flexible<React.CSSProperties['textIndent'], {
        [key: string]: React.CSSProperties['textIndent'];
    }>;
    textJustify?: Flexible<React.CSSProperties['textJustify'], {
        [key: string]: React.CSSProperties['textJustify'];
    }>;
    textOrientation?: Flexible<React.CSSProperties['textOrientation'], {
        [key: string]: React.CSSProperties['textOrientation'];
    }>;
    textOverflow?: Flexible<React.CSSProperties['textOverflow'], {
        [key: string]: React.CSSProperties['textOverflow'];
    }>;
    textShadow?: Flexible<React.CSSProperties['textShadow'], {
        [key: string]: React.CSSProperties['textShadow'];
    }>;
    textTransform?: Flexible<React.CSSProperties['textTransform'], {
        [key: string]: React.CSSProperties['textTransform'];
    }>;
    textUnderlinePosition?: Flexible<React.CSSProperties['textUnderlinePosition'], {
        [key: string]: React.CSSProperties['textUnderlinePosition'];
    }>;
    top?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    transform?: Flexible<React.CSSProperties['transform'], {
        [key: string]: React.CSSProperties['transform'];
    }>;
    transformBox?: Flexible<React.CSSProperties['transformBox'], {
        [key: string]: React.CSSProperties['transformBox'];
    }>;
    transformOrigin?: Flexible<React.CSSProperties['transformOrigin'], {
        [key: string]: React.CSSProperties['transformOrigin'];
    }>;
    transformStyle?: Flexible<React.CSSProperties['transformStyle'], {
        [key: string]: React.CSSProperties['transformStyle'];
    }>;
    transition?: Flexible<React.CSSProperties['transition'], {
        [key: string]: React.CSSProperties['transition'];
    }>;
    transitionDelay?: Flexible<React.CSSProperties['transitionDelay'], {
        [key: string]: React.CSSProperties['transitionDelay'];
    }>;
    transitionDuration?: Flexible<React.CSSProperties['transitionDuration'], {
        [key: string]: React.CSSProperties['transitionDuration'];
    }>;
    transitionProperty?: Flexible<React.CSSProperties['transitionProperty'], {
        [key: string]: React.CSSProperties['transitionProperty'];
    }>;
    transitionTimingFunction?: Flexible<React.CSSProperties['transitionTimingFunction'], {
        [key: string]: React.CSSProperties['transitionTimingFunction'];
    }>;
    unicodeBidi?: Flexible<React.CSSProperties['unicodeBidi'], {
        [key: string]: React.CSSProperties['unicodeBidi'];
    }>;
    userSelect?: Flexible<React.CSSProperties['userSelect'], {
        [key: string]: React.CSSProperties['userSelect'];
    }>;
    verticalAlign?: Flexible<React.CSSProperties['verticalAlign'], {
        [key: string]: React.CSSProperties['verticalAlign'];
    }>;
    visibility?: Flexible<React.CSSProperties['visibility'], {
        [key: string]: React.CSSProperties['visibility'];
    }>;
    whiteSpace?: Flexible<React.CSSProperties['whiteSpace'], {
        [key: string]: React.CSSProperties['whiteSpace'];
    }>;
    widows?: Flexible<React.CSSProperties['widows'], {
        [key: string]: React.CSSProperties['widows'];
    }>;
    width?: Flexible<SpacingUnit, {
        [key: string]: SpacingUnit;
    }>;
    willChange?: Flexible<React.CSSProperties['willChange'], {
        [key: string]: React.CSSProperties['willChange'];
    }>;
    wordBreak?: Flexible<React.CSSProperties['wordBreak'], {
        [key: string]: React.CSSProperties['wordBreak'];
    }>;
    wordSpacing?: Flexible<React.CSSProperties['wordSpacing'], {
        [key: string]: React.CSSProperties['wordSpacing'];
    }>;
    wordWrap?: Flexible<React.CSSProperties['wordWrap'], {
        [key: string]: React.CSSProperties['wordWrap'];
    }>;
    writingMode?: Flexible<React.CSSProperties['writingMode'], {
        [key: string]: React.CSSProperties['writingMode'];
    }>;
    zIndex?: Flexible<React.CSSProperties['zIndex'], {
        [key: string]: React.CSSProperties['zIndex'];
    }>;
};
export {};
