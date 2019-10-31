import { assertstring } from "./assertstring";

export function isurl(url: string) {
  var flag = false;
  try {
    assertstring(url);
    // if (url === "") {
    //   throw new TypeError(字符串不能为空);
    // }
    // if (typeof url !== "string") {
    //   throw new TypeError(参数必须为字符串);
    // }
    url = new URL(url).href;
    flag = true;
  } catch (error) {
    flag = false;
  }
  return flag;
}
