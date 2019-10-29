async function 同时发起多个字符串(a: Array<string>, importcjsamdumd: Function) {
  return await Promise.all(
    Array(...a).map(e => {
      return importcjsamdumd(e);
    })
  );
}
import coreload from "./coreload.js";
import importcjsamdumd, {
  //   assertstring,
  getmodule,
  isArray,
  isplainobject,
  PACKAGESTORE
} from "./importcjsamdumd";
import { assertstring } from "./assertstring.js";
const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
// export const 非法字符串 = "输入的类型错误,输入的字符串不能为空,不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url");
const 传入的参数必须是个object = "传入的参数必须是个object";
export type PlainObj = Record<any, any>;
function newobjjson(obj: PlainObj) {
  if (typeof obj !== "object") {
    throw new TypeError(传入的参数必须是个object);
  }
  return JSON.parse(JSON.stringify(obj));
}
async function 同时发起多个(a: any[][], importcjsamdumd: Function) {
  return await Promise.all(
    Array(...a).map(e => {
      return importcjsamdumd(e[0], e[1]);
    })
  );
}
export default (() => {
  return async function oldimportcjsamdumd(
    url: any,
    packagename?: any
  ): Promise<any> {
    "use strict";
    if (isplainobject(url)) {
      return await (async url => {
        url = newobjjson(url);
        const 输入参数array = Object.keys(url).map(key => {
          const packageurl = url[key];
          const packagenm = key;
          return [packageurl, packagenm];
        });
        let suoyouimportpromise = [];
        try {
          suoyouimportpromise = await 同时发起多个(
            输入参数array,
            importcjsamdumd
          );
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个(
            输入参数array,
            importcjsamdumd
          );
        } finally {
          suoyouimportpromise = await 同时发起多个(
            输入参数array,
            importcjsamdumd
          );
        }
        let objecttoreturn: PlainObj = {};
        suoyouimportpromise.forEach(m => {
          objecttoreturn[m[namesymbol]] = m;
        });
        return objecttoreturn;
      })(url);
    } else if (
      (isArray(url) && typeof url === "object") ||
      typeof packagename === "object"
    ) {
      return await (async (...args) => {
        let suoyouimportpromise = [];
        const 传入参数arr = Array(...args).flat(); //JSON.parse(JSON.stringify(Array(...args).flat()));
        try {
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            importcjsamdumd
          );
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            importcjsamdumd
          );
        } finally {
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            importcjsamdumd
          );
        }
        return suoyouimportpromise;
      })(...[url, packagename].flat());
    } else if (typeof url === "string" || typeof packagename === "string") {
      assertstring(url);
      return await (async (url: string, packagename?: string) => {
        /*   if (typeof url === "undefined" || packagename === "") {
          throw new TypeError(非法字符串);
        } */
        if (typeof packagename === "undefined") {
          packagename = new URL(url).href;
        }
        url = new URL(url).href;
        if (
          typeof PACKAGESTORE[packagename] !== "undefined" &&
          typeof PACKAGESTORE[packagename].default !== "undefined" &&
          Reflect.get(PACKAGESTORE[packagename], urlsymbol) === url
          //  [urlsymbol] === url
        ) {
          return getmodule(packagename);
        } else if (
          typeof PACKAGESTORE[url] !== "undefined" &&
          typeof PACKAGESTORE[url].default !== "undefined" &&
          Reflect.get(PACKAGESTORE[url], urlsymbol) === url
          //   PACKAGESTORE[url][urlsymbol] === url
        ) {
          PACKAGESTORE[packagename] = PACKAGESTORE[url];
          //   PACKAGESTORE[packagename][namesymbol] = packagename;
          Reflect.set(PACKAGESTORE[packagename], namesymbol, packagename);
          return getmodule(url);
        } else {
          return await coreload(url, packagename);
        }
      })(url, packagename);
    } else {
      throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
    }
  };
})();
