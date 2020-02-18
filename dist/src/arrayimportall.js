export async function 同时发起多个字符串(a, importcjsamdumd) {
    return await Promise.all(a.map(e => {
        return importcjsamdumd(e);
    }));
}
//# sourceMappingURL=arrayimportall.js.map