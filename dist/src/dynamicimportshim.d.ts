export declare type Module = Record<any, any>;
export { createBlob };
declare function createBlob(source: string): string;
declare type dynamicimport = (url: string) => Promise<Module>;
declare const dynamicimportshimfun: dynamicimport;
export default dynamicimportshimfun;
