"use strict";
import { assertstring } from "./assertstring";
import { getnewimportpromise } from "./getnewimportpromise";
export { createBlob };
function createBlob(source) {
    return URL.createObjectURL(new Blob([source], { type: "application/javascript" }));
}
const dynamicimportshimfun = (() => {
    "use strict";
    let dynamicimportshim;
    try {
        dynamicimportshim = Function("u", "return import(u)");
    }
    catch (error) {
        dynamicimportshim = async function (url) {
            assertstring(url);
            url = new URL(url).href;
            return await getnewimportpromise(url);
        };
    }
    return dynamicimportshim;
})();
export default dynamicimportshimfun;
//# sourceMappingURL=dynamicimportshim.js.map