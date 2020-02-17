declare const packagealias: Record<string, string>;
declare function getallmodules(): [string, Record<any, any>][];
declare function getmodule(packagename: string): Record<any, any>;
declare const urlsymbol: unique symbol;
interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [urlsymbol]: string;
}
declare const requirepackage: typeof getmodule;
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<MODULE>;
export { requirepackage, importcjsamdumd, packagealias, getallmodules };
