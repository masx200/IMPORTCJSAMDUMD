'use strict';

// import { createBlob } from "./createblob.js";

var dynamicimportshim = //
/*  */
(() => {
  const 参数必须为字符串 = "参数必须为字符串";
  const 字符串不能为空 = "字符串不能为空";
  function createBlob(source) {
    return URL.createObjectURL(
      new Blob([source], { type: "application/javascript" })
    );
  }
  let dynamicimportshim;
  try {
    dynamicimportshim = Function("u", "return import(u)");
    // throw Error();
  } catch (error) {
    dynamicimportshim = async function(url) {
      if (url === "") {
        throw new TypeError(字符串不能为空);
      }
      if (typeof url !== "string") {
        throw new TypeError(参数必须为字符串);
      }
      url = new URL(url).href;
      return await new Promise((resolve, reject) => {
        function clearsideeffect() {
          removescript(s);
          removeerrorlisten(errorhandler);
          // window.removeEventListener("error", errorhandler);
          URL.revokeObjectURL(s.src);
        }
        function removeerrorlisten(f) {
          try {
            window.removeEventListener("error", f);
          } catch (error) {
            //
          }
        }
        function removescript(e) {
          try {
            document.head.removeChild(e);
          } catch (error) {
            //
          }
        }
        function errorhandler(e) {
          console.warn(e);
          reject(e.error);
          /*
        removescript(s);
        removeerrorlisten(errorhandler);
        // window.removeEventListener("error", errorhandler);
URL.revokeObjectURL(s.src)      
*/
          clearsideeffect();
        }
        window.addEventListener("error", errorhandler);
        const topLevelBlobUrl = createBlob(
          `import*as m from'${url}';\nwindow[Symbol.for('${"import-" +
            url}')]=m`
          /* TypeError: Unable to set property 'Symbol(import-https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js)' of undefined or null reference at Anonymous function (blob:http://127.0.0.1:8080/4f31c6d8-3282-4466-b04b-9952068d51e0:2:1) at module (blob:http://127.0.0.1:8080/4f31c6d8-3282-4466-b04b-9952068d51e0:1:1) */
          // `import*as m from'${url}';\ndocument.currentScript[Symbol.for('${"import-" +
          //   url}')]=m`
        );
        const s = document.createElement("script");
        s.type = "module";
        s.src = topLevelBlobUrl;
        s.async = true;
        document.head.appendChild(s);
        // const
        s.onload = () => {
          // resolve(s[Symbol.for("import-" + url)]);
          // Reflect.deleteProperty(s, Symbol.for("import-" + url));
          resolve(window[Symbol.for("import-" + url)]);
          Reflect.deleteProperty(window, Symbol.for("import-" + url));
          // document.head.removeChild(s);
          // try {
          //   document.head.removeChild(s);
          // } catch (error) {
          //   //
          // }
          /* removescript(s);
        removeerrorlisten(errorhandler);
        // window.removeEventListener("error", errorhandler);
   
URL.revokeObjectURL(s.src)
*/
          clearsideeffect();
        };
        s.onerror = e => {
          console.warn(e);
          reject(e);
          // document.head.removeChild(s);
          // window.removeEventListener("error", errorhandler);
          /*  removeerrorlisten(errorhandler);
        // try {
        //   document.head.removeChild(s);
        // } catch (error) {
        //   //
        // }
        removescript(s);
    
URL.revokeObjectURL(s.src)
*/
          clearsideeffect();
        };
      });
    };
  }

  return dynamicimportshim;
})();

//export default dynamicimportshim;

// import { createBlob } from "./createblob.js";

var index = /* global  */

(() => {

  const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";
  const 字符串不能为空 = "字符串不能为空";
  const 加载的模块没有输出 = "加载的模块没有输出";
  const 参数必须为字符串 = "参数必须为字符串";
  const 模块仓库中没有找到 =
    "Cannot find module in packagestore, 模块仓库中没有找到, ";
  const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
    "输入的类型错误,输入的类型必须是字符串或者数组或对象";
  const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";

  const 传入的参数必须是个object = "传入的参数必须是个object";
  function 定义default(target, def) {
    /* 如果模块的输出是一个模块 */
    if (def[Symbol.toStringTag] === "Module" && def.default) {
      def = def.default;
    }
    // def[Symbol.toStringTag]==="Module"?
    // def=def.default
    // :;

    Object.defineProperty(target, "default", {
      enumerable: true,
      // writable: true,
      // configurable: true,
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
  // if ("object" == typeof exports && "undefined" != typeof module) {
  //   module.exports = importcjsamdumd;
  // } else {
  //   // global.IMPORTCJSAMDUMD = importcjsamdumd;
  // }
  IMPORTCJSAMDUMD.REQUIREPACKAGE = getmodule;
  function getmodule(packagename) {

    if (packagename === "") {
      throw new TypeError(字符串不能为空);
    }
    if (typeof packagename !== "string") {
      throw new TypeError(参数必须为字符串);
    }
    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
    if (findpackage) {
      // console.log("在模块仓库中找到了", packagename, findpackage[urlsymbol]);
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
      throw new Error(模块仓库中没有找到 + packagename);
    }
  }
  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] =
    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] || {};
  function require(packagename) {
    if (packagename === "") {
      throw new TypeError(字符串不能为空);
    }
    if (typeof packagename !== "string") {
      throw new TypeError(参数必须为字符串);
    }

    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
    if (findpackage) {
      // console.log("在模块仓库中找到了", packagename, findpackage[urlsymbol]);
      return findpackage.default;
    } else {
      let errormes = new Error(模块仓库中没有找到 + packagename);

      errormes.urlorname = packagename;
      throw errormes;
      // throw new Error(
      //   `Cannot find module in packagestore, 模块仓库中没有找到, ` + packagename
      // );
    }
  }
  function isobject(o) {
    return (
      typeof o === "object" &&
      Object.prototype.toString.call(o) === "[object Object]" &&
      o.__proto__ === Object.prototype
    );
  }
  function isArray(a) {
    return (
      typeof a === "object" &&
      Array.isArray(a) &&
      Object.prototype.toString.call(a) === "[object Array]"
    );
  }
  define.exports = {};
  function define(name, deps, callback) {
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
    // console.log("检测到amd模块", defineglobalDefQueue[0]);
    const canshu = defineglobalDefQueue[0][1].map(e => require(e));
    define.exports = defineglobalDefQueue[0][2](...canshu);
  }
  define.amd = true;
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
  async function importcjsamdumd(...inarguments /* url */) {
    const initialtry = oldimportcjsamdumd(...inarguments);
    // async function handleerror(e){

    // }
    const handleerror = async e => {
      console.warn(e);
      if (e.urlorname) {
        if (isurl(e.urlorname)) {
          console.log(补充加载依赖的模块网址, e.urlorname);

          // initialtry.catch(handleerror);
          await importcjsamdumd(e.urlorname);
          // initialtry.catch(handleerror);
        } else {
          if (
            isobject(inarguments[0]) &&
            Reflect.has(inarguments[0], e.urlorname)
          ) {
            try {
              await importcjsamdumd(...inarguments);
            } catch (error) {
              console.warn(error);
              throw e;
            }
          } else {
            throw e;
          }

          // return await importcjsamdumd(...inarguments);
        }
      } else {
        throw e;
      }
      return await importcjsamdumd(...inarguments);
    };

    // return await oldimportcjsamdumd(...inarguments)
    return await initialtry.catch(
      //   async e => {
      //   console.warn(e);

      //   if (isurl(e.urlorname)) {
      //     console.log("补充加载依赖的模块网址", e.urlorname);
      //     await importcjsamdumd(e.urlorname);
      //   }
      //   return await oldimportcjsamdumd(...arguments);
      // }
      handleerror
    );
  }
  function assertstring(s) {
    if (s === "") {
      throw new TypeError(字符串不能为空);
    }
    if (typeof s !== "string") {
      throw new TypeError(参数必须为字符串);
    }
    return true;
  }
  async function oldimportcjsamdumd(url, packagename) {
    function newobjjson(obj) {
      if (typeof obj !== "object") {
        throw new TypeError(
          // "传入的参数必须是个object!"
          传入的参数必须是个object
        );
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
      })(url);
    } else if (
      (isArray(url) && typeof url === "object") ||
      typeof packagename === "object"
    ) {
      /*
  
  
  
  
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
  
  
  
  */

      return await (async () => {
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
      })();
    } else if (typeof url === "string" || typeof packagename === "string") {
      assertstring(url);
      // assertstring(packagename);
      return await (async (url, packagename) => {
        if (typeof url === "undefined" || url === "" || packagename === "") {
          throw new TypeError(
            // "输入的类型错误,输入的字符串不能为空,url不能为undefined"
            非法字符串
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
          // return IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
          // return await new Promise(resolve => {
          //   resolve(IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename]);
          // });
          return getmodule(packagename);
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
          // return IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url];
          return getmodule(url);
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
                              `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\n`
                              // `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\nreturn [exports, module.exports, define.exports]; `
                            );
                            modulesrcfun = 模块加载函数;
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
                                    urlorname = new URL(baseurl + urlorname)
                                      .href;
                                  }

                                  return urlorname;
                                }
                                const baseurl = getbaseurl(url);

                                urlorname = 格式化url(baseurl, urlorname);

                                return require(urlorname);
                              },

                              // require

                              define,
                              module,
                              exports.exports
                              /* 如果在函数内修改exports的值,则无法获取输出,只能在修改exports的属性的时候,获取到 */
                            );
                          })(require, define, module, exports, scripttext);
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
                              console.warn(
                                加载的模块没有输出,
                                packagename,
                                url
                              );
                              // resolve(moduleexport);
                              reject(
                                Error(
                                  加载的模块没有输出 +
                                    " " +
                                    packagename +
                                    " " +
                                    url
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
                                加载的模块没有输出 +
                                  " " +
                                  packagename +
                                  " " +
                                  url
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
                        if (
                          typeof Symbol !== "undefined" &&
                          Symbol.toStringTag
                        ) {
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
          });
        }
      })(url, packagename);
    } else {
      throw new TypeError(
        // "输入的类型错误,输入的类型必须是字符串或者数组或对象"
        输入的类型错误输入的类型必须是字符串或者数组或对象
      );
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

module.exports = index;
