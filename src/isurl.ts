import { assertstring } from "./assertstring";

export function isurl(url: string) {
  var flag = false;
  try {
    assertstring(url);
    
    
    
    
    
    
    url = new URL(url).href;
    flag = true;
  } catch (error) {
    flag = false;
  }
  return flag;
}
