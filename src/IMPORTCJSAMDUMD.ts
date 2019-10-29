/* const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
  "输入的类型错误,输入的类型必须是字符串或者数组或对象";
const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url"); */
import oldimportcjsamdumd, { PlainObj } from "./oldimport";
class cantfindError extends Error {
  urlorname: string;
  constructor(message: string, urlorname: string) {
    super(message);
    this.urlorname = urlorname;
  }
}

const 模块仓库中没有找到 =
  "Cannot find module in packagestore, 模块仓库中没有找到, ";

function isurl(url: string) {
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
export function isArray(a: any): a is Array<any> {
  return (
    // typeof a === "object" &&
    Array.isArray(a) && {}.toString.call(a) === "[object Array]"
  );
}
export function getmodule(packagename: string) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = PACKAGESTORE[packagename];
  if (findpackage) {
    Object.freeze(findpackage);
    return findpackage;
    /*new Proxy(findpackage, {
      set() {
        return false;
      },
      deleteProperty() {
        return false;
      }
    });*/
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
}
// export const GLOBALPACKAGESTORE = "PACKAGESTORE";
export function isplainobject(o: any): o is PlainObj {
  return (
    typeof o === "object" && {}.toString.call(o) === "[object Object]"
    //&&
    //   o.__proto__ === Object.prototype
  );
}
export const 参数必须为字符串 = "参数必须为字符串";
("use strict");
export const 字符串不能为空 = "字符串不能为空";

export const myrequirefun = function requireinstead(packagename: string) {
  "use strict";
  if (packagename === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof packagename !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  const findpackage = PACKAGESTORE[packagename];
  if (findpackage) {
    return Object.freeze(
      findpackage.default ? findpackage.default : findpackage
    );
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
};
export { define };
define.exports = {};
function isFunction(it: any): it is Function {
  const op = {}; // Object.prototype;
  const ostring = op.toString;
  return "function" === typeof it && ostring.call(it) === "[object Function]";
}
function define(name: any, deps?: any, callback?: any) {
  "use strict";
  define.exports = {};
  define.amd = true;
  //   const defineglobalDefQueue = [];
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
  const defineglobalDefQueue: [any, string[], Function] = [
    name,
    deps,
    callback
  ];
  const canshu = defineglobalDefQueue[1].map((e: string) => myrequirefun(e));
  define.exports = defineglobalDefQueue[2](...canshu);
}
define.amd = true;

export function 定义default(
  target: { default: undefined },
  def: { [x: string]: string; default: any }
) {
  if (
    Reflect.get(def, Symbol.toStringTag) ===
      /* def[Symbol.toStringTag] */ "Module" &&
    def.default
  ) {
    def = def.default;
  }
  Object.defineProperty(target, "default", {
    enumerable: true,
    get() {
      return def;
    }
  });
}
// const importcjsamdumd = (() => {
("use strict");
const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

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
export { PACKAGESTORE, REQUIREPACKAGE };
// export const { PACKAGESTORE, REQUIREPACKAGE } = importcjsamdumd;
