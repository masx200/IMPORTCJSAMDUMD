export function removerepetition<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}
