class cantfindError extends Error {
    constructor(message, urlorname) {
        super(message);
        this.urlorname = urlorname;
    }
}

function assertstring(s) {
    if (s === "") {
        throw new TypeError(字符串不能为空);
    }
    if (typeof s !== "string") {
        throw new TypeError(参数必须为字符串);
    }
}

const packagealias = Object.create(null);

function getmodule(packagename) {
    assertstring(packagename);
    const findpackage = packagestore[packagename] || packagestore[packagealias[packagename]];
    if (findpackage) {
        Object.freeze(findpackage);
        return findpackage;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
}

function isurl(url) {
    var flag = false;
    try {
        assertstring(url);
        url = new URL(url).href;
        flag = true;
    } catch (error) {
        flag = false;
    }
    return flag;
}

async function 同时发起多个字符串(a, importcjsamdumd) {
    return await Promise.all(a.map(e => importcjsamdumd(e)));
}

function mapaliastourl(arr) {
    return arr.map(name => {
        var _a;
        if (isurl(name)) {
            return name;
        } else {
            return (_a = packagealias[name]) !== null && _a !== void 0 ? _a : name;
        }
    });
}

const concurrentimport = Object.create(null);

function promisedefer() {
    let resolve = () => {};
    let reject = () => {};
    let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise
    };
}

function isFunction(it) {
    const op = {};
    const ostring = op.toString;
    const tag = ostring.call(it);
    return "function" === typeof it && tag === "[object Function]" || tag === "[object AsyncFunction]";
}

const AsyncFunctionconstructor = Object.getPrototypeOf((async function() {})).constructor;

function isobject(a) {
    return !!(a && typeof a === "object");
}

const cachedurltotext = Object.create(null);

const cachedurltotype = Object.create(null);

async function cachedfetchtext(url) {
    let codetype;
    const cachedtext = get(cachedurltotext, url);
    const cachedtype = get(cachedurltotype, url);
    if (cachedtext && cachedtype) {
        return [ cachedtext, cachedtype ];
    } else {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("fetch failed " + url);
        }
        const contenttype = response.headers.get("content-type");
        if (contenttype === null || contenttype === void 0 ? void 0 : contenttype.includes("javascript")) {
            codetype = "js";
        } else if (contenttype === null || contenttype === void 0 ? void 0 : contenttype.includes("json")) {
            codetype = "json";
        } else {
            throw new Error("invalid content-type " + contenttype);
        }
        const textsource = await response.text();
        set(cachedurltotext, url, textsource);
        set(cachedurltotype, url, codetype);
        return [ textsource, codetype ];
    }
}

function ismodule(a) {
    return {}.toString.call(a) === "[object Module]";
}

function isplainobject(o) {
    return typeof o === "object" && {}.toString.call(o) === "[object Object]" && o instanceof Object;
}

function 定义default(target, def) {
    var _a;
    def = (_a = get(def, "default")) !== null && _a !== void 0 ? _a : def;
    if (!ismodule(def) && !isplainobject(def)) {
        defineProperty(target, "default", {
            enumerable: true,
            get() {
                return def;
            }
        });
    }
}

function isArray(a) {
    return Array.isArray(a) && {}.toString.call(a) === "[object Array]";
}

function define(name, deps, callback) {
    if (typeof name !== "string") {
        callback = deps;
        deps = name;
        name = null;
    }
    if (!isArray(deps)) {
        callback = deps;
        deps = null;
    }
    if (!deps) {
        deps = [];
    }
    const defineglobalDefQueue = [ name, deps, callback ];
    return defineglobalDefQueue;
}

function createBlob(source) {
    return URL.createObjectURL(new Blob([ source ], {
        type: "application/javascript"
    }));
}

const dynamicimportshimfun = (() => {
    let dynamicimportshim;
    try {
        dynamicimportshim = Function("u", "return import(u)");
    } catch (error) {
        dynamicimportshim = async function(url) {
            assertstring(url);
            url = new URL(url).href;
            return await getnewimportpromise(url);
        };
    }
    return dynamicimportshim;
})();

function getnewimportpromise(url) {
    const symbolkey = Symbol.for("import-" + url);
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        function clearsideeffect() {
            removescript(s);
            removeerrorlisten(errorhandler);
            URL.revokeObjectURL(s.src);
            s.onload = s.onerror = null;
        }
        function removeerrorlisten(f) {
            try {
                window.removeEventListener("error", f);
            } catch (error) {}
        }
        function removescript(e) {
            e.remove();
        }
        function errorhandler(e) {
            console.warn(e.error);
            reject(e.error);
            clearsideeffect();
        }
        window.addEventListener("error", errorhandler);
        const topLevelBlobUrl = createBlob(`import*as m from'${url}';\nwindow[Symbol.for('${"import-" + url}')]=m`);
        s.type = "module";
        s.src = topLevelBlobUrl;
        s.async = true;
        s.onload = () => {
            if (Reflect.has(window, symbolkey)) {
                const moduleoutput = get(window, symbolkey);
                resolve(moduleoutput);
                set(window, symbolkey, undefined);
                clearsideeffect();
            }
        };
        s.onerror = () => {
            reject(new Error("import load failed from network" + url));
            clearsideeffect();
        };
        document.head.appendChild(s);
    });
}

function esmdefinegetter(moduleexport, exportdefault) {
    if (exportdefault && (isFunction(exportdefault) || typeof exportdefault === "object")) {
        Object.keys(exportdefault).forEach(key => {
            try {
                defineProperty(moduleexport, key, {
                    enumerable: true,
                    get() {
                        return get(exportdefault, key);
                    }
                });
            } catch (error) {}
        });
    }
}

function getbaseurl(url) {
    var objurl = new URL(url);
    let path = new URL(".", objurl.href).href;
    return path;
}

function 格式化url(baseurl, urlorname) {
    if (String(urlorname).startsWith("./") || String(urlorname).startsWith("../")) {
        if (!(String(urlorname).endsWith(".js") || urlorname.endsWith(".mjs") || urlorname.endsWith(".json") || urlorname.endsWith(".css") || urlorname.endsWith(".html"))) {
            urlorname += ".js";
        }
        urlorname = new URL(baseurl + urlorname).href;
    }
    return urlorname;
}

const myrequirefun = function requireinstead(packagename) {
    var _a;
    assertstring(packagename);
    const findpackage = packagestore[packagename] || packagestore[packagealias[packagename]];
    if (findpackage) {
        Object.freeze(findpackage);
        return (_a = findpackage.default) !== null && _a !== void 0 ? _a : findpackage;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
};

const formatedurlrequire = (urlorname, url) => {
    assertstring(urlorname);
    if (String(urlorname).startsWith("./") || String(urlorname).startsWith("../")) {
        const formatedurl = getnormalizedurl(urlorname, url);
        return myrequirefun(formatedurl);
    } else {
        return myrequirefun(urlorname);
    }
};

function getnormalizedurl(relativeurl, url) {
    if (String(relativeurl).startsWith("./") || String(relativeurl).startsWith("../")) {
        const baseurl = getbaseurl(url);
        const formatedurl = 格式化url(baseurl, relativeurl);
        return formatedurl;
    } else {
        return relativeurl;
    }
}

function 非空对象(o) {
    return !!(typeof o !== "object" || Object.keys(o).length || JSON.stringify(o) !== "{}");
}

function 处理非es模块(exportmodule) {
    if (非空对象(exportmodule[0])) {
        const exportdefault = exportmodule[0];
        return exportdefault;
    } else if (非空对象(exportmodule[1])) {
        const exportdefault = exportmodule[1];
        return exportdefault;
    }
}

const depssymbol = Symbol("deps");

const typesymbol = Symbol("type");

const urlsymbol = Symbol("url");

var REQUIRE_RE = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g;

var SLASH_RE = /\\\\/g;

function parseDependencies(code) {
    var ret = [];
    code.replace(SLASH_RE, "").replace(REQUIRE_RE, (function(m, m1, m2, ...args) {
        if (m2) {
            ret.push(m2);
        }
        return "";
    }));
    return ret;
}

const cacheurltocjsfun = Object.create(null);

function removerepetition(arr) {
    return [ ...new Set(arr) ];
}

const {get: get, set: set, defineProperty: defineProperty} = Reflect;

var coreload = async url => {
    if (concurrentimport[url]) {
        return await concurrentimport[url].promise;
    } else {
        const defered = promisedefer();
        concurrentimport[url] = defered;
        try {
            const module = await new Promise(主核心加载模块函数);
            defered.resolve(module);
            return module;
        } catch (e) {
            defered.reject(e);
            throw e;
        }
    }
    async function 主核心加载模块函数(resolve, reject) {
        var _a;
        try {
            let fetchpromisetext;
            let codetype;
            try {
                try {
                    [fetchpromisetext, codetype] = await cachedfetchtext(url);
                } catch (e) {
                    console.warn(e);
                    reject(e);
                    return;
                }
                const moduleexport = Object.create(null);
                moduleexport[urlsymbol] = url;
                let moduletype;
                const scripttext = fetchpromisetext;
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    defineProperty(moduleexport, Symbol.toStringTag, {
                        value: "Module"
                    });
                }
                moduleexport[depssymbol] = [];
                if ("json" === codetype) {
                    const moduleexportdefault = JSON.parse(scripttext);
                    moduletype = "json";
                    esmdefinegetter(moduleexport, moduleexportdefault);
                    moduleexport[typesymbol] = moduletype;
                    Object.freeze(moduleexport);
                    packagestore[url] = moduleexport;
                    resolve(moduleexport);
                    return;
                } else if ("js" === codetype) {
                    try {
                        const exports_exports = {
                            [Symbol.toStringTag]: "Module"
                        };
                        const module = {
                            exports: {
                                [Symbol.toStringTag]: "Module"
                            }
                        };
                        try {
                            let isamd = false;
                            const 模块加载函数 = (_a = get(cacheurltocjsfun, url)) !== null && _a !== void 0 ? _a : new AsyncFunctionconstructor("require", "exports", "module", "define", `                        "use strict";\n/* ${url} */;\n;${scripttext};\n;/* ${url} */;\n                        `);
                            set(cacheurltocjsfun, url, 模块加载函数);
                            moduleexport[depssymbol] = removerepetition(mapaliastourl(parseDependencies(scripttext).map(urlorname => getnormalizedurl(urlorname, url))));
                            await importcjsamdumd(moduleexport[depssymbol]);
                            let amdfactory = () => {};
                            const require_require = name => formatedurlrequire(name, url);
                            const define_define = (name, deps, callback) => {
                                const defineglobalDefQueue = define(name, deps, callback);
                                isamd = true;
                                amdfactory = defineglobalDefQueue[2];
                                moduleexport[depssymbol] = removerepetition(mapaliastourl(defineglobalDefQueue[1].map(urlorname => getnormalizedurl(urlorname, url))));
                            };
                            Object.assign(define_define, {
                                amd: true,
                                cmd: true
                            });
                            await 模块加载函数.call(module.exports, require_require, exports_exports, module, define_define);
                            if (isamd) {
                                moduletype = "amd";
                                await importcjsamdumd(moduleexport[depssymbol]);
                                let amdcallargs;
                                if (moduleexport[depssymbol].length) {
                                    amdcallargs = moduleexport[depssymbol].map(e => myrequirefun(e));
                                } else {
                                    amdcallargs = [ require_require, exports_exports, module ];
                                }
                                let define_exports;
                                if (isFunction(amdfactory)) {
                                    define_exports = amdfactory.call(module.exports, ...amdcallargs);
                                } else if (isobject(amdfactory)) {
                                    define_exports = amdfactory;
                                }
                                define_exports = await define_exports;
                                !!define_exports && (module.exports = define_exports);
                            } else {
                                moduletype = "cjs";
                            }
                            !module.exports && (module.exports = {
                                [Symbol.toStringTag]: "Module"
                            });
                            const exportmodule = [ exports_exports, module.exports ];
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
                                        const exportdefault = await dynamicimportshimfun(topLevelBlobUrl);
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
                        packagestore[url] = moduleexport;
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
        } catch (e) {
            console.warn(e);
            reject(e);
            return;
        }
    }
};

const 输入的类型错误输入的类型必须是字符串或者数组或对象 = "The type entered is incorrect, the type entered must be a string or an array ";

async function oldimportcjsamdumd(url, packagename) {
    var _a;
    if (isArray(url)) {
        return await (async (...args) => {
            let suoyouimportpromise = [];
            const 传入参数arr = args;
            try {
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            } catch (error) {
                console.warn(error);
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            } finally {
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            }
            return suoyouimportpromise;
        })(...url);
    } else if (typeof url === "string" || typeof packagename === "string") {
        assertstring(url);
        try {
            url = new URL(url).href;
        } catch (_unused) {
            url = (_a = packagealias[url]) !== null && _a !== void 0 ? _a : url;
        }
        return await (async (url, packagename) => {
            if (String(url).startsWith("./") || String(url).startsWith("../")) {
                var urlobj = new URL(url, location.href);
                url = urlobj.origin + urlobj.pathname;
            }
            try {
                url = new URL(url).href;
            } catch (_unused2) {
                throw Error("invalid url " + url);
            }
            if (typeof packagename === "undefined") {
                packagename = new URL(url).href;
            }
            if (packagename) {
                packagealias[packagename] = url;
            }
            if (typeof packagestore[packagename] !== "undefined" && get(packagestore[packagename], urlsymbol) === url) {
                return getmodule(packagename);
            } else if (typeof packagestore[url] !== "undefined" && get(packagestore[url], urlsymbol) === url) {
                return getmodule(url);
            } else {
                return await coreload(url);
            }
        })(url, packagename);
    } else {
        throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
    }
}

const packagestore = Object.create(null);

const requirepackage = getmodule;

const 模块仓库中没有找到 = "Cannot find module in packagestore, Not found in module repository, ";

const 参数必须为字符串 = "Parameter must be a string";

const 字符串不能为空 = "String cannot be empty";

const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

async function importcjsamdumd(url, packagename) {
    let tryfailedtimes = 0;
    return await oldimportcjsamdumd(url, packagename).catch(handleerror);
    async function retryimport(url1, nam1, url2, name2) {
        try {
            await oldimportcjsamdumd(url1, nam1).catch(handleerror);
            return await oldimportcjsamdumd(url2, name2);
        } catch (error) {
            console.warn(error);
            return await oldimportcjsamdumd(url2, name2).catch(handleerror);
        }
    }
    async function handleerror(e) {
        console.warn(e);
        if (tryfailedtimes > 5) {
            throw new Error("Try loading, too many failures, give up trying!" + JSON.stringify(url) + JSON.stringify(packagename));
        }
        tryfailedtimes++;
        if (e instanceof cantfindError) {
            const eurlorname = e.urlorname;
            if (isurl(eurlorname)) {
                console.log(补充加载依赖的模块网址, eurlorname);
                return await retryimport(eurlorname, undefined, url, packagename);
            } else {
                throw e;
            }
        } else {
            throw e;
        }
    }
}

export { cachedurltotext, cacheurltocjsfun, importcjsamdumd, packagealias, packagestore, requirepackage };
//# sourceMappingURL=index.js.map
