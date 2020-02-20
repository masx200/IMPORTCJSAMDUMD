import { assertstring } from "./assertstring";
import { cantfindError } from "./cantfindError";
import { packagestore, 模块仓库中没有找到 } from "./importcjsamdumd";
import { packagealias } from "./cachepackagealias";
export function getmodule(packagename) {
    assertstring(packagename);
    const findpackage =
        packagestore[packagename] || packagestore[packagealias[packagename]];
    if (findpackage) {
        Object.seal(findpackage);
        return findpackage;
    } else {
        throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
    }
}
//# sourceMappingURL=getmodule.js.map
