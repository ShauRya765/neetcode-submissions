class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // set to hold chars in current window
        // left = 0, maxLen = 0

        // for right from 0 to end:
        //   while s[right] is already in set:
        //     remove s[left] from set
        //     left++
        //   add s[right] to set
        //   window length = right - left + 1
        //   maxLen = max(maxLen, window length)

        // return maxLen
        let set = new Set();
        let left = 0, maxLen = 0

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++
            }
            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;

    }
}
