import { PlainObj, 传入的参数必须是个object } from "./oldimport";

export function newobjjson(obj: PlainObj) {
  if (typeof obj !== "object") {
    throw new TypeError(传入的参数必须是个object);
  }
  return JSON.parse(JSON.stringify(obj));
}
