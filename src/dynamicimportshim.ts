"use strict";


import { assertstring } from "./assertstring";
import { getnewimportpromise } from './getnewimportpromise';
export type Module = Record<any, any>;
export { createBlob };
function createBlob(source: string) {
    return URL.createObjectURL(
        new Blob([source], { type: "application/javascript" })
    );
}

type dynamicimport = (url: string) => Promise<Module>;
const dynamicimportshimfun = (() => {
    "use strict";

    let dynamicimportshim: dynamicimport;

    try {
        dynamicimportshim = Function("u", "return import(u)") as dynamicimport;
    } catch (error) {
        dynamicimportshim = async function(url: string): Promise<Module> {
            assertstring(url);

            url = new URL(url).href;

            return await getnewimportpromise(url);
        };
    }
    return dynamicimportshim;
})();
export default dynamicimportshimfun;

