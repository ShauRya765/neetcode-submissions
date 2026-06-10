class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
        // skip non-alphanumeric characters from the left
        while (i < j && !/[a-zA-Z0-9]/.test(s[i])) i++;
        // skip non-alphanumeric characters from the right
        while (i < j && !/[a-zA-Z0-9]/.test(s[j])) j--;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }

        return true;
    }
}
