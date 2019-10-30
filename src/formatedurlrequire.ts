import { getbaseurl } from "./getbaseurl";
import { assertstring } from "./assertstring";
// import { myrequirefun } from "./IMPORTCJSAMDUMD";
import { 格式化url } from "./formaturl";
import { myrequirefun } from "./myrequirefun";

export const formatedurlrequire = (urlorname: string, url: string) => {
  assertstring(urlorname);
  // urlorname = String(urlorname);
  /*   if (urlorname === "") {
        throw new TypeError(字符串不能为空);
      } */

  const baseurl = getbaseurl(url);
  const formatedurl = 格式化url(baseurl, urlorname);
  return myrequirefun(formatedurl);
};
