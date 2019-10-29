/* eslint-disable no-empty */
"use strict";
export { createBlob };
function createBlob(source) {
  return URL.createObjectURL(
    new Blob([source], { type: "application/javascript" })
  );
}
let dynamicimportshimfun = (() => {
  "use strict";
  const 参数必须为字符串 = "参数必须为字符串";
  const 字符串不能为空 = "字符串不能为空";
  let dynamicimportshim;
  try {
    dynamicimportshim = Function("u", "return import(u)");
  } catch (error) {
    dynamicimportshim = async function(url) {
      if (url === "") {
        throw new TypeError(字符串不能为空);
      }
      if (typeof url !== "string") {
        throw new TypeError(参数必须为字符串);
      }
      url = new URL(url).href;
      function getnewimportpromise() {
        return new Promise((resolve, reject) => {
          const s = document.createElement("script");
          function clearsideeffect() {
            removescript(s);
            removeerrorlisten(errorhandler);
            URL.revokeObjectURL(s.src);
          }
          function removeerrorlisten(f) {
            try {
              window.removeEventListener("error", f);
            } catch (error) {}
          }
          function removescript(e) {
e.remove()
            //try {
           //   document.head.removeChild(e);
          //  } catch (error) {}
          }
          function errorhandler(e) {
            console.warn(e.error);
            reject(e.error);
            clearsideeffect();
          }
          window.addEventListener("error", errorhandler);
          const topLevelBlobUrl = createBlob(
            `import*as m from'${url}';\nwindow[Symbol.for('${"import-" +
              url}')]=m`
          );
          s.type = "module";
          s.src = topLevelBlobUrl;
          s.async = true;
          s.onload = () => {
            resolve(window[Symbol.for("import-" + url)]);
            Reflect.set(window, Symbol.for("import-" + url),undefined);
            clearsideeffect();
          };
          s.onerror = () => {
            reject(new Error("import load failed from network" + url));
            clearsideeffect();
          };
          document.head.appendChild(s);
        });
      }
      return await getnewimportpromise();
    };
  }
  return dynamicimportshim;
})();
export default dynamicimportshimfun;
