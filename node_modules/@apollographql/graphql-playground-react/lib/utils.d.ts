export declare function safely(cb: any): (...args: any[]) => IterableIterator<any>;
interface PrettierOptions {
    printWidth: number;
    tabWidth: number;
    useTabs: boolean;
}
export declare function prettify(query: string, options: PrettierOptions): any;
export declare function isIframe(): boolean;
export {};
