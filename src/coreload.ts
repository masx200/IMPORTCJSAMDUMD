import{concurrentimport}from "./concurrentimport"

import {promisedefer}from"./promisedefer"

import { isFunction } from "./isfunction";

import { AsyncFunctionconstructor } from "./AsyncFunctionconstructor";
import { isobject } from "./isobject";
import { packagealias } from "./alias";
import cachedfetchtext, { CODETYPE } from "./cachedfetchtext";
import { 定义default } from "./define-default";
import { define } from "./define.js";

import dynamicimportshim from "./dynamicimportshim.js";
import { esmdefinegetter } from "./esmdefinegetter";
import { formatedurlrequire, getnormalizedurl } from "./formatedurlrequire.js";
import { 处理非es模块 } from "./handlecjsmodule.js";
import importcjsamdumd, { PACKAGESTORE } from "./importcjsamdumd.js";
import {
  depssymbol,
  MODULE,
  MODULETYPE,
  sourcesymbol,
  typesymbol,
  urlsymbol
} from "./module";
import { myrequirefun } from "./myrequirefun";
import { parseDependencies } from "./util-deps";
import { cacheurltocjsfun } from "./cacheurltocjsfun";
import { removerepetition } from "./remove-repetiton";
export const { get, set, defineProperty } = Reflect;

export const 加载的模块没有输出 = "加载的模块没有输出";

export default async (url: string/*, packagename?: string*/) => {

/*在模块加载未完成的过程中，防止多次重复加载同一个模块
*/

if(concurrentimport[url]){

return await concurrentimport[url]

}else{
const defered=promisedefer()
concurrentimport[url]=defered
try{


const module= await new Promise(主核心加载模块函数);
  defered.resolve(module)
return module
}catch(e){

defered.reject(e)
throw e
}

}
  /*if (packagename) {
    packagealias[packagename] = url;
  }
*/
  function 主核心加载模块函数(
    resolve: (value?: any) => void,
    reject: (reason?: any) => void
  ) {
    return ((resolve, reject) => {
      return (async () => {
        try {
          //   return await (async () => {
          let fetchpromisetext: string;
          let codetype: CODETYPE | undefined;
          try {
            try {
              [fetchpromisetext, codetype] = await cachedfetchtext(url);
            } catch (e) {
              console.warn(e);
              reject(e);
              return;
            }
            const moduleexport: MODULE = Object.create(null);
            moduleexport[urlsymbol] = url;
            let moduletype: MODULETYPE;
            const scripttext = fetchpromisetext;
           // let modulesrcfun: string;
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              defineProperty(moduleexport, Symbol.toStringTag, {
                value: "Module"
              });
            }
            //modulesrcfun = scripttext;
            moduleexport[depssymbol] = [];
           // moduleexport[sourcesymbol] = modulesrcfun;

            if ("json" === codetype) {
              const moduleexportdefault = JSON.parse(scripttext);
              //   console.log("检测到json模块 " + url);

              moduletype = "json";
              esmdefinegetter(moduleexport, moduleexportdefault);
              moduleexport[typesymbol] = moduletype;
              Object.freeze(moduleexport);
              PACKAGESTORE[url] = moduleexport;
              resolve(moduleexport);
              return;
            } else if ("js" === codetype) {
              try {
                const exports_exports = { [Symbol.toStringTag]: "Module" };
                const module = {
                  exports: { [Symbol.toStringTag]: "Module" }
                };

                try {
                  let isamd = false;

                  const 模块加载函数 =
                    get(cacheurltocjsfun, url) ??
                    new AsyncFunctionconstructor(
                      "require",
                      "exports",

                      "module",

                      "define",
                      `                        "use strict";\n/* ${url} */;\n;${scripttext};\n;/* ${url} */;\n                        `
                    );
                  set(cacheurltocjsfun, url, 模块加载函数);
                  //   console.log(模块加载函数);
                  moduleexport[depssymbol] = removerepetition(
                    parseDependencies(scripttext).map(urlorname => {
                      return getnormalizedurl(urlorname, url);
                    })
                  );
                  //   console.log(moduleexport[depssymbol]);
                  await importcjsamdumd(moduleexport[depssymbol]);
                  let amdfactory:
                    | Function
                    | Record<any, any>
                    | undefined = () => {};

                  const require_require = (name: string) =>
                    formatedurlrequire(name, url);

                  const define_define = (
                    name: any,
                    deps?: any,
                    callback?: any
                  ) => {
                    const defineglobalDefQueue = define(name, deps, callback);
                    isamd = true;
                    amdfactory = defineglobalDefQueue[2];
                    moduleexport[depssymbol] = removerepetition(
                      defineglobalDefQueue[1].map(urlorname => {
                        return getnormalizedurl(urlorname, url);
                      })
                    );
                  };
                  Object.assign(define_define, { amd: true, cmd: true });
                  // define_define.cmd = true;
                  // define_define.amd = true;
                  /* 支持顶层await和async函数了*/
                  await 模块加载函数.call(
                    module.exports,
                    require_require,
                    exports_exports,

                    module,

                    define_define
                  );

                  if (isamd) {
                    moduletype = "amd";
                    // console.log(moduleexport[depssymbol]);
                    await importcjsamdumd(moduleexport[depssymbol]);
                    /*允许factory函数返回promise*/
                    /*factory也可以是个对象*/

                    /*如果cmd/amd模块没有依赖，则函数调用参数为[require,exports,module]*/
                    let amdcallargs: any[];
                    if (moduleexport[depssymbol].length) {
                      amdcallargs = moduleexport[depssymbol].map((e: string) =>
                        myrequirefun(e)
                      );
                    } else {
                      amdcallargs = [require_require, exports_exports, module];
                    }
                    const define_exports = (await isobject(amdfactory))
                      ? amdfactory
                      : isFunction(amdfactory) &&
                        amdfactory.call(module.exports, ...amdcallargs);
                    !!define_exports && (module.exports = define_exports);
                  } else {
                    moduletype = "cjs";
                  }

                  !module.exports &&
                    (module.exports = { [Symbol.toStringTag]: "Module" });

                  const exportmodule = [exports_exports, module.exports];
                  const usefulexport = await 处理非es模块(exportmodule);

                  if (usefulexport) {
                    定义default(moduleexport, usefulexport);
                    esmdefinegetter(moduleexport, usefulexport);
                  }
                } catch (e) {
                  console.warn(e);
                  {
                    if (e instanceof SyntaxError) {
                      const topLevelBlobUrl = url;

                      try {
                        const exportdefault = await dynamicimportshim(
                          topLevelBlobUrl
                        );
                        moduleexport[depssymbol] = [];
                        moduletype = "esm";
                        esmdefinegetter(moduleexport, exportdefault);
                      } catch (e) {
                        console.warn(e);
                        reject(e);
                        return;
                      }
                    } else {
                      console.warn(e);
                      reject(e);
                      return;
                    }
                  }
                }
                moduleexport[typesymbol] = moduletype;
                PACKAGESTORE[url] = moduleexport;

                if (moduleexport.default) {
                  esmdefinegetter(moduleexport, moduleexport.default);
                }

                Object.freeze(moduleexport);
                resolve(moduleexport);
                return;
              } catch (e) {
                console.warn(e);
                reject(e);
                return;
              }
            } else {
              throw new Error("invalid codetype " + codetype);
            }
          } catch (e) {
            console.warn(e);
            reject(e);
            return;
          }
          //   })();
        } catch (e) {
          console.warn(e);
          reject(e);
          return;
        }
      })();
    })(resolve, reject);
  }
};
