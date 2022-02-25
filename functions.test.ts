const {shuffleArray} = require('./utils')

describe('shuffleArray should:', () => {
    test(`returnsArray?`, () => {
        let arr = shuffleArray([1,2,3,4,5,6])
        expect(Array.isArray(arr)).toBe(true)
    })

    test(`Array has all items`, () => {
        let arr = shuffleArray([1,2,3,4,5,6])
        expect(arr.length).toBe(6)
    })
})