"use strict";

import { cantfindError } from "./cantfindError";
import { getmodule } from "./getmodule";
import { isplainobject } from "./isplainobject";
import { isurl } from "./isurl";
import oldimportcjsamdumd from "./oldimport";
import { get } from "./coreload";
import { MODULE } from "./module";
const packagestore: Record<string, Record<any,any>> = {};
const requirepackage = getmodule;

export { packagestore, requirepackage };

export const 模块仓库中没有找到 =
  "Cannot find module in packagestore, Not found in module repository, ";

export const 参数必须为字符串 = "Parameter must be a string";
("use strict");
export const 字符串不能为空 = "String cannot be empty";

export const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

 
export default importcjsamdumd
function importcjsamdumd(url: string[]): Promise<MODULE[]>;
 function importcjsamdumd(
  url: string,
  packagename?: string
): Promise<MODULE>;

async function importcjsamdumd(
  url: any,
  packagename?: any
): Promise<any> {
  let tryfailedtimes = 0;

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

    if (e instanceof cantfindError) {
      const eurlorname = e.urlorname;
      if (isurl(eurlorname)) {
        console.log(补充加载依赖的模块网址, eurlorname);
        return await retryimport(eurlorname, undefined, url, packagename);
      } 
/*
else if (isplainobject(url) && Reflect.has(url, eurlorname)) {
        return await retryimport(
          get(url, eurlorname),
          eurlorname,
          url,
          packagename
        );
      }
*/

 else {
        throw e;
      }
    } else {
      throw e;
    }
  }
}

