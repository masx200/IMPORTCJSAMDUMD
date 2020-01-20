import { set, get } from "./coreload";
export type CODETYPE = "json" | "js";
export default async function(url: string): Promise<[string, CODETYPE]> {
  let codetype: CODETYPE | undefined;
  const cachedtext = get(cachedurltotext, url);
  
  if (cachedtext) {
    return cachedtext;
  } else {
    const textsource = await fetch(url).then(async response => {
      if (!response.ok) {
        throw new Error("fetch failed " + url);
      }
      const contenttype = response.headers.get("content-type");
      if (contenttype?.includes("javascript")) {
        codetype = "js";
      } else if (contenttype?.includes("json")) {
        codetype = "json";
      } else {
        throw new Error("invalid content-type " + codetype);
      }
      return await response.text();
    });
    set(cachedurltotext, url, textsource);
    
    if (!codetype) {
      throw new Error();
    }
    return [textsource, codetype];
  }
}
const cachedurltotext: Record<string, string> = {}; 
