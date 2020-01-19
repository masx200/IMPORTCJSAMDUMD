"use strict";

import { cantfindError } from "./cantfindError";
import { getmodule } from "./getmodule";
import { isplainobject } from "./isplainobject";
import { isurl } from "./isurl";
import oldimportcjsamdumd from "./oldimport";
import { get } from "./coreload";
import type { MODULE } from './module';

export const 模块仓库中没有找到 =
  "Cannot find module in packagestore, Not found in module repository, ";

// export const GLOBALPACKAGESTORE = "PACKAGESTORE";

export const 参数必须为字符串 = "Parameter must be a string";
("use strict");
export const 字符串不能为空 = "String cannot be empty";

// const importcjsamdumd = (() => {
// ("use strict");
export const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

// const importcjsamdumd = importcjsamdumd;
// export type MODULE = Record<any, any>;




export default function importcjsamdumd(url: string[]): Promise<MODULE[]>;
export default function importcjsamdumd(
  url: string,
  packagename?: string
): Promise<MODULE>;
//export default function importcjsamdumd(
  //url: Record<string, string>
//): Promise<Record<string, MODULE>>;
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
    if (tryfailedtimes > 5) {
      throw new Error(
        "Try loading, too many failures, give up trying!" +
          JSON.stringify(url) +
          JSON.stringify(packagename)
      );
    }
    tryfailedtimes++;

    if (e instanceof cantfindError /* && eurlorname */) {
      const eurlorname = e.urlorname;
      if (isurl(eurlorname)) {
        console.log(补充加载依赖的模块网址, eurlorname);
        return await retryimport(eurlorname, undefined, url, packagename);
        /*  await oldimportcjsamdumd(eurlorname).catch(handleerror);
        return await oldimportcjsamdumd(...inarguments); */
      } else if (isplainobject(url) && Reflect.has(url, eurlorname)) {
        return await retryimport(
          get(url, eurlorname),
          eurlorname,
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
