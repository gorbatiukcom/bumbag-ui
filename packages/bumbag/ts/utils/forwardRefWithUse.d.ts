import * as React from 'react';
export declare type AssignableRef<ValueType> = {
    bivarianceHack(instance: ValueType | null): void;
}['bivarianceHack'] | React.MutableRefObject<ValueType | null> | null;
export declare type Use<BaseProps = any> = React.ElementType<BaseProps>;
export declare type PropsWithUse<ComponentType extends Use, ComponentProps> = ComponentProps & Omit<React.ComponentPropsWithRef<ComponentType>, 'use' | keyof ComponentProps> & {
    use?: string | ComponentType;
};
export declare type PropsFromUse<ComponentType extends Use, ComponentProps> = (PropsWithUse<ComponentType, ComponentProps> & {
    use: string | ComponentType;
}) & PropsWithUse<ComponentType, ComponentProps>;
export declare type ComponentWithForwardedRef<ElementType extends React.ElementType, ComponentProps> = React.ForwardRefExoticComponent<ComponentProps & React.HTMLProps<React.ElementType<ElementType>> & React.ComponentPropsWithRef<ElementType>>;
export interface ComponentWithUse<ComponentType extends Use, ComponentProps> {
    <TT extends Use>(props: PropsWithUse<TT, ComponentProps>): React.ReactElement | null;
    (props: PropsWithUse<ComponentType, ComponentProps>): React.ReactElement | null;
    displayName?: string;
    propTypes?: React.WeakValidationMap<PropsWithUse<ComponentType, ComponentProps>>;
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<PropsWithUse<ComponentType, ComponentProps>>;
    useProps?: (props?: Partial<ComponentProps>, config?: {
        themeKey?: string;
    }) => any;
}
export declare function forwardRefWithUse<Props, ComponentType extends Use>(comp: (props: PropsFromUse<ComponentType, Props>, ref: React.RefObject<any>) => React.ReactElement | null): ComponentWithUse<ComponentType, Props>;
