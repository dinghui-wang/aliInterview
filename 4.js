const getData = (data, str) => {
    const arr = str.split('.')
    let result = data
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] !== undefined) {
            result = result[arr[i]]
        } else {
            return undefined
        }

    }
    return result
}


const data = {
    a: {
        aa: {
            aaa: 'raaa'
        }
    },
    b: [{}, {}, { bb: 'rbb' }]
}

console.log(
    getData(data, 'a.aa.aaa'), // raaa
    getData(data, 'b.2.bb'), // rbb
    getData(data, 'c.cc.ccc'), // undefined
    getData(data, 'd'), // undefined
    getData(data, 'a.aa.aaa'), // undefined
)

