// https://leetcode.com/problems/running-sum-of-1d-array/
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
const runningSum = function(nums) {
    let result = [];
    let sum = 0
    nums.forEach(num => {
        sum += num;
        result.push(sum);
    });
    return result;
};

exports.runningSum = runningSum;
