import * as React from 'react';
import { TabStateReturn as ReakitTabStateReturn, TabInitialState as ReakitTabInitialState } from 'reakit';
export declare type TabStateReturn = ReakitTabStateReturn;
export declare type TabInitialState = ReakitTabInitialState;
export declare function useTabState(initialState?: ReakitTabInitialState): ReakitTabStateReturn;
export declare function TabState(props: {
    children?: (state: TabInitialState) => React.ReactElement<any>;
} & TabInitialState): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
