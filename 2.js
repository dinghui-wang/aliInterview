const deepEqual = (a, b) => {
    if (a === b) { // 基本类型直接比较
        return true
    }
    if (typeof a !== typeof b) {
        return false
    }
    if (typeof a === 'object') { // array 和 object
        const keys1 = Object.keys(a);
        const keys2 = Object.keys(b);
        if (keys1.length !== keys2.length) {
            return false
        }
        for (let i = 0; i < keys1.length; i++) {
            if (!deepEqual(a[keys1[i]], b[keys1[i]])) {
                return false
            }
        }
        return true
    }
    return a === b
}

console.log(
    deepEqual(1, 1),// => true
    deepEqual(1, 2), // => false
    deepEqual(1, '1'), // => false
    deepEqual([1, 2], [1, 2]), // => true
    deepEqual([1, { a: 1, b: null }], [1, { a: 1, b: null }]), // => true
    deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), // => true
    deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }), // => false
    deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] }),// => true
)