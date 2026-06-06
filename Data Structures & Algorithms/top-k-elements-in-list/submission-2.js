class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const temp = {}

        for (const i of nums) {
            temp[i] = (temp[i] ?? 0) + 1;
        }
        
        return Object.keys(temp).sort((a,b)=>temp[b]-temp[a]).splice(0,k).map(Number);
    }
}
