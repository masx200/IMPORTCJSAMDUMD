import { assertstring } from "./assertstring";
import { cantfindError } from "./cantfindError";
import { PACKAGESTORE, 模块仓库中没有找到 } from "./importcjsamdumd";

export const myrequirefun = function requireinstead(packagename: string) {
  assertstring(packagename);
  //   "use strict";
  //   if (packagename === "") {
  //     throw new TypeError(字符串不能为空);
  //   }
  //   if (typeof packagename !== "string") {
  //     throw new TypeError(参数必须为字符串);
  //   }
  const findpackage = PACKAGESTORE[packagename];
  if (findpackage) {
    Object.freeze(findpackage);
    return findpackage.default ? findpackage.default : findpackage;
  } else {
    throw new cantfindError(模块仓库中没有找到 + packagename, packagename);
  }
};
