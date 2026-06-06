class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    let result = "";
    for (const s of strs) {
        result += s.length + "#" + s;
    }
    return result;
}


    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j]!=='#') j++

            let len = parseInt(str.slice(i,j));
            result.push(str.slice(j+1,j+1+len))
            i = j + 1 +len
        }
        return result;
    }

}
