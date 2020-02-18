import { get } from "./coreload";
import { cachemoduletype } from "./cachemoduletype";
import { assertstring } from "./assertstring";
export function getmoduletype(url) {
    assertstring(url);
    return get(cachemoduletype, url);
}
//# sourceMappingURL=getmoduletype.js.map