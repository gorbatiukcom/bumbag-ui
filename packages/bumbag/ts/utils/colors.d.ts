export declare function darken(scale: any, color: any): ({ theme }?: {
    theme?: any;
}) => any;
export declare function lighten(scale: any, color: any): ({ theme }?: {
    theme?: any;
}) => any;
export declare function shade(scale: any, color: any): ({ referenceColor, theme }?: {
    referenceColor?: string;
    theme?: any;
}) => any;
export declare function tint(scale: any, color: any): ({ referenceColor, theme }?: {
    referenceColor?: string;
    theme?: any;
}) => any;
export declare function readableColor(color: any): ({ theme }?: {
    theme?: any;
}) => "#ffffff" | "#000000";
export declare function isColor(color: any): boolean;
export declare function isRGB(string: any): boolean;
export declare function isRGBA(string: any): boolean;
export declare function isHex(string: any): boolean;
export declare function isHSL(string: any): boolean;
export declare function isHSLA(string: any): boolean;
export declare function isRGBOrHSLOrHex(string: any): boolean;
export declare const hexToRgb: (h: any) => string;
