const log = console.log;
/**
 * @param {any[]} args
 */
export default function(...args) {
    log(...args);

    let p = document.createElement("p");
    p.innerText = JSON.stringify(
        args,
        (k, a) => {
            if (typeof a === "function") return `function ${a.name || k}(){}`;
            else return a;
        },
        4
    );
    document.body.appendChild(p);
    let hr = document.createElement("hr");
    document.body.appendChild(hr);
}
