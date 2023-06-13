//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
    const stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
            console.log(stack)
            count++;
        } else {
            if (stack.length === 0) return false;
            const ch = stack.pop()
            console.log(ch)
            if ((s[i] === ')' && ch === '(') || (s[i] === '}' && ch === '{') || (s[i] === ']' && ch === '[')){
            } else {
                return false;
            }
            count--;
        }
    }
    return count === 0;
}

console.log(isValid("()"))
console.log(isValid("(){}[]"))
console.log(isValid("(]"))
