import { packagealias } from "./alias";
import { 同时发起多个字符串 } from "./arrayimportall.js";
import { assertstring } from "./assertstring.js";
import coreload, { get } from "./coreload.js";
import { getmodule } from "./getmodule.js";
import { packagestore } from "./importcjsamdumd";
import { isArray } from "./isarray.js";
import { urlsymbol } from "./module.js";
const 输入的类型错误输入的类型必须是字符串或者数组或对象 =
    "The type entered is incorrect, the type entered must be a string or an array ";

//export const 传入的参数必须是个object =
// "The argument passed in must be an object";
export type PlainObj = Record<any, any>;

export default oldimportcjsamdumd;

async function oldimportcjsamdumd(url: any, packagename?: any): Promise<any> {
    "use strict";

    if (isArray(url)) {
        return await (async (...args) => {
            let suoyouimportpromise = [];
            const 传入参数arr = args;
            try {
                suoyouimportpromise = await 同时发起多个字符串(
                    传入参数arr,
                    oldimportcjsamdumd
                );
            } catch (error) {
                console.warn(error);
                suoyouimportpromise = await 同时发起多个字符串(
                    传入参数arr,
                    oldimportcjsamdumd
                );
            } finally {
                suoyouimportpromise = await 同时发起多个字符串(
                    传入参数arr,
                    oldimportcjsamdumd
                );
            }
            return suoyouimportpromise;
        })(...url);
    } else if (typeof url === "string" || typeof packagename === "string") {
        assertstring(url);

        try {
            url = new URL(url).href;
        } catch {
            url = packagealias[url] ?? url;
        }
        return await (async (url: string, packagename?: string) => {
            /* 转换相对路径 */
            if (String(url).startsWith("./") || String(url).startsWith("../")) {
                var urlobj = new URL(url, location.href);
                url = urlobj.origin + urlobj.pathname;
            }
            try {
                url = new URL(url).href;
            } catch {
                throw Error("invalid url " + url);
            }
            if (typeof packagename === "undefined") {
                packagename = new URL(url).href;
            }
            if (packagename) {
                packagealias[packagename] = url;
            }
            if (
                typeof packagestore[packagename] !== "undefined" &&
                get(packagestore[packagename], urlsymbol) === url
            ) {
                return getmodule(packagename);
            } else if (
                typeof packagestore[url] !== "undefined" &&
                get(packagestore[url], urlsymbol) === url
            ) {
                return getmodule(url);
            } else {
                return await coreload(url /*, packagename*/);
            }
        })(url, packagename);
    } else {
        throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
    }
}
