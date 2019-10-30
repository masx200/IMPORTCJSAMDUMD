export async function 同时发起多个字符串(
  a: Array<string>,
  importcjsamdumd: Function
) {
  return await Promise.all(
    a.map(e => {
      return importcjsamdumd(e);
    })
  );
}
export async function 同时发起多个entries(
  a: any[][],
  importcjsamdumd: Function
) {
  return await Promise.all(
    a.map(e => {
      return importcjsamdumd(e[0], e[1]);
    })
  );
}
