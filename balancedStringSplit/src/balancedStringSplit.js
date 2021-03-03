//https://leetcode.com/problems/split-a-string-in-balanced-strings/
const balancedStringSplit = (s) => {
    let c = 0, l = 0, r = 0
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? l++ : r++
        c += l === r
    }
    return c
}

module.exports = balancedStringSplit
