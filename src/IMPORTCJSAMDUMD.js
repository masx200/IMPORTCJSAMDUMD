"use strict";
(global => {
  "use strict";
  var IMPORTCJSAMDUMD = importcjsamdumd;
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  } else {
    global.IMPORTCJSAMDUMD = IMPORTCJSAMDUMD || importcjsamdumd;
  }
  
  
  
  
  IMPORTCJSAMDUMD.REQUIREPACKAGE = IMPORTCJSAMDUMD.REQUIREPACKAGE || require;
  IMPORTCJSAMDUMD.GLOBALPACKAGESTORE = IMPORTCJSAMDUMD.GLOBALPACKAGESTORE || {};
  
  
  
  
  
  
  
  
  
  
  
  
  
  function require(packagename = undefined) {
    var findpackage = IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename];
    if (findpackage) {
      console.log("在模块仓库中找到了", packagename, findpackage.url);
      return findpackage.default;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else {
      throw new Error(
        "Cannot find module in packagestore, 模块仓库中没有找到,  " +
          packagename
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
  async function importcjsamdumd(url, packagename = undefined) {
    "use strict";
    if (isobject(url)) {
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
   
      var 已经加载过的模块数量 = 0;
      for (var canshuinput of Array(...arguments)) {
        var inputpackagename = canshuinput[1];
        var inputurl = canshuinput[0];
        if (
          typeof IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename] !==
            "undefined" &&
          typeof IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename]
            .default !== "undefined" &&
          IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename].url === inputurl
        ) {
          
          
          
          
          
          已经加载过的模块数量++;
        }
      }
      if (已经加载过的模块数量 >= Array(...arguments).length) {
        
        return await Promise.all(
          Array(...arguments).map(inputarray => {
            var packagename = inputarray[1];
            return new Promise(resolve => {
              resolve(
                IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename]
              );
            });
          })
        );
      }
      
      
      
      
      
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
      url = new URL(url);
      url = url.href;
      
      
      
      
      
      
      
      
      
      function define(name, deps, callback) {
      	"use strict";
        define.amd = true;
        define.globalDefQueue = [];
        
        var op = Object.prototype;
        var ostring = op.toString;
        var useInteractive = false;
        function isArray(it) {
          return ostring.call(it) === "[object Array]";
        }
        function isFunction(it) {
          return ostring.call(it) === "[object Function]";
        }
        var node, context;
        
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
          
          
          
          if (callback.length) {
            callback
              .toString()
              .replace(commentRegExp, commentReplace)
              .replace(cjsRequireRegExp, function(match, dep) {
                deps.push(dep);
              });
            
            
            
            
            
            deps = (callback.length === 1
              ? ["require"]
              : ["require", "exports", "module"]
            ).concat(deps);
          }
        }
        
        
        if (useInteractive) {
          node = currentlyAddingScript || getInteractiveScript();
          if (node) {
            if (!name) {
              name = node.getAttribute("data-requiremodule");
            }
            context = contexts[node.getAttribute("data-requirecontext")];
          }
        }
        
        
        
        
        
        
        if (context) {
          context.defQueue.push([name, deps, callback]);
          context.defQueueMap[name] = true;
        } else {
          define.globalDefQueue.push([name, deps, callback]);
        }
        console.log("检测到amd模块", define.globalDefQueue[0]);
        if (
          typeof define.globalDefQueue[0][0] === "string" &&
          typeof packagename === "undefined"
        ) {
          packagename = define.globalDefQueue[0][0];
        }
        var canshu = define.globalDefQueue[0][1].map(e => require(e));
        
        define.exports = define.globalDefQueue[0][2](...canshu);
      }
      define.amd = true;
      if (
        typeof IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename] !==
          "undefined" &&
        typeof IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename].default !==
          "undefined" &&
        IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename].url === url
      ) {
        
        return await new Promise(resolve => {
          resolve(
            IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename]
          );
        });
      } else {
        
        return await new Promise((resolve, reject) => {
          try {
            (() => {
              
              var fetchpromise;
              try {
                try {
                  fetchpromise = fetch(url).then(response => {
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
                  fetchpromise.then(scripttext => {
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
                          
                          
                          
                          
                        )
.call(module.exports,require, define, module, exports);
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
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
                        
                        
                        IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
                          packagename
                        ] = moduleexport;
                      } else {
                        packagename = url;
                        IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
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
                  });
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
