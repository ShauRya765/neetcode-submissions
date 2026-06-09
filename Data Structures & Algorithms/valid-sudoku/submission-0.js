class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 3 }, () =>
            Array.from({ length: 3 }, () => new Set())
        )

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === '.') continue;

                const boxRow = Math.floor(r / 3);
                const boxCol = Math.floor(c / 3);

                // check all three — if any has duplicate return false
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxRow][boxCol].has(val)) {
                    return false;
                }

                // otherwise add to all three
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxRow][boxCol].add(val);
            }
        }
        return true;
    }
}
