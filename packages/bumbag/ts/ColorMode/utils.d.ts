export declare function mapCSSVariables(obj: any): {};
export declare function getColorModesCSSVariables(theme: any): {
    [x: number]: {};
};
export declare function getColorFromCSSVariable(selector: any, fallback: any): string;
export declare function addColorModeRootElementClassName(nextMode: string, prevMode?: string): void;
export declare function getDefaultColorMode(mode: any, { localStorage, theme }: {
    localStorage: any;
    theme: any;
}): any;
