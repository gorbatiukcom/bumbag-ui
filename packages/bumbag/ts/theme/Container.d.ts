import { ContainerThemeConfig } from '../types';
declare const _default: (overrides: ContainerThemeConfig) => {
    styles?: {
        base?: import("../types").ThemeAttribute<import("../types").Stylesheet>;
        layout?: import("../types").ThemeAttribute<import("../types").Stylesheet>;
        fluid?: import("../types").ThemeAttribute<import("../types").Stylesheet>;
    };
    tabletMargin: ((props: {
        theme?: import("../types").ThemeConfig;
    }) => any) | import("../types").ThemeAttribute<number>;
    fluidMargin: ((props: {
        theme?: import("../types").ThemeConfig;
    }) => any) | import("../types").ThemeAttribute<number>;
    defaultProps?: Partial<import("..").ContainerProps>;
    variants?: import("../types").Variant<ContainerThemeConfig>;
    modes?: import("../types").Variant<ContainerThemeConfig>;
};
export default _default;
