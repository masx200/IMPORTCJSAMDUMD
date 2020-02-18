import { AsyncFunctionconstructor } from "./AsyncFunctionconstructor";
import { fetchtext as cachedfetchtext } from "./cachedfetchtext";
import { cachemoduledeps } from "./cachemoduledeps";
import { cachemoduletype } from "./cachemoduletype";
import { cacheurltocjsfun } from "./cacheurltocjsfun";
import { defineProperty, get, set } from "./coreload";
import createnullobj from "./createnullobj";
import { 定义default } from "./define-default";
import { define } from "./definequeue.js";
import dynamicimportshim from "./dynamicimportshim.js";
import { esmdefinegetter } from "./esmdefinegetter";
import { formatedurlrequire } from "./formatedurlrequire.js";
import { getnormalizedurl } from "./getnormalizedurl";
import { 处理非es模块 } from "./handlecjsmodule.js";
import importcjsamdumd, { packagestore } from "./importcjsamdumd.js";
import { isFunction } from "./isfunction";
import { isobject } from "./isobject";
import { isplainobject } from "./isplainobject";
import { mapaliastourl } from "./mapaliastourl";
import { urlsymbol } from "./module";
import { myrequirefun } from "./myrequirefun";
import { removerepetition } from "./remove-repetiton";
import { parseDependencies } from "./util-deps";
export async function 主核心加载模块函数(url, resolve, reject) {
    var _a;
    try {
        let fetchpromisetext;
        let codetype;
        try {
            [fetchpromisetext, codetype] = await cachedfetchtext(url);
        }
        catch (e) {
            console.warn(e);
            reject(e);
            return;
        }
        const moduleexport = createnullobj();
        moduleexport[urlsymbol] = url;
        let moduletype;
        const scripttext = fetchpromisetext;
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            defineProperty(moduleexport, Symbol.toStringTag, {
                value: "Module"
            });
        }
        set(cachemoduledeps, url, []);
        if ("json" === codetype) {
            const moduleexportdefault = JSON.parse(scripttext);
            moduletype = "json";
            if (moduleexportdefault) {
                if (isplainobject(moduleexportdefault)) {
                    esmdefinegetter(moduleexport, moduleexportdefault);
                }
                else {
                    定义default(moduleexport, moduleexportdefault);
                }
            }
            set(cachemoduletype, url, moduletype);
            Object.freeze(moduleexport);
            packagestore[url] = moduleexport;
            resolve(moduleexport);
            return;
        }
        else if ("js" === codetype) {
            try {
                const exports_exports = {
                    [Symbol.toStringTag]: "Module"
                };
                const module = {
                    exports: { [Symbol.toStringTag]: "Module" }
                };
                try {
                    let isamd = false;
                    const funparams = [
                        "require",
                        "exports",
                        "module",
                        "define"
                    ];
                    const funbody = `"use strict";\n/* ${url} */;\n;${scripttext};\n;/* ${url} */;\n`;
                    const 模块加载函数 = (_a = get(cacheurltocjsfun, url), (_a !== null && _a !== void 0 ? _a : new AsyncFunctionconstructor(...funparams, funbody)));
                    set(cacheurltocjsfun, url, 模块加载函数);
                    const moduleexportdeps = removerepetition(mapaliastourl(parseDependencies(scripttext).map(urlorname => {
                        return getnormalizedurl(urlorname, url);
                    })));
                    set(cachemoduledeps, url, moduleexportdeps);
                    await importcjsamdumd(moduleexportdeps);
                    let amdfactory = () => { };
                    const require_require = (name) => formatedurlrequire(name, url);
                    const define_define = (name, deps, callback) => {
                        const defineglobalDefQueue = define(name, deps, callback);
                        isamd = true;
                        amdfactory = defineglobalDefQueue[2];
                        const moduleexportdeps = removerepetition(mapaliastourl(defineglobalDefQueue[1].map(urlorname => {
                            return getnormalizedurl(urlorname, url);
                        })));
                        set(cachemoduledeps, url, moduleexportdeps);
                    };
                    Object.assign(define_define, {
                        amd: true,
                        cmd: true
                    });
                    await 模块加载函数.call(module.exports, require_require, exports_exports, module, define_define);
                    if (isamd) {
                        const moduleexportdeps = get(cachemoduledeps, url) || [];
                        moduletype = "amd";
                        await importcjsamdumd(moduleexportdeps);
                        let amdcallargs;
                        if (moduleexportdeps.length) {
                            amdcallargs = moduleexportdeps.map((e) => myrequirefun(e));
                        }
                        else {
                            amdcallargs = [
                                require_require,
                                exports_exports,
                                module
                            ];
                        }
                        let define_exports;
                        if (isFunction(amdfactory)) {
                            define_exports = amdfactory.call(module.exports, ...amdcallargs);
                        }
                        else if (isobject(amdfactory)) {
                            define_exports = amdfactory;
                        }
                        define_exports = await define_exports;
                        !!define_exports && (module.exports = define_exports);
                    }
                    else {
                        moduletype = "cjs";
                    }
                    !module.exports &&
                        (module.exports = {
                            [Symbol.toStringTag]: "Module"
                        });
                    const exportmodule = [exports_exports, module.exports];
                    const usefulexport = await 处理非es模块(exportmodule);
                    if (usefulexport) {
                        定义default(moduleexport, usefulexport);
                        esmdefinegetter(moduleexport, usefulexport);
                    }
                }
                catch (e) {
                    console.warn(e);
                    if (e instanceof SyntaxError) {
                        const topLevelBlobUrl = url;
                        try {
                            const exportdefault = await dynamicimportshim(topLevelBlobUrl);
                            set(cachemoduledeps, url, []);
                            moduletype = "esm";
                            esmdefinegetter(moduleexport, exportdefault);
                        }
                        catch (e) {
                            console.warn(e);
                            reject(e);
                            return;
                        }
                    }
                    else {
                        console.warn(e);
                        reject(e);
                        return;
                    }
                }
                set(cachemoduletype, url, moduletype);
                packagestore[url] = moduleexport;
                if (moduleexport.default) {
                    esmdefinegetter(moduleexport, moduleexport.default);
                }
                if (Object.keys(moduleexport).length === 0) {
                    set(moduleexport, "default", {});
                }
                Object.freeze(moduleexport);
                resolve(moduleexport);
                return;
            }
            catch (e) {
                console.warn(e);
                reject(e);
                return;
            }
        }
        else {
            throw new Error("invalid codetype " + codetype);
        }
    }
    catch (e) {
        console.warn(e);
        reject(e);
        return;
    }
}
//# sourceMappingURL=主核心加载模块函数.js.map