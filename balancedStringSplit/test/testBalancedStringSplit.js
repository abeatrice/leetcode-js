const assert = require('chai').assert
const balancedStringSplit = require('../src/balancedStringSplit')

describe('balancedStringSplit()', function() {
    const testItems = [
        {
            s: "RLRRLLRLRL",
            expected: 4
        },
        {
            s: "RLLLLRRRLR",
            expected: 3
        },
        {
            s: "LLLLRRRR",
            expected: 1
        },
        {
            s: "RLRRRLLRLL",
            expected: 2
        },
    ]

    testItems.forEach(function(testItem) {
        it('should return count of balanced string split', function() {
            const result = balancedStringSplit(testItem.s)
            assert.equal(result, testItem.expected)
        })
    })
})
