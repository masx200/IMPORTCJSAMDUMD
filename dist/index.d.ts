declare function getmodule(packagename: string): Record<string | symbol, any>;
declare const depssymbol: unique symbol;
declare const typesymbol: unique symbol;
declare const urlsymbol: unique symbol;
declare const sourcesymbol: unique symbol;
type MODULETYPE = "amd" | "cjs" | "esm" | "json";
interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [depssymbol]: string[];
    [typesymbol]: MODULETYPE;
    [urlsymbol]: string;
    [sourcesymbol]: string;
}
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<MODULE>;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;
declare const REQUIREPACKAGE: typeof getmodule;
declare const packagealias: Record<string, string>;
export { PACKAGESTORE, REQUIREPACKAGE, importcjsamdumd, packagealias };
