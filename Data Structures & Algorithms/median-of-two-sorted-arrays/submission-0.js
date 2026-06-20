class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let merged = []
        let i = 0;
        let j = 0;

        while(i<nums1.length && j<nums2.length) {
            if(nums1[i]<nums2[j]) {
                merged.push(nums1[i++]);
            }else {
                merged.push(nums2[j++]);
            }
        }

        while(i<nums1.length) {
            merged.push(nums1[i++])
        }
        while(j<nums2.length){
            merged.push(nums2[j++])
        }

        let n= merged.length;
        let mid = Math.floor(n/2);

        if(n%2===1){
            return merged[mid];
        }else{
            return (merged[mid-1] + merged[mid])/2
        }

    }
}
