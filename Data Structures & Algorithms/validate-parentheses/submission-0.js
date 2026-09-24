class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let sArray = s.split('');
        for(let i=0;i<sArray.length;i++){
            if(sArray[i]===')' && stack[stack.length-1]==='('){
                stack.pop()
                continue
            }
            if(sArray[i]==='}' && stack[stack.length-1]==='{'){
                stack.pop()
                continue
            }
            if(sArray[i]===']' && stack[stack.length-1]==='['){
                stack.pop()
                continue
            }
            stack.push(sArray[i])
        }
        return stack.length === 0
    }
}
