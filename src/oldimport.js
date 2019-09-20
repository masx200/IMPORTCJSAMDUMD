async function 同时发起多个字符串(a, IMPORTCJSAMDUMD) {
  return await Promise.all(
    Array.from(a).map(e => {
      return IMPORTCJSAMDUMD(e);
    })
  );
}
import IMPORTCJSAMDUMD, {
  getmodule,
  isplainobject,
  isArray,
  assertstring,
  GLOBALPACKAGESTORE
} from "./IMPORTCJSAMDUMD";
const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url");
import coreload from "./coreload.js";
const 传入的参数必须是个object = "传入的参数必须是个object";
function newobjjson(obj) {
  if (typeof obj !== "object") {
    throw new TypeError(传入的参数必须是个object);
  }
  return JSON.parse(JSON.stringify(obj));
}
async function 同时发起多个(a, IMPORTCJSAMDUMD) {
  return await Promise.all(
    Array.from(a).map(e => {
      return IMPORTCJSAMDUMD(e[0], e[1]);
    })
  );
}
export default (IMPORTCJSAMDUMD => {
  return async function oldimportcjsamdumd(url, packagename) {
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
            IMPORTCJSAMDUMD
          );
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个(
            输入参数array,
            IMPORTCJSAMDUMD
          );
        } finally {
          suoyouimportpromise = await 同时发起多个(
            输入参数array,
            IMPORTCJSAMDUMD
          );
        }
        let objecttoreturn = {};
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
        const 传入参数arr = JSON.parse(JSON.stringify(Array(...args).flat()));
        try {
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            IMPORTCJSAMDUMD
          );
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            IMPORTCJSAMDUMD
          );
        } finally {
          suoyouimportpromise = await 同时发起多个字符串(
            传入参数arr,
            IMPORTCJSAMDUMD
          );
        }
        return suoyouimportpromise;
      })(...arguments);
    } else if (typeof url === "string" || typeof packagename === "string") {
      assertstring(url);
      return await (async (url, packagename) => {
        if (typeof url === "undefined" || url === "" || packagename === "") {
          throw new TypeError(非法字符串);
        }
        if (typeof packagename === "undefined") {
          packagename = new URL(url).href;
        }
        url = new URL(url).href;
        if (
          typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename] !==
            "undefined" &&
          typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename].default !==
            "undefined" &&
          IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename][urlsymbol] === url
        ) {
          return getmodule(packagename);
        } else if (
          typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] !== "undefined" &&
          typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url].default !==
            "undefined" &&
          IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url][urlsymbol] === url
        ) {
          IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename] =
            IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url];
          IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename][
            namesymbol
          ] = packagename;
          return getmodule(url);
        } else {
          return await coreload(url, packagename);
        }
      })(url, packagename);
    } else {
      throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
    }
  };
})(IMPORTCJSAMDUMD);
