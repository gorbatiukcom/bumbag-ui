import * as React from 'react';
import { LayoutBreakpoint, ThemeConfig } from '../types';
export declare type ProviderProps = {
    children: React.ReactNode;
    isStandalone?: boolean;
    collapseBelow?: LayoutBreakpoint;
    colorMode?: string;
    isSSR?: boolean;
    platform?: 'web' | 'native';
    theme?: ThemeConfig;
};
export declare function Provider(props: ProviderProps): JSX.Element;
export declare namespace Provider {
    var defaultProps: {
        colorMode: string;
        platform: string;
    };
}
