import { concurrentimport } from "./cacheconcurrentimport";
import { promisedefer } from "./promisedefer";
import { 主核心加载模块函数 } from "./主核心加载模块函数";
export const { get, set, defineProperty } = Reflect;
export const 加载的模块没有输出 = "加载的模块没有输出";
export default async function (url) {
    var _a, _b;
    const loadpro = (_b = (_a = concurrentimport) === null || _a === void 0 ? void 0 : _a[url]) === null || _b === void 0 ? void 0 : _b.promise;
    if (loadpro) {
        return Promise.resolve(loadpro);
    }
    else {
        const defered = promisedefer();
        concurrentimport[url] = defered;
        try {
            const module = await new Promise((resolve, reject) => 主核心加载模块函数(url, resolve, reject));
            defered.resolve(module);
            return module;
        }
        catch (e) {
            defered.reject(e);
            setTimeout(() => {
                Reflect.set(concurrentimport, url, undefined);
            }, 0);
            throw e;
        }
    }
}
//# sourceMappingURL=coreload.js.map