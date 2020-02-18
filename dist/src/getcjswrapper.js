import { cacheurltocjsfun } from "./cacheurltocjsfun";
import { get } from "./coreload";
import { assertstring } from "./assertstring";
export function getmodulewrapper(url) {
    assertstring(url);
    return get(cacheurltocjsfun, url);
}
//# sourceMappingURL=getcjswrapper.js.map