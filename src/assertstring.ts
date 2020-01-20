import { 参数必须为字符串, 字符串不能为空 } from "./importcjsamdumd";

export function assertstring(s: string): asserts s is string {
  if (s === "") {
    throw new TypeError(字符串不能为空);
  }
  if (typeof s !== "string") {
    throw new TypeError(参数必须为字符串);
  }
  
}
