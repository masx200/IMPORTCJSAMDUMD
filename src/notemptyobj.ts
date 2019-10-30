export function 非空对象(o: any) {
  return !!(
    typeof o !== "object" ||
    Object.keys(o).length ||
    JSON.stringify(o) !== "{}"
  );
}
