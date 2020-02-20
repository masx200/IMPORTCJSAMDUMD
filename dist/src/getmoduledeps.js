import { get } from "./coreload";
import { cachemoduledeps } from "./cachemoduledeps";
import { assertstring } from "./assertstring";
export function getmoduledeps(url) {
    assertstring(url);
    const deps = get(cachemoduledeps, url);
    deps && Object.seal(deps);
    return deps;
}
//# sourceMappingURL=getmoduledeps.js.map
