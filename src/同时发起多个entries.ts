import { MODULE } from "./module";
export async function 同时发起多个entries(
    a: any[][],
    importcjsamdumd: Function
): Promise<Array<MODULE>> {
    return await Promise.all(
        a.map(e => {
            return importcjsamdumd(e[0], e[1]);
        })
    );
}
