import { set, get } from "./coreload";
import { CODETYPE, cachedurltotext, cachedurltotype } from "./cachedfetchtext";
export async function fetchtext(url: string): Promise<[string, CODETYPE]> {
    let codetype: CODETYPE | undefined;
    const cachedtext = get(cachedurltotext, url);
    const cachedtype = get(cachedurltotype, url);
    if (cachedtext && cachedtype) {
        return [cachedtext, cachedtype];
    } else {
        const response = await fetch(url);
        // .then(async response => {
        if (!response.ok) {
            throw new Error("fetch failed " + url);
        }
        const contenttype = response.headers.get("content-type");
        if (contenttype?.includes("javascript")) {
            codetype = "js";
        } else if (contenttype?.includes("json")) {
            codetype = "json";
        } else {
            throw new Error("Invalid content-type: " + contenttype);
        }
        //   return await response.text();
        const textsource = await response.text();
        // });
        set(cachedurltotext, url, textsource);

        // if (!codetype) {
        //   throw new Error();
        // }
        set(cachedurltotype, url, codetype);
        return [textsource, codetype];
    }
}
