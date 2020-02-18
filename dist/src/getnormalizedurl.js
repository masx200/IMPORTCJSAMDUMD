import { getbaseurl } from "./getbaseurl";
import { 格式化url } from "./formaturl";
export function getnormalizedurl(relativeurl, url) {
    if (String(relativeurl).startsWith("./") ||
        String(relativeurl).startsWith("../")) {
        const baseurl = getbaseurl(url);
        const formatedurl = 格式化url(baseurl, relativeurl);
        return formatedurl;
    }
    else {
        return relativeurl;
    }
}
//# sourceMappingURL=getnormalizedurl.js.map