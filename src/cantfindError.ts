export class cantfindError extends Error {
    urlorname: string;
    constructor(message: string, urlorname: string) {
        super(message);
        this.urlorname = urlorname;
    }
}
