export function mapaliastourl(arr) {
    return arr.map(name => {
        var _a;
        if (isurl(name)) {
            return name;
        }
        else {
            return _a = packagealias[name], (_a !== null && _a !== void 0 ? _a : name);
        }
    });
}
import { packagealias } from "./cachepackagealias";
import { isurl } from "./isurl";
//# sourceMappingURL=mapaliastourl.js.map