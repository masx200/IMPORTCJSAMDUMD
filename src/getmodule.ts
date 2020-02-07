import { assertstring } from "./assertstring";
import { cantfindError } from "./cantfindError";
import { packagestore, 模块仓库中没有找到 } from "./importcjsamdumd";
import { packagealias } from "./alias";

export function getmodule(packagename: string): Record<any, any> {
  assertstring(packagename);

  const findpackage =
    packagestore[packagename] || packagestore[packagealias[packagename]];
  if (findpackage) {
    Object.freeze(findpackage);
    return findpackage;
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
}
