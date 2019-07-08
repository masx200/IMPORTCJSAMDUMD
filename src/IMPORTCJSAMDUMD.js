"use strict";
(global => {
  "use strict";
  var GLOBALPACKAGESTORE = "GLOBALPACKAGESTORE";
  var IMPORTCJSAMDUMD = importcjsamdumd;
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  } else {
    global.IMPORTCJSAMDUMD = importcjsamdumd;
  }
  IMPORTCJSAMDUMD.REQUIREPACKAGE = require;
  IMPORTCJSAMDUMD[GLOBALPACKAGESTORE] = {};
  function require(packagename) {
    "use strict";
    var findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
    if (findpackage) {
      console.log("在模块仓库中找到了", packagename, findpackage.url);
      return findpackage.default;
    } else {
      throw new Error(
        `Cannot find module in packagestore, 模块仓库中没有找到,
` + packagename
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
      typeof a === "object" &&
      Object.prototype.toString.call(a) === "[object Array]"
    );
  }
  define.exports = {};
  function define(name, deps, callback) {
    "use strict";
    define.exports = {};

    define.amd = true;
    define.globalDefQueue = [];
    var op = Object.prototype;
    var ostring = op.toString;
    function isArray(it) {
      return ostring.call(it) === "[object Array]";
    }
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

    if (0) {
    } else {
      define.globalDefQueue.push([name, deps, callback]);
    }
    console.log("检测到amd模块", define.globalDefQueue[0]);
    var canshu = define.globalDefQueue[0][1].map(e => require(e));
    define.exports = define.globalDefQueue[0][2](...canshu);
  }
  define.amd = true;
  async function importcjsamdumd(url, packagename) {
    "use strict";
    if (isobject(url)) {
      function newobjjson(obj) {
        if (typeof obj !== "object") {
          throw new TypeError("传入的参数必须是个object!");
        }
        return JSON.parse(JSON.stringify(obj));
      }
      url = newobjjson(url);
      var 输入参数array = Object.keys(url).map(key => {
        var packageurl = url[key];
        var packagenm = key;
        return [packageurl, packagenm];
      });
      var suoyouimportpromise = [];
      try {
        suoyouimportpromise = await Promise.all(
          输入参数array.map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await Promise.all(
          输入参数array.map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
      } finally {
        suoyouimportpromise = await Promise.all(
          输入参数array.map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
      }
      var objecttoreturn = {};
      suoyouimportpromise.forEach(m => {
        objecttoreturn[m.name] = m;
      });
      return objecttoreturn;
    } else if (
      (isArray(url) && typeof url === "object") ||
      typeof packagename === "object"
    ) {
      Array(...arguments).forEach(e => {
        var url = e[0],
          packagename = e[1];
        if (typeof url === "undefined" || url === "" || packagename === "") {
          throw new Error(
            "输入的类型错误,输入的字符串不能为空,url不能为undefined"
          );
        }
        if (typeof packagename === "undefined") {
          packagename = new URL(url).href;
        }
      });
      var suoyouimportpromise = [];
      try {
        suoyouimportpromise = await Promise.all(
          Array(...arguments).map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
      } catch (error) {
        console.warn(error);
        suoyouimportpromise = await Promise.all(
          Array(...arguments).map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
      } finally {
        suoyouimportpromise = await Promise.all(
          Array(...arguments).map(e => {
            return IMPORTCJSAMDUMD(e[0], e[1]);
          })
        );
        return suoyouimportpromise;
      }
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
        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename].url === url
      ) {
        return await new Promise(resolve => {
          resolve(IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename]);
        });
      } else {
        return await new Promise((resolve, reject) => {
          try {
            (async () => {
              var fetchpromisetext;
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
                  (scripttext => {
                    var exports = {};
                    var module = {
                      exports: {}
                    };
                    define.exports = {};
                    var exportmodule = [{}, {}, {}];
                    try {
                      exportmodule = (function(
                        require,
                        define,
                        module,
                        exports,
                        scripttext
                      ) {
                        return Function(
                          "require",
                          "define",
                          "module",
                          "exports",
                          `\/\* ${url} \*\/;
 \n
 ${scripttext};
 \n
 \/\* ${url} \*\/;
return [exports, module.exports, define.exports]; `
                        ).call(
                          module.exports,
                          require,
                          define,
                          module,
                          exports
                        );
                      })(require, define, module, exports, scripttext);
                    } catch (e) {
                      console.warn(e);
                      reject(e);
                      return;
                    }
                    var moduleexport = {
                      name: undefined,
                      default: undefined,
                      url: undefined
                    };
                    if (typeof exportmodule === "undefined") {
                      var exportmodule = [{}, {}, {}];
                    }
                    if (typeof define.exports === "undefined") {
                      define.exports = {};
                    }
                    if (
                      typeof exportmodule[0] !== "object" ||
                      Object.keys(exportmodule[0]).length ||
                      JSON.stringify(exportmodule[0]) !== "{}"
                    ) {
                      console.log("检测到umd模块", url, packagename);
                      moduleexport.default = exportmodule[0];
                    } else if (
                      typeof exportmodule[1] !== "object" ||
                      Object.keys(exportmodule[1]).length ||
                      JSON.stringify(exportmodule[1]) !== "{}"
                    ) {
                      console.log("检测到cjs模块", url, packagename);
                      moduleexport.default = exportmodule[1];
                    } else if (
                      typeof exportmodule[2] !== "object" ||
                      Object.keys(exportmodule[2]).length ||
                      JSON.stringify(exportmodule[2]) !== "{}"
                    ) {
                      console.log("检测到amd模块", url, packagename);
                      moduleexport.default = exportmodule[2];
                    } else {
                      console.warn("加载的模块没有输出", url, packagename);
                      resolve(moduleexport);
                      return;
                    }
                    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                      Object.defineProperty(moduleexport, Symbol.toStringTag, {
                        value: "Module"
                      });
                    }
                    if (typeof moduleexport.default !== "undefined") {
                      if (typeof packagename !== "undefined") {
                        moduleexport.name = packagename;
                        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][
                          packagename
                        ] = moduleexport;
                      } else {
                        packagename = url;
                        IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][
                          packagename
                        ] = moduleexport;
                      }
                    }
                    moduleexport.url = url;
                    if (typeof moduleexport.default !== "undefined") {
                      if (typeof moduleexport.name !== "undefined") {
                      }
                    } else {
                      console.warn("加载的模块没有输出", packagename, url);
                      resolve(moduleexport);
                      return;
                    }
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
        });
      }
    } else {
      throw new Error("输入的类型错误,输入的类型必须是字符串或者数组或对象");
    }
  }
})(
  (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this
);
