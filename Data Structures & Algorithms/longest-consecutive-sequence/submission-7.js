class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0
        }
        const numSet = new Set(nums);
        let longest = 0;
        
        for (const num of nums) {
            // check if num is a start of a sequence
            if (!numSet.has(num - 1)) {
                // start counting
                let counter = 1;
                // keep checking num+1, num+2 etc
                while (numSet.has(num + counter)) {  // what's the condition?
                    counter++
                }
                longest = Math.max(longest, counter)
            }
        }

        return longest;
    }
}
