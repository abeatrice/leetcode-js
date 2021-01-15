var assert = require('assert');
const { expect } = require('chai');
var chai = require('chai');
const runningSum = require('./../runningSum')

const tests = [{
        input: [1,2,3,4],
        expected: [ 1, 3, 6, 10]
    },{
        input: [1,1,1,1,1],
        expected: [1,2,3,4,5]
    },{
        input: [3,1,2,10,1],
        expected: [3,4,6,16,17]
    }
]

describe('runningSum()', function() {
    it('should return array of running sum', function() {
        tests.forEach(function(test) {
            var result = runningSum.runningSum(test.input);
            chai.expect(result).to.eql(test.expected);
        });
    });
});
