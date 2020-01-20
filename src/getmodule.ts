import { assertstring } from "./assertstring";
import { cantfindError } from "./cantfindError";
import { PACKAGESTORE, 模块仓库中没有找到 } from "./importcjsamdumd";
import { packagealias } from "./alias";

export function getmodule(packagename: string) {
  assertstring(packagename);

  const findpackage =
    PACKAGESTORE[packagename] || PACKAGESTORE[packagealias[packagename]];
  if (findpackage) {
    Object.freeze(findpackage);
    return findpackage;
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
}
