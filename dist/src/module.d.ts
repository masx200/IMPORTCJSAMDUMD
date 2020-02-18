export declare const urlsymbol: unique symbol;
export declare type MODULETYPE = "amd" | "cjs" | "esm" | "json";
export interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [urlsymbol]: string;
}
