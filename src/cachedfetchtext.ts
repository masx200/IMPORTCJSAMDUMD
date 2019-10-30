export default async function(url: string) {
  const cachedtext = cachedurltotext.get(url);
  if (cachedtext) {
    return cachedtext;
  } else {
    const textsource = await fetch(url).then(async response => {
      if (!response.ok) {
        throw new Error("fetch failed " + url);
      }
      return await response.text();
    });
    cachedurltotext.set(url, textsource);
    return textsource;
  }
}
const cachedurltotext = new Map<string, string>();
