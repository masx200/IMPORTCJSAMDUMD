import { assertstring } from "./assertstring";
import { myrequirefun } from "./myrequirefun";
import { getnormalizedurl } from "./getnormalizedurl";
export const formatedurlrequire = (urlorname, url) => {
    assertstring(urlorname);
    if (String(urlorname).startsWith("./") ||
        String(urlorname).startsWith("../")) {
        const formatedurl = getnormalizedurl(urlorname, url);
        return myrequirefun(formatedurl);
    }
    else {
        return myrequirefun(urlorname);
    }
};
//# sourceMappingURL=formatedurlrequire.js.map