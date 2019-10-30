export default async function(url: string) {
  const cachedtext = Reflect.get(cachedurltotext, url);
  //   cachedurltotext.get(url);
  if (cachedtext) {
    return cachedtext;
  } else {
    const textsource = await fetch(url).then(async response => {
      if (!response.ok) {
        throw new Error("fetch failed " + url);
      }
      return await response.text();
    });
    Reflect.set(cachedurltotext, url, textsource);
    // cachedurltotext.set(url, textsource);
    return textsource;
  }
}
const cachedurltotext: Record<string, string> = {}; // new Map<string, string>();
