import { packagealias } from "./cachepackagealias";
import { 同时发起多个字符串 } from "./arrayimportall.js";
import { assertstring } from "./assertstring.js";
import coreload, { get } from "./coreload.js";
import { getmodule } from "./getmodule.js";
import { packagestore } from "./importcjsamdumd";
import { isArray } from "./isarray.js";
import { urlsymbol } from "./module.js";
const 输入的类型错误输入的类型必须是字符串或者数组或对象 = "The type entered is incorrect, the type entered must be a string or an array ";
export default oldimportcjsamdumd;
async function oldimportcjsamdumd(url, packagename) {
    "use strict";
    var _a;
    if (isArray(url)) {
        return await (async (...args) => {
            let suoyouimportpromise = [];
            const 传入参数arr = args;
            try {
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            }
            catch (error) {
                console.warn(error);
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            }
            finally {
                suoyouimportpromise = await 同时发起多个字符串(传入参数arr, oldimportcjsamdumd);
            }
            return suoyouimportpromise;
        })(...url);
    }
    else if (typeof url === "string" || typeof packagename === "string") {
        assertstring(url);
        try {
            url = new URL(url).href;
        }
        catch {
            url = (_a = packagealias[url], (_a !== null && _a !== void 0 ? _a : url));
        }
        return await (async (url, packagename) => {
            if (String(url).startsWith("./") || String(url).startsWith("../")) {
                var urlobj = new URL(url, location.href);
                url = urlobj.origin + urlobj.pathname;
            }
            try {
                url = new URL(url).href;
            }
            catch {
                throw Error("invalid url " + url);
            }
            if (typeof packagename === "undefined") {
                packagename = new URL(url).href;
            }
            if (packagename) {
                packagealias[packagename] = url;
            }
            if (typeof packagestore[packagename] !== "undefined" &&
                get(packagestore[packagename], urlsymbol) === url) {
                return getmodule(packagename);
            }
            else if (typeof packagestore[url] !== "undefined" &&
                get(packagestore[url], urlsymbol) === url) {
                return getmodule(url);
            }
            else {
                return await coreload(url);
            }
        })(url, packagename);
    }
    else {
        throw new TypeError(输入的类型错误输入的类型必须是字符串或者数组或对象);
    }
}
//# sourceMappingURL=oldimport.js.map