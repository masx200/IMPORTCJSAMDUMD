import { assertstring } from "./assertstring";

import { myrequirefun } from "./myrequirefun";
import { getnormalizedurl } from './getnormalizedurl';

export const formatedurlrequire = (urlorname: string, url: string) => {
    assertstring(urlorname);
    if (
        String(urlorname).startsWith("./") ||
        String(urlorname).startsWith("../")
    ) {
        const formatedurl = getnormalizedurl(urlorname, url);
        return myrequirefun(formatedurl);
    } else {
        return myrequirefun(urlorname);
    }
};

