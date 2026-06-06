class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const groups = new Map();

    for (const word of strs) {
        // create a count array of 26 zeros, one per letter a-z
        const count = new Array(26).fill(0);

        for (const c of word) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;  // increment that letter's slot
        }

        // turn count array into a string key
        const key = count.join(",");  // [1,0,1,0,...] → "1,0,1,0,..."

        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(word);
    }

    return Array.from(groups.values());
    }
}
