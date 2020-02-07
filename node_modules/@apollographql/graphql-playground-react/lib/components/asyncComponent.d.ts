import * as React from 'react';
export interface State {
    component?: any;
}
declare const asyncComponent: (importComponent: any) => {
    new (props: any, context?: any): {
        state: State;
        componentDidMount(): void;
        render(): JSX.Element;
        setState<K extends "component">(state: State | ((prevState: Readonly<State>, props: any) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
export default asyncComponent;
