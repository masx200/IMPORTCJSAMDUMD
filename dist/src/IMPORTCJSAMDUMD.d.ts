import { PlainObj } from "./oldimport";
export declare function isArray(a: any): a is Array<any>;
export declare function getmodule(packagename: string): Record<string | symbol, any>;
export declare function isplainobject(o: any): o is PlainObj;
export declare const 参数必须为字符串 = "\u53C2\u6570\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32";
export declare const 字符串不能为空 = "\u5B57\u7B26\u4E32\u4E0D\u80FD\u4E3A\u7A7A";
export declare const myrequirefun: (packagename: string) => any;
export { define };
declare function define(name: any, deps?: any, callback?: any): void;
declare namespace define {
    var exports: {};
    var amd: boolean;
}
export declare function 定义default(target: {
    default: undefined;
}, def: {
    [x: string]: string;
    default: any;
}): void;
declare function importcjsamdumd(url: any, packagename?: any): Promise<any>;
export default importcjsamdumd;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;
declare const REQUIREPACKAGE: typeof getmodule;
export { PACKAGESTORE, REQUIREPACKAGE };
