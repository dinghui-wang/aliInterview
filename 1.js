const arr = [2, 5, 1, 5, 6, 3, 3]


const getMatch = (arr, target) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result
}

console.log(getMatch(arr, 8));


// 需要下载Jest单元测试框架
describe('getMatch', () => {
    it('测试getMatch', () => {
        expect(getMatch(arr, 8).toEqual([[2, 6], [5, 3], [5, 3], [5, 3], [5, 3]]))
    })
})