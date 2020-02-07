declare function getmodule(packagename: string): Record<any, any>;
declare const depssymbol: unique symbol;
declare const typesymbol: unique symbol;
declare const urlsymbol: unique symbol;
type MODULETYPE = "amd" | "cjs" | "esm" | "json";
interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [depssymbol]: string[];
    [typesymbol]: MODULETYPE;
    [urlsymbol]: string;
}
declare const packagestore: Record<string, Record<any, any>>;
declare const requirepackage: typeof getmodule;
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<MODULE>;
declare const packagealias: Record<string, string>;
declare const cacheurltocjsfun: Record<string, Function>;
declare const cachedurltotext: Record<string, string>;
type CODETYPE = "json" | "js";
export { packagestore, requirepackage, importcjsamdumd, packagealias, cacheurltocjsfun, cachedurltotext };
