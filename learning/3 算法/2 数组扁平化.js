function flatten(arr) {
    let result = [];
    arr.map((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}
const arr = [[1, 2, 3], 4, [5, 6]];
console.log(flatten(arr));
