import { Flexible } from './utils';
export declare type Altitude = Flexible<'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
export declare type BorderRadii = Flexible<'default' | '1' | '2' | '3' | '4' | '5' | '6' | '7', string>;
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type Breakpoint = Flexible<'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile', string>;
export declare type ColumnSpread = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';
export declare type GradientDirection = 'top' | 'left' | 'right' | 'bottom' | 'top left' | 'top right' | 'bottom left' | 'bottom right';
export declare type FontFamily = Flexible<'default' | 'heading' | 'mono', string>;
export declare type FontSize = Flexible<'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
export declare type FontWeight = Flexible<'normal' | 'semibold' | 'bold', string>;
export declare type LineHeight = Flexible<'none' | 'default' | '100' | '200' | '300' | '400' | '500' | '600', string>;
export declare type LetterSpacing = Flexible<'default' | '100' | '200' | '300' | '400' | '500' | '600' | '700', string>;
export declare type LayoutBreakpoint = 'fullHD' | 'min-fullHD' | 'max-fullHD' | 'widescreen' | 'min-widescreen' | 'max-widescreen' | 'desktop' | 'min-desktop' | 'max-desktop' | 'tablet' | 'min-tablet' | 'max-tablet' | 'mobile' | 'min-mobile' | 'max-mobile';
export declare type Palette = Flexible<'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning', string>;
export declare type Placement = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start' | 'top-end' | 'right-end' | 'bottom-end' | 'left-end';
export declare type Size = Flexible<'default' | 'small' | 'medium' | 'large', string>;
export declare type AnimateProps = {
    /** Delay of the animation (in s/ms). */
    delay?: string;
    /** Duration of the animation (in s/ms). */
    duration?: string;
    /** Will the component have an expand animation when it is toggled on/off? */
    expand?: boolean | 'bottom' | 'left' | 'right' | 'top' | 'center';
    /** Will the component have a fade animation when it is toggled on/off? */
    fade?: boolean;
    /** Will the component have a slide animation when it is toggled on/off? */
    slide?: boolean | 'bottom' | 'left' | 'right' | 'top';
    /** Timing function of the animation */
    timingFunction?: string;
};
