/* eslint-disable no-empty */
const GLOBALPACKAGESTORE = "PACKAGESTORE";
import IMPORTCJSAMDUMD, {
  定义default,
  assertstring,
  define,
  myrequirefun
} from "./IMPORTCJSAMDUMD.js";
const 字符串不能为空 = "字符串不能为空";
const 加载的模块没有输出 = "加载的模块没有输出";
const namesymbol = Symbol.for("name");
const urlsymbol = Symbol.for("url");
const sourcesymbol = Symbol.for("source");
import dynamicimportshim from "./dynamicimportshim.js";
export default (url, packagename) => {
  return new Promise(主核心加载模块函数);
  function 主核心加载模块函数(resolve, reject) {
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
                  const module = { exports: {} };
                  define.exports = {};
                  var modulesrcfun;
                  const moduleexport = { default: undefined };
                  try {
                    (function(
                      myrequirefun,
                      define,
                      module,
                      exports,
                      scripttext
                    ) {
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
                        urlorname => {
                          assertstring(urlorname);
                          urlorname = String(urlorname);
                          if (urlorname === "") {
                            throw new TypeError(字符串不能为空);
                          }
                          function getbaseurl(url) {
                            var objurl = new URL(url);
                            var a = objurl.pathname.split("/");
                            a[a.length - 1] = "";
                            var path = objurl.origin + a.join("/");
                            return path;
                          }
                          function 格式化url(baseurl, urlorname) {
                            if (
                              String(urlorname).startsWith("./") ||
                              String(urlorname).startsWith("../")
                            ) {
                              if (
                                !(
                                  String(urlorname).endsWith(".js") ||
                                  urlorname.endsWith(".mjs") ||
                                  urlorname.endsWith(".json") ||
                                  urlorname.endsWith(".css") ||
                                  urlorname.endsWith(".html")
                                )
                              ) {
                                urlorname += ".js";
                              }
                              urlorname = new URL(baseurl + urlorname).href;
                            }
                            return urlorname;
                          }
                          const baseurl = getbaseurl(url);
                          urlorname = 格式化url(baseurl, urlorname);
                          return myrequirefun(urlorname);
                        },
                        define,
                        module,
                        exports.exports
                      );
                    })(myrequirefun, define, module, exports, scripttext);
                    const exportmodule = [
                      exports.exports ? exports.exports : {},
                      module.exports ? module.exports : {},
                      define.exports ? define.exports : {}
                    ];
                    处理非es模块(moduleexport, exportmodule);
                    moduletype = "cjs";
                  } catch (e) {
                    console.warn(e);
                    try {
                      moduleexport.default = JSON.parse(scripttext);
                      console.log("检测到json模块 " + url);
                      modulesrcfun = scripttext;
                      moduletype = "json";
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
                            .filter(t => t !== "default")
                            .forEach(key => {
                              Object.defineProperty(moduleexport, key, {
                                enumerable: true,
                                get() {
                                  return exportdefault[key];
                                }
                              });
                            });
                          定义default(
                            moduleexport,
                            exportdefault.default
                              ? exportdefault.default
                              : exportdefault
                          );
                        } catch (e) {
                          console.warn(e);
                          reject(e);
                          return;
                        }
                        if (typeof moduleexport.default === "undefined") {
                          console.warn(加载的模块没有输出, packagename, url);
                          reject(
                            Error(
                              加载的模块没有输出 + " " + packagename + " " + url
                            )
                          );
                          return;
                        }
                      } else {
                        console.warn(e);
                        reject(e);
                        return;
                      }
                    }
                  }
                  function 处理非es模块(moduleexport, exportmodule) {
                    if (typeof exportmodule === "undefined") {
                      exportmodule = [{}, {}, {}];
                    }
                    if (typeof define.exports === "undefined") {
                      define.exports = {};
                    }
                    function 非空对象(o) {
                      return (
                        typeof o !== "object" ||
                        Object.keys(o).length ||
                        JSON.stringify(o) !== "{}"
                      );
                    }
                    if (非空对象(exportmodule[0])) {
                      const exportdefault = exportmodule[0];
                      定义default(moduleexport, exportdefault);
                    } else if (非空对象(exportmodule[1])) {
                      const exportdefault = exportmodule[1];
                      定义default(moduleexport, exportdefault);
                    } else if (非空对象(exportmodule[2])) {
                      const exportdefault = exportmodule[2];
                      定义default(moduleexport, exportdefault);
                    } else {
                      console.warn(加载的模块没有输出, url, packagename);
                      reject(
                        Error(
                          加载的模块没有输出 + " " + packagename + " " + url
                        )
                      );
                      return;
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
                    [Symbol.for("type")]: {
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
                      IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][
                        packagename
                      ] = moduleexport;
                    }
                  }
                  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] =
                    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
                  !!moduleexport.default &&
                    Object.keys(moduleexport.default)
                      .filter(t => t !== "default")
                      .forEach(key => {
                        try {
                          Object.defineProperty(moduleexport, key, {
                            enumerable: true,
                            get() {
                              return moduleexport.default[key];
                            }
                          });
                        } catch (error) {}
                      });
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
