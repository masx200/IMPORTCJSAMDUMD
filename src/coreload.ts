import { concurrentimport } from "./cacheconcurrentimport";
import { promisedefer } from "./promisedefer";
import { 主核心加载模块函数 } from "./resolverejecturl";

export const { get, set, defineProperty } = Reflect;

export const 加载的模块没有输出 = "加载的模块没有输出";

const timeout = 10 * 1000;
export default async function(url: string): Promise<Record<string, any>> {
    /*在模块加载未完成的过程中，防止多次重复加载同一个模块
     */
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            reject(new Error("import module timeout:" + url));
        }, timeout);
        /*  const mod = */

        // await (async () => {
        const loadpro = concurrentimport?.[url]?.promise;
        if (loadpro) {
            resolve(Promise.resolve(loadpro));
            return;
        } else {
            const defered = promisedefer();
            concurrentimport[url] = defered;
            try {
                const module = (await new Promise((resolve, reject) =>
                    主核心加载模块函数(url, resolve, reject)
                )) as any;
                defered.resolve(module);
                resolve(module);
                return;
            } catch (e) {
                defered.reject(e);
                /* 如果加载失败允许重新加载 */
                setTimeout(() => {
                    Reflect.set(concurrentimport, url, undefined);
                }, 0);
                console.warn(e);
                reject(e);
                return;
            }
        }
        // })();
        // resolve(mod);
    });
}
