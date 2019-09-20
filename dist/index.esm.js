function createBlob(source) {
    return URL.createObjectURL(new Blob([ source ], {
        type: "application/javascript"
    }));
}

let dynamicimportshimfun = (() => {
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
            function getnewimportpromise() {
                return new Promise((resolve, reject) => {
                    const s = document.createElement("script");
                    function clearsideeffect() {
                        removescript(s);
                        removeerrorlisten(errorhandler);
                        URL.revokeObjectURL(s.src);
                    }
                    function removeerrorlisten(f) {
                        try {
                            window.removeEventListener("error", f);
                        } catch (error) {}
                    }
                    function removescript(e) {
                        try {
                            document.head.removeChild(e);
                        } catch (error) {}
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
                        resolve(window[Symbol.for("import-" + url)]);
                        Reflect.deleteProperty(window, Symbol.for("import-" + url));
                        clearsideeffect();
                    };
                    s.onerror = () => {
                        reject(new Error("import load failed from network" + url));
                        clearsideeffect();
                    };
                    document.head.appendChild(s);
                });
            }
            return await getnewimportpromise();
        };
    }
    return dynamicimportshim;
})();

const GLOBALPACKAGESTORE = "PACKAGESTORE";

const 字符串不能为空 = "字符串不能为空";

const 加载的模块没有输出 = "加载的模块没有输出";

const namesymbol = Symbol.for("name");

const urlsymbol = Symbol.for("url");

const sourcesymbol = Symbol.for("source");

var coreload = (url, packagename) => {
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
                                        exports: {
                                            [Symbol.toStringTag]: "Module"
                                        }
                                    };
                                    const module = {
                                        exports: {}
                                    };
                                    define.exports = {};
                                    var modulesrcfun;
                                    const moduleexport = {
                                        default: undefined
                                    };
                                    try {
                                        (function(myrequirefun, define, module, exports, scripttext) {
                                            const 模块加载函数 = new Function("require", "define", "module", "exports", `"use strict";\n/* ${url} */;\n${scripttext};\n/* ${url} */;\n`);
                                            modulesrcfun = 模块加载函数.toString();
                                            return 模块加载函数.call(module.exports, urlorname => {
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
                                                    if (String(urlorname).startsWith("./") || String(urlorname).startsWith("../")) {
                                                        if (!(String(urlorname).endsWith(".js") || urlorname.endsWith(".mjs") || urlorname.endsWith(".json") || urlorname.endsWith(".css") || urlorname.endsWith(".html"))) {
                                                            urlorname += ".js";
                                                        }
                                                        urlorname = new URL(baseurl + urlorname).href;
                                                    }
                                                    return urlorname;
                                                }
                                                const baseurl = getbaseurl(url);
                                                urlorname = 格式化url(baseurl, urlorname);
                                                return myrequirefun(urlorname);
                                            }, define, module, exports.exports);
                                        })(myrequirefun, define, module, exports, scripttext);
                                        const exportmodule = [ exports.exports ? exports.exports : {}, module.exports ? module.exports : {}, define.exports ? define.exports : {} ];
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
                                                    const exportdefault = await dynamicimportshimfun(topLevelBlobUrl);
                                                    moduletype = "esm";
                                                    Object.keys(exportdefault).filter(t => t !== "default").forEach(key => {
                                                        Object.defineProperty(moduleexport, key, {
                                                            enumerable: true,
                                                            get() {
                                                                return exportdefault[key];
                                                            }
                                                        });
                                                    });
                                                    定义default(moduleexport, exportdefault.default ? exportdefault.default : exportdefault);
                                                } catch (e) {
                                                    console.warn(e);
                                                    reject(e);
                                                    return;
                                                }
                                                if (typeof moduleexport.default === "undefined") {
                                                    console.warn(加载的模块没有输出, packagename, url);
                                                    reject(Error(加载的模块没有输出 + " " + packagename + " " + url));
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
                                            exportmodule = [ {}, {}, {} ];
                                        }
                                        if (typeof define.exports === "undefined") {
                                            define.exports = {};
                                        }
                                        function 非空对象(o) {
                                            return typeof o !== "object" || Object.keys(o).length || JSON.stringify(o) !== "{}";
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
                                            reject(Error(加载的模块没有输出 + " " + packagename + " " + url));
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
                                            IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename] = moduleexport;
                                        }
                                    }
                                    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][url] = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE][packagename];
                                    !!moduleexport.default && Object.keys(moduleexport.default).filter(t => t !== "default").forEach(key => {
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

async function 同时发起多个字符串(a, IMPORTCJSAMDUMD) {
    return await Promise.all(Array.from(a).map(e => {
        return IMPORTCJSAMDUMD(e);
    }));
}

const 输入的类型错误输入的类型必须是字符串或者数组或对象 = "输入的类型错误,输入的类型必须是字符串或者数组或对象";

const 非法字符串 = "输入的类型错误,输入的字符串不能为空,url不能为undefined";

const namesymbol$1 = Symbol.for("name");

const urlsymbol$1 = Symbol.for("url");

const 传入的参数必须是个object = "传入的参数必须是个object";

function newobjjson(obj) {
    if (typeof obj !== "object") {
        throw new TypeError(传入的参数必须是个object);
    }
    return JSON.parse(JSON.stringify(obj));
}

async function 同时发起多个(a, IMPORTCJSAMDUMD) {
    return await Promise.all(Array.from(a).map(e => {
        return IMPORTCJSAMDUMD(e[0], e[1]);
    }));
}

var oldimportcjsamdumd = (IMPORTCJSAMDUMD => {
    return async function oldimportcjsamdumd(url, packagename) {
        if (isplainobject(url)) {
            return await (async url => {
                url = newobjjson(url);
                const 输入参数array = Object.keys(url).map(key => {
                    const packageurl = url[key];
                    const packagenm = key;
                    return [ packageurl, packagenm ];
                });
                let suoyouimportpromise = [];
                try {
                    suoyouimportpromise = await 同时发起多个(输入参数array, IMPORTCJSAMDUMD);
                } catch (error) {
                    console.warn(error);
                    suoyouimportpromise = await 同时发起多个(输入参数array, IMPORTCJSAMDUMD);
                } finally {
                    suoyouimportpromise = await 同时发起多个(输入参数array, IMPORTCJSAMDUMD);
                }
                let objecttoreturn = {};
                suoyouimportpromise.forEach(m => {
                    objecttoreturn[m[namesymbol$1]] = m;
                });
                return objecttoreturn;
            })(url);
        } else if (isArray(url) && typeof url === "object" || typeof packagename === "object") {
            return await (async (...args) => {
                let suoyouimportpromise = [];
                const 传入参数arr = JSON.parse(JSON.stringify(Array(...args).flat()));
                try {
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, IMPORTCJSAMDUMD);
                } catch (error) {
                    console.warn(error);
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, IMPORTCJSAMDUMD);
                } finally {
                    suoyouimportpromise = await 同时发起多个字符串(传入参数arr, IMPORTCJSAMDUMD);
                }
                return suoyouimportpromise;
            })(...arguments);
        } else if (typeof url === "string" || typeof packagename === "string") {
            assertstring(url);
            return await (async (url, packagename) => {
                if (typeof url === "undefined" || url === "" || packagename === "") {
                    throw new TypeError(非法字符串);
                }
                if (typeof packagename === "undefined") {
                    packagename = new URL(url).href;
                }
                url = new URL(url).href;
                if (typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename] !== "undefined" && typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename].default !== "undefined" && IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename][urlsymbol$1] === url) {
                    return getmodule(packagename);
                } else if (typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][url] !== "undefined" && typeof IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][url].default !== "undefined" && IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][url][urlsymbol$1] === url) {
                    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename] = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][url];
                    IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename][namesymbol$1] = packagename;
                    return getmodule(url);
                } else {
                    return await coreload(url, packagename);
                }
            })(url, packagename);
        } else {
            throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
        }
    };
})(IMPORTCJSAMDUMD);

class cantfindError extends Error {
    constructor(message, urlorname) {
        super(message);
        this.urlorname = urlorname;
    }
}

const 模块仓库中没有找到 = "Cannot find module in packagestore, 模块仓库中没有找到, ";

function isurl(url) {
    var flag = false;
    try {
        if (url === "") {
            throw new TypeError(字符串不能为空$1);
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

function isArray(a) {
    return typeof a === "object" && Array.isArray(a) && Object.prototype.toString.call(a) === "[object Array]";
}

function getmodule(packagename) {
    if (packagename === "") {
        throw new TypeError(字符串不能为空$1);
    }
    if (typeof packagename !== "string") {
        throw new TypeError(参数必须为字符串);
    }
    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename];
    if (findpackage) {
        return new Proxy(findpackage, {
            set() {
                return false;
            },
            deleteProperty() {
                return false;
            }
        });
    } else {
        throw new Error(模块仓库中没有找到 + packagename);
    }
}

const GLOBALPACKAGESTORE$1 = "PACKAGESTORE";

function isplainobject(o) {
    return typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && o.__proto__ === Object.prototype;
}

const 参数必须为字符串 = "参数必须为字符串";

const 字符串不能为空$1 = "字符串不能为空";

let myrequirefun = function requireinstead(packagename) {
    if (packagename === "") {
        throw new TypeError(字符串不能为空$1);
    }
    if (typeof packagename !== "string") {
        throw new TypeError(参数必须为字符串);
    }
    const findpackage = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1][packagename];
    if (findpackage) {
        return findpackage.default;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
};

define.exports = {};

function isFunction(it) {
    const op = Object.prototype;
    const ostring = op.toString;
    return "function" === typeof it && ostring.call(it) === "[object Function]";
}

function define(name, deps, callback) {
    define.exports = {};
    define.amd = true;
    const defineglobalDefQueue = [];
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
    defineglobalDefQueue.push([ name, deps, callback ]);
    const canshu = defineglobalDefQueue[0][1].map(e => myrequirefun(e));
    define.exports = defineglobalDefQueue[0][2](...canshu);
}

define.amd = true;

function assertstring(s) {
    if (s === "") {
        throw new TypeError(字符串不能为空$1);
    }
    if (typeof s !== "string") {
        throw new TypeError(参数必须为字符串);
    }
    return true;
}

function 定义default(target, def) {
    if (def[Symbol.toStringTag] === "Module" && def.default) {
        def = def.default;
    }
    Object.defineProperty(target, "default", {
        enumerable: true,
        get() {
            return def;
        }
    });
}

const 补充加载依赖的模块网址 = "补充加载依赖的模块网址";

IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1] = IMPORTCJSAMDUMD[GLOBALPACKAGESTORE$1] || {};

async function IMPORTCJSAMDUMD(...inarguments) {
    const importcjsamdumd = IMPORTCJSAMDUMD;
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

IMPORTCJSAMDUMD.REQUIREPACKAGE = getmodule;

export default IMPORTCJSAMDUMD;
//# sourceMappingURL=index.esm.js.map
