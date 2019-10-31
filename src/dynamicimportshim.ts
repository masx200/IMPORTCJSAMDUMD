/* eslint-disable no-empty */
"use strict";

import { get, set } from "./coreload";
import { Module } from "./importcjsamdumd";
import { assertstring } from "./assertstring";

export { createBlob };
function createBlob(source: string) {
  return URL.createObjectURL(
    new Blob([source], { type: "application/javascript" })
  );
}
// const 参数必须为字符串 = "Parameter must be a string";
// const 字符串不能为空 = "String cannot be empty";
type dynamicimport = (url: string) => Promise<Module>;
const dynamicimportshimfun = (() => {
  "use strict";

  let dynamicimportshim: dynamicimport;
  //   import('querystring')
  try {
    dynamicimportshim = Function("u", "return import(u)") as dynamicimport;
  } catch (error) {
    dynamicimportshim = async function(url: string): Promise<Module> {
      assertstring(url);
      //   if (url === "") {
      //     throw new TypeError(字符串不能为空);
      //   }
      //   if (typeof url !== "string") {
      //     throw new TypeError(参数必须为字符串);
      //   }
      url = new URL(url).href;

      return await getnewimportpromise(url);
    };
  }
  return dynamicimportshim;
})();
export default dynamicimportshimfun;
function getnewimportpromise(url: string): Promise<Module> {
  const symbolkey = Symbol.for("import-" + url);
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    function clearsideeffect() {
      removescript(s);
      removeerrorlisten(errorhandler);
      URL.revokeObjectURL(s.src);
      s.onload = s.onerror = null;
    }
    function removeerrorlisten(f: (evt: ErrorEvent) => void) {
      try {
        window.removeEventListener("error", f);
      } catch (error) {}
    }
    function removescript(e: HTMLScriptElement) {
      e.remove();
      //try {
      //   document.head.removeChild(e);
      //  } catch (error) {}
    }
    function errorhandler(e: ErrorEvent) {
      console.warn(e.error);
      reject(e.error);
      clearsideeffect();
    }
    window.addEventListener("error", errorhandler);
    const topLevelBlobUrl = createBlob(
      `import*as m from'${url}';\nwindow[Symbol.for('${"import-" + url}')]=m`
    );
    s.type = "module";
    s.src = topLevelBlobUrl;
    s.async = true;
    s.onload = () => {
      if (
        Reflect.has(window, symbolkey)
        /* symbolkey in */
      ) {
        const moduleoutput = get(window, symbolkey);
        resolve(moduleoutput /* [Symbol.for("import-" + url)] */);
        set(window, symbolkey, undefined);
        clearsideeffect();
      }
    };
    s.onerror = () => {
      reject(new Error("import load failed from network" + url));
      clearsideeffect();
    };
    document.head.appendChild(s);
  });
}
