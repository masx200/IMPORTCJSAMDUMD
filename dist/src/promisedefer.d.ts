export declare function promisedefer(): Defered;
export interface Defered {
    promise: Promise<any>;
    resolve: (result: any) => void;
    reject: (reason: any) => void;
}
