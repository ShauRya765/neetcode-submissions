class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            let temp = (right - left) * Math.min(heights[left], heights[right])
            result = Math.max(result, temp)
            if(heights[left]<=heights[right]){
                left++
            }else {
                right--;
            }
        }
        return result;
    }
}
