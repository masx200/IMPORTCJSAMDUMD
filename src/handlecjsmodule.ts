// import { define } from "./IMPORTCJSAMDUMD";
import { 加载的模块没有输出 } from "./coreload";
import { define } from "./define";
import { 非空对象 } from "./notemptyobj";

export function 处理非es模块(
  //   moduleexport: { default: any },
  exportmodule: any[],
  url: string,
  packagename: string | undefined
) {
  /* if (typeof exportmodule === "undefined") {
    exportmodule = [{}, {}, {}];
  } */
  if (typeof define.exports === "undefined") {
    define.exports = {};
  }

  if (非空对象(exportmodule[0])) {
    const exportdefault = exportmodule[0];
    return exportdefault;
    // 定义default(moduleexport, exportdefault);
  } else if (非空对象(exportmodule[1])) {
    const exportdefault = exportmodule[1];
    // 定义default(moduleexport, exportdefault);
    return exportdefault;
  } else if (非空对象(exportmodule[2])) {
    const exportdefault = exportmodule[2];
    return exportdefault;
    // 定义default(moduleexport, exportdefault);
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
