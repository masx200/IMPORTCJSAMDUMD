export function createBlob (source) {
  return URL.createObjectURL(new Blob([source], { type: 'application/javascript' }));
}