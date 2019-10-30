/* const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url"); */
import { cantfindError } from "./cantfindError";
import { isplainobject } from "./isplainobject";
import oldimportcjsamdumd from "./oldimport";
import { getmodule } from "./getmodule";
import { isurl } from "./isurl";

export const 模块仓库中没有找到 =
  "Cannot find module in packagestore, 模块仓库中没有找到, ";

// export const GLOBALPACKAGESTORE = "PACKAGESTORE";

export const 参数必须为字符串 = "参数必须为字符串";
("use strict");
export const 字符串不能为空 = "字符串不能为空";

export { PACKAGESTORE, REQUIREPACKAGE };

// const importcjsamdumd = (() => {
("use strict");
export const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

// const importcjsamdumd = importcjsamdumd;

async function importcjsamdumd(url: any, packagename?: any): Promise<any> {
  const inarguments: [any, any] = [url, packagename];
  //   const importcjsamdumd = importcjsamdumd;
  return await oldimportcjsamdumd(...inarguments).catch(handleerror);
  async function handleerror(e: Error): Promise<any> {
    console.warn(e);
    if (e instanceof cantfindError && e.urlorname) {
      if (isurl(e.urlorname)) {
        console.log(补充加载依赖的模块网址, e.urlorname);
        await importcjsamdumd(e.urlorname);
        return await importcjsamdumd(...inarguments);
      } else if (
        isplainobject(inarguments[0]) &&
        Reflect.has(inarguments[0], e.urlorname)
      ) {
        await oldimportcjsamdumd(...inarguments);
        return await oldimportcjsamdumd(...inarguments);
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

export default importcjsamdumd;
const PACKAGESTORE: Record<string, Record<string | symbol, any>> = {};
const REQUIREPACKAGE = getmodule;
// export const { PACKAGESTORE, REQUIREPACKAGE } = importcjsamdumd;
