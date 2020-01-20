import { isArray } from "./isarray";
import { isFunction } from "./isfunction";

define.cmd = true;
define.amd = true;
function define(name: any, deps?: any, callback?: any): [string|undefined, string[], Function|Record<any,any>|undefined] {
  "use strict";

  if (typeof name !== "string") {
    callback = deps;
    deps = name;
    name = null;
  }
  if (!isArray(deps)) {
    callback = deps;
    deps = null;
  }
  if (!deps && isFunction(callback)) {
    deps = [];
  }
  const defineglobalDefQueue: [string|undefined, string[], Function|Record<any,any>|undefined] = [
    name,
    deps,
    callback
  ];
  //   console.log(defineglobalDefQueue);
  return defineglobalDefQueue;
}
export { define };
