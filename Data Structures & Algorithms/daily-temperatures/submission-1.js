class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //this is brute force
    dailyTemperatures(temperatures) {
        // let result = [];

        // for (let i = 0; i < temperatures.length; i++) {
        //     let found = 0;   // default to 0
        //     for (let j = i + 1; j < temperatures.length; j++) {
        //         if (temperatures[j] > temperatures[i]) {
        //             found = j - i;
        //             break;
        //         }
        //     }
        //     result.push(found);   // push once per i, always
        // }

        // return result;
        let result = new Array(temperatures.length).fill(0);
        let stack = [];   // stores indices waiting for a warmer day

        for (let i = 0; i < temperatures.length; i++) {
            // while current temp is warmer than the temp at top of stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;   // days waited
            }
            stack.push(i);
        }

        return result;
    }
}
