/// <reference types="react" />
import { TooltipStateReturn as ReakitTooltipStateReturn, TooltipInitialState as ReakitTooltipInitialState } from 'reakit';
export declare type TooltipStateReturn = ReakitTooltipStateReturn;
export declare type TooltipInitialState = ReakitTooltipInitialState;
export declare function useTooltipState(initialState?: TooltipInitialState): ReakitTooltipStateReturn;
export declare function TooltipState(props: {
    children?: (state: TooltipStateReturn) => React.ReactElement<any>;
} & TooltipInitialState): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
