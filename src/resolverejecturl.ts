import { AsyncFunctionconstructor } from "./AsyncFunctionconstructor";
import { CODETYPE, fetchtext as cachedfetchtext } from "./cachedfetchtext";
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
import {
    // depssymbol,
    MODULE,
    MODULETYPE,
    // sourcesymbol,
    // typesymbol,
    urlsymbol
} from "./module";
import { myrequirefun } from "./myrequirefun";
import { removerepetition } from "./remove-repetiton";
import { parseDependencies } from "./util-deps";
export async function 主核心加载模块函数(
    url: string,
    resolve: (value?: any) => void,
    reject: (reason?: any) => void
) {
    // return ((resolve, reject) => {
    //  return (async () => {
    try {
        //   return await (async () => {
        let fetchpromisetext: string;
        let codetype: CODETYPE | undefined;
        // try {
        try {
            [fetchpromisetext, codetype] = await cachedfetchtext(url);
        } catch (e) {
            console.warn(e);
            reject(e);
            return;
        }
        const moduleexport: MODULE = createnullobj() as MODULE;
        moduleexport[urlsymbol] = url;
        let moduletype: MODULETYPE;
        const scripttext = fetchpromisetext;
        // let modulesrcfun: string;
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            defineProperty(moduleexport, Symbol.toStringTag, {
                value: "Module"
            });
        }
        //modulesrcfun = scripttext;
        set(cachemoduledeps, url, []);
        // moduleexport[depssymbol] = [];
        // moduleexport[sourcesymbol] = modulesrcfun;
        if ("json" === codetype) {
            const moduleexportdefault = JSON.parse(scripttext);
            //   console.log("检测到json模块 " + url);
            moduletype = "json";
            //json可能我是对象或者数组，或者空，其他
            if (moduleexportdefault) {
                if (isplainobject(moduleexportdefault)) {
                    esmdefinegetter(moduleexport, moduleexportdefault);
                } else {
                    定义default(moduleexport, moduleexportdefault);
                }
            }
            set(cachemoduletype, url, moduletype);
            // moduleexport[typesymbol] = moduletype;
            Object.freeze(moduleexport);
            packagestore[url] = moduleexport;
            // Object.freeze()
            resolve(moduleexport);
            return;
        } else if ("js" === codetype) {
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
                    const 模块加载函数 =
                        get(cacheurltocjsfun, url) ??
                        new AsyncFunctionconstructor(...funparams, funbody);
                    set(cacheurltocjsfun, url, 模块加载函数);
                    //   console.log(模块加载函数);
                    const moduleexportdeps = removerepetition(
                        mapaliastourl(
                            parseDependencies(scripttext).map(urlorname => {
                                return getnormalizedurl(urlorname, url);
                            })
                        )
                    );
                    set(cachemoduledeps, url, moduleexportdeps);
                    //   console.log(moduleexport[depssymbol]);
                    await importcjsamdumd(moduleexportdeps);
                    let amdfactory:
                        | Function
                        | Record<any, any>
                        | undefined = () => {};
                    const require_require = (name: string) =>
                        formatedurlrequire(name, url);
                    const define_define = (
                        name: any,
                        deps?: any,
                        callback?: any
                    ) => {
                        const defineglobalDefQueue = define(name, deps, callback);
                        isamd = true;
                        amdfactory = defineglobalDefQueue[2];
                        const moduleexportdeps =
                            // moduleexport[depssymbol]
                            removerepetition(
                                mapaliastourl(
                                    defineglobalDefQueue[1].map(urlorname => {
                                        return getnormalizedurl(urlorname, url);
                                    })
                                )
                            );
                        set(cachemoduledeps, url, moduleexportdeps);
                    };
                    Object.assign(define_define, {
                        amd: true,
                        cmd: true
                    });
                    // define_define.cmd = true;
                    // define_define.amd = true;
                    /* 支持顶层await和async函数了*/
                    await 模块加载函数.call(
                        module.exports,
                        require_require,
                        exports_exports,
                        module,
                        define_define
                    );
                    if (isamd) {
                        const moduleexportdeps =
                            get(cachemoduledeps, url) || [];
                        moduletype = "amd";
                        // console.log(moduleexport[depssymbol]);
                        await importcjsamdumd(
                            moduleexportdeps
                            // moduleexport[depssymbol]
                        );
                        /*允许factory函数返回promise*/
                        /*factory也可以是个对象*/
                        /*如果cmd/amd模块没有依赖，则函数调用参数为[require,exports,module]*/
                        let amdcallargs: any[];
                        if (moduleexportdeps.length) {
                            amdcallargs = moduleexportdeps.map((e: string) =>
                                myrequirefun(e)
                            );
                        } else {
                            amdcallargs = [
                                require_require,
                                exports_exports,
                                module
                            ];
                        }
                        /*

function包含在object当中了
*/
                        let define_exports: any;
                        if (isFunction(amdfactory)) {
                            define_exports = amdfactory.call(
                                module.exports,
                                ...amdcallargs
                            );
                        } else if (isobject(amdfactory)) {
                            define_exports = amdfactory;
                        }
                        //       ? amdfactory
                        //    : isFunction(amdfactory) &&
                        define_exports = await define_exports;
                        !!define_exports && (module.exports = define_exports);
                    } else {
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
                } catch (e) {
                    console.warn(e);
                    //  {
                    if (e instanceof SyntaxError) {
                        const topLevelBlobUrl = url;
                        try {
                            const exportdefault = await dynamicimportshim(
                                topLevelBlobUrl
                            );
                            // moduleexport[depssymbol] = [];
                            set(cachemoduledeps, url, []);
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
                    //     }
                }
                // moduleexport[typesymbol] = moduletype;
                set(cachemoduletype, url, moduletype);
                packagestore[url] = moduleexport;
                if (moduleexport.default) {
                    esmdefinegetter(moduleexport, moduleexport.default);
                }
                //如果模块没有任何导出，或者导出只有一个空对象，则设定default
                if (Object.keys(moduleexport).length === 0) {
                    set(moduleexport, "default", {});
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
        // } catch (e) {
        //     console.warn(e);
        //     reject(e);
        //     return;
        // }
        //   })();
    } catch (e) {
        console.warn(e);
        reject(e);
        return;
    }
    //  })();
    //  })(resolve, reject);
}
