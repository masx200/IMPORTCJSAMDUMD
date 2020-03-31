export function assert_url(url: string) {
    try {
        url = new URL(url).href;
    } catch {
        throw Error("invalid url " + url);
    }
}
