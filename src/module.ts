export const depssymbol = Symbol("deps");
export const typesymbol = Symbol("type");

export const urlsymbol = Symbol("url");
export const sourcesymbol = Symbol("source");
export type MODULETYPE = "amd" | "cjs" | "esm" | "json";

export interface MODULE extends Record<string, any> {
  [Symbol.toStringTag]: "Module";
  [depssymbol]: string[];
  [typesymbol]: MODULETYPE;
  [urlsymbol]: string;
  // [sourcesymbol]: string;
}
