import { getbaseurl } from "./getbaseurl";
import { assertstring } from "./assertstring";

import { 格式化url } from "./formaturl";
import { myrequirefun } from "./myrequirefun";

export const formatedurlrequire = (urlorname: string, url: string) => {
  assertstring(urlorname);
  if (
    String(urlorname).startsWith("./") ||
    String(urlorname).startsWith("../")
  ) {
    const formatedurl = getnormalizedurl(urlorname, url); 
    return myrequirefun(formatedurl);
  } else {
    return myrequirefun(urlorname);
  }
  


  
};
export function getnormalizedurl(relativeurl: string, url: string) {
  if (
    String(relativeurl).startsWith("./") ||
    String(relativeurl).startsWith("../")
  ) {
    const baseurl = getbaseurl(url);
    const formatedurl = 格式化url(baseurl, relativeurl);
    return formatedurl;
  } else {
    return relativeurl;
  }
}
