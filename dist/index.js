class cantfindError extends Error {
    constructor(message, urlorname) {
        super(message);
        this.urlorname = urlorname;
    }
}

function isplainobject(o) {
    return typeof o === "object" && {}.toString.call(o) === "[object Object]";
}

function assertstring(s) {
    if (s === "") {
        throw new TypeError(字符串不能为空);
    }
    if (typeof s !== "string") {
        throw new TypeError(参数必须为字符串);
    }
}

function createBlob(source) {
    return URL.createObjectURL(new Blob([ source ], {
        type: "application/javascript"
    }));
}

const dynamicimportshimfun = (() => {
    const 参数必须为字符串 = "参数必须为字符串";
    const 字符串不能为空 = "字符串不能为空";
    let dynamicimportshim;
    try {
        dynamicimportshim = Function("u", "return import(u)");
    } catch (error) {
        dynamicimportshim = async function(url) {
            if (url === "") {
                throw new TypeError(字符串不能为空);
            }
            if (typeof url !== "string") {
                throw new TypeError(参数必须为字符串);
            }
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
                const moduleoutput = Reflect.get(window, symbolkey);
                resolve(moduleoutput);
                Reflect.set(window, symbolkey, undefined);
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

function getbaseurl(url) {
    var objurl = new URL(url);
    var a = objurl.pathname.split("/");
    a[a.length - 1] = "";
    var path = objurl.origin + a.join("/");
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
    if (packagename === "") {
        throw new TypeError(字符串不能为空);
    }
    if (typeof packagename !== "string") {
        throw new TypeError(参数必须为字符串);
    }
    const findpackage = PACKAGESTORE[packagename];
    if (findpackage) {
        Object.freeze(findpackage);
        return findpackage.default ? findpackage.default : findpackage;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
};

const formatedurlrequire = (urlorname, url) => {
    assertstring(urlorname);
    const baseurl = getbaseurl(url);
    const formatedurl = 格式化url(baseurl, urlorname);
    return myrequirefun(formatedurl);
};

function 定义default(target, def) {
    if (Reflect.get(def, Symbol.toStringTag) === "Module" && def.default) {
        def = def.default;
    }
    Object.defineProperty(target, "default", {
        enumerable: true,
        get() {
            return def;
        }
    });
}

function 非空对象(o) {
    return !!(typeof o !== "object" || Object.keys(o).length || JSON.stringify(o) !== "{}");
}

function isArray(a) {
    return Array.isArray(a) && {}.toString.call(a) === "[object Array]";
}

function isFunction(it) {
    const op = {};
    const ostring = op.toString;
    return "function" === typeof it && ostring.call(it) === "[object Function]";
}

define.exports = {};

define.amd = true;

function define(name, deps, callback) {
    define.exports = {};
    define.amd = true;
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
    const defineglobalDefQueue = [ name, deps, callback ];
    const canshu = defineglobalDefQueue[1].map(e => myrequirefun(e));
    define.exports = defineglobalDefQueue[2](...canshu);
}

function 处理非es模块(moduleexport, exportmodule, url, packagename) {
    if (typeof exportmodule === "undefined") {
        exportmodule = [ {}, {}, {} ];
    }
    if (typeof define.exports === "undefined") {
        define.exports = {};
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
    }
}

const 加载的模块没有输出 = "加载的模块没有输出";

const typesymbol = Symbol.for("type");

const namesymbol = Symbol.for("name");

const urlsymbol = Symbol.for("url");

const sourcesymbol = Symbol.for("source");

var coreload = async (url, packagename) => {
    return await new Promise(主核心加载模块函数);
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
                                        exports: {
                                            [Symbol.toStringTag]: "Module"
                                        }
                                    };
                                    const module = {
                                        exports: {
                                            [Symbol.toStringTag]: "Module"
                                        }
                                    };
                                    define.exports = {};
                                    var modulesrcfun;
                                    const moduleexport = {
                                        default: undefined
                                    };
                                    try {
                                        (function() {
                                            const 模块加载函数 = new Function("require", "define", "module", "exports", `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\n`);
                                            modulesrcfun = 模块加载函数.toString();
                                            return 模块加载函数.call(module.exports, name => formatedurlrequire(name, url), define, module, exports.exports);
                                        })();
                                        const exportmodule = [ exports.exports ? exports.exports : {}, module.exports ? module.exports : {}, define.exports ? define.exports : {} ];
                                        处理非es模块(moduleexport, exportmodule, url, packagename);
                                        moduletype = "cjs";
                                    } catch (e) {
                                        console.warn(e);
                                        try {
                                            const moduleexportdefault = JSON.parse(scripttext);
                                            console.log("检测到json模块 " + url);
                                            modulesrcfun = scripttext;
                                            moduletype = "json";
                                            Object.keys(moduleexportdefault).forEach(key => {
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
                                                    const exportdefault = await dynamicimportshimfun(topLevelBlobUrl);
                                                    moduletype = "esm";
                                                    Object.keys(exportdefault).forEach(key => {
                                                        Object.defineProperty(moduleexport, key, {
                                                            enumerable: true,
                                                            get() {
                                                                return exportdefault[key];
                                                            }
                                                        });
                                                    });
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
                                    !!moduleexport.default && Object.keys(moduleexport.default).filter(t => t !== "default").forEach(key => {
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

function newobjjson(obj) {
    if (typeof obj !== "object") {
        throw new TypeError(传入的参数必须是个object);
    }
    return JSON.parse(JSON.stringify(obj));
}

async function 同时发起多个字符串(a, importcjsamdumd) {
    return await Promise.all(Array(...a).map(e => {
        return importcjsamdumd(e);
    }));
}

async function 同时发起多个entries(a, importcjsamdumd) {
    return await Promise.all(Array(...a).map(e => {
        return importcjsamdumd(e[0], e[1]);
    }));
}

function getmodule(packagename) {
    if (packagename === "") {
        throw new TypeError(字符串不能为空);
    }
    if (typeof packagename !== "string") {
        throw new TypeError(参数必须为字符串);
    }
    const findpackage = PACKAGESTORE[packagename];
    if (findpackage) {
        Object.freeze(findpackage);
        return findpackage;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
}

const 输入的类型错误输入的类型必须是字符串或者数组或对象 = "输入的类型错误,输入的类型必须是字符串或者数组或对象";

const 传入的参数必须是个object = "传入的参数必须是个object";

var oldimportcjsamdumd = (() => {
    return async function oldimportcjsamdumd(url, packagename) {
        if (isplainobject(url)) {
            return await (async url => {
                url = newobjjson(url);
                const 输入参数array = Object.entries(url);
                let suoyouimportpromise = [];
                try {
                    suoyouimportpromise = await 同时发起多个entries(输入参数array, importcjsamdumd);
                } catch (error) {
                    console.warn(error);
                    suoyouimportpromise = await 同时发起多个entries(输入参数array, importcjsamdumd);
                } finally {
                    suoyouimportpromise = await 同时发起多个entries(输入参数array, importcjsamdumd);
                }
                let objecttoreturn = {};
                suoyouimportpromise.forEach(m => {
                    objecttoreturn[m[namesymbol]] = m;
                });
                return objecttoreturn;
            })(url);
        } else if (isArray(url) && typeof url === "object" || typeof packagename === "object") {
            return await (async (...args) => {
                let suoyouimportpromise = [];
                const 传入参数arr = Array(...args).flat();
                try {
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, importcjsamdumd);
                } catch (error) {
                    console.warn(error);
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, importcjsamdumd);
                } finally {
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, importcjsamdumd);
                }
                return suoyouimportpromise;
            })(...[ url, packagename ].flat());
        } else if (typeof url === "string" || typeof packagename === "string") {
            assertstring(url);
            return await (async (url, packagename) => {
                if (typeof packagename === "undefined") {
                    packagename = new URL(url).href;
                }
                url = new URL(url).href;
                if (typeof PACKAGESTORE[packagename] !== "undefined" && typeof PACKAGESTORE[packagename].default !== "undefined" && Reflect.get(PACKAGESTORE[packagename], urlsymbol) === url) {
                    return getmodule(packagename);
                } else if (typeof PACKAGESTORE[url] !== "undefined" && typeof PACKAGESTORE[url].default !== "undefined" && Reflect.get(PACKAGESTORE[url], urlsymbol) === url) {
                    PACKAGESTORE[packagename] = PACKAGESTORE[url];
                    Reflect.set(PACKAGESTORE[packagename], namesymbol, packagename);
                    return getmodule(url);
                } else {
                    return await coreload(url, packagename);
                }
            })(url, packagename);
        } else {
            throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
        }
    };
})();

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

const 模块仓库中没有找到 = "Cannot find module in packagestore, 模块仓库中没有找到, ";

const 参数必须为字符串 = "参数必须为字符串";

const 字符串不能为空 = "字符串不能为空";

const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

async function importcjsamdumd(url, packagename) {
    const inarguments = [ url, packagename ];
    return await oldimportcjsamdumd(...inarguments).catch(handleerror);
    async function handleerror(e) {
        console.warn(e);
        if (e instanceof cantfindError && e.urlorname) {
            if (isurl(e.urlorname)) {
                console.log(补充加载依赖的模块网址, e.urlorname);
                await importcjsamdumd(e.urlorname);
                return await importcjsamdumd(...inarguments);
            } else if (isplainobject(inarguments[0]) && Reflect.has(inarguments[0], e.urlorname)) {
                await oldimportcjsamdumd(...inarguments);
                return await oldimportcjsamdumd(...inarguments);
            } else {
                throw e;
            }
        } else {
            throw e;
        }
    }
}

const PACKAGESTORE = {};

const REQUIREPACKAGE = getmodule;

export default importcjsamdumd;

export { PACKAGESTORE, REQUIREPACKAGE };
//# sourceMappingURL=index.js.map
