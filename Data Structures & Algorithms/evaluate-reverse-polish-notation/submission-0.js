class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = [];
    let operators = ["+", "-", "*", "/"];

    for (let s of tokens) {
        if (operators.includes(s)) {
            let b = stack.pop();
            let a = stack.pop();

            switch (s) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.trunc(a / b)); break;
            }
        } else {
            stack.push(Number(s));
        }
    }

    return stack[0];
}
}
