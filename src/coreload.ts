/* eslint-disable no-empty */
// const GLOBALPACKAGESTORE = "PACKAGESTORE";
import dynamicimportshim from "./dynamicimportshim.js";
import { formatedurlrequire } from "./formatedurlrequire.js";
import { 处理非es模块 } from "./handlecjsmodule.js";
import {
  //   assertstring,
  //   define,
  PACKAGESTORE
  //   定义default
} from "./importcjsamdumd.js";
import { define } from "./define.js";
// const 字符串不能为空 = "字符串不能为空";
export const 加载的模块没有输出 = "加载的模块没有输出";
export const typesymbol = Symbol.for("type");
export const namesymbol = Symbol.for("name");
export const urlsymbol = Symbol.for("url");
export const sourcesymbol = Symbol.for("source");
export default async (url: string, packagename?: string) => {
  return await new Promise(主核心加载模块函数);
  function 主核心加载模块函数(
    resolve: (value?: any) => void,
    reject: (reason?: any) => void
  ) {
    return ((resolve, reject) => {
      (async () => {
        try {
          await (async () => {
            let fetchpromisetext;
            try {
              try {
                fetchpromisetext = await fetch(url).then(response => {
                  if (!response.ok) {
                    throw new Error("fetch failed " + url);
                  }
                  return response.text();
                });
              } catch (e) {
                console.warn(e);
                reject(e);
                return;
              }
              try {
                await (async scripttext => {
                  let moduletype;
                  const exports = {
                    exports: { [Symbol.toStringTag]: "Module" }
                  };
                  const module = {
                    exports: { [Symbol.toStringTag]: "Module" }
                  };
                  define.exports = {};
                  var modulesrcfun;
                  const moduleexport: { default: any; [k: string]: any } = {
                    default: undefined
                  };
                  try {
                    (function() //   myrequirefun,
                    //  define,
                    //  module,
                    //   exports,
                    //    scripttext
                    {
                      const 模块加载函数 = new Function(
                        "require",
                        "define",
                        "module",
                        "exports",
                        `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\n`
                      );
                      modulesrcfun = 模块加载函数.toString();

                      return 模块加载函数.call(
                        module.exports,
                        (name: string) => formatedurlrequire(name, url),
                        define,
                        module,
                        exports.exports
                      );
                    })();
                    //   /* myrequirefun,  */ define,
                    //    module,
                    //   exports,
                    //    scripttext
                    const exportmodule = [
                      exports.exports ? exports.exports : {},
                      module.exports ? module.exports : {},
                      define.exports ? define.exports : {}
                    ];
                    处理非es模块(moduleexport, exportmodule, url, packagename);
                    moduletype = "cjs";
                  } catch (e) {
                    console.warn(e);
                    try {
                      const moduleexportdefault = JSON.parse(scripttext);
                      console.log("检测到json模块 " + url);
                      modulesrcfun = scripttext;
                      moduletype = "json";

                      Object.keys(moduleexportdefault)
                        // .filter(t => t !== "default")
                        .forEach(key => {
                          Object.defineProperty(moduleexport, key, {
                            enumerable: true,
                            get() {
                              return moduleexportdefault[key];
                            }
                          });
                        });
                      try {
                        Reflect.defineProperty(moduleexport, "default", {
                          enumerable: false
                        });
                      } catch {}
                    } catch (error) {
                      console.warn(error);
                      if (e instanceof SyntaxError) {
                        const topLevelBlobUrl = url;
                        modulesrcfun = scripttext;
                        try {
                          const exportdefault = await dynamicimportshim(
                            topLevelBlobUrl
                          );
                          moduletype = "esm";
                          Object.keys(exportdefault)
                            // .filter(t => t !== "default")
                            .forEach(key => {
                              Object.defineProperty(moduleexport, key, {
                                enumerable: true,
                                get() {
                                  return exportdefault[key];
                                }
                              });
                            });
                          /*  定义default(
                            moduleexport,
                            exportdefault.default
                              ? exportdefault.default
                              : exportdefault
                          );*/
                        } catch (e) {
                          console.warn(e);
                          reject(e);
                          return;
                        }
                        if (typeof moduleexport.default === "undefined") {
                          console.warn(加载的模块没有输出, packagename, url);
                          try {
                            Reflect.defineProperty(moduleexport, "default", {
                              enumerable: false
                            });
                          } catch {}
                          /*  reject(
                            Error(
                              加载的模块没有输出 + " " + packagename + " " + url
                            )
                          );
                          return;*/
                        }
                      } else {
                        console.warn(e);
                        reject(e);
                        return;
                      }
                    }
                  }

                  Object.defineProperties(moduleexport, {
                    [namesymbol]: {
                      value: packagename,
                      writable: true,
                      enumerable: false
                    },
                    [urlsymbol]: {
                      value: url,
                      enumerable: false
                    },
                    [sourcesymbol]: {
                      value: modulesrcfun,
                      enumerable: false
                    },
                    [typesymbol]: {
                      value: moduletype,
                      enumerable: false
                    }
                  });
                  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    Object.defineProperty(moduleexport, Symbol.toStringTag, {
                      value: "Module"
                    });
                  }
                  if (typeof moduleexport.default !== "undefined") {
                    if (typeof packagename !== "undefined") {
                      PACKAGESTORE[packagename] = moduleexport;
                    }
                  }
                  if (typeof packagename !== "undefined") {
                    PACKAGESTORE[url] = PACKAGESTORE[packagename];
                  }
                  !!moduleexport.default &&
                    Object.keys(moduleexport.default)
                      .filter(t => t !== "default")
                      .forEach(key => {
                        const moduleexportdefault = moduleexport.default;
                        try {
                          Object.defineProperty(moduleexport, key, {
                            enumerable: true,
                            get() {
                              return Reflect.get(moduleexportdefault, key);
                            }
                          });
                        } catch (error) {}
                      });
                  Object.freeze(moduleexport);
                  resolve(moduleexport);
                  return;
                })(fetchpromisetext);
              } catch (e) {
                console.warn(e);
                reject(e);
                return;
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
