export declare function createHook<P, RP = void>(useHook: (props: Partial<P>, options: {
    disableCSSProps?: Array<string>;
    themeKey: string;
}) => Partial<RP extends {} ? RP : P>, config?: {
    defaultProps?: Partial<P>;
    themeKey?: string;
}): (props: Partial<P>, { disableCSSProps, themeKey: themeKeyOverride }?: {
    disableCSSProps?: any[];
    themeKey?: any;
}) => Partial<RP extends {} ? RP : P>;
