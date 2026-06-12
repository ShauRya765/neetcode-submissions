class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pairs = { ')': '(', '}': '{', ']': '[' }

        for (const char of s) {
            if (char in pairs) {
                if (stack[stack.length - 1] === pairs[char]) {
                    stack.pop()
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0
    }
}
