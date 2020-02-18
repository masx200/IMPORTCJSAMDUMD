declare const packagealias: Record<string, string>;
declare function getallmodules(): [string, Record<any, any>][];
declare function getmodulewrapper(url: string): Function | undefined;
declare function getmoduledeps(url: string): string[] | undefined;
declare function getmoduleids(): string[];
declare function getmodulesource(url: string): string | undefined;
declare const urlsymbol: unique symbol;
type MODULETYPE = "amd" | "cjs" | "esm" | "json";
interface MODULE extends Record<string, any> {
    [Symbol.toStringTag]: "Module";
    [urlsymbol]: string;
}
declare function getmoduletype(url: string): MODULETYPE | undefined;
declare function getmodule(packagename: string): Record<any, any>;
declare const requirepackage: typeof getmodule;
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(url: string, packagename?: string): Promise<MODULE>;
export { requirepackage, importcjsamdumd, packagealias, getallmodules, getmoduletype, getmoduledeps, getmodulesource, getmodulewrapper, getmoduleids };
