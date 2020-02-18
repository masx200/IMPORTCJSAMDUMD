import { get } from "./coreload";
import { assertstring } from "./assertstring";
import { cachedurltotext } from "./cachedfetchtext";
export function getmodulesource(url) {
    assertstring(url);
    return get(cachedurltotext, url);
}
//# sourceMappingURL=getmodulesource.js.map