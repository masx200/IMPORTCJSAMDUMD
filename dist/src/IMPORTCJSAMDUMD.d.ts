import { getmodule } from "./getmodule";
export declare const 模块仓库中没有找到 = "Cannot find module in packagestore, \u6A21\u5757\u4ED3\u5E93\u4E2D\u6CA1\u6709\u627E\u5230, ";
export declare const 参数必须为字符串 = "\u53C2\u6570\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32";
export declare const 字符串不能为空 = "\u5B57\u7B26\u4E32\u4E0D\u80FD\u4E3A\u7A7A";
export declare const 补充加载依赖的模块网址 = "\u8865\u5145\u52A0\u8F7D\u4F9D\u8D56\u7684\u6A21\u5757\u7F51\u5740";
export default function importcjsamdumd(url: any, packagename?: any): Promise<any>;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;
declare const REQUIREPACKAGE: typeof getmodule;
export { PACKAGESTORE, REQUIREPACKAGE };
