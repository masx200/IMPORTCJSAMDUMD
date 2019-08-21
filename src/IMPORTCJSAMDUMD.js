class cantfindError extends Error {
  constructor(message, urlorname) {
    super(message);
    this.urlorname = urlorname;
  }
}
const 传入的参数必须是个object = "传入的参数必须是个object";
const 模块仓库中没有找到 =
  "Cannot find module in packagestore, 模块仓库中没有找到, ";
function newobjjson(obj) {
  if (typeof obj !== "object") {
    throw new TypeError(传入的参数必须是个object);
  }
  return JSON.parse(JSON.stringify(obj));
}
async function 同时发起多个(a) {
  return await Promise.all(
    Array.from(a).map(e => {
      return IMPORTCJSAMDUMD(e[0], e[1]);
    })
  );
}
function isurl(url) {
  var flag = false;
  try {
    if (url === "") {
      throw new TypeError(字符串不能为空);
    }
    if (typeof url !== "string") {
      throw new TypeError(参数必须为字符串);
    }
    url = new URL(url).href;
    flag = true;
  } catch (error) {
    flag = false;
  }
  return flag;
}
function isArray(a) {
  return (
    typeof a === "object" &&
    Array.isArray(a) &&
    Object.prototype.toString.call(a) === "[object Array]"
  );
}
function getmodule(packagename) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
  if (findpackage) {
    return new Proxy(findpackage, {
      set() {
        return false;
      },
      deleteProperty() {
        return false;
      }
    });
  } else {
    throw new Error(模块仓库中没有找到 + packagename);
  }
}
const GLOBALPACKAGESTORE = "PACKAGESTORE";
function isobject(o) {
  return (
    typeof o === "object" &&
    Object.prototype.toString.call(o) === "[object Object]" &&
    o.__proto__ === Object.prototype
  );
}
const 参数必须为字符串 = "参数必须为字符串";
("use strict");
const 字符串不能为空 = "字符串不能为空";
import coreload from "./coreload.js";
export let myrequirefun = function requireinstead(packagename) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
  if (findpackage) {
    return findpackage.default;
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
};
export { define };
define.exports = {};
function isFunction(it) {
  const op = Object.prototype;
  const ostring = op.toString;
  return "function" === typeof it && ostring.call(it) === "[object Function]";
}
function define(name, deps, callback) {
  "use strict";
  define.exports = {};
  define.amd = true;
  const defineglobalDefQueue = [];
  if (typeof name !== "string") {
    callback = deps;
    deps = name;
    name = null;
  }
  if (!isArray(deps)) {
    callback = deps;
    deps = null;
  }
  if (!deps && isFunction(callback)) {
    deps = [];
  }
  defineglobalDefQueue.push([name, deps, callback]);
  const canshu = defineglobalDefQueue[0][1].map(e => myrequirefun(e));
  define.exports = defineglobalDefQueue[0][2](...canshu);
}
define.amd = true;
export function assertstring(s) {
  if (s === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof s !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  return true;
}
export function 定义default(target, def) {
  if (def[Symbol.toStringTag] === "Module" && def.default) {
    def = def.default;
  }
  Object.defineProperty(target, "default", {
    enumerable: true,
    get() {
      return def;
    }
  });
}
const IMPORTCJSAMDUMD = (() => {
  "use strict";
  const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";
  const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
    "输入的类型错误,输入的类型必须是字符串或者数组或对象";
  const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
  const namesymbol = Symbol.for("name");
  const urlsymbol = Symbol.for("url");
  const IMPORTCJSAMDUMD = importcjsamdumd;
  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] =
    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] || {};
  async function importcjsamdumd(...inarguments) {
    return await oldimportcjsamdumd(...inarguments).catch(handleerror);
    async function handleerror(e) {
      console.warn(e);
      if (e instanceof cantfindError && e.urlorname) {
        if (isurl(e.urlorname)) {
          console.log(补充加载依赖的模块网址, e.urlorname);
          await importcjsamdumd(e.urlorname);
          return await importcjsamdumd(...inarguments);
        } else {
          if (
            isobject(inarguments[0]) &&
            Reflect.has(inarguments[0], e.urlorname)
          ) {
            await oldimportcjsamdumd(...inarguments);
            return await oldimportcjsamdumd(...inarguments);
          } else {
            throw e;
          }
        }
      } else {
        throw e;
      }
    }
  }
  async function oldimportcjsamdumd(url, packagename) {
    "use strict";
    if (isobject(url)) {
      return await (async url => {
        url = newobjjson(url);
        const 输入参数array = Object.keys(url).map(key => {
          const packageurl = url[key];
          const packagenm = key;
          return [packageurl, packagenm];
        });
        let suoyouimportpromise = [];
        try {
          suoyouimportpromise = await 同时发起多个(输入参数array);
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个(输入参数array);
        } finally {
          suoyouimportpromise = await 同时发起多个(输入参数array);
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
        async function 同时发起多个字符串(a) {
          return await Promise.all(
            Array.from(a).map(e => {
              return IMPORTCJSAMDUMD(e);
            })
          );
        }
        let suoyouimportpromise = [];
        const 传入参数arr = JSON.parse(JSON.stringify(Array(...args).flat()));
        try {
          suoyouimportpromise = await 同时发起多个字符串(传入参数arr);
        } catch (error) {
          console.warn(error);
          suoyouimportpromise = await 同时发起多个字符串(传入参数arr);
        } finally {
          suoyouimportpromise = await 同时发起多个字符串(传入参数arr);
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
  }
  IMPORTCJSAMDUMD.REQUIREPACKAGE = getmodule;
  return IMPORTCJSAMDUMD;
})();
export default IMPORTCJSAMDUMD;
