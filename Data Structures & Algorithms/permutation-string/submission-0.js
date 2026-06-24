class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    matches(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false
        }
        return true;
    }

    checkInclusion(s1, s2) {
        // if s1 longer than s2, impossible → return false
        if (s1.length > s2.length) {
            return false;
        }

        // build need: count of each char in s1
        let need = new Array(26).fill(0);
        // build window: count of each char in first s1.length chars of s2
        let window = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - 97]++;
            window[s2.charCodeAt(i) - 97]++;    // count char of s2's first window
        }



        // if window matches need → return true
        if (this.matches(need, window)) return true;

        // slide from index s1.length to end of s2:
        //   add s2[right] to window
        //   remove s2[right - s1.length] from window  (the char leaving on the left)
        //   if window matches need → return true
        for (let right = s1.length; right < s2.length; right++) {
            window[s2.charCodeAt(right) - 97]++;
            window[s2.charCodeAt(right - s1.length) - 97]--;
            if (this.matches(need, window)) return true;
        }
        return false
    }
}
