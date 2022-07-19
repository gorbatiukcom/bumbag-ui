export declare const generateTextVariants: (textColor: string) => {
    text100: any;
    text200: any;
    text300: any;
    text400: any;
    text: string;
    textTint: any;
    textInverted: string;
    textTintInverted: any;
};
export declare const generateColorVariants: ({ backgroundColor, tintColorReference: _tintColorReference, shadeColorReference: _shadeColorReference, color, colorMode, paletteKey, paletteOverrides, }: {
    backgroundColor?: string;
    tintColorReference?: string;
    shadeColorReference?: string;
    color: string;
    colorMode?: string;
    paletteKey: string;
    paletteOverrides?: ({ color }: {
        color: string;
    }) => {};
}) => {};
