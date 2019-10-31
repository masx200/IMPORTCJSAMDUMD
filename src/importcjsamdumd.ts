/* const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url"); */
import { cantfindError } from "./cantfindError";
import { getmodule } from "./getmodule";
import { isplainobject } from "./isplainobject";
import { isurl } from "./isurl";
import oldimportcjsamdumd from "./oldimport";
import { get } from "./coreload";

export const 模块仓库中没有找到 =
  "Cannot find module in packagestore, 模块仓库中没有找到, ";

// export const GLOBALPACKAGESTORE = "PACKAGESTORE";

export const 参数必须为字符串 = "参数必须为字符串";
("use strict");
export const 字符串不能为空 = "字符串不能为空";

// const importcjsamdumd = (() => {
("use strict");
export const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

// const importcjsamdumd = importcjsamdumd;
export type Module = Record<any, any>;
export default function importcjsamdumd(url: string[]): Promise<Module[]>;
export default function importcjsamdumd(
  url: string,
  packagename?: string
): Promise<Module>;
export default function importcjsamdumd(
  url: Record<string, string>
): Promise<Record<string, Module>>;
export default async function importcjsamdumd(
  url: any,
  packagename?: any
): Promise<any> {
  let tryfailedtimes = 0;
  //   const inarguments: [any, any] = [url, packagename];
  //   const importcjsamdumd = importcjsamdumd;
  return await oldimportcjsamdumd(url, packagename).catch(handleerror);
  async function retryimport(url1: any, nam1: any, url2: any, name2: any) {
    try {
      await oldimportcjsamdumd(url1, nam1).catch(handleerror);
      return await oldimportcjsamdumd(url2, name2);
    } catch (error) {
      console.warn(error);
      return await oldimportcjsamdumd(url2, name2).catch(handleerror);
    }
  }
  async function handleerror(e: Error): Promise<any> {
    console.warn(e);
    if (tryfailedtimes > 100) {
      throw new Error(
        "尝试加载,失败次数过多,放弃尝试!" +
          JSON.stringify(url) +
          JSON.stringify(packagename)
      );
    }
    tryfailedtimes++;

    if (e instanceof cantfindError && e.urlorname) {
      if (isurl(e.urlorname)) {
        console.log(补充加载依赖的模块网址, e.urlorname);
        return await retryimport(e.urlorname, undefined, url, packagename);
        /*  await oldimportcjsamdumd(e.urlorname).catch(handleerror);
        return await oldimportcjsamdumd(...inarguments); */
      } else if (isplainobject(url) && Reflect.has(url, e.urlorname)) {
        return await retryimport(
          get(url, e.urlorname),
          e.urlorname,
          url,
          packagename
        );
        // await oldimportcjsamdumd(...inarguments).catch(handleerror);
        // return await oldimportcjsamdumd(...inarguments);
      } else {
        throw e;
      }
    } else {
      throw e;
    }
  }
}
/* export interface IMPORTCJSAMDUMD {
  (url: any, packagename?: any): Promise<any>;
  PACKAGESTORE: Record<string, PlainObj>;
  REQUIREPACKAGE: (packagename: string) => any;
} */
// /* importcjsamdumd.PACKAGESTORE = {} as Record<
//   string|symbol,
//   PlainObj
// >; /* PACKAGESTORE ||  */
// importcjsamdumd.REQUIREPACKAGE = getmodule; */
//   return importcjsamdumd;
// })();
// const IMPORTcjsamdumd: IMPORTCJSAMDUMD = importcjsamdumd;

const PACKAGESTORE: Record<string, Record<string | symbol, any>> = {};
const REQUIREPACKAGE = getmodule;
// export const { PACKAGESTORE, REQUIREPACKAGE } = importcjsamdumd;
export { PACKAGESTORE, REQUIREPACKAGE };
