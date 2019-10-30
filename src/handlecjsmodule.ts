// import { define } from "./IMPORTCJSAMDUMD";
import { 定义default } from "./define-default";
import { 非空对象 } from "./notemptyobj";
import { 加载的模块没有输出 } from "./coreload";
import { define } from "./define";

export function 处理非es模块(
  moduleexport: { default: any },
  exportmodule: any[],
  url: string,
  packagename: string | undefined
) {
  if (typeof exportmodule === "undefined") {
    exportmodule = [{}, {}, {}];
  }
  if (typeof define.exports === "undefined") {
    define.exports = {};
  }

  if (非空对象(exportmodule[0])) {
    const exportdefault = exportmodule[0];
    定义default(moduleexport, exportdefault);
  } else if (非空对象(exportmodule[1])) {
    const exportdefault = exportmodule[1];
    定义default(moduleexport, exportdefault);
  } else if (非空对象(exportmodule[2])) {
    const exportdefault = exportmodule[2];
    定义default(moduleexport, exportdefault);
  } else {
    console.warn(加载的模块没有输出, url, packagename);
    /*   reject(
          Error(
            加载的模块没有输出 + " " + packagename + " " + url
          )
        );
        return;*/
  }
}
