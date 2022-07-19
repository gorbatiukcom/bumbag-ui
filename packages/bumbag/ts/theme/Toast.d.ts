import { Placement, ToastThemeConfig } from '../types';
declare const _default: (overrides: ToastThemeConfig) => {
    styles?: {
        base?: import("../types").ThemeAttribute<import("../types").Stylesheet>;
    };
    Overlay?: {
        styles?: {
            base?: import("../types").ThemeAttribute<import("../types").Stylesheet>;
        };
    };
    defaultProps?: Partial<import("..").ToastProps>;
    variants?: import("../types").Variant<ToastThemeConfig>;
    modes?: import("../types").Variant<ToastThemeConfig>;
    placement: Placement;
    showCountdown: boolean;
    timeout: number;
};
export default _default;
