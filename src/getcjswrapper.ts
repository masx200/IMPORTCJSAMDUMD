import { cacheurltocjsfun } from "./cacheurltocjsfun";
import { get } from "./coreload";
import { assertstring } from "./assertstring";

export function getmodulewrapper(url: string): Function | undefined {
    assertstring(url);
    return get(cacheurltocjsfun, url);
}
