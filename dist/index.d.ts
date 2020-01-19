declare function getmodule(packagename: string): Record<string | symbol, any>;
type Module = Record<any, any>;
declare function importcjsamdumd(url: string[]): Promise<Module[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<Module>;
declare function importcjsamdumd(url: Record<string, string>): Promise<Record<string, Module>>;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;
declare const REQUIREPACKAGE: typeof getmodule;
export { importcjsamdumd as default, importcjsamdumd, PACKAGESTORE, REQUIREPACKAGE };
