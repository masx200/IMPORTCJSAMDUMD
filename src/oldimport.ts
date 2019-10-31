// import { 同时发起多个entries } from "./arrayimportall.js";
import { 同时发起多个entries, 同时发起多个字符串 } from "./arrayimportall.js";
import { assertstring } from "./assertstring.js";
import coreload, { namesymbol, urlsymbol, get, set } from "./coreload.js";
import { getmodule } from "./getmodule.js";
import {
  //   assertstring,
  //   getmodule,
  //   isArray,
  //   isplainobject,
  PACKAGESTORE
} from "./importcjsamdumd";
import { isArray } from "./isarray.js";
import { isplainobject } from "./isplainobject.js";
import { newobjjson } from "./newobjjson.js";
const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "The type entered is incorrect, the type entered must be a string or an array or an object";
// export const 非法字符串 = "输入的类型错误,输入的字符串不能为空,不能为undefined";
// export const namesymbol = Symbol.for("name");
// export const urlsymbol = Symbol.for("url");
export const 传入的参数必须是个object = "The argument passed in must be an object";
export type PlainObj = Record<any, any>;

export default /* (() => {
  return */ async function oldimportcjsamdumd(
  url: any,
  packagename?: any
): Promise<any> {
  "use strict";
  if (isplainobject(url)) {
    return await (async url => {
      url = newobjjson(url);
      /* 应该是value,key的数组,与  Object.entries相反*/
      const 输入参数array = Object.entries(url).map(([key, value]) => [
        value,
        key
      ]); /*  Object.keys(url).map(key => {
          const packageurl = url[key];
          const packagenm = key;
          return [packageurl, packagenm];
        }); */
      let suoyouimportpromise = [];
      try {
        suoyouimportpromise = await 同时发起多个entries(
          输入参数array,
          oldimportcjsamdumd
        );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await 同时发起多个entries(
          输入参数array,
          oldimportcjsamdumd
        );
      } finally {
        suoyouimportpromise = await 同时发起多个entries(
          输入参数array,
          oldimportcjsamdumd
        );
      }
      let objecttoreturn: PlainObj = {};
      suoyouimportpromise.forEach(m => {
        objecttoreturn[m[namesymbol]] = m;
      });
      return objecttoreturn;
    })(url);
  } else if (
    isArray(
      url
    ) /* && typeof url === "object" */ /*  ||
    typeof packagename === "object" */
  ) {
    return await (async (...args) => {
      let suoyouimportpromise = [];
      const 传入参数arr = args; //Array(...args).flat(1 / 0); //JSON.parse(JSON.stringify(Array(...args).flat()));
      try {
        suoyouimportpromise = await 同时发起多个字符串(
          传入参数arr,
          oldimportcjsamdumd
        );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await 同时发起多个字符串(
          传入参数arr,
          oldimportcjsamdumd
        );
      } finally {
        suoyouimportpromise = await 同时发起多个字符串(
          传入参数arr,
          oldimportcjsamdumd
        );
      }
      return suoyouimportpromise;
    })(...url);
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
        get(PACKAGESTORE[packagename], urlsymbol) === url
        //  [urlsymbol] === url
      ) {
        return getmodule(packagename);
      } else if (
        typeof PACKAGESTORE[url] !== "undefined" &&
        typeof PACKAGESTORE[url].default !== "undefined" &&
        get(PACKAGESTORE[url], urlsymbol) === url
        //   PACKAGESTORE[url][urlsymbol] === url
      ) {
        PACKAGESTORE[packagename] = PACKAGESTORE[url];
        //   PACKAGESTORE[packagename][namesymbol] = packagename;
        set(PACKAGESTORE[packagename], namesymbol, packagename);
        return getmodule(url);
      } else {
        return await coreload(url, packagename);
      }
    })(url, packagename);
  } else {
    // debugger;
    throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
  }
}
// })();
