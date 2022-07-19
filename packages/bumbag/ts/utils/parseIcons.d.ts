import { IconDefinition } from '@fortawesome/fontawesome-common-types';
export declare type FontAwesomeIconStandalone = {
    iconName?: string;
    width?: number;
    height?: number;
    svgPathData?: string;
};
export declare type ParsedIcon = IconDefinition | {
    viewBoxHeight: number;
    viewBoxWidth: number;
    paths?: Array<string>;
    tree?: Array<any>;
};
export declare type ParsedIcons = {
    [key: string]: ParsedIcon;
};
export declare type ParseIconsOpts = {
    prefix?: string;
    type?: 'font-awesome' | 'font-awesome-standalone';
};
export declare type Icons = IconDefinition[] | FontAwesomeIconStandalone[];
export declare function parseIcons(icons: Icons, { prefix, type }?: ParseIconsOpts): ParsedIcons;
