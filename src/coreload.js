const GLOBALPACKAGESTORE = "PACKAGESTORE";
import IMPORTCJSAMDUMD, {
  //   IMPORTCJSAMDUMD,
  定义default,
  assertstring,
  define,
  myrequirefun //as require
} from "./IMPORTCJSAMDUMD";
const 字符串不能为空 = "字符串不能为空";
const 加载的模块没有输出 = "加载的模块没有输出";
const namesymbol = Symbol.for("name");

const urlsymbol = Symbol.for("url");

const sourcesymbol = Symbol.for("source");
import dynamicimportshim from "./dynamicimportshim.js";
export default //

/*  */

//
(url, packagename) => {
  return (function() {
    return 主核心加载模块函数;
  })();

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
                  const exports = {
                    exports: {
                      [Symbol.toStringTag]: "Module"
                    }
                  };
                  const module = {
                    exports: {}
                  };
                  define.exports = {};
                  //   let exportmodule = [{}, {}, {}];
                  var modulesrcfun;
                  const moduleexport = {
                    // [namesymbol]: packagename,
                    default: undefined
                    // [urlsymbol]: url,
                    // [sourcesymbol]: modulesrcfun
                  };
                  try {
                    // exportmodule =

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
                        // `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\nreturn [exports, module.exports, define.exports]; `
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
                              if (!String(urlorname).endsWith(".js")) {
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

                        // require

                        define,
                        module,
                        exports.exports
                        /* 如果在函数内修改exports的值,则无法获取输出,只能在修改exports的属性的时候,获取到 */
                      );
                    })(myrequirefun, define, module, exports, scripttext);
                    const exportmodule = [
                      exports.exports ? exports.exports : {},
                      module.exports ? module.exports : {},
                      define.exports ? define.exports : {}
                    ];
                    处理非es模块(exportmodule);
                  } catch (e) {
                    /*  如果是es模块,则使用dynamicimportshim加载*/
                    if (
                      // (
                      e instanceof SyntaxError

                      //   &&
                      //   /* chrome浏览器报错信息 */
                      //   e.message === "Unexpected token export") ||
                      // /* edge浏览器报错不同 */
                      // "Syntax error" === e.message ||
                      // /* 火狐浏览器报错不同 */
                      // "export declarations may only appear at top level of a module" ===
                      //   e.message
                    ) {
                      // const topLevelBlobUrl = createBlob(
                      //   `"use strict";\n/* ${url} */;\nexport*as default from'${url}';\n/* ${url} */;\n `
                      // );
                      const topLevelBlobUrl = url;
                      modulesrcfun = topLevelBlobUrl;
                      try {
                        const exportdefault = await dynamicimportshim(
                          topLevelBlobUrl
                        );
                        // var module__exportdefault = exportdefault.default;
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
                        //   moduleexport[urlsymbol] = url;
                        console.warn(加载的模块没有输出, packagename, url);
                        // resolve(moduleexport);
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
                    // reject(e);
                    // return;
                  }
                  function 处理非es模块(exportmodule) {
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
                    if (
                      非空对象(exportmodule[0])
                      //   typeof exportmodule[0] !== "object" ||
                      //   Object.keys(exportmodule[0]).length ||
                      //   JSON.stringify(exportmodule[0]) !== "{}"
                    ) {
                      // console.log("检测到umd模块", url, packagename);

                      const exportdefault = exportmodule[0];
                      定义default(moduleexport, exportdefault);
                      // Object.defineProperty(moduleexport, "default", {
                      //   enumerable: true,

                      //   get() {
                      //     return exportdefault;
                      //   }
                      // });
                      // moduleexport.default = exportmodule[0];
                    } else if (
                      非空对象(exportmodule[1])
                      //   typeof exportmodule[1] !== "object" ||
                      //   Object.keys(exportmodule[1]).length ||
                      //   JSON.stringify(exportmodule[1]) !== "{}"
                    ) {
                      // console.log("检测到cjs模块", url, packagename);
                      // moduleexport.default = exportmodule[1];
                      const exportdefault = exportmodule[1];

                      定义default(moduleexport, exportdefault);
                      // Object.defineProperty(moduleexport, "default", {
                      //   enumerable: true,

                      //   get() {
                      //     return exportdefault;
                      //   }
                      // });
                    } else if (
                      非空对象(exportmodule[2])
                      //   typeof exportmodule[2] !== "object" ||
                      //   Object.keys(exportmodule[2]).length ||
                      //   JSON.stringify(exportmodule[2]) !== "{}"
                    ) {
                      // console.log("检测到amd模块", url, packagename);
                      // moduleexport.default = exportmodule[2];
                      const exportdefault = exportmodule[2];
                      // Object.defineProperty(moduleexport, "default", {
                      //   enumerable: true,

                      //   get() {
                      //     return exportdefault;
                      //   }
                      // });
                      定义default(moduleexport, exportdefault);
                    } else {
                      //   moduleexport[urlsymbol] = url;
                      console.warn(加载的模块没有输出, url, packagename);
                      // resolve(moduleexport);
                      reject(
                        Error(
                          加载的模块没有输出 + " " + packagename + " " + url
                        )
                      );
                      return;
                    }
                  }
                  // const moduleexport = {
                  //   // [namesymbol]: packagename,
                  //   default: undefined
                  //   // [urlsymbol]: url,
                  //   // [sourcesymbol]: modulesrcfun
                  // };

                  Object.defineProperties(moduleexport, {
                    [namesymbol]: {
                      value: packagename,
                      // configurable: true,
                      writable: true,
                      enumerable: false
                    },
                    [urlsymbol]: {
                      value: url,
                      // configurable: true,
                      writable: true,
                      enumerable: false
                    },
                    [sourcesymbol]: {
                      //   value: packagename,
                      //   get() {
                      //     return modulesrcfun;
                      //   },
                      value: modulesrcfun,
                      //   configurable: true,
                      //   writable: true,
                      enumerable: false
                    }
                  });
                  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    Object.defineProperty(moduleexport, Symbol.toStringTag, {
                      //   enumerable:t,
                      value: "Module"
                    });
                  }

                  if (typeof moduleexport.default !== "undefined") {
                    if (typeof packagename !== "undefined") {
                      // moduleexport[namesymbol] = packagename;
                      IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][
                        packagename
                      ] = moduleexport;
                    }
                    // else {
                    //   packagename = url;
                    //   IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][
                    //     packagename
                    //   ] = moduleexport;
                    // }
                  }
                  // moduleexport[urlsymbol] = url;

                  /*
                      if (typeof moduleexport.default !== "undefined") {
                        // if (typeof moduleexport[namesymbol] !== "undefined") {
                        // }
                      }
      
      */
                  /*
      else 
      {
                        //   moduleexport[urlsymbol] = url;
                        console.warn(加载的模块没有输出, packagename, url);
                        // resolve(moduleexport);
                        reject(Error(加载的模块没有输出 + packagename + url));
                        return;
                      }
                      */

                  /* 加载完成之后， IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][                            url]*/
                  /* 复制一份 */
                  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] =
                    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
                  // IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url][namesymbol] = url;
                  !!moduleexport.default &&
                    Object.keys(moduleexport.default)
                      .filter(t => t !== "default")
                      .forEach(key => {
                        Object.defineProperty(moduleexport, key, {
                          enumerable: true,
                          get() {
                            return moduleexport.default[key];
                          }
                        });
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
