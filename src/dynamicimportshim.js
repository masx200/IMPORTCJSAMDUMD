import { createBlob } from "./createblob.js";

let dynamicimportshim;
try {
  dynamicimportshim = Function("u", "return import(u)");
  // throw Error();
} catch (error) {
  dynamicimportshim = async function(url) {
    return await new Promise((resolve, reject) => {
      url = new URL(url).href;
      function removeerrorlisten(f) {
        try {
          window.removeEventListener("error", f);
        } catch (error) {
          //
        }
      }
      function removescript(e) {
        try {
          document.head.removeChild(e);
        } catch (error) {
          //
        }
      }
      function errorhandler(e) {
        console.warn(e);
        reject(e.error);

        removescript(s);
        removeerrorlisten(errorhandler);
        // window.removeEventListener("error", errorhandler);
      }
      window.addEventListener("error", errorhandler);
      const topLevelBlobUrl = createBlob(
        `import*as m from'${url}';\nwindow[Symbol.for('${"import-" + url}')]=m`
      );
      const s = document.createElement("script");
      s.type = "module";
      s.src = topLevelBlobUrl;
      document.head.appendChild(s);
      s.onload = () => {
        resolve(window[Symbol.for("import-" + url)]);
        Reflect.deleteProperty(window, Symbol.for("import-" + url));
        // document.head.removeChild(s);
        // try {
        //   document.head.removeChild(s);
        // } catch (error) {
        //   //
        // }
        removescript(s);
        removeerrorlisten(errorhandler);
        // window.removeEventListener("error", errorhandler);
      };
      s.onerror = e => {
        console.warn(e);
        reject(e);
        // document.head.removeChild(s);
        // window.removeEventListener("error", errorhandler);
        removeerrorlisten(errorhandler);
        // try {
        //   document.head.removeChild(s);
        // } catch (error) {
        //   //
        // }
        removescript(s);
      };
    });
  };
}
export default dynamicimportshim;
