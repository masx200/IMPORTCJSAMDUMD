export function 定义default(
  target: { default: undefined },
  def: { [x: string]: string; default: any }
) {
  if (
    Reflect.get(def, Symbol.toStringTag) ===
      /* def[Symbol.toStringTag] */ "Module" &&
    def.default
  ) {
    def = def.default;
  }
  Object.defineProperty(target, "default", {
    enumerable: true,
    get() {
      return def;
    }
  });
}
