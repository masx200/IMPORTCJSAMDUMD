export function mapaliastourl(arr: string[]): string[] {
    return arr.map(name => {
        if (isurl(name)) {
            return name;
        } else {
            return packagealias[name] ?? name;
        }
    });
}

import { packagealias } from "./alias";
import { isurl } from "./isurl";


