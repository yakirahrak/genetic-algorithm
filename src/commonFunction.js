export function getRandomItemFromArray(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}