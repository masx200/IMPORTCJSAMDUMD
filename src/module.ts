export const depssymbol = Symbol("deps");
export const typesymbol = Symbol("type");
// export const namesymbol = Symbol("name");
export const urlsymbol = Symbol("url");
export const sourcesymbol = Symbol("source");
export enum MODULETYPE {
  amd = "amd",
  cjs = "cjs",
  esm = "esm",
  json = "json"
}
export interface MODULE extends Record<string, any> {
  [Symbol.toStringTag]: "Module";
  [depssymbol]: string[];
  [typesymbol]: MODULETYPE;
  [urlsymbol]: string;
  [sourcesymbol]: string;
}
