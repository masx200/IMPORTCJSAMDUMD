import { packagealias } from "./cachepackagealias";
import { getallmodules } from "./getallmodules.js";
import { getmodulewrapper } from "./getcjswrapper";
import { getmoduledeps } from "./getmoduledeps";
import getmoduleids from "./getmoduleids";
import { getmodulesource } from "./getmodulesource";
import { getmoduletype } from "./getmoduletype";
import importcjsamdumd, { requirepackage } from "./importcjsamdumd.js";
const dynamicimport=importcjsamdumd
export default importcjsamdumd
export { requirepackage, dynamicimport };
export { packagealias };
export { getallmodules };
export { getmoduletype, getmoduledeps };
export { getmodulesource };
export { getmodulewrapper };
export { getmoduleids };
