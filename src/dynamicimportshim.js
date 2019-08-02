"use strict";
// import { createBlob } from "./createblob.js";
export { createBlob };
export default dynamicimportshim;

function createBlob(source) {
  return URL.createObjectURL(
    new Blob([source], { type: "application/javascript" })
  );
}
//
/*  */
var dynamicimportshim = (() => {
  "use strict";
  const 参数必须为字符串 = "参数必须为字符串";
  const 字符串不能为空 = "字符串不能为空";

  let dynamicimportshim;
  try {
    dynamicimportshim = Function("u", "return import(u)");
    // throw Error();
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
            // window.removeEventListener("error", errorhandler);
            URL.revokeObjectURL(s.src);
          }
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
            console.warn(e.error);
            reject(e.error);
            /*
            removescript(s);
            removeerrorlisten(errorhandler);
            // window.removeEventListener("error", errorhandler);
    URL.revokeObjectURL(s.src)      
    */
            clearsideeffect();
          }
          window.addEventListener("error", errorhandler);
          const topLevelBlobUrl = createBlob(
            `import*as m from'${url}';\nwindow[Symbol.for('${"import-" +
              url}')]=m`
            /* TypeError: Unable to set property 'Symbol(import-https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js)' of undefined or null reference at Anonymous function (blob:http://127.0.0.1:8080/4f31c6d8-3282-4466-b04b-9952068d51e0:2:1) at module (blob:http://127.0.0.1:8080/4f31c6d8-3282-4466-b04b-9952068d51e0:1:1) */
            // `import*as m from'${url}';\ndocument.currentScript[Symbol.for('${"import-" +
            //   url}')]=m`
          );

          s.type = "module";
          s.src = topLevelBlobUrl;
          s.async = true;

          // const
          s.onload = () => {
            // resolve(s[Symbol.for("import-" + url)]);
            // Reflect.deleteProperty(s, Symbol.for("import-" + url));
            resolve(window[Symbol.for("import-" + url)]);
            Reflect.deleteProperty(window, Symbol.for("import-" + url));
            // document.head.removeChild(s);
            // try {
            //   document.head.removeChild(s);
            // } catch (error) {
            //   //
            // }
            /* removescript(s);
            removeerrorlisten(errorhandler);
            // window.removeEventListener("error", errorhandler);
       
    URL.revokeObjectURL(s.src)
    */
            clearsideeffect();
          };
          s.onerror = () => {
            //e是EVENT!
            // console.warn(e);
            reject(new TypeError("import load failed from network"));
            /* EDGE浏览器中先触发onerror事件! */
            /* 在chrome和firefox中则不是 */
            /* TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../". */
            /* TypeError: "Error resolving module specifier: vue" */
            // document.head.removeChild(s);
            // window.removeEventListener("error", errorhandler);
            /*  removeerrorlisten(errorhandler);
            // try {
            //   document.head.removeChild(s);
            // } catch (error) {
            //   //
            // }
            removescript(s);
        
    URL.revokeObjectURL(s.src)
    */
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

//export default dynamicimportshim;
