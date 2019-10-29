/* const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url"); */
import oldimportcjsamdumd from "./oldimport";
class cantfindError extends Error {
  constructor(message, urlorname) {
    super(message);
    this.urlorname = urlorname;
  }
}

const 模块仓库中没有找到 =
  "Cannot find module in packagestore, 模块仓库中没有找到, ";

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
export function isArray(a) {
  return (
   // typeof a === "object" &&
    Array.isArray(a) &&
    {}.toString.call(a) === "[object Array]"
  );
}
export function getmodule(packagename) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
  if (findpackage) {
Object.freeze(findpackage)
    return findpackage
/*new Proxy(findpackage, {
      set() {
        return false;
      },
      deleteProperty() {
        return false;
      }
    });*/

  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename,packagename);
  }
}
export const GLOBALPACKAGESTORE = "PACKAGESTORE";
export function isplainobject(o) {
  return (
    typeof o === "object" &&
    Object.prototype.toString.call(o) === "[object Object]" &&
    o.__proto__ === Object.prototype
  );
}
const 参数必须为字符串 = "参数必须为字符串";
("use strict");
const 字符串不能为空 = "字符串不能为空";

export const myrequirefun = function requireinstead(packagename) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
  if (findpackage) {
    return Object.freeze(findpackage.default?findpackage.default:findpackage);
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
// const IMPORTCJSAMDUMD = (() => {
("use strict");
const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

// const IMPORTCJSAMDUMD = importcjsamdumd;
IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] || {};
async function IMPORTCJSAMDUMD(...inarguments) {
  const importcjsamdumd = IMPORTCJSAMDUMD;
  return await oldimportcjsamdumd(...inarguments).catch(handleerror);
  async function handleerror(e) {
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

IMPORTCJSAMDUMD.REQUIREPACKAGE = getmodule;
//   return IMPORTCJSAMDUMD;
// })();
export default IMPORTCJSAMDUMD;
export const {PACKAGESTORE,REQUIREPACKAGE}=IMPORTCJSAMDUMD
