import { packagealias } from "./cachepackagealias";
import { getallmodules } from "./getallmodules.js";
import importcjsamdumd, {
    // packagestore,
    requirepackage
} from "./importcjsamdumd.js";
//export default importcjsamdumd;
export { /* packagestore, */ requirepackage, importcjsamdumd };
export { packagealias };
// import { cacheurltocjsfun } from "./cacheurltocjsfun.js";
// import { cachedurltotext } from "./cachedfetchtext.js";
// export { cacheurltocjsfun, cachedurltotext };
export { getallmodules };

