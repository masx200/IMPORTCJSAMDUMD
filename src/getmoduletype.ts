import { MODULETYPE } from "./module";
import { get } from "./coreload";
import { cachemoduletype } from "./cachemoduletype";
import { assertstring } from './assertstring';

export function getmoduletype(url: string): MODULETYPE|undefined {
    assertstring(url)
    return get(cachemoduletype, url);
}
