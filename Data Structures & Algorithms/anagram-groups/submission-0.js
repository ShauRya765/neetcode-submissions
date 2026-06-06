class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}

        for (const s of strs) {
            const key = s.split("").sort().join("");

            if(!groups[key]){
                groups[key] = [];
            }
             groups[key].push(s);
        }
         return Object.values(groups);
    }
}
