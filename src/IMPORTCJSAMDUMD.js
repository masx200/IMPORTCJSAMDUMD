"use strict";
import dynamicimportshim from "./dynamicimportshim.js";
import { createBlob } from "./createblob.js";

export default /* global  */

(() => {
  "use strict";
  function 定义default(target, def) {
    Object.defineProperty(target, "default", {
      enumerable: true,

      get() {
        return def;
      }
    });
  }
  const namesymbol = Symbol.for("name");

  const urlsymbol = Symbol.for("url");

  const sourcesymbol = Symbol.for("source");

  const GLOBALPACKAGESTORE = "PACKAGESTORE";
  // const globalDefQueue = "globalDefQueue";
  const IMPORTCJSAMDUMD = importcjsamdumd;
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  } else {
    // global.IMPORTCJSAMDUMD = importcjsamdumd;
  }
  IMPORTCJSAMDUMD.REQUIREPACKAGE = function getmodule(packagename) {
    "use strict";

    if (packagename === "") {
      throw new TypeError("字符串不能为空");
    }
    if (typeof packagename !== "string") {
      throw new TypeError("参数必须为字符串");
    }
    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
    if (findpackage) {
      console.log("在模块仓库中找到了", packagename, findpackage[urlsymbol]);
      //   return { ...findpackage };

      return new Proxy(findpackage, {
        // ownKeys(target) {
        //   return [...Object.keys(target), Symbol.toStringTag];
        // },
        // has(target, name) {
        //   // console.log('has' + name);

        //   if (typeof name === "symbol") {
        //     return false;
        //   }
        //   return Reflect.has(target, name);
        // },
        // get(target, propertyKey) {
        //   //   if (typeof propertyKey === "symbol") {
        //   //     return;
        //   //   }
        //   // console.log('GET ' + propertyKey);
        //   return Reflect.get(target, propertyKey); // [propertyKey];
        // },
        set() {
          return false;
        },
        deleteProperty() {
          // console.log('delete' + name);
          // return Reflect.deleteProperty(target, name);
          return false;
        }
      });
    } else {
      throw new Error(
        `Cannot find module in packagestore, 模块仓库中没有找到, ` + packagename
      );
    }
  };
  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] =
    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] || {};
  function require(packagename) {
    "use strict";
    if (packagename === "") {
      throw new TypeError("字符串不能为空");
    }
    if (typeof packagename !== "string") {
      throw new TypeError("参数必须为字符串");
    }

    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
    if (findpackage) {
      console.log("在模块仓库中找到了", packagename, findpackage[urlsymbol]);
      return findpackage.default;
    } else {
      throw new Error(
        `Cannot find module in packagestore, 模块仓库中没有找到, ` + packagename
      );
    }
  }
  function isobject(a) {
    return (
      typeof a === "object" &&
      Object.prototype.toString.call(a) === "[object Object]"
    );
  }
  function isArray(a) {
    return (
      Array.isArray(a) &&
      typeof a === "object" &&
      Object.prototype.toString.call(a) === "[object Array]"
    );
  }
  define.exports = {};
  function define(name, deps, callback) {
    "use strict";
    define.exports = {};

    define.amd = true;
    const defineglobalDefQueue = [];
    const op = Object.prototype;
    const ostring = op.toString;
    // function isArray(it) {
    //   const a = it;
    //   return Array.isArray(a) && ostring.call(it) === "[object Array]";
    // }
    function isFunction(it) {
      return ostring.call(it) === "[object Function]";
    }
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

    // if (0) {
    //   //
    // } else

    {
      defineglobalDefQueue.push([name, deps, callback]);
    }
    console.log("检测到amd模块", defineglobalDefQueue[0]);
    const canshu = defineglobalDefQueue[0][1].map(e => require(e));
    define.exports = defineglobalDefQueue[0][2](...canshu);
  }
  define.amd = true;

  async function importcjsamdumd() {
    return await oldimportcjsamdumd(...arguments).catch(e => {
      console.warn(e);
      return oldimportcjsamdumd(...arguments);
    });
  }

  async function oldimportcjsamdumd(url, packagename) {
    "use strict";
    function newobjjson(obj) {
      if (typeof obj !== "object") {
        throw new TypeError("传入的参数必须是个object!");
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
    if (isobject(url)) {
      url = newobjjson(url);
      const 输入参数array = Object.keys(url).map(key => {
        const packageurl = url[key];
        const packagenm = key;
        return [packageurl, packagenm];
      });
      let suoyouimportpromise = [];

      try {
        suoyouimportpromise = await 同时发起多个(输入参数array);
        // suoyouimportpromise = await Promise.all(
        //   输入参数array.map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await 同时发起多个(输入参数array);
        // suoyouimportpromise = await Promise.all(
        //   输入参数array.map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      } finally {
        suoyouimportpromise = await 同时发起多个(输入参数array);
        // suoyouimportpromise = await Promise.all(
        //   输入参数array.map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      }
      let objecttoreturn = {};
      suoyouimportpromise.forEach(m => {
        objecttoreturn[m[namesymbol]] = m;
      });
      return objecttoreturn;
    } else if (
      (isArray(url) && typeof url === "object") ||
      typeof packagename === "object"
    ) {
      Array(...arguments).forEach(e => {
        const url = e[0];
        let packagename = e[1];
        if (typeof url === "undefined" || url === "" || packagename === "") {
          throw new Error(
            "输入的类型错误,输入的字符串不能为空,url不能为undefined"
          );
        }
        if (typeof packagename === "undefined") {
          packagename = new URL(url).href;
        }
      });
      let suoyouimportpromise = [];
      const 传入参数arr = Array(...arguments);
      // async function 同时发起多个(a) {
      //   return await Promise.all(
      //     a.map(e => {
      //       return IMPORTCJSAMDUMD(e[0], e[1]);
      //     })
      //   );
      // }
      try {
        suoyouimportpromise = await 同时发起多个(传入参数arr);
        // suoyouimportpromise = await Promise.all(
        //   Array(...arguments).map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await 同时发起多个(传入参数arr);
        // suoyouimportpromise = await Promise.all(
        //   Array(...arguments).map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      } finally {
        suoyouimportpromise = await 同时发起多个(传入参数arr);
        // suoyouimportpromise = await Promise.all(
        //   Array(...arguments).map(e => {
        //     return IMPORTCJSAMDUMD(e[0], e[1]);
        //   })
        // );
      }
      return suoyouimportpromise;
    } else if (typeof url === "string" || typeof packagename === "string") {
      if (typeof url === "undefined" || url === "" || packagename === "") {
        throw new Error(
          "输入的类型错误,输入的字符串不能为空,url不能为undefined"
        );
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
        return IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
        // return await new Promise(resolve => {
        //   resolve(IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename]);
        // });
      } else if (
        typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] !== "undefined" &&
        typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url].default !==
          "undefined" &&
        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url][urlsymbol] === url
      ) {
        /* 如果先用url作为名称加载，后用packagename加载，则复制一份 */
        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename] =
          IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url];

        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename][
          namesymbol
        ] = packagename;
        return IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url];
      } else {
        return await new Promise((resolve, reject) => {
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
                    console.error(e);
                    reject(e);
                    return;
                  }
                  try {
                    await (async scripttext => {
                      let exports = {};
                      const module = {
                        exports: {}
                      };
                      define.exports = {};
                      let exportmodule = [{}, {}, {}];
                      var modulesrcfun;
                      const moduleexport = {
                        // [namesymbol]: packagename,
                        default: undefined
                        // [urlsymbol]: url,
                        // [sourcesymbol]: modulesrcfun
                      };
                      try {
                        exportmodule = (function(
                          require,
                          define,
                          module,
                          exports,
                          scripttext
                        ) {
                          const 模块加载函数 = Function(
                            "require",
                            "define",
                            "module",
                            "exports",
                            `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\nreturn [exports, module.exports, define.exports]; `
                          );
                          modulesrcfun = 模块加载函数;
                          return 模块加载函数.call(
                            module.exports,
                            require,
                            define,
                            module,
                            exports
                          );
                        })(require, define, module, exports, scripttext);

                        处理非es模块(exportmodule);
                      } catch (e) {
                        console.warn(e);

                        /*  如果是es模块,则使用dynamicimportshim加载*/
                        if (
                          e instanceof SyntaxError &&
                          e.message === "Unexpected token export"
                        ) {
                          const topLevelBlobUrl = createBlob(
                            `"use strict";\n/* ${url} */;\nexport*from'${url}';\n/* ${url} */;\n `
                          );
                          modulesrcfun = topLevelBlobUrl;
                          try {
                            const exportdefault = await dynamicimportshim(
                              topLevelBlobUrl
                            );

                            定义default(
                              moduleexport,
                              exportdefault.default
                                ? exportdefault.default
                                : exportdefault
                            );
                          } catch (error) {
                            console.warn(e);
                            reject(e);
                            return;
                          }
                        } else {
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
                          console.log("检测到umd模块", url, packagename);

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
                          console.log("检测到cjs模块", url, packagename);
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
                          console.log("检测到amd模块", url, packagename);
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
                          console.warn("加载的模块没有输出", url, packagename);
                          // resolve(moduleexport);
                          reject(
                            Error("加载的模块没有输出" + packagename + url)
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
                          configurable: true,
                          writable: true,
                          enumerable: false
                        },
                        [urlsymbol]: {
                          value: url,
                          configurable: true,
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
                        Object.defineProperty(
                          moduleexport,
                          Symbol.toStringTag,
                          {
                            //   enumerable:t,
                            value: "Module"
                          }
                        );
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
                      if (typeof moduleexport.default !== "undefined") {
                        // if (typeof moduleexport[namesymbol] !== "undefined") {
                        // }
                      } else {
                        //   moduleexport[urlsymbol] = url;
                        console.warn("加载的模块没有输出", packagename, url);
                        // resolve(moduleexport);
                        reject(Error("加载的模块没有输出" + packagename + url));
                        return;
                      }
                      /* 加载完成之后， IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][                            url]*/
                      /* 复制一份 */
                      IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] =
                        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
                      // IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url][namesymbol] = url;

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
                    console.error(e);
                    reject(e);
                    return;
                  }
                } catch (e) {
                  console.error(e);
                  reject(e);
                  return;
                }
              })();
            } catch (e) {
              console.error(e);
              reject(e);
              return;
            }
          })();
        });
      }
    } else {
      throw new Error("输入的类型错误,输入的类型必须是字符串或者数组或对象");
    }
  }

  return IMPORTCJSAMDUMD;
})();
// eslint-disable-next-line no-undef
/*   (typeof globalThis !== "undefined" ? globalThis : false) ||
    (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    // eslint-disable-next-line no-undef
    this */
