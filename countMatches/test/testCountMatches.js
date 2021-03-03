const assert = require('chai').assert
const countMatches = require('../src/countMatches')

describe('countMatches()', function() {
    const tests = [
        {
            items: [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
            ruleKey: "color",
            ruleValue: "silver",
            expected: 1
        },
        {
            items: [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
            ruleKey: "type",
            ruleValue: "phone",
            expected: 2
        },
    ]

    tests.forEach(function({items, ruleKey, ruleValue, expected}) {
        it('should return a count of matches', function() {
            const result = countMatches(items, ruleKey, ruleValue)
            assert.equal(result, expected)
        })
    })
})
