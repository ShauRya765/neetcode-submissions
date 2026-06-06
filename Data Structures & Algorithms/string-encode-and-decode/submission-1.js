/**
 * ENCODE AND DECODE STRINGS
 * 
 * PROBLEM: Encode a list of strings into a single string and decode it back.
 * Strings can contain any character so we can't use a simple separator like "," or "#"
 * because it might exist inside the strings themselves.
 * 
 * APPROACH: Length Prefixing
 * For each string, prepend its length and a "#" delimiter before the string itself.
 * This way the decoder always knows exactly how many characters to read.
 * 
 * ENCODE:
 * - Loop through each string
 * - Append length + "#" + string to result
 * - ["Hello", "World"] → "5#Hello5#World"
 * 
 * DECODE:
 * - Use two pointers i and j, i starts at 0
 * - j scans forward from i until it hits "#"
 * - Everything from i to j is the length
 * - Read exactly len characters after "#" → that's the string
 * - Move i to j+1+len (start of next length number)
 * - Repeat until end of string
 * 
 * TIME: O(n) - single pass for both encode and decode
 * SPACE: O(n) - storing the encoded string / decoded array
 */
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
