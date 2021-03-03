// https://leetcode.com/problems/count-items-matching-a-rule/
const countMatches = (items, ruleKey, ruleValue) => {
    const key = {"type":0, "color":1, "name":2}
    Object.freeze(key)
    let count = 0
    for (const item of items) {
        if (item[key[ruleKey]] === ruleValue) {
            count++
        }
    }
    return count
}

module.exports = countMatches
