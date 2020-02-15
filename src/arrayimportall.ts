import { MODULE } from "./module";

export async function 同时发起多个字符串(
    a: Array<string>,
    importcjsamdumd: Function
): Promise<Array<MODULE>> {
    return await Promise.all(
        a.map(e => {
            return importcjsamdumd(e);
        })
    );
}

