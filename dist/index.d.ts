declare function getmodule(packagename: string): Record<string | symbol, any>;
declare const depssymbol: unique symbol;
declare const typesymbol: unique symbol;
declare const urlsymbol: unique symbol;
declare const sourcesymbol: unique symbol;
declare enum MODULETYPE {
    amd = "amd",
    cjs = "cjs",
    esm = "esm",
    json = "json"
}
interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [depssymbol]: string[];
    [typesymbol]: MODULETYPE;
    [urlsymbol]: string;
    [sourcesymbol]: string;
}
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<MODULE>;
declare function importcjsamdumd(url: Record<string, string>): Promise<Record<string, MODULE>>;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;
declare const REQUIREPACKAGE: typeof getmodule;
declare const packagealias: Record<string, string>;
export { importcjsamdumd as default, importcjsamdumd, PACKAGESTORE, REQUIREPACKAGE, packagealias };
