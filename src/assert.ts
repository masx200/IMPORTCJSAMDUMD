export default function(con: boolean, msg: string): asserts con {
    if (!con) {
        throw TypeError(msg);
    }
}
