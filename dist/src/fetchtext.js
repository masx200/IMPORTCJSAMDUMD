import { set, get } from "./coreload";
import { cachedurltotext, cachedurltotype } from "./cachedfetchtext";
export async function fetchtext(url) {
    var _a, _b;
    let codetype;
    const cachedtext = get(cachedurltotext, url);
    const cachedtype = get(cachedurltotype, url);
    if (cachedtext && cachedtype) {
        return [cachedtext, cachedtype];
    }
    else {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("fetch failed " + url);
        }
        const contenttype = response.headers.get("content-type");
        if ((_a = contenttype) === null || _a === void 0 ? void 0 : _a.includes("javascript")) {
            codetype = "js";
        }
        else if ((_b = contenttype) === null || _b === void 0 ? void 0 : _b.includes("json")) {
            codetype = "json";
        }
        else {
            throw new Error("Invalid content-type: " + contenttype);
        }
        const textsource = await response.text();
        set(cachedurltotext, url, textsource);
        set(cachedurltotype, url, codetype);
        return [textsource, codetype];
    }
}
//# sourceMappingURL=fetchtext.js.map