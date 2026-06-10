class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let arr = s.toLowerCase().split('').filter((c)=>/[a-zA-Z0-9]/.test(c))
        let i = 0;
        let j = arr.length - 1;

        while (i < j) {
            if (arr[i] !== arr[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}
