import { isArray } from "./isarray";
import { isFunction } from "./isfunction";
import { myrequirefun } from "./myrequirefun";

define.exports = {};

define.amd = true;
function define(name: any, deps?: any, callback?: any) {
  "use strict";
  define.exports = {};
  define.amd = true;
  //   const defineglobalDefQueue = [];
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
  const defineglobalDefQueue: [any, string[], Function] = [
    name,
    deps,
    callback
  ];
  const canshu = defineglobalDefQueue[1].map((e: string) => myrequirefun(e));
  define.exports = defineglobalDefQueue[2](...canshu);
}
export { define };
