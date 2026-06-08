class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let temp = nums.sort((a, b) => a - b);
        let counter = 1;   // every sequence has at least 1 element
        let longest = 1;   // same

        for (let i = 0; i < temp.length - 1; i++) {
            if (temp[i + 1] - temp[i] === 0) continue;        // duplicate, skip
            if (temp[i + 1] - temp[i] === 1) {
                counter++;                                    // consecutive, grow sequence
            } else {
                longest = Math.max(longest, counter);         // sequence broke, update longest
                counter = 1;                                  // reset for new sequence
            }
        }

        longest = Math.max(longest, counter);                 // catch the last sequence
        return longest;
    }
}
