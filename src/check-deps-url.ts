import assert from "./assert";
import { isurl } from "./isurl";

export default function(deps: string[], url: string) {
    deps.forEach((d) => {
        assert(isurl(d), "unresolved dependency:" + d + ",in module:" + url);
    });
}
