//在模块加载未完成的过程中，防止多次重复加载同一个模块

import { Defered } from "./promisedefer";

export const concurrentimport: Record<string, Defered> = Object.create(null);
