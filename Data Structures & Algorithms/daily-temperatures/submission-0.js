class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //this is brute force
    dailyTemperatures(temperatures) {
        let result = [];

        for (let i = 0; i < temperatures.length; i++) {
            let found = 0;   // default to 0
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    found = j - i;
                    break;
                }
            }
            result.push(found);   // push once per i, always
        }

        return result;
    }
}
