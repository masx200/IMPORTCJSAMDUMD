import { assertstring } from "./assertstring";
import { cantfindError } from "./cantfindError";
import { packagestore, 模块仓库中没有找到 } from "./importcjsamdumd";
import { packagealias } from "./cachepackagealias";
export const myrequirefun = function requireinstead(packagename) {
    var _a;
    assertstring(packagename);
    const findpackage = packagestore[packagename] || packagestore[packagealias[packagename]];
    if (findpackage) {
        Object.freeze(findpackage);
        return _a = findpackage.default, (_a !== null && _a !== void 0 ? _a : findpackage);
    }
    else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
};
//# sourceMappingURL=myrequirefun.js.map