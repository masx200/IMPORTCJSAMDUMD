import { packagealias } from "./alias";
import cachedfetchtext, { CODETYPE } from "./cachedfetchtext";
import { 定义default } from "./define-default";
import { define } from "./define.js";
/* eslint-disable no-empty */
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
export const { get, set, defineProperty } = Reflect;

export const 加载的模块没有输出 = "加载的模块没有输出";

export default async (url: string, packagename?: string) => {
  if (packagename) {
    packagealias[packagename] = url;
  }

  return await new Promise(主核心加载模块函数);
  function 主核心加载模块函数(
    resolve: (value?: any) => void,
    reject: (reason?: any) => void
  ) {
    return ((resolve, reject) => {
      return (async () => {
        try {
          return await (async () => {
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
              let modulesrcfun: string;
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                defineProperty(moduleexport, Symbol.toStringTag, {
                  value: "Module"
                });
              }
              modulesrcfun = scripttext;
              moduleexport[depssymbol] = [];
              moduleexport[sourcesymbol] = modulesrcfun;

              if ("json" === codetype) {
                const moduleexportdefault = JSON.parse(scripttext);
                console.log("检测到json模块 " + url);

                moduletype = "json"
                esmdefinegetter(moduleexport, moduleexportdefault);
                moduleexport[typesymbol] = moduletype;
                Object.freeze(moduleexport);
                PACKAGESTORE[url] = moduleexport;
                resolve(moduleexport);
                return;
              } else {
                try {
                  const exports_exports = { [Symbol.toStringTag]: "Module" };
                  const module = {
                    exports: { [Symbol.toStringTag]: "Module" }
                  };
                  //   define.exports = {};

                  try {
                    // (function() {
                    let isamd = false;
                    const 模块加载函数 = new Function(
                      "require",
                      
                      "module",
                      "exports","define",
                      `
                        "use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\n
                        `
                    );

                    //   modulesrcfun = scripttext;
                    /* return */

                    moduleexport[depssymbol] = parseDependencies(
                      scripttext
                    ).map(urlorname => {
                      return getnormalizedurl(urlorname, url);
                      //   return formatedurl;
                    });
                    await importcjsamdumd(moduleexport[depssymbol]);
                    let amdfactory: Function = () => {};
                    
const require_require=(name: string) => formatedurlrequire(name, url)


const define_define=(name: any, deps?: any, callback?: any) => {
                        const defineglobalDefQueue = define(name, deps, callback);
                        isamd = true;
                        amdfactory = defineglobalDefQueue[2];
                        moduleexport[depssymbol] = defineglobalDefQueue[1].map(
                          urlorname => {
                            return getnormalizedurl(urlorname, url);
                          }
                        );
                      }
define_define.cmd=true
define_define.amd=true
模块加载函数.call(
                      module.exports,require_require
                      
                      ,
                      module,
                      exports_exports,define_define
                    );
                    // })();
                    if (isamd) {
                      moduletype = "amd";
                      await importcjsamdumd(moduleexport[depssymbol]);
                      module.exports = amdfactory.call(
                        module.exports,
                        ...moduleexport[depssymbol].map((e: string) =>
                          myrequirefun(e)
                        )
                      );
                    } else {
                      moduletype = "cjs";
                    }

                    const exportmodule = [
                      exports_exports ,
                      module.exports  ?? {}
                      //   define.exports ? define.exports : {}
                    ];
                    const usefulexport = 处理非es模块(exportmodule);

                    if (usefulexport) {
                      定义default(moduleexport, usefulexport);
                      esmdefinegetter(moduleexport, usefulexport);

                      //
                    }
                  } catch (e) {
                    console.warn(e); // {
                    /* try */ /* } catch (error)  */ {
                      //   console.warn(error);
                      if (e instanceof SyntaxError) {
                        const topLevelBlobUrl = url;
                        // modulesrcfun = scripttext;
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
              }
            } catch (e) {
              console.warn(e);
              reject(e);
              return;
            }
          })();
        } catch (e) {
          console.warn(e);
          reject(e);
          return;
        }
      })();
    })(resolve, reject);
  }
};
