import { createBlob } from "./createblob.js";

let dynamicimportshim;
try {
  dynamicimportshim = Function("u", "return import(u)");
  throw Error();
} catch (error) {
  dynamicimportshim = async function(url) {
    return await new Promise((resolve, reject) => {
      url = new URL(url).href;

      window.addEventListener("error", e => {
        console.warn(e);
        reject(e.error);
      });
      const topLevelBlobUrl = createBlob(
        `import*as m from'${url}';\nwindow[Symbol.for('${"import-" + url}')]=m`
      );
      const s = document.createElement("script");
      s.type = "module";
      s.src = topLevelBlobUrl;
      document.head.appendChild(s);
      s.onload = () => {
        resolve(window[Symbol.for("import-" + url)]);
      };
      s.onerror = e => {
        console.warn(e);
        reject(e);
      };
    });
  };
}
export default dynamicimportshim;
