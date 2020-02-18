export function promisedefer() {
    let resolve = () => { };
    let reject = () => { };
    let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { resolve, reject, promise };
}
//# sourceMappingURL=promisedefer.js.map