class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0) return "";

        // build countT — how many of each char t needs
        let countT = {};
        for (let char of t) {
            countT[char] = (countT[char] || 0) + 1;
        }

        // set up trackers
        let window = {};
        let have = 0;
        let need = Object.keys(countT).length;
        let left = 0;
        let bestLen = Infinity;
        let bestStart = 0;

        // expand right across s
        for (let right = 0; right < s.length; right++) {
            let c = s[right];
            window[c] = (window[c] || 0) + 1;

            // did this char just complete one of t's requirements?
            if (countT[c] !== undefined && window[c] === countT[c]) {
                have++;
            }

            // while window is valid, shrink from left and record best
            while (have === need) {
                // record this window if it's the smallest so far
                if (right - left + 1 < bestLen) {
                    bestLen = right - left + 1;
                    bestStart = left;
                }

                // remove the leftmost char
                let leftChar = s[left];
                window[leftChar]--;

                // did removing it break a requirement?
                if (countT[leftChar] !== undefined && window[leftChar] < countT[leftChar]) {
                    have--;
                }

                left++;
            }
        }

        // return the best window, or "" if none found
        return bestLen === Infinity ? "" : s.substring(bestStart, bestStart + bestLen);
    }
}