class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    matches(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let need = new Array(26).fill(0);
        let window = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - 97]++;
            window[s2.charCodeAt(i) - 97]++;
        }

        if (this.matches(need, window)) return true;

        for (let right = s1.length; right < s2.length; right++) {
            window[s2.charCodeAt(right) - 97]++;
            window[s2.charCodeAt(right - s1.length) - 97]--;
            if (this.matches(need, window)) return true
        }
        return false;


    }
}
