import { get, set } from "./coreload";
import { Module, createBlob } from "./dynamicimportshim";
export function getnewimportpromise(url: string): Promise<Module> {
    const symbolkey = Symbol.for("import-" + url);
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        function clearsideeffect() {
            removescript(s);
            removeerrorlisten(errorhandler);
            URL.revokeObjectURL(s.src);
            s.onload = s.onerror = null;
        }
        function removeerrorlisten(f: (evt: ErrorEvent) => void) {
            try {
                window.removeEventListener("error", f);
            } catch (error) {}
        }
        function removescript(e: HTMLScriptElement) {
            e.remove();
        }
        function errorhandler(e: ErrorEvent) {
            console.warn(e.error);
            reject(e.error);
            clearsideeffect();
        }
        window.addEventListener("error", errorhandler);
        const topLevelBlobUrl = createBlob(
            `import*as m from'${url}';\nwindow[Symbol.for('${"import-" +
                url}')]=m`
        );
        s.type = "module";
        s.src = topLevelBlobUrl;
        s.async = true;
        s.onload = () => {
            if (Reflect.has(window, symbolkey)) {
                const moduleoutput = get(window, symbolkey);
                resolve(moduleoutput);
                set(window, symbolkey, undefined);
                clearsideeffect();
            }
        };
        s.onerror = () => {
            reject(new Error("import load failed from network" + url));
            clearsideeffect();
        };
        document.head.appendChild(s);
    });
}
